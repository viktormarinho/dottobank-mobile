import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { CarteiraIcon, CasaIcon, PessoaIcon, CarteiraIconSelected, CasaIconSelected, PessoaIconSelected } from './image';
import { FooterButton } from './components/FooterButton';
import { useState } from 'react';
import { SuaContaPage } from './components/pages/SuaContaPage';
import { InicioPage } from './components/pages/InicioPage';
import { CarteiraPage } from './components/pages/CarteiraPage';

export default function App() {

  const [selected, setSelected] = useState(1);

  const footerIcons = [
    { id: 0, img: CarteiraIcon, selImg: CarteiraIconSelected, text: "Carteira", selected: false },
    { id: 1, img: CasaIcon, selImg: CasaIconSelected, text: "Início", selected: true },
    { id: 2, img: PessoaIcon, selImg: PessoaIconSelected, text: "Sua Conta", selected: false },
  ];

  const pages = [
    <CarteiraPage />,
    <InicioPage />,
    <SuaContaPage />
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
          />
        })}
      </View>
    </View>
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
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
