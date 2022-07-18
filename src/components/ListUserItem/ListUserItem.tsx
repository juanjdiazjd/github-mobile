import * as React from 'react';
import { Alert, Image, Text, View, ViewProps } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components';
import theme from '../../theme';
import { UserItem } from '../../types/responseType';

const ListContainer = styled(View)`
  background-color: ${theme.colors.white};
  height: auto;
  width: 350px;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

const ComponentContainer = styled(View)`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

export const TextCustom = styled(Text)<{
  color?: string;
}>`
  color: ${({ color }) => color ?? theme.colors.titleText};
  top: 10%;
  padding-left: 20px;
  font-size: 14px;
`;

export const TextTitle = styled(Text)<{
  color?: string;
}>`
  color: ${({ color }) => color ?? theme.colors.titleText};
  top: 10%;
  flex: 1;
  flex-wrap: wrap;
  padding-left: 20px;
  font-size: 14px;
`;

const Column = styled(View)`
  flex-direction: column;
`;

const Row = styled(View)`
  flex-direction: row;
`;
const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 200px;
`;

interface ListUserItemViewProps extends ViewProps {
  item: UserItem;
}

export const ListUserItem: React.FunctionComponent<ListUserItemViewProps> = ({
  item,
}) => {
  return (
    <ComponentContainer>
      {item && (
        <ListContainer>
          <Row>
            <Column>
              <Avatar
                source={{
                  uri: item.avatar_url,
                }}
              />
            </Column>
            <TextCustom color={theme.colors.iris}>{item.login}</TextCustom>
          </Row>
          <Button onPress={() => Alert.alert('Followed')} mode="outlined">
            Follow
          </Button>
        </ListContainer>
      )}
    </ComponentContainer>
  );
};

export default ListUserItem;
