import StyleSheet from 'stilr';
import colors from './colors';

export default StyleSheet.create({
  base: {
    backgroundColor: colors.MINT,
    border: 'none',
    outline: '0',
    color: '#fff',
    borderRadius: '3px',
    padding: '8px 16px',
    cursor: 'pointer',
    ':hover': {
      opacity: '0.8'
    },
    ':active': {
      opacity: '0.6'
    },
    ':disabled': {
      backgroundColor: '#acacac'
    },
    ':disabled:hover': {
      opacity: '1'
    }
  }
});
