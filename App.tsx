import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { FooterButton, FooterIcon } from './components/FooterButton';
import { useState } from 'react';
import { SuaContaPage } from './components/pages/SuaContaPage';
import { InicioPage } from './components/pages/InicioPage';
import { CarteiraPage } from './components/pages/CarteiraPage';
import React from 'react';
import { LoginPage } from './components/pages/LoginPage';
import { LoginFormPage } from './components/pages/LoginFormPage';


const Pages = {
  CarteiraPage: {
    view: CarteiraPage,
    id: 0,
    footer: true
  },
  InicioPage: {
    view: InicioPage,
    id: 1,
    footer: true
  },
  SuaContaPage: {
    view: SuaContaPage,
    id: 2,
    footer: true
  },
  LoginPage: { view: LoginPage },
  LoginFormPage: { view: LoginFormPage },
}

export type AppPages = keyof typeof Pages;
export type ViewPropsType = { navigate: (page: AppPages) => void };

const RouterOutlet = ({ Page, viewProps }: { Page: React.ComponentType<ViewPropsType>, viewProps: any }) => {
  return (
    <Page {...viewProps} />
  )
}

export default function App() {

  const [selected, setSelected] = useState<{ view: React.ComponentType<ViewPropsType>, id?: number, footer?: boolean }>(Pages['InicioPage']);
  const navigateTo = (page: AppPages) => setSelected(Pages[page]);

  const footerIcons: FooterIcon[] = [
    {
      id: 0, img: require('./components/image/carteira.png'), selImg: require('./components/image/carteiraSelected.png'),
      text: "Carteira", selected: false, width: 42, height: 42, view: 'CarteiraPage'
    },
    {
      id: 1, img: require('./components/image/casinha.png'), selImg: require('./components/image/casinhaSelected.png'),
      text: "Início", selected: true, width: 41, height: 37, view: 'InicioPage'
    },
    {
      id: 2, img: require('./components/image/pessoa.png'), selImg: require('./components/image/pessoaSelected.png'),
      text: "Sua Conta", selected: false, width: 30, height: 34, view: 'SuaContaPage'
    },
  ];

  return (
    <>
      <StatusBar style="light" hidden />
      {selected.footer ?
        <View style={styles.footer}>
          {footerIcons.map((icon) => {
            return <FooterButton
              key={icon.id}
              image={icon.img}
              selImg={icon.selImg}
              text={icon.text}
              selected={icon.id == selected.id}
              navigateTo={navigateTo}
              view={icon.view}
              size={{ w: icon.width, h: icon.height }}
            />
          })}
        </View> : null}
      <View style={styles.container}>
        <RouterOutlet Page={selected.view} viewProps={{ navigate: navigateTo }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#326B8B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    // @ts-ignore
    position: 'fixed',
    zIndex: 5,
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
