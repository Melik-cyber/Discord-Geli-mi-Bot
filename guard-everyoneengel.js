const db = require('quick.db');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`<a:ReddetmekGif:826398965268217876>  Bu Komutu Kullana Bilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`)
  if (!args[0]) return message.channel.send('Hatalı kullanım! **Örnek Kullanım:** everyone-engel aç/kapat <a:ReddetmekGif:826398965268217876>')

  if (args[0] == 'aç') {
    db.set(`hereengel_${message.guild.id}`, 'acik')
      message.channel.send('Everyone Engel başarıyla açıldı! <a:ModernOnayGif:827470162440617994> ')

  }
  if (args[0] == 'kapat') {
    db.delete(`hereengel_${message.guild.id}`, 'kapali')
      message.channel.send('Everyone Engel başarıyla kapatıldı! <a:ModernOnayGif:827470162440617994> ')

  }


};
exports.config = {
name: "everyoneengel",
aliases: [""]
}
