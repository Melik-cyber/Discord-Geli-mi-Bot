const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let dizzy = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/827466037817376778/831826420287668254/images.png`)
.addField("__**Bot Verileri**__", `<a:pck:837025946266894397> » **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:yildiz:836614361304531024>   **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:excalibur_hashtag:836852197694111754> »   **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<:gifstore_bicak:836985995005919292> » **Bot Sahibi**  <@819995552535674953> \n **melikchankaneki' 🌙 ꪶ ㄨ#1971** \n\n <a:uzi:836941848110432256> » \ **Bot Geliştiricisi**  <@819995552535674953> \n **melikchankaneki' 🌙 ꪶ ㄨ#1971** \n\n <a:yildiz:836614361304531024> »  **Bot Sahibi**  <@819995552535674953> \n **melikchankaneki' 🌙 ꪶ ㄨ#1971** \n`)
.addField("__**Sürümler**__", `<:discordjs:839824939452465152> »   **Discord.js Sürümü** **|**  **v${Discord.version}** \n<:nodejs:839825764366417960> »  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", `<a:KalpGif:827470142513610832> »  **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "<a:mzik:839826041185894430> »  " +client.voice.connections.size + " Sunucu", true)
.setImage(`https://cdn.discordapp.com/attachments/838001127747747842/838383735220338749/w4ldobymelik.gif`)
.setColor("#ffffff")
message.channel.send(dizzy)
}

exports.config = {
name: "botbilgi",
aliases: []
}
