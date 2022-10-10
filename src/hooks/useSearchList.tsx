import useSWR from 'swr';
import API from '../api/axiosAPIClient';

export const searchListFetcher = async (_: string, args: string) => {
  const res = await API.streamer.streamerControllerGetSearch(args);
  return res.data.data;
};

export const useSearchList = (nameOrId: string) =>
  useSWR(['/api/search', nameOrId], searchListFetcher);
