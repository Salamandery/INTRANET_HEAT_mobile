import React, {
  useState,
  useEffect,
} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
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
  const [o, setO] = useState('');
  const [m_o, setM_O] = useState('');
  const [emp, setEmp] = useState('');

  useEffect(()=>{
    //AsyncStorage.clear();
    loadUser();
  }, []);
  async function loadUser() {
    let usr = await AsyncStorage.getItem('user');
    let me = await AsyncStorage.getItem('me');
    let ofi = await AsyncStorage.getItem('o');
    let m_ofi = await AsyncStorage.getItem('m_o');
    
    setUser(usr);
    setEmp(me);
    setO(ofi);
    setM_O(m_ofi);

    await loadOS(ofi, m_ofi, me);
  }
  async function loadOS(ofi, m_ofi, me) {
    try {
      const res = await api.get(`/push_tb_os/${m_ofi}/${me}/${ofi}`);

      if (res) {
        setOs(res.data.rows);
      }
      setLoading(false);
    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  }
  async function handlerRecOS(item) {
    try {
      const res = await api.get(`/rec_os_mobile/${item.CD}/${user}`);
      await loadOS(o, m_o, emp);
    } catch(err) {
      setLoading(false);
    } 
  }
  async function handlerAfter(item) {
    try {
      setLoading(false);
      navigation.navigate('OSInfo', {os: item});
    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  }
  function handlerRec(item) {
    setLoading(true);
    Alert.alert(
      `OS: ${item.CD}`,
      `Deseja assumir essa O.S. ${user} ?`,
      [
        {text: 'Depois', onPress: () => handlerAfter(item)},
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
              <NumOs>{item.CD} -</NumOs>
              <DataOs>{item.DATA}</DataOs>
            </HeaderOs>
            <SetorOs>{item.SETOR}</SetorOs>
            <ResOs>{item.RES}</ResOs>
        </Item> ) }
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Table 
            data={os}
            keyExtractor={os=>String(os.CD)}
            renderItem={renderItem}
            onEndReachedThreshold={.1}
            onRefresh={e=>{setLoading(true); loadOS(o, m_o, emp);}}
            refreshing={loading}
        />
      </Container>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  title: "Pendências"
};
