import * as React from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StatusBar,
} from 'react-native';
import { WrapperView } from '../../components/Wrappers/SafeAreaWrapper';
import { ContentView } from '../../components/Wrappers/ContentView';
import { TextType } from '../../components/Text/TextView';
import { Header } from '../../components/UI/Header';
import { strings } from './strings';
import servicesApi from '../../api';
import { useState } from 'react';
import useSWRInfinite from 'swr/infinite';
import { Config } from 'react-native-config';
import { URLS } from '../../api/services/config';
import theme from '../../theme';
import { SeparatorView } from '../../components/UI/SeparatorView';
import { ResponseUsers, UserItem } from '../../types/responseType';
import {
  ActivityIndicator,
  Container,
  CustomTextInput,
  Logo,
} from '../../components/UI/StyledComponents';
import ListUserItem, {
  TextCustom,
} from '../../components/ListUserItem/ListUserItem';

const { search } = URLS;
const { githubServices: githubAPI } = servicesApi;

const ON_END_REACHED_THRESHOLD = 0.3;
const PAGE_SIZE = 10;

const UserScreen = () => {
  const [inputSearch, setInputSearch] = useState('john');

  const { data, mutate, size, setSize, isValidating } =
    useSWRInfinite<ResponseUsers>(
      (index) =>
        `${Config.URL_API_GITHUB}${
          search.users
        }?q=${inputSearch}&sort=stars&order=desc&per_page=${PAGE_SIZE}&page=${
          index + 1
        }`,
      githubAPI.searchUsers
    );

  const isEmpty = data?.[0]?.items?.length === 0;
  const isReachingEnd =
    isEmpty ||
    (!data?.[0]?.message &&
      data &&
      data[data?.[0]?.items?.length - 1]?.items.length < PAGE_SIZE);

  const loadMore = () => {
    if (!isReachingEnd) {
      setSize(size + 1);
    }
  };

  const onRefresh = () => {
    mutate();
  };

  const renderItem: ListRenderItem<UserItem> = ({ item }) => (
    <ListUserItem item={item} />
  );

  const renderListFooterComponent = () =>
    !isReachingEnd ? (
      <ActivityIndicator color={theme.colors.primary} />
    ) : (
      <TextCustom>{strings.users.notResults}</TextCustom>
    );

  return (
    <WrapperView>
      <ContentView fullWidth={true}>
        <StatusBar barStyle="dark-content" />
        <Header
          title={strings.users.infoTitle}
          subtitle={strings.users.infoSubtitle}
          textTypeTitle={TextType.bigBold}
          buttonBack={false}
          secondaryComponent={() => (
            <Logo source={require('../../assets/github-logo.png')} />
          )}
          footerComponent={() => (
            <>
              <CustomTextInput
                label={strings.users.search}
                value={inputSearch}
                mode={'outlined'}
                onChangeText={(text) => setInputSearch(text)}
              />
              <TextCustom>
                {data && data[0].total_count > 0
                  ? `${data[0].total_count} repository results`
                  : `${strings.users.notFound} ${
                      data && data[0].message ? data[0].message : ''
                    }`}
              </TextCustom>
            </>
          )}
        />
        <Container>
          <SeparatorView height={'20px'} width={'20px'} />
          {data?.[0].items && data[0].items.length > 0 && (
            <FlatList
              data={data.map((items) => items.items).flat()}
              renderItem={renderItem}
              onEndReached={loadMore}
              onEndReachedThreshold={ON_END_REACHED_THRESHOLD}
              refreshControl={
                <RefreshControl
                  refreshing={isValidating}
                  onRefresh={onRefresh}
                />
              }
              ListFooterComponent={renderListFooterComponent}
            />
          )}
        </Container>
      </ContentView>
    </WrapperView>
  );
};

export default UserScreen;
