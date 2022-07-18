import { DefaultTheme } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Items } from '../types/responseType';

export const SUPPORT_NOTCH =
  Platform.OS === 'ios' ||
  (Platform.OS === 'android' && Platform.Version >= 23);
export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    border: 'rgb(216, 216, 216)',
    card: 'rgb(255, 255, 255)',
    notification: 'rgb(255, 59, 48)',
    primary: '#6d07e6',
    text: 'rgb(28, 28, 30)',
    background: '#003366',
  },
};

export const icons: Record<string, string> = {
  Users: 'face-man-profile',
  Repositories: 'source-repository',
};

export type RootStackParamList = {
  Users: undefined;
  Repositories: undefined;
  RepoDetail: { items: Items };
};
