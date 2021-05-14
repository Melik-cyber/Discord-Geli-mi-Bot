const Discord = require('discord.js');
const db = require('quick.db');
exports.run = async (client, message, args) => {
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);

  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('>   **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n`**__Örnek__**:  -SUNUCUNUN ADI-, Sunucumuza Hoşgeldin!! <a:dannsss:836860406328197150> (Buraya istediğin emojiyi koyaiblirsin.)  `')

 message.channel.send('>  **Sayaç Hoşgeldin mesajı**\n`'+mesaj+'`\nOlarak ayarlandı.')
 db.set(`sayacHG_${message.guild.id}`, mesaj)


};
exports.config = {
  name: 'sayac-hg-mesaj',
  aliases: ['sayac-hg-msg']
};
