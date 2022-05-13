import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  click: {
    width: '80%',
    height: 60,
    borderWidth:1,    
    alignSelf:'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 65,
    borderRadius: 30,
    borderColor: theme.colors.secondary,
    backgroundColor: theme.colors.secondary,
  },
  text: {
    flex: 1,
    fontSize: 28,
    textAlign: "center",
    color: theme.colors.light,
    fontFamily: theme.fonts.text,
  },
});