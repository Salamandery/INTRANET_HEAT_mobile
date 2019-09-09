import React from 'react';

import { Container, OS, Form, DescriptionOS, TextOS, LabelOS } from '../components/default';
export default class OsInfoScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: "OS:" + navigation.state.params.os.CD
    })

    render(){
        const os  = this.props.navigation.getParam('os')
        console.log(os)
        return(
            <Container>
                <OS>
                    <LabelOS>Código:</LabelOS>
                    <TextOS>{os.CD}</TextOS>
                    <LabelOS>Data:</LabelOS>
                    <TextOS>{os.DATA}</TextOS>
                    <TextOS>{os.SOL}</TextOS>
                    <LabelOS>Setor:</LabelOS>
                    <TextOS>{os.SETOR}</TextOS>
                    <LabelOS>Descrição:</LabelOS>
                    <DescriptionOS>{os.DS}</DescriptionOS>
                    <LabelOS>Responsavel:</LabelOS>
                    <TextOS>{os.RES}</TextOS>
                </OS>
                <Form>

                </Form>
            </Container>
        )
    }
}
