import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
    background: #66b3ff;
`;
// Home
export const Table = styled.FlatList`
    margin-top: 0px;
`;
export const Item = styled.View`
    align-self: stretch;
    height: 86px;
    justify-content: center;
    align-items: center;
    background: ${props => props.Res ? "#0059b3" : "#b30000"};
    margin: 2px;
    padding: 5px 20px;
    border-radius: 5px;
`;
export const NumOs = styled.Text`
    font-size: 22px;
    text-align: center;
    margin-right: 5px;
    margin-left: 5px;
    color: #fff;
    font-weight: bold;
`;
export const SetorOs = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: 18px;
    color: #fff;
    text-align: center;
`;
export const DataOs = styled.Text`
    font-size: 22px;
    margin-right: 5px;
    color: #fff;
    font-weight: bold;
    text-align: center;
`;
export const HeaderOs = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
export const ResOs = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 5px;
    text-align: center;
`;
// OsInfo
export const OS = styled.View`
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
`;
export const Form = styled.View`
    flex: 1;
    padding: 20px;
    justify-content: center;
    flex-direction: row;
`;
export const DescriptionOS = styled.Text`
    font-size: 18px;
    text-align: center;
    color: #f2f2f2;
`;
export const TextOS = styled.Text`
    font-size: 24px;
    text-align: center;
    align-self: stretch;
    color: #f2f2f2;
`;
export const LabelOS = styled.Text`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    align-self: stretch;
    color: #f2f2f2;
    margin-bottom: 5px;
`;
export const Grouptext = styled.View`
    background: #0059b3;
    align-self: stretch;
    margin-bottom: 5px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid #4da6ff;
    border-radius: 7px;
`;
