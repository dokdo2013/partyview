import { makeAutoObservable } from 'mobx';
export class ConfigStore {
  public hideChat = false;
  public displayEachChat = false;
  public darkModeEnabled = false;

  private loadLocalData() {
    const localHideChat = localStorage.getItem('setting-hideChat');
    if (localHideChat === 'true') {
      this.hideChat = true;
    } else {
      this.hideChat = false;
    }

    const localVideoChatTogether = localStorage.getItem(
      'setting-videoChatTogether'
    );
    if (localVideoChatTogether === 'true') {
      this.displayEachChat = true;
    } else {
      this.displayEachChat = false;
    }

    const localChatDarkMode = localStorage.getItem('setting-chatDarkMode');
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
