const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let eklenti = new Discord.MessageEmbed()
.setAuthor(`W4ldou Ekstra Menüsü`, client.user.avatarURL())
.setColor('#ffffff')
.setDescription(`<a:dannsss:836860406328197150>   W4ldoumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Kullanıcı Bilgi__`,`<a:hypesquad:833583505832149068>  \`${prefix}profil\`Kullanıcıların Bilgilerini Gösterir.`,true)
.addField(`__QR Code__`,`<a:hypesquad:833583505832149068>  \`${prefix}qr\`QR Kod Oluşturursunuz.`,true)
.addField(`__Metal Logo__`,`<a:hypesquad:833583505832149068>  \`${prefix}metal\`Metal Logo Oluşturursunuz.`,true)
.addField(`__FX Logo__`,`<a:hypesquad:833583505832149068>  \`${prefix}fx\`Fx Logo oluşturursunuz`,true)
.addField(`__Arrow Logo__`,`<a:hypesquad:833583505832149068>  \`${prefix}arrow\`Arrow Logo Oluşturursunuz`,true)
.addField(`__Duckets Logo__`,`<a:hypesquad:833583505832149068>  \`${prefix}duckets\`Duckets Logo Oluşturursunuz`,true)
.addField(`__Bug Bildir__`,`<a:hypesquad:833583505832149068>  \`${prefix}bugbildir\`Duckets Logo Oluşturursunuz`,true)
.addField(`__Herkse Rol Ver__`,`<a:hypesquad:833583505832149068>  \`${prefix}herkeserolver\`Herkse Belirlediğiniz Rolü Verir.`,true)
.addField(`__Bilgilendirme__`,`<a:AyarGif:826398967671422996>  » \`${prefix}davet\`  | W4ldo Sunucunuza Davet Edersiniz\n<a:dannsss:836860406328197150>  » \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:dannsss:836860406328197150>  » \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`).setImage(`https://cdn.discordapp.com/attachments/838001127747747842/838383735220338749/w4ldobymelik.gif`)
.setThumbnail(client.user.avatarURL)
message.channel.send(eklenti)
 };
exports.config = {
name: "ekstra",
 aliases: []
}
