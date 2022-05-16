import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 120,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: theme.colors.secundaryMais,
    flexDirection: 'row'
  },
  areaImg: {
    height: 80,
    marginTop: 20,
    marginHorizontal: 15,
  },
  image: {
    width: 60,
    height: 80,
  },
  areaTxt: {
    marginTop: 20,
  },
  title: {
    fontFamily: theme.fonts.title,
    fontSize: 19,
    color: theme.colors.secondary,
  },
  text: {
    height: 18,
    fontSize: 16,
    fontFamily: theme.fonts.text,
    color: theme.colors.secondary,
  },

});