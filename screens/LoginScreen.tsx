import * as React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Picker,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  AsyncStorage,
} from 'react-native';
import api, { baseURL } from '../services/api';

export default function LoginScreen({ navigation }) {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [emp, setEmp] = React.useState('1');
  const [error, setError] = React.useState([]);

  const handlerSubmit = React.useCallback(async() => {
    const res = await api.post(`${baseURL.externo}/session`, {
      login: user,
      password: pass,
      company: emp,
    });

    if (!res.data.errors) {
      
        const { token } = res.data;

        AsyncStorage.setItem('token', token);

        api.defaults.headers.authorization = `Bearer ${token}`;

        navigation.navigate('Root');
    } else {
        setError(res.data.errors);
    }
  }, [user, pass, emp]);

  React.useEffect(() => {
    async function getLogged() {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        navigation.navigate('Root');
      }
    }
    getLogged();
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}
                          enabled={Platform.OS === 'ios'}
                          behavior="padding">
            { error ?  error.map(item=><Text style={styles.error}>{item.msg}</Text>) : null}
            <View style={styles.form}>
                <TextInput 
                    placeholderTextColor="#FFF"
                    placeholder="Digite seu usuário"
                    autoCapitalize="characters"
                    autoCorrect={false}
                    value={user}
                    onChangeText={setUser}
                    style={styles.input}
                />
                <TextInput 
                    placeholderTextColor="#FFF"
                    placeholder="Digite sua senha"
                    autoCapitalize="none"
                    value={pass}
                    onChangeText={e=>setPass(e)}
                    returnKeyLabel="send"
                    returnKeyType="send"
                    secureTextEntry={true}
                    style={styles.input}
                    onSubmitEditing={handlerSubmit}
                />
                <Picker style={styles.picker} selectedValue={emp} onValueChange={e=>setEmp(e)}>
                    <Picker.Item label="HEAT" value="1" />
                    <Picker.Item label="HEJBC" value="2" />
                    <Picker.Item label="UPA" value="3" />
                </Picker>
                <TouchableOpacity style={styles.buttonLogin} onPress={handlerSubmit}>
                    <Text style={styles.loginText}>Entrar</Text>
                </TouchableOpacity>
            </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 60,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "#66b3ff"
  },
  buttonLogin: {
      height: 32,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#333",
      alignSelf: "stretch",
      paddingVertical: 30,
      marginTop: 10,
      borderRadius: 7
  },
  form: {
      alignSelf: "stretch",
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: "#0059b3",
      borderRadius: 7
  },
  loginText: {
      color: "#fff",
      fontSize: 15,
      fontWeight: "bold",
      textTransform: "uppercase",
  },
  input: {
      alignSelf: "stretch",
      paddingHorizontal: 10,
      marginVertical: 10,
      fontSize: 24,
      color: "#fff"
  },
  picker: {
      alignSelf: "stretch",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff"
  },
  logo: {
      alignSelf: "stretch",
      marginBottom: 50,
      marginHorizontal: 20,
      height: 120,
  },
  error: {
      marginVertical: 30,
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderWidth: 1,
      borderRadius: 4,
      borderColor: "#b30000",
      fontWeight: "bold",
      fontSize: 18,
      color: "#b30000",
      textAlign: "center",
      backgroundColor: "#ffcccc"
  }
});