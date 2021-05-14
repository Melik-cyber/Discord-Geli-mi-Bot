 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async(client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let eklenti = new Discord.MessageEmbed()
.setAuthor(`W4ldo Koruma Komutları   `, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`❤ W4ldou eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Everyone Engel__`,`<a:dannsss:836860406328197150>  \`${prefix}everyoneengel\`Kullanıcıların Everyone Atmasını Engeller Veya Yetkili Kişilerin (Siz Dışında)`,true)
.addField(`__CapsLock Engel__`,`<a:dannsss:836860406328197150>  \`${prefix}capslockengel\`Kullanıcıların CapsLock ile yazmasını engeller.`,true)
.addField(`__Reklam Taraması__`,`<a:dannsss:836860406328197150>  \`${prefix}reklamtaraması\`Kullanıcıların Oynuyor Veya İsimlerinde Reklam Varmı Diye Kontrol Eder`,true)
.addField(`__Emoji Koruma__`,`<a:dannsss:836860406328197150>  \`${prefix}emojikoruma\`Emojileri Korur 😎`,true)
.addField(`__Bilgilendirme__`,`<a:AyarGif:826398967671422996>  » \`${prefix}davet\`  | W4ldo Sunucunuza Davet Edersiniz\n<a:dannsss:836860406328197150>  » \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:dannsss:836860406328197150>  » \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)  .setImage(`https://cdn.discordapp.com/attachments/838001127747747842/838383735220338749/w4ldobymelik.gif`)
    .setImage(`https://cdn.discordapp.com/attachments/838001127747747842/838383735220338749/w4ldobymelik.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti)
  };
exports.config = {
name: "guard",
  aliases: []
}
