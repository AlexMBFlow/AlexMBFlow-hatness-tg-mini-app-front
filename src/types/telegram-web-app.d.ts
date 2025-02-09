declare global {
    interface Window {
      Telegram: {
        WebApp: {
          initData: string;
          initDataUnsafe?: {
            user?: {
              username?: string
            }
          };
          logo: string;
          colorScheme: string;
          viewportHeight: number;
          viewportWidth: number;
          openLink: (url: string) => void;
          sendData: (data: string) => void;
        };
      };
    }
  }
  
  export {};