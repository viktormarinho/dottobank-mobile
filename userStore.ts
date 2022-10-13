import create from 'zustand';
import { User } from './types/users';

type UserInfo = {
    auth: boolean
    user: User
}

interface UserStore {
    user: UserInfo | null
    authViaEmail: (loginInfo: { email: string, password: string }) => void
}

export const useUserStore = create<UserStore>((set) => ({
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

        set(state => ({ user: data }))
    }
}));