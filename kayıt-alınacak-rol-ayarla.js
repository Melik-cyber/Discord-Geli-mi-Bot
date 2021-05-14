const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:ReddetmekGif:826398965268217876>     **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);

 if(!rol) return message.channel.send(`<:temsilieysi:833583507611189248>    **Kayıt Tamamlandığı Zaman Alınacak Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz!**\n**__Örnek__**: \`${prefix}kayıt-alınacak-rol-ayarla @AlınacakRol\``)

  message.channel.send(`<:temsilieysi:833583507611189248>    **Kayıt Olan Kullanıcılardan Alınacak Otomatik Rol** \`${rol}\` **Şeklinde Ayarlandı!**`)


  db.set(`kayitAR_${message.guild.id}`, rol.id)
};
exports.config = {
  name: 'kayıt-alınacak-rol-ayarla',
  aliases: []
};
