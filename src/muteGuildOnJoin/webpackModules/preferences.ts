import spacepack from "@moonlight-mod/wp/spacepack_spacepack";

const Settings = spacepack.findByCode('"USER_GUILD_SETTINGS_GUILD_UPDATE",', "updateGuildNotificationSettings(");
const SettingsFunctions = spacepack.findObjectFromKey(Settings[0].exports, "updateGuildNotificationSettings");
const updateGuildNotificationSettings = SettingsFunctions.updateGuildNotificationSettings;

export const muteGuild = (guildId: string) => {
  updateGuildNotificationSettings(guildId, {
    muted: true
  });
};
