import theme from '../../../theme';
import { githubColors } from '../../../theme/colors';
import dayjs from 'dayjs';

export const colorByLanguage = (language: string): string => {
  try {
    return githubColors[language].color || theme.colors.gray;
  } catch (error) {
    return theme.colors.gray;
  }
};

export const parseDate = (date: string, complete: boolean): string => {
  return complete
    ? dayjs(date).format('DD/MM/YYYY hh:mm:ss')
    : dayjs(date).format('DD/MM/YYYY');
};

export const kFormatter = (num: number) => {
  const numCalculated = Math.sign(num) * (Math.abs(num) / 1000);
  return Math.abs(num) > 999
    ? numCalculated.toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
};

export const formatRelativeTime = (date: string) => {
  return dayjs().to(dayjs(date));
};

export const delimitString = (str: string, limit: number) =>
  str ? str.substring(0, limit) + '...' : '';
