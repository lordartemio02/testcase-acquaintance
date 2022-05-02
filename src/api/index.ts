import axios from 'axios';
import { UserData } from '../interfaces/UserData';

const api = axios.create();

const token = 'b9112e99755195021fdd6e7dfb91080b1653a56a';

api.interceptors.request.use((config) => {
  config.headers!.Authorization = `token ${token}`;
  return config;
});

export const UsersDataPost = async () => {
  try {
    const { data } = await api.post<UserData[]>(
      'http://makefriendsback.promo-miner.art/test_main/'
    );
    return data;
  } catch (error) {
    return []; // TODO: handle errors
  }
};
