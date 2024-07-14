import dotenv from "dotenv";
import { Client, GatewayIntentBits, SlashCommandBuilder } from "discord.js";

dotenv.config();

const client = new Client({
  intents: [GatewayIntentBits.GuildMessages],
});

const token = process.env.DISCORD_TOKEN;

const players = [
  "Dikembe Mutombo",
  "Dennis Rodman",
  "Bruce Bowen",
  "Ben Wallace",
  "Shane Battier",
  "Robert Horry",
  "Luc Mbah a Moute",
  "Thabo Sefolosha",
  "P.J. Tucker",
  "Tony Allen",
  "Kendrick Perkins",
  "Boris Diaw",
  "Kurt Rambis",
  "Raja Bell",
  "Joel Przybilla",
  "Michael Cooper",
  "Udonis Haslem",
  "Anderson Varejao",
  "Jared Dudley",
  "J.J. Barea",
  "Shaun Livingston",
  "Tristan Thompson",
  "Earl Watson",
  "Eric Snow",
  "Steven Adams",
  "Zaza Pachulia",
  "Kendall Gill",
  "Matt Barnes",
  "Bismack Biyombo",
  "Tyson Chandler",
  "Mickael Pietrus",
  "Jared Jeffries",
  "Jason Collins",
  "Joel Anthony",
  "Kosta Koufos",
  "Nick Collison",
  "Robin Lopez",
  "Sasha Vujacic",
  "Luc Longley",
];

client.once("ready", () => {
  console.log("Bot is online!");

  // Define the slash command
  const randomPlayerCommand = new SlashCommandBuilder()
    .setName("randomplayer")
    .setDescription("Generate a random NBA player");

  // Register the slash command
  client.application.commands.create(randomPlayerCommand);

  console.log("Slash command registered: /randomplayer");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === "randomplayer") {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    await interaction.reply(`${randomPlayer}`);
  }
});

client.login(token);
