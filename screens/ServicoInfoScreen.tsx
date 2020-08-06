import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { formatDate } from '../utils/FormatDate';
import { Container, OS, Form, DescriptionOS, TextOS, LabelOS, Grouptext } from '../components/default';

export default function ServicoInfoScreen({ navigation, route }) {
  const os  = route.params.os;

  const TabBarIcon = React.useCallback((props: { name: string; color: string }) => {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
  }, []);

  const handlerBack = React.useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Container>
        <ScrollView style={{alignSelf: "stretch"}} showsHorizontalScrollIndicator={false}>
            <OS>
                <Grouptext>
                    <LabelOS>DATA:</LabelOS>
                    <TextOS>{formatDate(os.data)}</TextOS>
                </Grouptext>
                <Grouptext>
                    <LabelOS>SOLICITANTE:</LabelOS>
                    <TextOS>{os.usuario_solicitante?.nome}</TextOS>
                </Grouptext>
                <Grouptext>
                    <LabelOS>SETOR:</LabelOS>
                    <TextOS>{os.localidade?.setor.descricao}</TextOS>
                </Grouptext>
                <Grouptext>
                    <LabelOS>LOCALIDADE:</LabelOS>
                    <TextOS>{os.localidade?.descricao}</TextOS>
                </Grouptext>
                <Grouptext>
                    <LabelOS>DESCRIÇÃO:</LabelOS>
                    <DescriptionOS>{os.descricao}</DescriptionOS>
                </Grouptext>
                <Grouptext>
                    <LabelOS>RESPONSÁVEL:</LabelOS>
                    <DescriptionOS>{os.provedor?.nome}</DescriptionOS>
                </Grouptext>
            </OS>
            <Form>
                <TouchableOpacity style={styles.BtnTrans} onPress={handlerBack}>
                    <TabBarIcon color="white" name={'ios-arrow-back'} />
                </TouchableOpacity>
            </Form>
        </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  BtnTrans: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: "#ff0000",
      borderRadius: 7
  } 
});
