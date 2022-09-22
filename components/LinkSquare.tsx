import { Text, StyleSheet, TouchableOpacity, Image } from "react-native"

interface LinkSquareProps {
    text: string
}

export const LinkSquare = ({ text }: LinkSquareProps) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}>
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
        marginTop: 10,
        fontFamily: 'Inter'
    }
})