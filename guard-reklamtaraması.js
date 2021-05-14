const Discord = require('discord.js')
const ayarlar = require('../ayarlar/bot.json')

exports.run = (client, message, args) => {

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın! <a:ReddetmekGif:826398965268217876> `);

  const members = message.guild.members.cache.filter(member => member.user.presence.activites && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.presence.activites.name));
  const memberss = message.guild.members.cache.filter(member => member.user.username && /(discord|http|.com|.net|.org|invite|İnstagram|Facebook|watch|Youtube|youtube|facebook|instagram)/g.test(member.user.username));
  const embed = new Discord.MessageEmbed()
      .addField('Oynuyor Mesajı Reklam İçeren Kullanıcılar', members.map(member => `${member} = ${member.user.presence.activites.name}`).join("\n") || "Kimsenin oynuyor mesajı reklam içermiyor. <a:ModernOnayGif:827470162440617994>  ")
      .addField('Kullanıcı Adı Reklam İçeren Kullanıcılar', memberss.map(member => `${member} = ${member.user.username}`).join("\n") || "Kimsenin kullanıcı adı reklam içermiyor. <a:ModernOnayGif:827470162440617994>  ")
      .setColor("GREY")
  message.channel.send({embed})

};
exports.config = {
  name: 'reklamtaraması',
  aliases: []
};
