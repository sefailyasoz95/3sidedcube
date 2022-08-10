import axios from 'axios';
import {API_URL} from '../../Constants/api';
import {AxiosClient} from '../../Utils/axiosClient';

export const GetPokemonsAsync = async () => {
  try {
    let response = await AxiosClient.get('');
    return {
      error: false,
      data: response.data,
    };
  } catch (error) {
    return {
      error: true,
      data: error,
    };
  }
};

export const GetPokemonDetailsAsync = async (id: number) => {
  try {
    let response = await AxiosClient.get(`${id}`);
    return {
      error: false,
      data: response.data,
    };
  } catch (error) {
    return {
      error: true,
      data: error,
    };
  }
};
