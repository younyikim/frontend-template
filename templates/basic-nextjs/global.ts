import homeMessage from './messages/home/en.json';

const jsonMessages = {
  ...homeMessage,
};

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof jsonMessages;
  }
}
