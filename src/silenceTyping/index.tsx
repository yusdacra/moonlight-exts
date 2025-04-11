import { ExtensionWebExports } from "@moonlight-mod/types";

// https://moonlight-mod.github.io/ext-dev/webpack/#patching
export const patches: ExtensionWebExports["patches"] = [
  {
    find: '.dispatch({type:"TYPING_START_LOCAL"',
    replace: {
      match: /startTyping\(\i\){.+?},stop/,
      replacement: "startTyping:()=>{},stop"
    }
  }
];

// https://moonlight-mod.github.io/ext-dev/webpack/#webpack-module-insertion
export const webpackModules: ExtensionWebExports["webpackModules"] = {};
