
const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` <a:ReddetmekGif:826398965268217876> Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
var sunucupanel = message.guild.channels.create("═══Sunucu Panel═══", "category").then(sp => {
var toplamkullanıcı = message.guild.channels.create(` ═Toplam Üye • ${message.guild.memberCount}═`, "voice").then(ss => {
ss.setParent(sp)
db.set(`toplamkullanıcı_${message.guild.id}` , ss.id)
let role = message.guild.roles.cache.find(a => a.name === "@Everyone");
ss.createOverwrite(role, {
CONNECT: false,
});
})
var toplamkişi = message.guild.channels.create(` ═Kişi Sayısı • ${message.guild.members.cache.filter(m => !m.user.bot).size}═`, "voice").then(ss => {
ss.setParent(sp)
db.set(`toplamkişi_${message.guild.id}` , ss.id)
let role = message.guild.roles.cache.find(a => a.name === "@Everyone");
ss.createOverwrite(role, {
CONNECT: false,
});
})
var bots = message.guild.channels.create(` ═Bot Sunucu Sayısı • ${client.guilds.cache.size}═`, "voice").then(ss => {
ss.setParent(sp)
db.set(`bots_${message.guild.id}` , ss.id)
let role = message.guild.roles.cache.find(a => a.name === "@Everyone");
ss.createOverwrite(role, {
CONNECT: false,
});
})
var users = message.guild.channels.create(` ═Bot Kullanıcısı • ${client.users.cache.size}═`, "voice").then(ss => {
ss.setParent(sp)
db.set(`users_${message.guild.id}` , ss.id)
let role = message.guild.roles.cache.find(a => a.name === "@Everyone");
ss.createOverwrite(role, {
CONNECT: false,
});
})
var toplambot = message.guild.channels.create(` ═Bot Sayısı • ${message.guild.members.cache.filter(m => m.user.bot).size}═`, "voice").then(ss => {
ss.setParent(sp)
db.set(`toplambot_${message.guild.id}` , ss.id)
let role = message.guild.roles.cache.find(a => a.name === "@Everyone");
ss.createOverwrite(role, {
CONNECT: false,
});
})
var banlı = message.guild.fetchBans().then(bans => message.guild.channels.create(` ═Banlı Kişi • ${bans.size}═`, "voice")).then(ss => {
ss.setParent(sp)
db.set(`banlı_${message.guild.id}` , ss.id)
let role = message.guild.roles.cache.find(a => a.name === "@Everyone");
ss.createOverwrite(role, {
CONNECT: false,
});
})
})
message.channel.send(` <a:ModernOnayGif:827470162440617994> Panel başarılı bir şekilde kuruldu.`);
}

exports.config = {
  name: 'panelkur',
  aliases: []
};
