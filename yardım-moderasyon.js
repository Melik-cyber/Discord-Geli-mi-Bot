
 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let eklenti = new Discord.MessageEmbed()
.setColor('#ffffff')
.setAuthor(`W4ldo Moderasyon Komutları`, client.user.avatarURL())
.setDescription(`<a:uakkalp:833583507854327828>   W4ldo botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Sayaç__`,`<a:uakkalp:833583507854327828>   » \`${prefix}sayaç\` Sunucunuza Sayaç Kurarsınız ve Anlık Bilgi Alırsınız`,true)
.addField(`__Otomatik Rol__`,`<a:uakkalp:833583507854327828>   » \`${prefix}otorol\` Suncunuza Yeni Gelen Üyelere Belirlediğiniz Rölü Verir`,true)
.addField(`__Ban__`,`<a:uakkalp:833583507854327828>   » \`${prefix}ban\` Sunucunuzda Belirtiğiniz Kişiyi Yasaklar`,true)
.addField(`__Kick__`,`<a:uakkalp:833583507854327828>  » \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler`,true)
.addField(`__Ban Kaldırma__`,`<a:uakkalp:833583507854327828>  » \`${prefix}unban\` yazarak Sunucunuzda Belirtiğiniz Kişinin Banını Açar`,true)
.addField(`__Mod Log__`,`<a:uakkalp:833583507854327828>  » \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıt Logununu Tuttar`,true)
.addField(`__Ban Say__`,`<a:uakkalp:833583507854327828>   » \`${prefix}bansay\` Sunucunuzdan Kaç Kişi Ban Yemiş`,true)
.addField(`__Ban Sorgu__`,`<a:uakkalp:833583507854327828>   » \`${prefix}bansorgu\` Kişinin Neden Banlandığını Gösterir`,true)
.addField(`__Küfür Engel__`,`<a:uakkalp:833583507854327828>   » \`${prefix}küfürengel\` Küfür Edilmesini Tamamen Yasaklar.`,true)
.addField(`__Reklam Engel__`,`<a:uakkalp:833583507854327828>  » \`${prefix}reklamengel\` Reklam Yapılmasını Tamamen Yasaklar.`,true)
.addField(`__Reklam Kick__`,`<a:uakkalp:833583507854327828>   » \`${prefix}reklam-kick\` Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler`,true)
.addField(`__Mesaj Temizleme__`,`<a:uakkalp:833583507854327828>   » \`${prefix}sil\` Belirtiğiniz Kadar Mesaj Siler`,true)
.addField(`__Yavaş Mod__`,`<a:uakkalp:833583507854327828>   » \`${prefix}yavaşmod\` Kanala Yazı Süre Limiti Koyar.`,true)
.addField(`__Sa-As__`,`<a:uakkalp:833583507854327828>   » \`${prefix}sa-as\` Sunucuzda Selam Verenlere Selam Der`,true)
.addField(`__Rol Ver__`,`<a:uakkalp:833583507854327828>   » \`${prefix}rolver\` Kişilere Rol Verir.`,true)
.addField(`__Yasaklı Tag__`,`<a:uakkalp:833583507854327828>  » \`${prefix}yasaklı-tag\` Sunucuza Belirli Taga Sahip Üyeler Giremez`,true)
.addField(`__Bilgilendirme__`,`<a:AyarGif:826398967671422996>  » \`${prefix}davet\`  | W4ldo Sunucunuza Davet Edersiniz\n<a:dannsss:836860406328197150>  » \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:dannsss:836860406328197150>  » \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`).setImage(`https://cdn.discordapp.com/attachments/838001127747747842/838383735220338749/w4ldobymelik.gif`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti)
  };
exports.config = {
name: "moderasyon",
  aliases: []
}
