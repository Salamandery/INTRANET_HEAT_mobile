import React from 'react';
import {
    ScrollView,
    TouchableOpacity,
    Platform,
    StyleSheet
} from 'react-native';
import { Container, OS, Form, DescriptionOS, TextOS, LabelOS, Grouptext } from '../components/default';
import TabBarIcon from '../components/TabBarIcon';
export default class OsInfoScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: "OS:" + navigation.state.params.os.CD
    })
    handlerTrans = () => {
        const os = this.props.navigation.getParam('os');
        this.props.navigation.navigate('TransOSScreen', {os});
    }
    render(){
        const os  = this.props.navigation.getParam('os');
        return(
            <Container>
                <ScrollView style={{alignSelf: "stretch"}} showsHorizontalScrollIndicator={false}>
                    <OS>
                        <Grouptext>
                            <LabelOS>Data:</LabelOS>
                            <TextOS>{os.DATA}</TextOS>
                        </Grouptext>
                        <Grouptext>
                            <LabelOS>Solicitante:</LabelOS>
                            <TextOS>{os.SOL}</TextOS>
                        </Grouptext>
                        <Grouptext>
                            <LabelOS>Setor:</LabelOS>
                            <TextOS>{os.SETOR}</TextOS>
                        </Grouptext>
                        <Grouptext>
                            <LabelOS>Descrição:</LabelOS>
                            <DescriptionOS>{os.DS}</DescriptionOS>
                        </Grouptext>
                        <Grouptext>
                            <LabelOS>Responsável:</LabelOS>
                            <DescriptionOS>{os.RES}</DescriptionOS>
                        </Grouptext>
                    </OS>
                    <Form>
                        <TouchableOpacity style={styles.BtnTrans} onPress={this.handlerTrans}>
                            <TabBarIcon focused={true} name={Platform.OS === 'ios' ? 'ios-swap' : 'md-swap'} />
                        </TouchableOpacity>
                    </Form>
                </ScrollView>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    BtnTrans: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#808080",
        borderRadius: 7
    } 
});
