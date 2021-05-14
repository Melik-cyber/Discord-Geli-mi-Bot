const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {

    const embed = new Discord.MessageEmbed()
    .setTitle(`W4ldo - Komut Sayısı`)
    .setDescription('**\n W4ldo | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("#ffffff")
    .setThumbnail('https://i.ibb.co/s2qGRFx/kod.png')
    .setTimestamp()
    .setFooter("W4ldo | Gelişmiş Türkçe Bot | 2021" , client.user.avatarURL())

    return message.channel.send(embed);

};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};
