import { makeAutoObservable } from 'mobx';
export class StreamerListStore {
  public list = [];

  constructor() {
    makeAutoObservable(this);
  }
}

const streamerListStore = new StreamerListStore();

export default streamerListStore;
