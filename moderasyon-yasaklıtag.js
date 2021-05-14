const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:Mg1:833583503940649000><a:Mg2:833583510659792926><a:Mg3:833583508534460487>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

if(!args[0]) return message.channel.send(`Yasaklı tag sistemini kullanabilmek için: ${prefix}**yasaklı-tag ekle tag** yazmalısın.`)
let argümanlar = ['ekle', 'çıkar']
if(!argümanlar.includes(args[0])) return message.channel.send(`Sadece ${prefix}**yasaklı-tag ekle**/**çıkar** kullanabilirsin. <a:Mg1:833583503940649000><a:Mg2:833583510659792926><a:Mg3:833583508534460487>`)

if(args[0] === 'ekle') {

const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(tag) return message.channel.send(`Sadece bir tag ekleyebilirsin.<a:Mg1:833583503940649000><a:Mg2:833583510659792926><a:Mg3:833583508534460487>`)
if(!args[1]) return message.channel.send(`Bir tag yazmalısın.<a:Mg1:833583503940649000><a:Mg2:833583510659792926><a:Mg3:833583508534460487>`)

await db.set(`banned-tag.${message.guild.id}`, args[1])

message.channel.send(new Discord.RichEmbed()
.setDescription(`**${args[1]}** tagı yasaklı olarak listeye eklendi. <a:Mg1:833583503940649000><a:Mg2:833583510659792926><a:Mg3:833583508534460487>`)
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL))
}


if(args[0] === 'çıkar') {

const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(!tag) return message.channel.send(`Hiç tag eklememişsin. <a:Mg1:833583503940649000><a:Mg2:833583510659792926><a:Mg3:833583508534460487>`)
if(!args[1]) return message.channel.send(`Bir tag yazmalısın. <a:Mg1:833583503940649000><a:Mg2:833583510659792926><a:Mg3:833583508534460487>`)

await db.delete(`banned-tag.${message.guild.id}`)

message.channel.send(new Discord.RichEmbed()
.setDescription(`**${args[1]}** tagı artık yasaklı değil.. <a:Mg1:833583503940649000><a:Mg2:833583510659792926><a:Mg3:833583508534460487>`)
.setColor('GREEN')
.setAuthor(message.author.username, message.author.avatarURL))
}


};
exports.config = {
  name: 'yasaklı-tag',
  aliases: []
};
