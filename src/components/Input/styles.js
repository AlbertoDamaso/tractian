import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  input: {
    alignSelf:'center',
    paddingHorizontal: 15,
    width: '88%',
    height: 45,
    backgroundColor: theme.colors.primayMenos,
    color: theme.colors.light,
    borderRadius: 8,
    fontFamily: theme.fonts.text,
    fontSize: 19,
    marginTop: 65,
    borderWidth: 1,
    borderColor: theme.colors.primayMenos,
  }
});