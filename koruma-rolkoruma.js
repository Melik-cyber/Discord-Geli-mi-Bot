const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:dannsss:836860406328197150>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);

  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || "-";


  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi!")
      .setDescription(
        "**Hatalı kullanım! örnek: ${prefix}rol-koruma aç && kapat** <a:dannsss:836860406328197150> "
      );

    message.channel.send(embed);
    return;
  }
  let rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (rol) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi! <a:dannsss:836860406328197150> ")
        .setDescription("**Görünüşe göre rol koruma zaten aktif!** <a:dannsss:836860406328197150> ");

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("Rol Koruma sistemi!<a:dannsss:836860406328197150> ")
        .setDescription("**Rol koruma başarıyla açıldı!** <a:dannsss:836860406328197150> ");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("BLACK")
      .setTitle("Rol Koruma sistemi! <a:dannsss:836860406328197150> ")
      .setDescription("**Rol Koruma başarıyla kapandı!** <a:dannsss:836860406328197150> ");

    message.channel.send(embed);
  }
};
exports.config = {
  name: "rolkoruma",
  aliases: ["rol-koruma"]
};
