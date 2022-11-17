import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ViewPropsType } from "../../App"
import { useUserStore } from "../../userStore";

const Info = ({ label, info }: { label: string, info: string | undefined }) => {
    return (
        <View style={{ 
                borderBottomColor: '#EEEEEE', 
                borderBottomWidth: 2, 
                paddingTop: 10, 
                padding: 5 
            }}>
            <Text style={{ color: 'gray', fontSize: 16 }}>{label}</Text>
            <Text style={{ fontSize: 18 }}>{info}</Text>
        </View>
    )
}

export const SuaContaPage = ({ navigate }: ViewPropsType) => {
    const { clear, user } = useUserStore(({clear, user}) => ({ clear, user }));
    const pfp = 'http://localhost:8000' + user?.user.picture

    if (!user) {
        navigate('LoginPage');
    }

    return (
        <View style={styles.view}>
            <View style={styles.profile}>
                <Image source={{ uri: pfp, width: 120, height: 120 }} style={styles.pfp} />
                <View style={{ height: 120 }}>
                    <Text style={styles.dottoUniqueId}>dotto unique ID</Text>
                    <Text style={styles.dotto_id}>{user?.user.conta.dotto_id}</Text>
                </View>
            </View>
            <View style={styles.info}>
                <Info label="Nome completo" info={user?.user.cliente.username} />
                <Info label="Endereço de Email" info={user?.user.email} />
                <Info label="CPF" info={user?.user.cliente.cpf} />
                <Info label="Sexo" info={user?.user.cliente.sexo} />
                <Info label="Telefone" info={user?.user.cliente.telefone} />
                <Info label="Data de Nascimento" info={new Date(user?.user.cliente.nascimento!).toLocaleDateString()} />
                <Info label="Criação da conta" info={new Date(user?.user.created_at!).toLocaleDateString()} />
                <TouchableOpacity 
                    style={styles.blueButton} 
                    onPress={() => {
                        clear();
                        navigate('LoginPage');
                    }}>
                    <Text style={styles.buttonText}>Deslogar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.redButton}>
                    <Text style={styles.buttonText}>Excluir conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100vw',
        height: '150vh',
        overflow: 'scroll'
    },
    profile: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 40,
        width: '100%',
        paddingTop: 120,
        paddingBottom: 40,
        maxHeight: 300
    },
    pfp: {
        borderRadius: 9999,
        borderColor: 'white',
        borderWidth: 4
    },
    dottoUniqueId: {
        color: '#dbdbdb',
        fontSize: 18,
    },
    dotto_id: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
    info: {
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        width: '100%',
        minHeight: 100,
        paddingTop: 20,
        overflow: 'scroll',
        paddingBottom: 300
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center'
    },
    blueButton: {
        backgroundColor: '#3F83A9',
        borderRadius: 12,
        paddingVertical: 6,
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 16
    },
    redButton: {
        backgroundColor: '#BA4747',
        borderRadius: 12,
        paddingVertical: 6,
        width: '90%',
        marginHorizontal: '5%',
        marginTop: 16
    }
})