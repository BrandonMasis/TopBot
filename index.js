// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
const { AttachmentBuilder } = require("discord.js");
const { token } = require("./config.json");

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

const randomSum = (value) => {
  let max = 0;
  for (let i = 0; i < value; i++) {
    max += "9";
  }

  return `${Math.floor(Math.random() * max)} + ${Math.floor(
    Math.random() * max
  )}`;
};

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName } = interaction;

  if (commandName === "math2") {
    await interaction.reply(randomSum(2));
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
    );
  } else if (commandName === "hola") {
    await interaction.reply(`Hola ${interaction.user.username}!`);
  } else if (commandName === "math3") {
    await interaction.reply(randomSum(3));
  } else if (commandName === "math5") {
    await interaction.reply(randomSum(5));
  } else if (commandName === "math7") {
    await interaction.reply(randomSum(7));
  }
});

// Login to Discord with your client's token
client.login(token);
