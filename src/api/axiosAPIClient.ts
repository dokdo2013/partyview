import axios from 'axios';
import { LinkApiFactory, StreamerApiFactory } from './api';
import { Configuration } from './configuration';

const baseURL = 'https://api.partyview.tv';
const client = axios.create({ baseURL });
const apiConfig = new Configuration();

const API = {
  streamer: StreamerApiFactory(apiConfig, baseURL, client),
  link: LinkApiFactory(apiConfig, baseURL, client),
};

export default API;
