require("dotenv").config();
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`🟢 ${c.user.tag} is online!`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.toLowerCase().includes("yurkey")) {
    if (message.reference) {
      let originalMessage = await message.channel.messages.fetch(message.reference.messageId);
      await originalMessage.reply(
        `${originalMessage.author} made a typo in the groupchat 🤡\nyou see this shit???\nnow you went and fucked up\n👉 get his ass`
      );
    } else if (message.mentions.users.first()) {
      let user = message.mentions.users.first();
      message.channel.send(
        `${user} made a typo in the groupchat 🤡\nyou see this shit???\nnow you went and fucked up\n👉 get his ass`
      );
    } else {
      message.channel.send(
        "typo in the groupchat 🤡\nyou see this shit???\nnow you went and fucked up\n👉 get his ass"
      );
    }
  }

  // if (message.content.toLowerCase().includes("yurkey") && message.mentions.repliedUser) {
  //   if (message.reference) {
  //     let originalMessage = await message.channel.messages.fetch(message.reference.messageId);
  //     await originalMessage.reply(
  //       `${originalMessage.author} made a typo in the groupchat 🤡\nyou see this shit???\nnow you went and fucked up\n👉 get his ass`
  //     );
  //   }
  // } else if (message.content.toLowerCase().includes("yurkey") && message.mentions.users.first()) {
  //   let user = message.mentions.users.first();
  //   message.channel.send(
  //     `${user} made a typo in the groupchat 🤡\nyou see this shit???\nnow you went and fucked up\n👉 get his ass`
  //   );
  // } else if (
  //   message.content.toLowerCase().includes("yurkey") &&
  //   !message.mentions.repliedUser &&
  //   !message.mentions.users.first()
  // ) {
  //   message.channel.send(
  //     "typo in the groupchat 🤡\nyou see this shit???\nnow you went and fucked up\n👉 get his ass"
  //   );
  // }
});

client.login(process.env.TOKEN);
