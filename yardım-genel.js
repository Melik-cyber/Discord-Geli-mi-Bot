
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let eklenti = new Discord.MessageEmbed()
.setColor('#ffffff')
.setAuthor(`W4ldo Genel Komutlar    `, client.user.avatarURL())
.setDescription(`<a:E4:798805833357590598>  W4ldo   botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`<a:E4:798805833357590598>    »\`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<a:E4:798805833357590598>    »\`${prefix}davet\` Botumuzu DavW4ldoersiniz`,true)
.addField(`__Bot Bilgi__`,`<a:E4:798805833357590598>    »\`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Bot Shard__`,`<a:E4:798805833357590598>    »\`${prefix}shard\` Shard Bilgilerini Gösterir`,true)
.addField(`__Profil__`,`<a:E4:798805833357590598>    »\`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<a:E4:798805833357590598>    »\`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<a:E4:798805833357590598>    »\`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<a:AyarGif:826398967671422996>  » \`${prefix}davet\`  | W4ldo Sunucunuza Davet Edersiniz\n<a:dannsss:836860406328197150>  » \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:dannsss:836860406328197150>  » \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`).setImage(`https://cdn.discordapp.com/attachments/838001127747747842/838383735220338749/w4ldobymelik.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti)
  };
exports.config = {
name: "genel",
  aliases: []
}
