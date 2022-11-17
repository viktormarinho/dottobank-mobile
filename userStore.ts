import create from 'zustand';
import { persist } from 'zustand/middleware';
import { Cartao } from './types/cartoes';
import { User } from './types/users';

type UserInfo = {
    auth: boolean
    user: User
}

interface UserStore {
    user: UserInfo | null
    authViaEmail: (loginInfo: { email: string, password: string }) => Promise<UserInfo>
    getCards: () => Promise<Cartao[]>
    clear: () => void
}

export const useUserStore = create<UserStore>()(
    persist(
        (set, get) => ({
            user: null,
            authViaEmail: async (loginInfo) => {
                const res = await fetch('http://localhost:8000/auth-via-email/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loginInfo)
                });
                const data = await res.json();

                set(state => ({ user: data }));

                return data;
            },
            clear: () => set(state => ({ user: null })),
            getCards: async () => {
                const res = await fetch('http://localhost:8000/cartoes/');
                const data: Cartao[] = await res.json();

                const user = get().user?.user;

                if (!user) {
                    throw new Error('pegando cartoes como se nem tem user')
                }

                return data.filter(card => card.user === user.id);
            }
        }),
        {
            name: 'user-storage',
            getStorage: () => localStorage
        }
    )
);