import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  deal: {},
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'rgba(237,149,45,0.4)',
    padding: 10,
  },
  dealDetail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#fff',
    paddingTop: 5,
  },
  price: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  cause: {
    textAlign: 'center',
  },

  userContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginBottom: 2,
  },
  description: {
    padding: 10,
    backgroundColor: '#fff',
  },
  descriptionText: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
    padding: 10,
  },
});
