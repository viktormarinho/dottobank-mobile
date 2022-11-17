import { Text, StyleSheet, TouchableOpacity, Image } from "react-native"

interface LinkSquareProps {
    text: string
    icon: any
    h: number
    w: number
    press: () => void
}

export const LinkSquare = ({ text, icon, w, h, press }: LinkSquareProps) => {
    return (
        <TouchableOpacity onPress={press} style={styles.buttonContainer}>
            <Image source={icon} style={{ height: h, width: w }} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#3F83A9',
        height: 90,
        width: 90,
        borderRadius: 8,
        padding: 10,
        marginLeft: 10
    },
    text: {
        color: 'white',
        fontSize: 14,
        marginTop: 10
    }
})