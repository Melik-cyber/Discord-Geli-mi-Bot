//1.kod komutlara 2.kod maininize atılacaktır.

//----------1.KOD----------//
const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`<a:ReddetmekGif:826398965268217876>  Bu Komutu Kullana Bilmek İçin \`Sunucuyu Yönet\` Yetkisine Sahip Olmalısın!`)

  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`, 'kapali')
    message.channel.send(`Capslock Engelleme Sistemi Kapatıldı <a:ReddetmekGif:826398965268217876>`)
  }

  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`Capslock Engelleme Sistemi Aktif <a:ModernOnayGif:827470162440617994> `)
  }
};
exports.config = {
name: "capslockengel",
aliases: [""]
}


//---------2.KOD-------------//
