import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  bgBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginHorizontal: 20,
    borderRadius: 30,
    backgroundColor: theme.colors.secondary,
  }
});