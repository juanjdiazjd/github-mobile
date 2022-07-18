import Config from 'react-native-config';

const TIMEOUTS = {
  FAST: 3e3,
  INIT: 10e3,
  GLOBAL: 60e3,
  UNIT: 5e3,
};

type ApiConfig = {
  baseURL: string;
  headers?: { Accept: string; [key: string]: string };
  timeout?: number;
};
const config: ApiConfig = {
  baseURL: Config.URL_API_GITHUB,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: TIMEOUTS.GLOBAL,
};

export { TIMEOUTS };
const METHODS = {
  search: {
    repositories: 'GET',
    users: 'GET',
  },
};

const URLS = {
  search: {
    repositories: 'search/repositories',
    users: 'search/users',
  },
};

export { METHODS, URLS };

export default config;
