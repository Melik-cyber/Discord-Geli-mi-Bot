const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
   message.channel.send(`>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın. <a:ReddetmekGif:826398965268217876>**`);
    return;
  }
  let kanal = message.mentions.channels.first();
  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Lütfen bir kanal belirtiniz! <a:ReddetmekGif:826398965268217876>")
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("RED")
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("GREEN")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`Davet kanalı; ${kanal} olarak ayarlandı! <a:ModernOnayGif:827470162440617994> `);
  message.channel.send(embed);
  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};
module.exports.config = {
  name: "davet-kanal",
  aliases: ["davetkanal"]
};
