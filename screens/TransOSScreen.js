import React, {
  useState,
  useEffect
} from 'react';
import {
  Picker,
  Platform,
  StyleSheet,
  AsyncStorage,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { Container, TextOS, LabelOS, Form, Grouptext } from '../components/default';
import TabBarIcon from '../components/TabBarIcon';
import api from '../services/api';

export default function TransOSScreen({navigation}) {
  const [user, setUser] = useState([]);
  const [nResp, setNResp] = useState('0');
  const os = navigation.getParam('os');

  useEffect(()=>{
    getFunc();
  }, []);
  async function getFunc() {
    const o = await AsyncStorage.getItem('o');
    const res = await api.get(`/get_func_to_mobile/${o}`);
    setUser(res.data.rows);
  }
  async function handlerTrans(e) {
    const res = await api.get(`/trans_os/${nResp}/${os.CD}`);

    if (res) {
      alert('Transferência realizada com sucesso!');
      navigation.navigate('Login');
    }
  }
  return (
    <Container>
      <ScrollView style={{alignSelf: "stretch"}} showsHorizontalScrollIndicator={false}>
        <Grouptext>
          <LabelOS>OS:</LabelOS>
          <TextOS>{os.CD}</TextOS>
        </Grouptext>
        <Grouptext>
          <LabelOS>Descrição:</LabelOS>
          <TextOS>{os.DS}</TextOS>
        </Grouptext>
        <Grouptext>
          <LabelOS>Responsável:</LabelOS>
          <TextOS>{os.RES}</TextOS>
        </Grouptext>
        <Grouptext>
          <LabelOS>Usuário</LabelOS>
          <Picker style={styles.picker} selectedValue={nResp} onValueChange={e=>setNResp(e)}>
              <Picker.Item style={styles.pickerText} label="Selecione o usuário" value={'0'} />
              {
                user.map((e, idx)=>(
                  <Picker.Item key={idx} style={styles.pickerText} label={e.cd_usuario} value={e.cd_usuario} />
                ))
              }
          </Picker>
        </Grouptext>
        <TouchableOpacity style={styles.BtnTrans} onPress={handlerTrans}>
            <TabBarIcon focused={true} name={Platform.OS === 'ios' ? 'ios-checkbox-outline' : 'md-checkbox-outline'} />
        </TouchableOpacity>
      </ScrollView>
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
  BtnTrans: {
      alignSelf: "center",
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: "#009900",
      borderRadius: 7,
      height: 45
  } 
});

TransOSScreen.navigationOptions = {
  title: 'Transferência de OS',
};
