import { useEffect, useState } from "react";
import { Text, ScrollView, View, StyleSheet, TouchableOpacity, Image, Alert } from "react-native"
import { LinkSquare } from "../LinkSquare";


export const InicioPage = () => {

    const [showSaldo, setShowSaldo] = useState<boolean>(false);
    const [user, setUser] = useState<any>();
    const botoes = [
        { text: "Transferência" },
        { text: "Pix" },
        { text: "Adicionar Saldo" },
        { text: "Cartão" }
    ]

    const renderBotao = (botao: typeof botoes[0]) => {
        return (
            <LinkSquare text={botao.text} />
        )
    }

    const fetchUser = async () => {
        const res = await fetch('http://192.168.56.1:8000/auth-via-email/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'igor@banco.com',
                password: '123'
            })
        })

        const userData = await res.json()

        setUser(userData)
    }

    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <ScrollView style={styles.MainContainer}>
            <View style={styles.saldoContainer}>
                <Text style={styles.seuSaldoText}>Seu Saldo</Text>
                <View style={styles.dinheiroContainer}>
                    <Text style={styles.seuDinheiroText}>R$</Text>
                    {showSaldo ? <Text style={styles.dinheiroStyle}>1.423,35</Text> : <View style={styles.line} />}
                    <TouchableOpacity onPress={() => setShowSaldo(!showSaldo)}>
                        {showSaldo ?
                            <Image source={require('./../image/olhoAberto.png')} style={styles.olho} /> :
                            <Image source={require('./../image/olhoFechado.png')} style={styles.olho} />}
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }} >
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {botoes.map(botao => renderBotao(botao))}
                    </ScrollView>
                </View>
                <Text style={styles.nomePerfilText}>@viktor.marinho</Text>
            </View>
            <View style={styles.WhiteContainer}>
                <View style={styles.PremiumContainer}>
                    <Image source={require('./../image/moneyEmoji.png')} style={styles.moneyEmoji} />
                    <Text style={styles.premiumText}>Empréstimo
                        <Text style={styles.premiumWord}> premium </Text>
                        para todos!
                    </Text>
                </View>
                <TouchableOpacity onPress={() => Alert.alert('Ok fera')} style={styles.buttonQuero}>
                    <Text style={styles.buttonQueroText}>Quero o meu!</Text>
                </TouchableOpacity>
                <Text>
                    {JSON.stringify(user)}
                </Text>
                <ScrollView></ScrollView>
                <Image source={{}} />
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        width: '100%',
    },
    saldoContainer: {
        paddingTop: 18,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        flex: 1,
        flexDirection: 'column'
    },
    dinheiroContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    line: {
        height: 1,
        backgroundColor: 'white',
        width: '40%',
        marginLeft: 20
    },
    olho: {
        resizeMode: 'stretch',
        width: 36,
        marginLeft: 8,
        height: 28
    },
    dinheiroStyle: {
        fontSize: 22,
        color: 'white',
        marginLeft: 20,
        marginRight: 30
    },
    WhiteContainer: {
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: 10,
        padding: 10,
        height: 600
    },
    seuSaldoText: {
        fontSize: 22,
        color: 'white',
        marginTop: 10
    },
    seuDinheiroText: {
        fontSize: 22,
        color: 'white'
    },
    nomePerfilText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
        marginTop: 20
    },
    PremiumContainer: {
        flex: 1,
        minHeight: 100,
        flexDirection: 'row',
        width: '92%',
        marginHorizontal: 'auto',
        paddingTop: 10
    },
    moneyEmoji: {
        width: 90,
        height: 90,
    },
    premiumText: {
        fontWeight: '400',
        fontSize: 21
    },
    premiumWord: {
        fontWeight: '700',
        color: '#3F83A9',
        fontSize: 21
    },
    buttonQuero: {
        width: '92%',
        backgroundColor: '#3F83A9',
        marginHorizontal: '4%',
        borderRadius: 16,
        paddingVertical: 7
    },
    buttonQueroText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: '600'
    }
});