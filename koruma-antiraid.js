const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:dannsss:836860406328197150>   **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("Anti-raid zaten açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply("Anti-raid sistemi başarıyla açıldı <a:dannsss:836860406328197150> ");
  }

  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        "Anti-raid açılmamış. Açmak için **-anti-raid aç** <a:dannsss:836860406328197150> "
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç <a:dannsss:836860406328197150> ");
    message.reply("Anti-raid sistemi başarıyla kapatıldı <a:dannsss:836860406328197150> ");
  }
  if (!args[0])
    return message.reply(
      "Lütfen geçerli işlem girin. Örnek: **anti-raid aç/kapat** <a:dannsss:836860406328197150> "
    );
};
exports.config = {
  name: "anti-raid",
  aliases: []
};
