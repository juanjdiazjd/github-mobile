import Config from 'react-native-config';
import { ResponseSearch, ResponseUsers } from '../../types/responseType';
import buildApi from '../api';

const createApi = () => {
  const { get } = buildApi({ baseURL: Config.URL_API_GITHUB });
  return {
    searchRepositories: (url: string): Promise<ResponseSearch> =>
      get(url).then((res) => res.data as ResponseSearch),
    searchUsers: (url: string): Promise<ResponseUsers> =>
      get(url).then((res) => res.data as ResponseUsers),
  };
};

export default createApi;
