import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginVertical: 12,
  },

  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  description: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
