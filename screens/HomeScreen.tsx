import * as React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import { formatDate } from '../utils/FormatDate';
import { Container, Table, Item, NumOs, SetorOs, DataOs, HeaderOs, ResOs } from '../components/default';
import api, { baseURL } from '../services/api';

interface DataResponse {
  data: Servicos[]
}

interface Servicos {
  id: number;
  data: Date;
  descricao: 'string';
  provedor?: {
    id: number,
    login: 'string',
    nome: 'string'
  };
  setor: Object;
  localidade: Object;
}

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = React.useState(false);
  const [os, setOs] = React.useState<Servicos[]>([]);
  const [user, setUser] = React.useState('');

  const loadOS = React.useCallback(async (): Promise<void> => {
    try {
      const res = await api.get<DataResponse>(`${baseURL.externo}/schedules/2`);
      if (res) {
        setOs(res.data.data);
      }
      setLoading(false);
    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  const handlerRecOS = React.useCallback(async (item) => {
    try {
      const res = await api.put(`${baseURL.externo}/schedules/${item.id}`);
      await loadOS();
    } catch(err) {
      setLoading(false);
    } 
  }, []);

  const handlerAfter = React.useCallback(async (item) => {
    try {
      setLoading(false);
      navigation.navigate('ServicoInfoScreen', {os: item});
    } catch(err) {
      console.log(err);
      setLoading(false);
    }
  }, []);

  const handlerRec = React.useCallback((item) => {
    setLoading(true);
    Alert.alert(
      `OS: ${item.id}`,
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
  }, [user]);

  const handlerItem = React.useCallback((item) => {
    navigation.navigate('ServicoInfoScreen', {os: item});
  }, []);

  const renderItem = React.useCallback(({item}) => {
    return(
      <TouchableOpacity  onPress={(e)=>(item.provedor ? handlerItem(item) : handlerRec(item))}>
        { loading ? <Item Res={item.provedor ? true : false}><ActivityIndicator size="large" color="#fff" /></Item> : 
        ( <Item Res={item.provedor ? true : false}>
            <HeaderOs>
              <NumOs>{item.id} -</NumOs>
              <DataOs>{formatDate(item.data)}</DataOs>
            </HeaderOs>
            <SetorOs>{item.localidade.setor.descricao}</SetorOs>
            <SetorOs>{item.localidade.descricao}</SetorOs>
            <ResOs>{item.provedor?.login.toUpperCase() || ''}</ResOs>
        </Item> ) }
      </TouchableOpacity>
    );
  }, [loading]);

  const loadUser = React.useCallback(async () => {
    await loadOS();
  }, []);

  React.useEffect(()=>{
    //AsyncStorage.clear();
    loadUser();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Container>
        <Table 
            data={os}
            keyExtractor={(os: Servicos)=>String(os.id)}
            renderItem={renderItem}
            onEndReachedThreshold={.1}
            onRefresh={(e)=>{setLoading(true); loadOS();}}
            refreshing={loading}
        />
      </Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
