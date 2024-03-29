import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.martinspire.f1app',
  appName: 'F1 Data',
  webDir: 'dist/apps/formule1',
  server: {
    cleartext: true
  }
};

export default config;
