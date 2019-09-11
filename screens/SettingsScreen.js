import React, {
  useState,
  useEffect
} from 'react';
import {
  Picker,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { Container, TextOS, LabelOS, Grouptext } from '../components/default';
import TabBarIcon from '../components/TabBarIcon';
export default function SettingsScreen({navigation}) {
  const [emp, setEmp] = useState(1);

  useEffect(()=>{
    loadSet();
  }, []);
  async function loadSet() {
    const me = await AsyncStorage.getItem('me');

    setEmp(me);
  }
  function handlerEmp(e){
    setEmp(e);
    AsyncStorage.setItem('me', e);
    navigation.navigate('Login');
  }
  return (
    <Container>
      <Grouptext>
        <LabelOS>Empresa</LabelOS>
        <TextOS>Selecione aqui a empresa que deseja utilizar como padrão</TextOS>
        <Picker style={styles.picker} selectedValue={emp} onValueChange={e=>handlerEmp(e)}>
            <Picker.Item style={styles.pickerText} label="HEAT" value="1" />
            <Picker.Item style={styles.pickerText} label="HEJBC" value="2" />
        </Picker>
      </Grouptext>
    </Container>
  );
}

const styles = StyleSheet.create({
  picker: {
      marginVertical: 20,
      marginHorizontal: 50,
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
      color: "#fff",
  },
});

SettingsScreen.navigationOptions = {
  title: 'Configuração',
};
