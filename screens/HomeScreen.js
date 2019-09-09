import React, {
  useState,
  useEffect
} from 'react';
import {
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Container, Table, Item, NumOs, SetorOs, DataOs, HeaderOs, ResOs} from '../components/default';
import api from '../services/api';

export default function HomeScreen({navigation}) {
  const [os, setOs] = useState([]);

  async function loadOS() {
    const res = await api.get('/push_tb_os');

    if (res) {
      setOs(res.data.rows);
    }
  }
  function handlerItem(item) {
    navigation.navigate('OSInfo', {os: item});
  }
  const renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={(e)=>(handlerItem(item))}>
        <Item>
            <HeaderOs>
              <NumOs>{item.CD}</NumOs>
              <DataOs>{item.DATA}</DataOs>
            </HeaderOs>
            <SetorOs>{item.SETOR}</SetorOs>
            <ResOs>{item.RES}</ResOs>
        </Item>
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
  title: "Ordem de Serviço"
};
