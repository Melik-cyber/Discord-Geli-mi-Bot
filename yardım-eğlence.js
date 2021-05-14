const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let eklenti = new Discord.MessageEmbed()
.setAuthor(`W4ldou Eğlence Menüsü`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`<a:dannsss:836860406328197150>   W4ldo'muzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Fake Mesaj__`,`<a:YklenmeGif:826398963070271498>  \`${prefix}fakemesaj\``,true)
.addField(`__Bilgilendirme__`,`<a:AyarGif:826398967671422996>  » \`${prefix}davet\`  | W4ldo Sunucunuza Davet Edersiniz\n<a:dannsss:836860406328197150>  » \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:dannsss:836860406328197150>  » \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`).setImage(`https://cdn.discordapp.com/attachments/838001127747747842/838383735220338749/w4ldobymelik.gif`)
.setThumbnail(client.user.avatarURL)
message.channel.send(eklenti)
 };
exports.config = {
name: "eğlence",
 aliases: []
}
