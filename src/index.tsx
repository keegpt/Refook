import * as React from "react";
import { RefookHooks, RefookConfiguratorProps, RefookRefs } from "./types";

export default (hooks: RefookHooks) => {
  const refs: RefookRefs = {};
  const names = Object.keys(hooks);

  const InnerConfigurator = (props: RefookConfiguratorProps) => {
    props.setHookRef(props.hookName, hooks[props.hookName]());
    return null;
  };

  const setHookRef = (hookName: string, hookRef: () => void) => {
    refs[hookName] = hookRef;
  };

  return {
    use: (name: string) => {
      return refs[name];
    },
    RefookConfigurator: () => {
      return (
        <>
          {names.map((name, index) => (
            <InnerConfigurator key={index} hookName={name} setHookRef={setHookRef} />
          ))}
        </>
      );
    },
  };
};
