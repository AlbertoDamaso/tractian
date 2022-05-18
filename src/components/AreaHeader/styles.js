import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    areaHeader: {
        width: '100%',
        height: 134,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
    },
    title: {
        fontFamily: theme.fonts.title,
        color: theme.colors.secondaryMais,
        fontSize: 28,  
        marginTop: 30,
    },
    subtitle: {
        fontFamily: theme.fonts.title,
        color: theme.colors.secondaryMais,
        fontSize: 19,  
    },
});