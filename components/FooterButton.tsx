import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

interface FooterButtonProps {
    buttonId: number
    image: any
    text: string
    selected: boolean
    selImg: any
    setSelected: any
    size: {
        h: number,
        w: number
    }
}

export const FooterButton = ({ buttonId, image, text, selected, selImg, setSelected, size }: FooterButtonProps) => {

    const imgStyle = StyleSheet.create({
        footerIcon: {
            resizeMode: "stretch",
            width: size.w,
            height: size.h,
        }
    })

    const handleClick = () => {
        setSelected(buttonId);
    }

    return (
        <TouchableOpacity
            style={selected ? styles.selectedButton : styles.footerButton}
            onPress={handleClick} >
            <Image
                source={selected ? selImg : image}
                style={imgStyle.footerIcon} />
            <Text
                style={selected ? styles.selectedText : styles.footerText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    footerButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        maxWidth: '30%',
        height: '100%',
    },
    footerText: {
        color: '#326B8B',
        fontWeight: '600',
        fontSize: 14
    },
    selectedButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '30%',
        height: '135%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#2B607D',
    },
    selectedText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 14
    }
});