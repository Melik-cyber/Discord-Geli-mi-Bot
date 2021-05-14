const Discord = require('discord.js');
const ayarlar = require('../ayarlar/bot.json');
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username + ' al buyur çekinme niye almıyorsun al işte merak etme sorun yok sadece link: https://resimyukle.xyz/i/B2VLfB/')
    .setColor("BLACK")
    .setTimestamp()
    return message.channel.send(embed);
    }
  };
exports.config = {
name: "token",
aliases: [""]
}
