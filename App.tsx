import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { FooterButton } from './components/FooterButton';
import { useState } from 'react';
import { SuaContaPage } from './components/pages/SuaContaPage';
import { InicioPage } from './components/pages/InicioPage';
import { CarteiraPage } from './components/pages/CarteiraPage';

export default function App() {

  const [selected, setSelected] = useState(1);

  const footerIcons = [
    {
      id: 0, img: require('./components/image/carteira.png'), selImg: require('./components/image/carteiraSelected.png'),
      text: "Carteira", selected: false, width: 42, height: 42
    },
    {
      id: 1, img: require('./components/image/casinha.png'), selImg: require('./components/image/casinhaSelected.png'),
      text: "Início", selected: true, width: 41, height: 37
    },
    {
      id: 2, img: require('./components/image/pessoa.png'), selImg: require('./components/image/pessoaSelected.png'),
      text: "Sua Conta", selected: false, width: 30, height: 34
    },
  ];

  const pages = [
    <CarteiraPage />,
    <InicioPage />,
    <SuaContaPage />
  ];

  return (
    <>
      <StatusBar style="light" hidden />
      <View style={styles.container}>
        {pages[selected]}
        <View style={styles.footer}>
          {footerIcons.map((icon) => {
            return <FooterButton
              key={icon.id}
              buttonId={icon.id}
              image={icon.img}
              selImg={icon.selImg}
              text={icon.text}
              selected={icon.id == selected}
              setSelected={setSelected}
              size={{ w: icon.width, h: icon.height }}
            />
          })}
        </View>
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
    position: 'absolute',
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
