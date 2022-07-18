import React from 'react';
import renderer from 'react-test-renderer';
import { UserItem } from '../../../types/responseType';
import ListUserItem from '../ListUserItem';
jest.mock('swr');
jest.mock('react-native-paper');
jest.mock('react-native-localization');

jest.resetAllMocks();
jest.useFakeTimers();

const MOCK_DATA_LIST_USER_ITEM: UserItem = {
  login: 'pepito',
  id: 131574,
  node_id: 'MDQ6VXNlcjEzMTU3NA==',
  avatar_url: 'https://avatars.githubusercontent.com/u/131574?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/pepito',
  html_url: 'https://github.com/pepito',
  followers_url: 'https://api.github.com/users/pepito/followers',
  following_url: 'https://api.github.com/users/pepito/following{/other_user}',
  gists_url: 'https://api.github.com/users/pepito/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/pepito/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/pepito/subscriptions',
  organizations_url: 'https://api.github.com/users/pepito/orgs',
  repos_url: 'https://api.github.com/users/pepito/repos',
  events_url: 'https://api.github.com/users/pepito/events{/privacy}',
  received_events_url: 'https://api.github.com/users/pepito/received_events',
  type: 'User',
  site_admin: false,
  score: 1,
};

const ListItemComponent = (): JSX.Element => (
  <ListUserItem item={MOCK_DATA_LIST_USER_ITEM} />
);

it('Should list user item component', () => {
  const tree = renderer.create(ListItemComponent()).toJSON();
  expect(tree).toMatchSnapshot();
});
