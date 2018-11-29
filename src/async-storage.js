import { AsyncStorage } from 'react-native';

export const loadAuthToken = () => {
  return AsyncStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
  try {
      AsyncStorage.setItem('authToken', authToken);
  } catch (e) {}
};

export const clearAuthToken = () => {
  try {
      AsyncStorage.removeItem('authToken');
  } catch (e) {}
};