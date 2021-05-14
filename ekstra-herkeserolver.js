const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  var bot = "bot id nizi buraya yazın";
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return message.channel.send(
      "<a:ReddetmekGif:826398965268217876>  **Bu Komutu Kullanabilmek İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın!**"
    );
  let rol =
    message.mentions.roles.first() ||
    message.guild.roles.cache.get(args[0]) ||
    message.guild.roles.cache.find(rol => rol.name === args[0]);
  if (!rol)
    return message.channel.sendd(
      "<a:ReddetmekGif:826398965268217876>  **Herkese Rol Verebilmem İçin Bir Rol Etiketlemelisin!**"
    );

  const embed = new Discord.MessageEmbed()
    .setDescription(`<a:ModernOnayGif:827470162440617994>  **Herkese ${rol} Adlı Rol Verildi!**`)
    .setColor(rol.hexColor);

  message.guild.members.cache.forEach(u => {
    u.roles.add(rol);
  });
  message.channel.send(embed);
};
exports.config = {
  name: 'herkeserolver',
  aliases: []
};
