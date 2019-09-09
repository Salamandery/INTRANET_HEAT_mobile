import React, {
    useState,
    useEffect
} from 'react';
import {
  Image,
  Platform,
  Picker,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
  AsyncStorage,
} from 'react-native';
import api from '../services/api';
import logo from './resource/HEAT.jpg';

export default function LoginScreen({navigation}) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [emp, setEmp] = useState('1');
  const [error, setError] = useState('');

  useEffect(()=>{
    getLogged();
  }, []);
  async function getLogged() {

    const usr = await AsyncStorage.getItem('user');
    const me = await AsyncStorage.getItem('me');

    if (user) {
        navigation.navigate('Main', {user: usr, me: me});
    }

  }
  async function handlerSubmit(){
    const res = await api.post('/mobileAuth', {
        user,
        pass,
        me: emp
    });
    if (!res.data.error) {
        AsyncStorage.setItem('user', user);
        AsyncStorage.setItem('me', emp);

        navigation.navigate('Main', {user, me: emp});
    } else {
        setError(res.data.error);
    }
  }
  return (
    <View style={styles.container}>
        <View>
            { error ? <Text style={styles.error}>{error}</Text> : null}
            <Image style={styles.logo} source={logo}></Image>
        </View>
        <View style={styles.form}>
            <TextInput 
                placeholder="Digite seu usuário"
                autoCapitalize="characters"
                autoCorrect={false}
                value={user}
                onChangeText={setUser}
                style={styles.input}
            />
            <TextInput 
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
                <Picker.Item style={styles.pickerText} label="HEAT" value="1" />
                <Picker.Item style={styles.pickerText} label="HEJBC" value="2" />
            </Picker>
            <TouchableOpacity style={styles.buttonLogin} onPress={handlerSubmit}>
                <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

LoginScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: "center",
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
        fontSize: 24
    },
    input: {
        alignSelf: "stretch",
        paddingHorizontal: 10,
        marginVertical: 10,
        fontSize: 24,
    },
    picker: {
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        color: "#fff"
    },
    logo: {
        marginVertical: 40
    },
    error: {
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