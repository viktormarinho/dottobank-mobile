import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ViewPropsType } from "../../App";

export const LoginPage = ({ navigate }: ViewPropsType) => {
    return (
        <View style={styles.view}>
            <Image source={require('./../image/first-load.png')} style={styles.backgroundImage} />
            <View style={styles.btnsContainer}>
                <TouchableOpacity style={styles.entrarBtn} onPress={() => navigate("LoginFormPage")}>
                    <Text style={styles.entrarText}>
                        Entrar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.criarBtn} onPress={() => Linking.openURL("http://localhost:3000/cadastro")}>
                    <Text style={styles.criarText}>
                        Criar conta
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100vw',
        height: '100vh'
    },
    backgroundImage: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: -2
    },
    entrarBtn: {
        backgroundColor: '#326B8B',
        borderRadius: 12,
        padding: 12,
        width: '60%'
    },
    entrarText: {
        color: 'white',
        fontSize: 18,
        textAlign: "center"
    },
    btnsContainer: {
        display: 'flex',
        flex: 1,
        height: '100vh',
        paddingBottom: 100,
        justifyContent: 'flex-end',
        gap: 8,
        alignItems: 'center'
    },
    criarBtn: {
        backgroundColor: '#c3c6c7',
        borderRadius: 12,
        padding: 12,
        width: '60%'
    },
    criarText: {
        color: 'black',
        fontSize: 18,
        textAlign: "center"
    }
})