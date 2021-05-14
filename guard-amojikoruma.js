const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**Bu Komutu Kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın!** <a:ReddetmekGif:826398965268217876> ')

      let kanal = message.mentions.channels.first() || args[0]
      if(!kanal) return message.channel.send('**Bir Kanal Etiketlemelisin!** <a:ReddetmekGif:826398965268217876> ')

      db.set(`emotek_${message.guild.id}`, kanal.id)
      message.channel.send(`Emoji Koruma Sistemi Aktif ve Kanal ${kanal} Olarak Seçildi! <a:ModernOnayGif:827470162440617994> `)

      if(args[0] === 'kapat') {

        if(!db.fetch(`emotek_${message.guild.id}`)) return message.channel.send('**Aktif Olmayan Bir Şeyi Kapatamam** <a:ReddetmekGif:826398965268217876> ')

        db.delete(`emotek_${message.guild.id}`)
        message.channel.send('Emoji Koruma Sistemi Kapatıldı ve Veriler Silindi!<a:ReddetmekGif:826398965268217876> && <a:ModernOnayGif:827470162440617994>')
      }
}

exports.config = {
name: "emojikoruma",
aliases: [""]
}
