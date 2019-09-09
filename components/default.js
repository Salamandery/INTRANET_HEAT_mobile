import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    padding: 20px;
`;
// Home
export const Table = styled.FlatList`
    margin-top: 0px;
`;
export const Item = styled.View`
    align-self: stretch;
    height: 86px;
    border-bottom-width: 1px;
    border-color: #fff;
    justify-content: flex-start;
    align-items: center;
    background: #4da6ff;
    margin: 5px;
    padding-top: 5px;
    border-radius: 5px;
`;
export const NumOs = styled.Text`
    font-size: 24px;
    text-align: center;
    margin-right: 10px;
    color: #fff;
    font-weight: bold;
`;
export const SetorOs = styled.Text.attrs({
    numberOfLines: 1
})`
    font-size: 18px;
    color: #fff;
`;
export const DataOs = styled.Text`
    font-size: 24px;
    margin-right: 10px;
    color: #fff;
    font-weight: bold;
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
`;
// OsInfo
export const OS = styled.View`
    padding: 10px;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
`;
export const Form = styled.View`
    flex: 1;
    padding: 20px;
    justify-content: center;
`;
export const DescriptionOS = styled.Text`
    font-size: 18px;
    text-align: center;
`;
export const TextOS = styled.Text`
    font-size: 16px;
    text-align: center;
`;
export const LabelOS = styled.Text`
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`;