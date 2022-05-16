import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    matches: {
        width: '80%',
        alignSelf: 'center',
        marginTop: 24,
        backgroundColor: "#E8F1FE",
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: theme.colors.primayMenos,
    },
});