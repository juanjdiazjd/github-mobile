import dayjs from 'dayjs';
import React from 'react';
import renderer from 'react-test-renderer';
import { RepoItem } from '../../../types/responseType';
import ListItem from '../ListRepoItem';
import relativeTime from 'dayjs/plugin/relativeTime';

jest.mock('swr');
jest.mock('react-native-paper');
jest.mock('react-native-localization');

dayjs.extend(relativeTime);

jest.resetAllMocks();
jest.useFakeTimers();

const MOCK_DATA_LIST_REPO_ITEM: RepoItem = {
  id: 192509111,
  node_id: 'MDEwOlJlcG9zaXRvcnkxOTI1MDkxMTE=',
  name: 'pepitogrillo',
  full_name: 'mamunozj/pepitogrillo',
  private: false,
  owner: {
    login: 'mamunozj',
    id: 30118145,
    node_id: 'MDQ6VXNlcjMwMTE4MTQ1',
    avatar_url: 'https://avatars.githubusercontent.com/u/30118145?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/mamunozj',
    html_url: 'https://github.com/mamunozj',
    followers_url: 'https://api.github.com/users/mamunozj/followers',
    following_url:
      'https://api.github.com/users/mamunozj/following{/other_user}',
    gists_url: 'https://api.github.com/users/mamunozj/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/mamunozj/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/mamunozj/subscriptions',
    organizations_url: 'https://api.github.com/users/mamunozj/orgs',
    repos_url: 'https://api.github.com/users/mamunozj/repos',
    events_url: 'https://api.github.com/users/mamunozj/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/mamunozj/received_events',
    type: 'User',
    site_admin: false,
  },
  html_url: 'https://github.com/mamunozj/pepitogrillo',
  description: '',
  fork: false,
  url: 'https://api.github.com/repos/mamunozj/pepitogrillo',
  forks_url: 'https://api.github.com/repos/mamunozj/pepitogrillo/forks',
  keys_url: 'https://api.github.com/repos/mamunozj/pepitogrillo/keys{/key_id}',
  collaborators_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/collaborators{/collaborator}',
  teams_url: 'https://api.github.com/repos/mamunozj/pepitogrillo/teams',
  hooks_url: 'https://api.github.com/repos/mamunozj/pepitogrillo/hooks',
  issue_events_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/issues/events{/number}',
  events_url: 'https://api.github.com/repos/mamunozj/pepitogrillo/events',
  assignees_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/assignees{/user}',
  branches_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/branches{/branch}',
  tags_url: 'https://api.github.com/repos/mamunozj/pepitogrillo/tags',
  blobs_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/git/blobs{/sha}',
  git_tags_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/git/tags{/sha}',
  git_refs_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/git/refs{/sha}',
  trees_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/git/trees{/sha}',
  statuses_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/statuses/{sha}',
  languages_url: 'https://api.github.com/repos/mamunozj/pepitogrillo/languages',
  stargazers_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/stargazers',
  contributors_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/contributors',
  subscribers_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/subscribers',
  subscription_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/subscription',
  commits_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/commits{/sha}',
  git_commits_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/git/commits{/sha}',
  comments_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/comments{/number}',
  issue_comment_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/issues/comments{/number}',
  contents_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/contents/{+path}',
  compare_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/compare/{base}...{head}',
  merges_url: 'https://api.github.com/repos/mamunozj/pepitogrillo/merges',
  archive_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/{archive_format}{/ref}',
  downloads_url: 'https://api.github.com/repos/mamunozj/pepitogrillo/downloads',
  issues_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/issues{/number}',
  pulls_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/pulls{/number}',
  milestones_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/milestones{/number}',
  notifications_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/notifications{?since,all,participating}',
  labels_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/labels{/name}',
  releases_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/releases{/id}',
  deployments_url:
    'https://api.github.com/repos/mamunozj/pepitogrillo/deployments',
  created_at: '2019-06-18T09:30:15Z',
  updated_at: '2019-06-25T14:25:31Z',
  pushed_at: '2019-06-18T09:30:16Z',
  git_url: 'git://github.com/mamunozj/pepitogrillo.git',
  ssh_url: 'git@github.com:mamunozj/pepitogrillo.git',
  clone_url: 'https://github.com/mamunozj/pepitogrillo.git',
  svn_url: 'https://github.com/mamunozj/pepitogrillo',
  homepage: '',
  size: 0,
  stargazers_count: 0,
  watchers_count: 0,
  language: '',
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: false,
  archived: false,
  disabled: false,
  open_issues_count: 0,
  license: {
    key: '',
    name: '',
    spdx_id: '',
    url: '',
    node_id: '',
  },
  allow_forking: true,
  is_template: false,
  web_commit_signoff_required: false,
  topics: [''],
  visibility: 'public',
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: 'master',
  score: 1,
};

const ListItemComponent = (): JSX.Element => (
  <ListItem item={MOCK_DATA_LIST_REPO_ITEM} />
);

it('Should list repo item component', () => {
  const tree = renderer.create(ListItemComponent()).toJSON();
  expect(tree).toMatchSnapshot();
});
