import React from 'react';
import {
    ScrollView
} from 'react-native';
import { Container, OS, Form, DescriptionOS, TextOS, LabelOS, Grouptext } from '../components/default';
export default class OsInfoScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: "OS:" + navigation.state.params.os.CD
    })

    render(){
        const os  = this.props.navigation.getParam('os')
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
                            <LabelOS>Responsavel:</LabelOS>
                            <DescriptionOS>{os.RES}</DescriptionOS>
                        </Grouptext>
                    </OS>
                    <Form>

                    </Form>
                </ScrollView>
            </Container>
        )
    }
}
