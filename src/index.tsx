import * as React from "react";
import { RefookHooks, RefookConfiguratorProps, RefookRefs } from "./types";

const refs: RefookRefs = {};

export default ({ hooks }: { hooks: RefookHooks }) => {
  const names = Object.keys(hooks);

  const InnerConfigurator = (props: RefookConfiguratorProps) => {
    props.setHookRef(props.hookName, hooks[props.hookName]());
    return null;
  };

  const setHookRef = (hookName: string, hookRef: () => void) => {
    refs[hookName] = hookRef;
  };

  return (
    <>
      {names.map((name, index) => (
        <InnerConfigurator key={index} hookName={name} setHookRef={setHookRef} />
      ))}
    </>
  );
};

export const use = (name: string) => {
  if(!refs[name]) {
    throw new Error("Hook is not defined");
  }

  return refs[name];
};
