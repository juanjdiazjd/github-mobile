import * as React from 'react';
import { Text, View, ViewProps } from 'react-native';
import styled from 'styled-components';
import theme from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  colorByLanguage,
  delimitString,
  formatRelativeTime,
  kFormatter,
} from './utils';
import { RepoItem } from '../../types/responseType';

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
const ContainerLanguage = styled(View)`
  align-item: flex-end;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  width: auto;
`;

export const TextMount = styled(Text)`
  color: black;
  justify-content: flex-end;
  font-size: 14px;
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

export const TextDate = styled(Text)`
  top: 10%;
  color: ${theme.colors.gray};
  padding-left: 20px;
  font-size: 14px;
`;

export const Column = styled(View)`
  flex-direction: column;
`;

export const Row = styled(View)`
  flex-direction: row;
`;
const CustomIcon = styled(Icon)<{
  language?: string;
}>`
  position: absolute;
  bottom: -15px;
  right: -15px;
  color: ${({ language }) =>
    language ? colorByLanguage(language) : theme.colors.gray};
  width: 30px;
  height: 30px;
  padding-left: 2px;
  margin-top: 10px;
`;

interface ListRepoItemViewProps extends ViewProps {
  item: RepoItem;
}

export const ListRepoItem: React.FunctionComponent<ListRepoItemViewProps> = ({
  item,
}) => {
  return (
    <ComponentContainer>
      {item && (
        <ListContainer>
          <Row>
            <Column>
              <Icon
                name="source-repository"
                size={40}
                color={theme.colors.primary}
              />
              <CustomIcon
                language={item.language || ''}
                name={'checkbox-blank-circle'}
                size={18}
              />
            </Column>
            <Column>
              <TextTitle color={'blue'}>{`${delimitString(
                item.full_name,
                25
              )}`}</TextTitle>
              <TextTitle>{`${delimitString(item.description, 15)}`}</TextTitle>

              <TextDate>{`Updated ${formatRelativeTime(
                item.updated_at
              )}`}</TextDate>
            </Column>
          </Row>
          <ContainerLanguage>
            <Icon name="star-outline" size={14} color={theme.colors.primary}>
              <TextMount>{`${kFormatter(item.stargazers_count)}`}</TextMount>
            </Icon>
            <TextMount>{`${item.language ? item.language : ''}`}</TextMount>
          </ContainerLanguage>
        </ListContainer>
      )}
    </ComponentContainer>
  );
};

export default ListRepoItem;
