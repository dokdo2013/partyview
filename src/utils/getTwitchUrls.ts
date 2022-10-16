export const getTwitchChatUrl = (
  streamerId: string,
  isDarkMode: boolean,
  host: string
) =>
  'https://twitch.tv/embed/' +
  streamerId +
  (isDarkMode ? '/chat?darkpopout&parent=' + host : '/chat?parent=' + host);

export const getTwitchPlayerUrl = (streamerId: string, host: string) =>
  'https://player.twitch.tv/?muted=true&channel=' +
  streamerId +
  '&parent=' +
  host;
