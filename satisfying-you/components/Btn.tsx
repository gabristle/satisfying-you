import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { theme } from '@/constants/theme'

interface ButtonProps {
    onPress: () => void
    title: string
}

export function Btn({onPress, title}:ButtonProps) {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.green,
        width: '100%',
        height: 50,
    },
    title: {
        fontWeight: 400,
        fontSize: 28,
        color: theme.colors.text,
        textAlign: 'center'
    }
});