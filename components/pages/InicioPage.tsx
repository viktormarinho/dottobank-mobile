import { Text, ScrollView, View, StyleSheet, TouchableOpacity, Image } from "react-native"
import { MoneyEmoji } from "../../image";


export const InicioPage = () => {
    return (
        <ScrollView style={styles.MainContainer}>
            <View>
                <Text style={styles.seuSaldoText}>Seu Saldo</Text>
                <Text style={styles.seuSaldoText}>R$</Text>
                <ScrollView>

                </ScrollView>
                <Text style={styles.nomePerfilText}>@viktor.marinho</Text>
            </View>
            <View style={styles.WhiteContainer}>
                <View style={styles.PremiumContainer}>
                    <Image source={MoneyEmoji} style={styles.moneyEmoji} />
                    <Text style={styles.premiumText}>Empréstimo
                        <Text style={styles.premiumWord}> premium </Text>
                        para todos!
                    </Text>
                </View>
                <TouchableOpacity style={styles.buttonQuero}>
                    <Text style={styles.buttonQueroText}>Quero o meu!</Text>
                </TouchableOpacity>
                <ScrollView></ScrollView>
                <Image source={{}} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        width: '100%',
    },
    WhiteContainer: {
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop: 10,
    },
    seuSaldoText: {
        fontSize: 22,
        color: 'white'
    },
    nomePerfilText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 20,
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
        marginHorizontal: 'auto',
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