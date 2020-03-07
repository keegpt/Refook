export interface RefookHooks {
  [key: string]: any;
}

export interface RefookRefs {
  [key: string]: any;
}

export interface RefookConfiguratorProps {
  hookName: string;
  setHookRef: (hookName: string, hookRef: () => void) => void;
}
