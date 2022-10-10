import { makeAutoObservable } from 'mobx';
import { StreamerSearchLiveDto } from '../api';
export class StreamerListStore {
  public list: StreamerSearchLiveDto[] = [];

  public addStreamer(streamer: StreamerSearchLiveDto) {
    this.list.push(streamer);
  }
  public removeStreamer(streamer: StreamerSearchLiveDto) {
    this.list = this.list.filter(item => item.id !== streamer.id);
  }

  constructor() {
    makeAutoObservable(this);
  }
}

const streamerListStore = new StreamerListStore();

export default streamerListStore;
