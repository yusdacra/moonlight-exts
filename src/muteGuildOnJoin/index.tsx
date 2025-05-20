import { ExtensionWebExports } from "@moonlight-mod/types";

// https://moonlight-mod.github.io/ext-dev/webpack/#patching
export const patches: ExtensionWebExports["patches"] = [
  {
    find: ",acceptInvite(",
    replace: {
      match: /INVITE_ACCEPT_SUCCESS.+?,(\i)=null!=.+?;/,
      replacement: (m, [guildId]) => `${m}require("muteGuildOnJoin_preferences").muteGuild(${guildId});`
    }
  },
  {
    find: "{joinGuild:",
    replace: {
      match: /guildId:(\i),lurker:(\i).{0,20}}\)\);/,
      replacement: (m, [guildId, lurker]) =>
        `${m}if(!${lurker})require("muteGuildOnJoin_preferences").muteGuild(${guildId});`
    }
  }
];

// https://moonlight-mod.github.io/ext-dev/webpack/#webpack-module-insertion
export const webpackModules: ExtensionWebExports["webpackModules"] = {
  preferences: {
    dependencies: [{ ext: "spacepack", id: "spacepack" }]
  }
};
