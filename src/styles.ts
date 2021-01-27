import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fcfcfc;
  align-items: center;
`;

export const BackgroundTitle = styled.View`
  background-color: #800080;
  width: 100%;
  height: 80px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 22px;
  color: #ffffff;
`;

export const ContainerItem = styled.View`
  width: 100%;
  padding: 12px;
  border-width: 1px;
  border-style: solid;
  border-color: #110000;
  border-radius: 8px;
  margin-top: 12px;
`;

export const ButtonAddItem = styled.TouchableOpacity`
  background-color: #007700;
  padding: 18px;
  border-radius: 8px;
  margin-bottom: 5px;
`;

export const TextButton = styled.Text`
  color: #ffffff;
  font-size: 20px;
`;

export const Scroll = styled.ScrollView`
  width: 90%;
  margin-top: 22px;
`;

export const TextDescription = styled.Text`
  color: #000000;
  font-size: 20px;
`;
