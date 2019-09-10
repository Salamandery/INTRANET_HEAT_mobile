import React, {
  useState,
  useEffect,
} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { Container, Table, Item, NumOs, SetorOs, DataOs, HeaderOs, ResOs} from '../components/default';
import api from '../services/api';

export default function HomeScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [os, setOs] = useState([]);
  const [user, setUser] = useState('');
  const [emp, setEmp] = useState('');

  useEffect(()=>{
    loadUser();
  }, []);
  async function loadUser() {
    let user = await AsyncStorage.getItem('user');
    let me = await AsyncStorage.getItem('me');

    setUser(user);
    setEmp(me);
  }
  async function loadOS() {
    const res = await api.get('/push_tb_os');

    if (res) {
      setOs(res.data.rows);
    }
  }
  async function handlerRecOS(item) {
    //const res = await api.get('/push_tb_os');
    
    //if (res) {
      //setOs(res.data.rows);
      //}
    setLoading(false);
  }
  function handlerRec(item) {
    setLoading(true);
    Alert.alert(
      `OS: ${item.CD}`,
      `Deseja assumir essa O.S. ${user} ?`,
      [
        {text: 'Depois', onPress: () => setLoading(false)},
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: () => setLoading(false),
        },
        {text: 'Confirmar', onPress: () => handlerRecOS(item)},
      ],
      {cancelable: false},
    );
  }
  function handlerItem(item) {
    navigation.navigate('OSInfo', {os: item});
  }
  const renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={(e)=>(item.RES ? handlerItem(item) : handlerRec(item))}>
        { loading ? <Item Res={item.RES ? true : false}><ActivityIndicator size="large" color="#fff" /></Item> : 
        ( <Item Res={item.RES ? true : false}>
            <HeaderOs>
              <NumOs>{item.CD}</NumOs>
              <DataOs>{item.DATA}</DataOs>
            </HeaderOs>
            <SetorOs>{item.SETOR}</SetorOs>
            <ResOs>{item.RES}</ResOs>
        </Item> ) }
      </TouchableOpacity>
    );
  }
  useEffect(()=>{
    loadOS();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Table 
            data={os}
            keyExtractor={os=>String(os.CD)}
            renderItem={renderItem}
            onEndReachedThreshold={.1}
        />
      </Container>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  title: "Pendências"
};
