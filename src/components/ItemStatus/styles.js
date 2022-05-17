import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    info: {
        width: '80%',
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
      },
      text: {
        fontFamily: theme.fonts.title,
        color: theme.colors.dark,
        fontSize: 19,
        marginTop: 2,
        marginHorizontal: 10,
      }
});