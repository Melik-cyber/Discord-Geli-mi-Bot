const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let eklenti = new Discord.MessageEmbed()
.setAuthor(`W4ldou Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`<a:dannsss:836860406328197150>   W4ldoumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Genel Komutlar__`,`<a:YklenmeGif:826398963070271498>  » \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:kitapmor:833583505438015508>  » \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:B_Dikkat:833583503144386601>  » \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:9851_Loading:833583502221377547>  » \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<:gelitirici:833583509573861386>  » \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:delkanl:833354295482908692> » \`${prefix}prefix\` `,true)
.addField(`__Discord Token__`,`<:yakalndn:836122655228035102>    » \`${prefix}token\` `,true)
.addField(`__Panel Kur__`,`<a:acf06f3a6405432e9fba107f86ddbe78:837292532877492254>  » \`${prefix}panelkur\` `,true)
.addField(`__QR Code__`,`<a:UrlGif:826398960590520380>  »\`${prefix}qr\` `,true)
.addField(`__Ekstra__`,`<a:ayyldzuu:833583507280232459>  » \`${prefix}ekstra\` `,true)
.addField(`__Eğlence__`,`<a:pandahnzr:833583510031302666>   » \`${prefix}eğlence\` `,true)
.addField(`__Meme__`,`<:youcord:833583507640156230>   » \`${prefix}meme\` `,true)
.addField(`__Kayıt__`,`<a:ayyldzuu:833583507280232459>   » \`${prefix}kayıtsistemi\` `,true)
.addField(`__Bilgilendirme__`,`<a:AyarGif:826398967671422996>  » \`${prefix}davet\`  | W4ldo Sunucunuza Davet Edersiniz\n<a:dannsss:836860406328197150>  » \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:dannsss:836860406328197150>  » \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`).setImage(`https://cdn.discordapp.com/attachments/838001127747747842/838383735220338749/w4ldobymelik.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti)
  };
exports.config = {
name: "yardım",
  aliases: ["help"]
}
