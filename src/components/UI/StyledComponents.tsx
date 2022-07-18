import { Image, View } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import { TextInput } from 'react-native-paper';
import styled from 'styled-components';

export const Container = styled(View)`
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: auto;
  padding-bottom: 200px;
  border-radius: 10px;
  align-self: center;
`;

export const Logo = styled(Image)`
  width: 160px;
  height: 80px;
`;

export const CustomTextInput = styled(TextInput)`
  margin-top: 20px;
  margin-right: 15px;
  align-self: center;
  width: 340px;
`;
export const ActivityIndicator = styled(MaterialIndicator)`
  margin-top: 10px;
  align-items: center;
`;
