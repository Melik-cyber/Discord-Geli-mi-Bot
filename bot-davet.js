const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("#ffffff")
.setAuthor(`W4ldo Bot Linkler` , client.user.avatarURL())
.setDescription('**• [W4ldo Botu`u Ekleyin.](https://discord.com/oauth2/authorize?client_id=801022677942665237&scope=bot&permissions=8)**\n\n**• [W4ldo Bot Oy Ver](https://top.gg/bot/801022677942665237)**')
.setFooter(`${message.author.username} tarafından istendi!`)
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };
