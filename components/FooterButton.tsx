import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { AppPages } from '../App';


export type FooterIcon = {
    id: number
    img: string
    selImg: string
    text: string
    selected: boolean
    width: number
    height: number
    view: AppPages
}

interface FooterButtonProps {
    image: any
    text: string
    selected: boolean
    selImg: any
    navigateTo: (page: AppPages) => void
    size: {
        h: number,
        w: number
    }
    view: AppPages
}

export const FooterButton = ({ view, image, text, selected, selImg, navigateTo, size }: FooterButtonProps) => {

    const imgStyle = StyleSheet.create({
        footerIcon: {
            resizeMode: "stretch",
            width: size.w,
            height: size.h,
        }
    })

    const handleClick = () => navigateTo(view);

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