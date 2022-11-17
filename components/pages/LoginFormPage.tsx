import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Platform } from "react-native";
import { ViewPropsType } from "../../App";
import { useUserStore } from "../../userStore";

export const LoginFormPage = ({ navigate }: ViewPropsType) => {
    const authViaEmail = useUserStore(state => state.authViaEmail);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const change = (e: any, name: string) => {
        setLoginData(prev => ({ ...prev, [name]: e.target.value }))
    }

    const tryAuth = async () => {
        const { auth } = await authViaEmail(loginData);

        if (!auth) {
            if (Platform.OS === 'web') {
                window.alert("Credenciais inválidas, tente novamente.")
                return
            }

            Alert.alert(
                "Credenciais inválidas",
                "Cheque novamente seu email e senha.",
                [{ text: "OK" }]
            )
            return
        }

        navigate("InicioPage")
    }

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => navigate("LoginPage")}>
                <Text style={styles.voltar}>Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputsContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} onChange={(e) => change(e, 'email')} />
                <Text style={styles.label}>Senha</Text>
                <TextInput secureTextEntry={true} style={styles.input} onChange={(e) => change(e, 'password')} />
                <Text></Text>
                <TouchableOpacity style={styles.entrarBtn} onPress={tryAuth}>
                    <Text style={styles.entrarText}>
                        Entrar
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
    inputsContainer: {
        display: 'flex',
        flex: 1,
        gap: 12,
        alignItems: 'center',
        paddingTop: 70
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        width: '65%',
        fontSize: 18
    },
    label: {
        color: 'white',
        fontSize: 16,
        width: '65%',
        paddingLeft: 8
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center',
        paddingTop: 150
    },
    entrarBtn: {
        backgroundColor: '#3F83A9',
        borderRadius: 12,
        padding: 12,
        width: '65%'
    },
    entrarText: {
        color: 'white',
        fontSize: 18,
        textAlign: "center"
    },
    voltar: {
        color: '#53abdf',
        fontWeight: '600',
        padding: 16,
        fontSize: 16
    }
})