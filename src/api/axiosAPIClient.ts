import axios from 'axios';
import { LinkApiFactory, StreamerApiFactory } from './api';
import { Configuration } from './configuration';

import * as Sentry from '@sentry/react';

const baseURL = 'https://api.partyview.tv';
const client = axios.create({ baseURL });

client.interceptors.response.use(
  res => res,
  error => {
    Sentry.captureException(error);
  }
);

const apiConfig = new Configuration();

const API = {
  streamer: StreamerApiFactory(apiConfig, baseURL, client),
  link: LinkApiFactory(apiConfig, baseURL, client),
};

export default API;
