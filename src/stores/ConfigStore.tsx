import { makeAutoObservable } from 'mobx';
export class ConfigStore {
  public displayChat = false;
  public displayEachChat = false;
  public darkModeEnabled = false;

  private loadLocalData() {
    const displayChat = localStorage.getItem('displayChat');
    if (displayChat === 'true') {
      this.displayChat = true;
    } else {
      this.displayChat = false;
    }

    const localVideoChatTogether = localStorage.getItem('displayEachChat');
    if (localVideoChatTogether === 'true') {
      this.displayEachChat = true;
    } else {
      this.displayEachChat = false;
    }

    const localChatDarkMode = localStorage.getItem('darkModeEnabled');
    if (localChatDarkMode === 'true') {
      this.darkModeEnabled = true;
    } else {
      this.darkModeEnabled = false;
    }
  }

  constructor() {
    this.loadLocalData();
    makeAutoObservable(this);
  }
}

const configStore = new ConfigStore();

export default configStore;
