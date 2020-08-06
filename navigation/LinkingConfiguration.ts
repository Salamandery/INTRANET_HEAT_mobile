import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Login: {
        screens: {
          LoginScreen: 'login'
        }
      },
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
              ServicoInfo: 'servicoinfo'
            },
          },
        },
      },
      ServicoInfo: {
        screens: {
          ServicoInfo: 'servicoinfo'
        },
      },
      NotFound: '*',
    },
  },
};
