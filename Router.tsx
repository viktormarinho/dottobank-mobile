// import React, { useState } from 'react';
// import { CarteiraPage } from './components/pages/CarteiraPage';
// import { InicioPage } from './components/pages/InicioPage';
// import { SuaContaPage } from './components/pages/SuaContaPage';

// const Pages = {
//     CarteiraPage: {
//         view: CarteiraPage
//     },
//     InicioPage: {
//         view: InicioPage
//     },
//     SuaContaPage: {
//         view: SuaContaPage
//     }
// }


// export type ViewType = {
//     view: ({ navigate }: ViewPropsType) => JSX.Element | React.ComponentType
// }

// export type RouterPagesType = {
//     pages: ViewType[]
// }

// export type ViewPropsType = { navigate: (page: keyof typeof Pages) => void };

// export function RouterOutlet({ Page, viewProps }: { Page: ({ navigate }: ViewPropsType) => JSX.Element | React.ComponentType | any, viewProps: any }) {
//     return (
//         <Page {...viewProps} />
//     )
// }

// export function Router(pages: typeof Pages, firstPage: keyof typeof Pages) {
//     const [selected, setSelected] = useState<ViewType>(pages[firstPage]);
//     const navigate = (page: keyof typeof Pages) => setSelected(pages[page]);

//     return (
//         <RouterOutlet Page={selected.view} viewProps={{ navigate: navigate }} />
//     )
// }