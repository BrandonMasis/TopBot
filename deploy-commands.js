const { SlashCommandBuilder, Routes } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { clientId, guildId, token } = require("./config.json");

const commands = [
  new SlashCommandBuilder().setName("math2").setDescription("Facilito"),
  new SlashCommandBuilder().setName("math3").setDescription("Ta bien"),
  new SlashCommandBuilder().setName("math5").setDescription("Premio?"),
  new SlashCommandBuilder().setName("math7").setDescription("Premio"),
  new SlashCommandBuilder()
    .setName("server")
    .setDescription("Replies with server info!"),
  new SlashCommandBuilder()
    .setName("hola")
    .setDescription("la leyenda del gaming"),
].map((command) => command.toJSON());

const rest = new REST({ version: "10" }).setToken(token);

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then((data) =>
    console.log(`Successfully registered ${data.length} application commands.`)
  )
  .catch(console.error);
