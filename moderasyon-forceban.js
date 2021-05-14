const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**Bu komutu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.**");
    if (!args[0]) {
        return message.channel.send(`**Hey Bu Komutu Kullanmak İçin Bir Kullanıcının ID'sini Belirtmen Gerek!**`)
   }
   var sebep = args.slice(1).join(" ");
   var Pirate = args[0]
   var now = new Date()
   if (!sebep) {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(Pirate)) {
                   return message.channel.send(`**Bu Kullanıcı Zaten Yasaklanmış** <a:ReddetmekGif:826398965268217876> `)
               }
               message.guild.ban(Pirate, sebep)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> **adlı kullanıcı banlandı** <a:ModernOnayGif:827470162440617994> `);
                   })
                   .catch(error => {
                       message.channel.send(` Bir Hata Oluştu <a:ReddetmekGif:826398965268217876> `);
                       console.error(' Hata:', error);
                   });
           });
   } else {
       message.guild.fetchBans()
           .then(bans => {
               if (bans.has(Pirate)) {
                   return message.channel.send(`Bu Kullanıcı Zaten Yasaklanmış. <a:ReddetmekGif:826398965268217876> `)
               }
               message.guild.ban(Pirate, sebep)
                   .then(async (member) => {
                       let user;
                       if (member instanceof Discord.GuildMember) {
                           user = member.user;
                       }
                       else if (member instanceof Discord.User) {
                           user = member;
                       }
                       else {
                           user = await client.fetchUser(member);
                       }
                       message.channel.send(`<@!${user.id}> **sunucudan yasaklandı <a:ModernOnayGif:827470162440617994> **`);
                   })
                   .catch(error => {
                       message.channel.send(` Bir Hata Oluştu <a:ReddetmekGif:826398965268217876>`);
                       console.error(' Hata:', error);
                   });
           });
   }

}
exports.config = {
   name: "forceban",
   aliases: ['force-ban']
}
