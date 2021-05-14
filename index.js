const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();
const moment = require("moment");
const fynx = require("./ayarlar/bot.json");
const { Player } = require("discord-player");
const db = require('quick.db');
const express = require("express");
const app = express();
const http = require("http");
app.get("/", (request, response) => {
  console.log(
    `feıshf9osıpghsıpghspjrspojgojsrpo melikchankaneki' 🌙#0061`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Melik = "#36393e";
const MelikDogru = "#22BF41";
const MelikHata = "#f30707";


//-------------Bot Eklenince Bir Kanala Mesaj Gönderme Komutu ---------------\\

const emmmmbed = new Discord.MessageEmbed()
.setThumbnail()
.addField(`W4ldo | Teşekkürler`, `**Selamlar, Ben melikchankaneki (W4ldo'nin Geliştiricisi) Öncelikle Botumuzu Eklediğiniz ve Bize Destek Olduğunuz İçin Sizlere Teşekkürlerimi Sunarım**`)
.addField(`W4ldo | Prefix`, `**W4ldo Botun Prefixi(ön eki) = \`${fynx.prefix}\`\n\n Değiştirebilmek için \`${fynx.prefix}prefix\` Yazabilirsiniz.**`)
.addField(`W4ldo | Nasıl Kullanılır?`, `**W4ldo botun tüm özelliklerinden yararlanabilmek için sadece \`${fynx.prefix}yardım\` yazmanız yeterlidir.**`)
.addField(`W4ldo | Linkler`, `**Sohbet Kanalına -davet Yazmanız Yeterlidir**`)
.setTimestamp();


client.on("guildCreate", guild => {

let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
if(channel.type == "text" && defaultChannel == "") {
if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
defaultChannel = channel;
}
}
})

defaultChannel.send(emmmmbed)

});

client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`<:BanNedPng:827470298181271562><:BanNed2Png:827470298093060096> ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`).then(m => m.delete(5000))
     }
       }
     }
   }
  }
});


//----------------------------------------------------------------\\


const player = new Player(client, fynx.youtube_api);
client.player = player;

//----------------------------------------------\\

client.on("message", async message => {
  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
const messageArray = message.content.split(" ");
const cmd = messageArray[0].toLowerCase();
const args = messageArray.slice(1);
if (!message.content.startsWith(prefix)) return;
const commandfile =
client.commands.get(cmd.slice(prefix.length)) ||
client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
if (commandfile) commandfile.run(client, message, args);
});


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();



fs.readdir("./komutlar/", (err, files) => {
const jsfiles = files.filter(f => f.split(".").pop() === "js");
if (jsfiles.length <= 0) {
return console.log("Herhangi bir komut bulunamadı!");
}
jsfiles.forEach(file => {
console.log(`Yüklenen Komut: ${file}`);
const command = require(`./komutlar/${file}`);
client.commands.set(command.config.name, command);
command.config.aliases.forEach(alias => {
client.aliases.set(alias, command.config.name);
});
});
});

//-------------Kendini Sağirlaştirma Komutu ---------------\\

client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfDeaf
) {
newState.setSelfDeaf(true);
}
});
//---------------------------------------------------------\\


client.login(fynx.fynxtoken)
.then(function() {
console.log('Token doğru. Bot aktif ediliyor.')
}, function(err) {
console.log("Tokeniniz yanlış. Bot başlatılamıyor.")
setInterval(function() {
process.exit(0)
}, 20000);
})


client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(fynx.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucu-kur") {
  if (message.guild.channels.cache.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" **Bot Paneli Zaten Ayarlanmış.** <a:ReddetmekGif:826398965268217876> ")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız. <a:ReddetmekGif:826398965268217876> && <a:ModernOnayGif:827470162440617994>`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.channels.create('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])




message.guild.channels.create('「📃」kurallar', 'text', [{
 id: message.guild.id,
 deny: ['SEND_MESSAGES']
}])
.then(channel =>
channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
message.guild.channels.create('「🚪」gelen-giden', 'text', [{
 id: message.guild.id,
 deny: ['SEND_MESSAGES']
}])
.then(channel =>
      channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
      message.guild.channels.create('「✅」sayaç', 'text', [{
       id: message.guild.id,
       deny: ['SEND_MESSAGES']
     }])
.then(channel =>
            channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.channels.create('「💾」log-kanalı', 'text', [{
             id: message.guild.id,
             deny: ['SEND_MESSAGES']
           }])
           .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
           message.guild.channels.create('「📢」duyuru-odası', 'text', [{
             id: message.guild.id,
             deny: ['SEND_MESSAGES']
           }])
           .then(channel =>
            channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

                  })
                  .then((collected) => {
                   message.guild.channels.create('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
                  id: message.guild.id,
                }]);

                 message.guild.channels.create(`「💡」şikayet-ve-öneri`, 'text')
                .then(channel =>
                 channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
                message.guild.channels.create(`「👥」pre-arama-odası`, 'text')
                .then(channel =>
                       channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
                message.guild.channels.create(`「📷」görsel-içerik`, 'text')
                .then(channel =>
                             channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
                message.guild.channels.create(`「🤖」bot-komutları`, 'text')
                .then(channel =>
                             channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
                message.guild.channels.create(`「💬」sohbet`, 'text')
                .then(channel =>
                 channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

                 message.guild.channels.create(`🏆》Kurucu Odası`, "voice")
                 .then(channel =>
                   channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
                 .then(c => {
                   let role = message.guild.roles.cache.find("name", "@everyone");
                   let role2 = message.guild.roles.cache.find("name", "Kurucu");

                   c.createOverwrite(role, {
                       CONNECT: false,
                   });
                   c.createOverwrite(role2, {
                       CONNECT: true,

                   });
               })

               message.guild.channels.create('|▬▬|SES KANALLARI|▬▬|', 'category', [{
                 id: message.guild.id,
               }]);

               message.guild.channels.create(`🏆》Yönetici Odası`, "voice")
               .then(channel =>
                 channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
               .then(c => {
                 let role = message.guild.roles.cache.find("name", "@everyone");
                 let role2 = message.guild.roles.cache.find("name", "Kurucu");
                 let role3 = message.guild.roles.cache.find("name", "Yönetici");
                 c.createOverwrite(role, {
                     CONNECT: false,
                 });
                 c.createOverwrite(role2, {
                     CONNECT: true,
                 });
                 c.createOverwrite(role3, {
                     CONNECT: true,
                 });
             })

             message.guild.channels.create(`💬》Sohbet Odası`, "voice")
             .then(channel =>
               channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
             .then(c => {
               let role = message.guild.roles.cache.find("name", "@everyone");
               c.createOverwrite(role, {
                   CONNECT: true,
               });
           })

           message.guild.channels.create('|▬▬|OYUN ODALARI|▬▬|', 'category', [{
             id: message.guild.id,
           }]);

           message.guild.channels.create(`🎮》LOL`, 'voice')
           .then(channel =>
            channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
            message.guild.channels.create(`🎮》ZULA`, 'voice')
            .then(channel =>
             channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
            message.guild.channels.create(`🎮》COUNTER STRİKE`, 'voice')
           .then(channel =>
            channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
            message.guild.channels.create(`🎮》PUBG`, 'voice')
            .then(channel =>
             channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
             message.guild.channels.create(`🎮》FORTNİTE`, 'voice')
             .then(channel =>
              channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
              message.guild.channels.create(`🎮》MİNECRAFT`, 'voice')
              .then(channel =>
               channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
               message.guild.channels.create(`🎮》ROBLOX`, 'voice')
               .then(channel =>
                channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))
                message.guild.channels.create(`🎮》WOLFTEAM`, 'voice')
                .then(channel =>
                 channel.setParent(message.guild.channels.cache.find(channel => channel.name === "|▬▬|OYUN ODALARI|▬▬|")))



                 message.guild.roles.create({
                   name: 'Kurucu',
                   color: 'RED',
                   permissions: [
                       "ADMINISTRATOR",
               ]
                 })


                 message.guild.roles.create({
                   name: 'Yönetici',
                   color: 'BLUE',
                   permissions: [
                       "MANAGE_GUILD",
                       "MANAGE_ROLES",
                       "MUTE_MEMBERS",
                       "DEAFEN_MEMBERS",
                       "MANAGE_MESSAGES",
                       "MANAGE_NICKNAMES",
                       "KICK_MEMBERS"
               ]
                 })

                 message.guild.roles.create({
                   name: 'Moderatör',
                   color: 'GREEN',
                   permissions: [
                       "MANAGE_GUILD",
                       "MANAGE_ROLES",
                       "MUTE_MEMBERS",
                       "DEAFEN_MEMBERS",
                       "MANAGE_MESSAGES",
                       "MANAGE_NICKNAMES"
               ]
                 })

                 message.guild.roles.create({
                   name: 'V.I.P',
                   color: '00ffff',
                 })

                 message.guild.roles.create({
                   name: 'Üye',
                   color: 'WHITE',
                 })

                 message.guild.roles.create({
                   name: 'Bot',
                   color: 'ORANGE',
                 })

                  message.channel.send("**Gerekli Odalar Kuruldu!** <a:ModernOnayGif:827470162440617994>")

                       })

           }
           });



//------------------Değişen Oynuyor---------------------------\\

var oyun = [
`✨ Yardım almak için | w!yardım`,
`🚀 Yeni Özellikler İçin | w!yardım`,
`🔔 Yenilenen Tasarımı İle`,
`⚡️ Botu eklemek için | w!davet`,
`🌟 Prefix ayarlamak için | w!prefix`,
`❤ Botumu Ekleyen Herkese Teşkkürler | w!davet`
]

client.on("ready", () => {
setInterval(function() {

         var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
         client.user.setActivity(oyun[random], {"type": "WATCHING"});

        }, 2 * 5000);
});








//-----------------Etiket Prefix-----------------\\



client.on('message', async msg => {
  let prefix = await db.fetch(`prefix.${msg.guild.id}`) || fynx.prefix
  if(msg.content == `<@!801022677942665237>`) return msg.channel.send(`<:bota:833583502083358730> **W4ldo | Prefix**\n\n<:bota:833583502083358730> **Sanırım beni etiketlediniz.**\n<:bota:833583502083358730> Buyurun prefix(ön ek)im \`${prefix}\``);
});

client.on('message', async msg => {
  let prefix = await db.fetch(`prefix.${msg.guild.id}`) || fynx.prefix
  if(msg.content == `<@!819995552535674953>`) return msg.channel.send(`lan o sahip etiketleme vallaha kafana vururum yada sana ban atar onun tek tesellisi nitro eğer onu etiketlediysen affetmesi için ona nitro yada boost ver :c  <a:uzix:833354306664136755> benden günah gitti g.o`);
});



//---------------------------------------------------\\


// MOD LOG

client.on('messageDelete', async message   => { // mod-log
      let modlogs = db.get(`log_${message.guild.id}`)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .setTitle("MESAJ SİLİNDİ")
.setDescription(`> <@!${message.author.id}> **adlı kullanıcı tarafından** <#${message.channel.id}> **kanalına gönderilen mesaj silindi!** \n\nSilinen Mesaj: **${message.content}**`)
  .setFooter("W4ldo Bot | Log Sistemi")
  modlogkanal.send(embed);
  })

client.on('guildBanAdd', async message  => {
      let modlogs = db.get(`log_${message.guild.id}`)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
if (!modlogkanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffffff")

    .setDescription(`> **Üye Sunucudan Yasaklandı!** \n<@!${message.user.id}>, ${message.user.tag}`)
        .setThumbnail(message.user.avatarURL)
  .setFooter("W4ldo Bot | Log Sistemi")
  modlogkanal.send(embed);
  })

client.on('channelCreate', async channel  => {
      let modlogs = db.get(`log_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.MessageEmbed()
                    .setColor('#ffffff')
                .setTitle("METİN KANALI OLUŞTURULDU")
                .setDescription(`> ${channel.name} **Adlı Metin Kanalı Oluşturuldu!**`)
                .setFooter(`W4ldo Bot | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.MessageEmbed()
                .setColor('#ffffff')
.setTitle("SES KANALI OLUŞTURULDU")
                .setDescription(`> ${channel.name} **Adlı Ses Kanalı Oluşturuldu!**`)
                .setFooter(`W4ldo Bot | Log Sistemi Kanal ID: ${channel.id}`)

                modlogkanal.send({embed});
            }

    })
client.on('channelDelete', async channel  => {
      let modlogs = db.get(`log_${channel.guild.id}`)
    const modlogkanal = channel.guild.channels.cache.find(kanal => kanal.id === modlogs);
if (!modlogkanal) return;
    if (channel.type === "text") {
                let embed = new Discord.MessageEmbed()
                    .setColor('#ffffff')
                .setDescription(`> ${channel.name} **Adlın Metin Kanalı  Silindi**`)
                .setFooter(`W4ldo Bot | Log Sistemi Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            };
            if (channel.type === "voice") {
                let embed = new Discord.MessageEmbed()
                .setColor('#ffffff')
.setTitle("SES KANALI SİLİNDİ")
                .setDescription(`> ${channel.name} **Adlı Ses Kanalı Silindi**`)
            .setFooter(`W4ldo Bot | Log Sistemi  Kanal ID: ${channel.id}`)
                modlogkanal.send({embed});
            }
    })
client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;
  var user = oldMsg.author;
  if (db.has(`log_${oldMsg.guild.id}`) === false) return;
  var kanal = oldMsg.guild.channels.cache.get(db.fetch(`log_${oldMsg.guild.id}`).replace("<#", "").replace(">", ""))
  if (!kanal) return;
  const embed = new Discord.MessageEmbed()
  .setColor("#ffffff")
  .addField("Kullanıcı", oldMsg.author.tag, true)
  .addField("Eski Mesaj",`  ${oldMsg.content}  `)
  .addField("Yeni Mesaj", `${newMsg.content}`)
  .setThumbnail(oldMsg.author.avatarURL)
  kanal.send(embed);

    })



/////////////////// KÜFÜR ENGEL

client.on("message", async message => {

  const lus = await db.fetch(`kufurE_${message.guild.id}`)
  if (lus) {
      const küfür = ["abaza","abazan","aq","ağzınasıçayım","ahmak","am","amarım","ambiti","OC","0C","ambiti","amcığı","amcığın","amcığını","amcığınızı","amcık","amcıkhoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla","amckta","amcktan","amcuk","amık","amına","amınako","amınakoy","amınakoyarım","amınakoyayım","amınakoyim","amınakoyyim","amınas","amınasikem","amınasokam","amınferyadı","amını","amınıs","amınoglu","amınoğlu","amınoğli","amısına","amısını","amina","aminakoyarim","aminakoyayım","aminakoyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","aminoglu","amiyum","amk","amkafa","amkçocuğu","amlarnzn","amlı","amm","amna","amnda","amndaki","amngtn","amnn","amq","amsız","amsiz","amuna","ana","anaaann","anal","anan","anana","anandan","ananı","ananı","ananın","ananınam","ananınamı","ananındölü","ananınki","ananısikerim","ananısikerim","ananısikeyim","ananısikeyim","ananızın","ananızınam","anani","ananin","ananisikerim","ananisikerim","ananisikeyim","ananisikeyim","anann","ananz","anas","anasını","anasınınam","anasıorospu","anasi","anasinin","angut","anneni","annenin","annesiz","aptal","aq","a.q","a.q.","aq.","atkafası","atmık","avrat","babaannesikaşar","babanı","babanın","babani","babasıpezevenk","bacına","bacını","bacının","bacini","bacn","bacndan","bitch","bok","boka","bokbok","bokça","bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","çük","dallama","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini","dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","eben","ebeni","ebenin","ebeninki","ecdadını","ecdadini","embesil","fahise","fahişe","feriştah","ferre","fuck","fucker","fuckin","fucking","gavad","gavat","geber","geberik","gebermek","gebermiş","gebertir","gerızekalı","gerizekalı","gerizekali","gerzek","gotlalesi","gotlu","gotten","gotundeki","gotunden","gotune","gotunu","gotveren","göt","götdeliği","götherif","götlalesi","götlek","götoğlanı","götoğlanı","götoş","götten","götü","götün","götüne","götünekoyim","götünekoyim","götünü","götveren","götveren","götverir","gtveren","hasiktir","hassikome","hassiktir","hassiktir","hassittir","ibine","ibinenin","ibne","ibnedir","ibneleri","ibnelik","ibnelri","ibneni","ibnenin","ibnesi","ipne","itoğluit","kahpe","kahpenin","kaka","kaltak","kancık","kancik","kappe","kavat","kavatn","kocagöt","koduğmunun","kodumun","kodumunun","koduumun","mal","malafat","malak","manyak","meme","memelerini","oc","ocuu","ocuun","0Ç","o.çocuğu","orosbucocuu","orospu","orospucocugu","orospuçoc","orospuçocuğu","orospuçocuğudur","orospuçocukları","orospudur","orospular","orospunun","orospununevladı","orospuydu","orospuyuz","orrospu","oruspu","oruspuçocuğu","oruspuçocuğu","osbir","öküz","penis","pezevek","pezeven","pezeveng","pezevengi","pezevenginevladı","pezevenk","pezo","pic","pici","picler","piç","piçinoğlu","piçkurusu","piçler","pipi","pisliktir","porno","pussy","puşt","puşttur","s1kerim","s1kerm","s1krm","sakso","salaak","salak","serefsiz","sexs","sıçarım","sıçtığım","sıkecem","sicarsin","sie","sik","sikdi","sikdiğim","sike","sikecem","sikem","siken","sikenin","siker","sikerim","sikerler","sikersin","sikertir","sikertmek","sikesen","sikey","sikeydim","sikeyim","sikeym","siki","sikicem","sikici","sikien","sikienler","sikiiim","sikiiimmm","sikiim","sikiir","sikiirken","sikik","sikil","sikildiini","sikilesice","sikilmi","sikilmie","sikilmis","sikilmiş","sikilsin","sikim","sikimde","sikimden","sikime","sikimi","sikimiin","sikimin","sikimle","sikimsonik","sikimtrak","sikin","sikinde","sikinden","sikine","sikini","sikip","sikis","sikisek","sikisen","sikish","sikismis","sikiş","sikişen","sikişme","sikitiin","sikiyim","sikiym","sikiyorum","sikkim","sikleri","sikleriii","sikli","sikm","sikmek","sikmem","sikmiler","sikmisligim","siksem","sikseydin","sikseyidin","siksin","siksinler","siksiz","siksok","siksz","sikti","siktigimin","siktigiminin","siktiğim","siktiğimin","siktiğiminin","siktii","siktiim","siktiimin","siktiiminin","siktiler","siktim","siktimin","siktiminin","siktir","siktiret","siktirgit","siktirgit","siktirir","siktiririm","siktiriyor","siktirlan","siktirolgit","sittimin","skcem","skecem","skem","sker","skerim","skerm","skeyim","skiim","skik","skim","skime","skmek","sksin","sksn","sksz","sktiimin","sktrr","skyim","slaleni","sokam","sokarım","sokarim","sokarm","sokarmkoduumun","sokayım","sokaym","sokiim","soktuğumunun","sokuk","sokum","sokuş","sokuyum","soxum","sulaleni","sülalenizi","tasak","tassak","taşak","taşşak","s.k","s.keyim","vajina","vajinanı","xikeyim","yaaraaa","yalarım","yalarun","orospi","orospinin","orospının","orospı","yaraaam","yarak","yaraksız","yaraktr","yaram","yaraminbasi","yaramn","yararmorospunun","yarra","yarraaaa","yarraak","yarraam","yarraamı","yarragi","yarragimi","yarragina","yarragindan","yarragm","yarrağ","yarrağım","yarrağımı","yarraimin","yarrak","yarram","yarramin","yarraminbaşı","yarramn","yarran","yarrana","yarrrak","yavak","yavş","yavşak","yavşaktır","yrrak","zigsin","zikeyim","zikiiim","zikiim","zikik","zikim","ziksiin","ağzına","am","mk","amcık","amcıkağız","amcıkları","amık","amın","amına","amınakoyim","amınoğlu","amina","amini","amk","amq","anan","ananı","ananızı","ananizi","aminizi","aminii","avradını","avradini","anasını","b.k","bok","boktan","boşluk","dalyarak","dasak","dassak","daşak","daşşak","daşşaksız","durum","ensest","erotik","fahişe","fuck","g*t","g*tü","g*tün","g*tüne","g.t","gavat","gay","gerızekalıdır","gerizekalı","gerizekalıdır","got","gotunu","gotuze","göt","götü","götüne","götünü","götünüze","götüyle","götveren","götvern","guat","hasiktir","hasiktr","hastir","i.ne","ibne","ibneler","ibneliği","ipne","ipneler","it","iti","itler","kavat","kıç","kıro","kromusunuz","kromusunuz","lezle","lezler","nah","o.ç","oç.","okuz","orosbu","orospu","orospucocugu","orospular","otusbir","otuzbir","öküz","penis","pezevenk","pezevenkler","pezo","pic","piç","piçi","piçinin","piçler","pis","pok","pokunu","porn","porno","puşt","sex","s.tir","sakso","salak","sanane","sanane","sçkik","seks","serefsiz","serefsz","serefszler","sex","sıçmak","sıkerım","sıkm","sıktır","si.çmak","sicmak","sicti","sik","sikenin","siker","sikerim","sikerler","sikert","sikertirler","sikertmek","sikeyim","sikicem","sikiim","sikik","sikim","sikime","sikimi","sikiş","sikişken","sikişmek","sikm","sikmeyi","siksinler","siktiğim","siktimin","siktin","siktirgit","siktir","siktirgit","siktirsin","siqem","skiym","skm","skrm","sktim","sktir","sktirsin","sktr","sktroradan","sktrsn","snane","sokacak","sokarim","sokayım","sülaleni","şerefsiz","şerefsizler","şerefsizlerin","şerefsizlik","tasak","tassak","taşak","taşşak","travesti","yarak","yark","yarrağım","yarrak","yarramın","yarrk","yavşak","yrak","yrk","ebenin","ezik","o.ç.","orospu","öküz","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sperm","bok","aq","a.q.","amk","am","amına","ebenin","ezik","fahişe","gavat","gavurundölü","gerizekalı","göte","götü","götüne","götünü","lan","mal","o.ç.","orospu","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikilmiş","siktir","sperm","taşak","totoş","yarak","yarrak","bok","aq","a.q.","amk","am","ebenin","fahişe","gavat","gerizakalı","gerizekalı","göt","göte","götü","götüne","götsün","piçsin","götsünüz","piçsiniz","götünüze","kıçınız","kıçınıza","götünü","hayvan","ibne","ipne","kahpe","kaltak","lan","mal","o.c","oc","manyak","o.ç.","oç","orospu","öküz","pezevenk","piç","puşt","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikiim","siktim","siki","sikilmiş","siktir","siktir","sperm","şerefsiz","taşak","totoş","yarak","yarrak","yosma","aq","a.q.","amk","amına","amınakoyim","amina","ammına","amna","sikim","sikiym","sikeyim","siktr","kodumun","amık","sikem","sikim","sikiym","s.iktm","s.ikerim","s.ktir","amg","am.k","a.mk","amık","rakı","rak","oruspu","oc","ananın","ananınki","bacının","bacını","babanın","sike","skim","skem","amcık","şerefsiz","piç","piçinoğlu","amcıkhoşafı","amınasokam","amkçocuğu","amınferyadı","amınoglu","piçler","sikerim","sikeyim","siktiğim","siktiğimin","amını","amına","amınoğlu","amk","ipne","ibne","serefsiz","şerefsiz","piç","piçkurusu","götün","götoş","yarrak","amcik","sıçarım","sıçtığım","aq","a.q","a.q.","aq.","a.g.","ag.","amınak","aminak","amınag","aminag","amınıs","amınas","ananı","babanı","anani","babani","bacını","bacini","ecdadını","ecdadini","sikeyim","sulaleni","sülaleni","dallama","dangalak","aptal","salak","gerızekalı","gerizekali","öküz","angut","dalyarak","sikiyim","sikeyim","götüne","götünü","siktirgit","siktirgit","siktirolgit","siktirolgit","siktir","hasiktir","hassiktir","hassiktir","dalyarak","dalyarrak","kancık","kancik","kaltak","orospu","oruspu","fahişe","fahise","pezevenk","pezo","kocagöt","ambiti","götünekoyim","götünekoyim","amınakoyim","aminakoyim","amınak","aminakoyayım","aminakoyayim","amınakoyarım","aminakoyarim","aminakoyarim","ananısikeyim","ananisikeyim","ananısikeyim","ananisikeyim","ananisikerim","ananısikerim","ananisikerim","ananısikerim","orospucocugu","oruspucocu","amk","amq","sikik","götveren","götveren","amınoğlu","aminoglu","amınoglu","gavat","kavat","anneni","annenin","ananın","ananin","dalyarak","sikik","amcık","siktir","piç","pic","sie","yarram","göt","meme","dildo","skcem","skerm","skerim","skecem","orrospu","annesiz","kahpe","kappe","yarak","yaram","dalaksız","yaraksız","amlı","s1kerim","s1kerm","s1krm","sikim","orospuçocukları", "oç"]
    if (küfür.some(word => message.content.toLowerCase().includes(word))) {
      try {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
          message.delete();

          return message.channel.send(`> **Hey ${message.author} Dur! Bu Sunucuda Küfürü Engelliyorum!**`).then(message => message.delete(3000));

        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
client.on("messageUpdate", async (newMessage, oldMessage) => {

  const lus = await db.fetch(`kufurE_${newMessage.guild.id}`)
  if (lus) {
      const küfür = ["abaza","abazan","aq","ağzınasıçayım","ahmak","am","amarım","ambiti","OC","0C","ambiti","amcığı","amcığın","amcığını","amcığınızı","amcık","amcıkhoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla","amckta","amcktan","amcuk","amık","amına","amınako","amınakoy","amınakoyarım","amınakoyayım","amınakoyim","amınakoyyim","amınas","amınasikem","amınasokam","amınferyadı","amını","amınıs","amınoglu","amınoğlu","amınoğli","amısına","amısını","amina","aminakoyarim","aminakoyayım","aminakoyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","aminoglu","amiyum","amk","amkafa","amkçocuğu","amlarnzn","amlı","amm","amna","amnda","amndaki","amngtn","amnn","amq","amsız","amsiz","amuna","ana","anaaann","anal","anan","anana","anandan","ananı","ananı","ananın","ananınam","ananınamı","ananındölü","ananınki","ananısikerim","ananısikerim","ananısikeyim","ananısikeyim","ananızın","ananızınam","anani","ananin","ananisikerim","ananisikerim","ananisikeyim","ananisikeyim","anann","ananz","anas","anasını","anasınınam","anasıorospu","anasi","anasinin","angut","anneni","annenin","annesiz","aptal","aq","a.q","a.q.","aq.","atkafası","atmık","avrat","babaannesikaşar","babanı","babanın","babani","babasıpezevenk","bacına","bacını","bacının","bacini","bacn","bacndan","bitch","bok","boka","bokbok","bokça","bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","çük","dallama","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini","dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","eben","ebeni","ebenin","ebeninki","ecdadını","ecdadini","embesil","fahise","fahişe","feriştah","ferre","fuck","fucker","fuckin","fucking","gavad","gavat","geber","geberik","gebermek","gebermiş","gebertir","gerızekalı","gerizekalı","gerizekali","gerzek","gotlalesi","gotlu","gotten","gotundeki","gotunden","gotune","gotunu","gotveren","göt","götdeliği","götherif","götlalesi","götlek","götoğlanı","götoğlanı","götoş","götten","götü","götün","götüne","götünekoyim","götünekoyim","götünü","götveren","götveren","götverir","gtveren","hasiktir","hassikome","hassiktir","hassiktir","hassittir","ibine","ibinenin","ibne","ibnedir","ibneleri","ibnelik","ibnelri","ibneni","ibnenin","ibnesi","ipne","itoğluit","kahpe","kahpenin","kaka","kaltak","kancık","kancik","kappe","kavat","kavatn","kocagöt","koduğmunun","kodumun","kodumunun","koduumun","mal","malafat","malak","manyak","meme","memelerini","oc","ocuu","ocuun","0Ç","o.çocuğu","orosbucocuu","orospu","orospucocugu","orospuçoc","orospuçocuğu","orospuçocuğudur","orospuçocukları","orospudur","orospular","orospunun","orospununevladı","orospuydu","orospuyuz","orrospu","oruspu","oruspuçocuğu","oruspuçocuğu","osbir","öküz","penis","pezevek","pezeven","pezeveng","pezevengi","pezevenginevladı","pezevenk","pezo","pic","pici","picler","piç","piçinoğlu","piçkurusu","piçler","pipi","pisliktir","porno","pussy","puşt","puşttur","s1kerim","s1kerm","s1krm","sakso","salaak","salak","serefsiz","sexs","sıçarım","sıçtığım","sıkecem","sicarsin","sie","sik","sikdi","sikdiğim","sike","sikecem","sikem","siken","sikenin","siker","sikerim","sikerler","sikersin","sikertir","sikertmek","sikesen","sikey","sikeydim","sikeyim","sikeym","siki","sikicem","sikici","sikien","sikienler","sikiiim","sikiiimmm","sikiim","sikiir","sikiirken","sikik","sikil","sikildiini","sikilesice","sikilmi","sikilmie","sikilmis","sikilmiş","sikilsin","sikim","sikimde","sikimden","sikime","sikimi","sikimiin","sikimin","sikimle","sikimsonik","sikimtrak","sikin","sikinde","sikinden","sikine","sikini","sikip","sikis","sikisek","sikisen","sikish","sikismis","sikiş","sikişen","sikişme","sikitiin","sikiyim","sikiym","sikiyorum","sikkim","sikleri","sikleriii","sikli","sikm","sikmek","sikmem","sikmiler","sikmisligim","siksem","sikseydin","sikseyidin","siksin","siksinler","siksiz","siksok","siksz","sikti","siktigimin","siktigiminin","siktiğim","siktiğimin","siktiğiminin","siktii","siktiim","siktiimin","siktiiminin","siktiler","siktim","siktimin","siktiminin","siktir","siktiret","siktirgit","siktirgit","siktirir","siktiririm","siktiriyor","siktirlan","siktirolgit","sittimin","skcem","skecem","skem","sker","skerim","skerm","skeyim","skiim","skik","skim","skime","skmek","sksin","sksn","sksz","sktiimin","sktrr","skyim","slaleni","sokam","sokarım","sokarim","sokarm","sokarmkoduumun","sokayım","sokaym","sokiim","soktuğumunun","sokuk","sokum","sokuş","sokuyum","soxum","sulaleni","sülalenizi","tasak","tassak","taşak","taşşak","s.k","s.keyim","vajina","vajinanı","xikeyim","yaaraaa","yalarım","yalarun","orospi","orospinin","orospının","orospı","yaraaam","yarak","yaraksız","yaraktr","yaram","yaraminbasi","yaramn","yararmorospunun","yarra","yarraaaa","yarraak","yarraam","yarraamı","yarragi","yarragimi","yarragina","yarragindan","yarragm","yarrağ","yarrağım","yarrağımı","yarraimin","yarrak","yarram","yarramin","yarraminbaşı","yarramn","yarran","yarrana","yarrrak","yavak","yavş","yavşak","yavşaktır","yrrak","zigsin","zikeyim","zikiiim","zikiim","zikik","zikim","ziksiin","ağzına","am","mk","amcık","amcıkağız","amcıkları","amık","amın","amına","amınakoyim","amınoğlu","amina","amini","amk","amq","anan","ananı","ananızı","ananizi","aminizi","aminii","avradını","avradini","anasını","b.k","bok","boktan","boşluk","dalyarak","dasak","dassak","daşak","daşşak","daşşaksız","durum","ensest","erotik","fahişe","fuck","g*t","g*tü","g*tün","g*tüne","g.t","gavat","gay","gerızekalıdır","gerizekalı","gerizekalıdır","got","gotunu","gotuze","göt","götü","götüne","götünü","götünüze","götüyle","götveren","götvern","guat","hasiktir","hasiktr","hastir","i.ne","ibne","ibneler","ibneliği","ipne","ipneler","it","iti","itler","kavat","kıç","kıro","kromusunuz","kromusunuz","lezle","lezler","nah","o.ç","oç.","okuz","orosbu","orospu","orospucocugu","orospular","otusbir","otuzbir","öküz","penis","pezevenk","pezevenkler","pezo","pic","piç","piçi","piçinin","piçler","pis","pok","pokunu","porn","porno","puşt","sex","s.tir","sakso","salak","sanane","sanane","sçkik","seks","serefsiz","serefsz","serefszler","sex","sıçmak","sıkerım","sıkm","sıktır","si.çmak","sicmak","sicti","sik","sikenin","siker","sikerim","sikerler","sikert","sikertirler","sikertmek","sikeyim","sikicem","sikiim","sikik","sikim","sikime","sikimi","sikiş","sikişken","sikişmek","sikm","sikmeyi","siksinler","siktiğim","siktimin","siktin","siktirgit","siktir","siktirgit","siktirsin","siqem","skiym","skm","skrm","sktim","sktir","sktirsin","sktr","sktroradan","sktrsn","snane","sokacak","sokarim","sokayım","sülaleni","şerefsiz","şerefsizler","şerefsizlerin","şerefsizlik","tasak","tassak","taşak","taşşak","travesti","yarak","yark","yarrağım","yarrak","yarramın","yarrk","yavşak","yrak","yrk","ebenin","ezik","o.ç.","orospu","öküz","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sperm","bok","aq","a.q.","amk","am","amına","ebenin","ezik","fahişe","gavat","gavurundölü","gerizekalı","göte","götü","götüne","götünü","lan","mal","o.ç.","orospu","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikilmiş","siktir","sperm","taşak","totoş","yarak","yarrak","bok","aq","a.q.","amk","am","ebenin","fahişe","gavat","gerizakalı","gerizekalı","göt","göte","götü","götüne","götsün","piçsin","götsünüz","piçsiniz","götünüze","kıçınız","kıçınıza","götünü","hayvan","ibne","ipne","kahpe","kaltak","lan","mal","o.c","oc","manyak","o.ç.","oç","orospu","öküz","pezevenk","piç","puşt","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikiim","siktim","siki","sikilmiş","siktir","siktir","sperm","şerefsiz","taşak","totoş","yarak","yarrak","yosma","aq","a.q.","amk","amına","amınakoyim","amina","ammına","amna","sikim","sikiym","sikeyim","siktr","kodumun","amık","sikem","sikim","sikiym","s.iktm","s.ikerim","s.ktir","amg","am.k","a.mk","amık","rakı","rak","oruspu","oc","ananın","ananınki","bacının","bacını","babanın","sike","skim","skem","amcık","şerefsiz","piç","piçinoğlu","amcıkhoşafı","amınasokam","amkçocuğu","amınferyadı","amınoglu","piçler","sikerim","sikeyim","siktiğim","siktiğimin","amını","amına","amınoğlu","amk","ipne","ibne","serefsiz","şerefsiz","piç","piçkurusu","götün","götoş","yarrak","amcik","sıçarım","sıçtığım","aq","a.q","a.q.","aq.","a.g.","ag.","amınak","aminak","amınag","aminag","amınıs","amınas","ananı","babanı","anani","babani","bacını","bacini","ecdadını","ecdadini","sikeyim","sulaleni","sülaleni","dallama","dangalak","aptal","salak","gerızekalı","gerizekali","öküz","angut","dalyarak","sikiyim","sikeyim","götüne","götünü","siktirgit","siktirgit","siktirolgit","siktirolgit","siktir","hasiktir","hassiktir","hassiktir","dalyarak","dalyarrak","kancık","kancik","kaltak","orospu","oruspu","fahişe","fahise","pezevenk","pezo","kocagöt","ambiti","götünekoyim","götünekoyim","amınakoyim","aminakoyim","amınak","aminakoyayım","aminakoyayim","amınakoyarım","aminakoyarim","aminakoyarim","ananısikeyim","ananisikeyim","ananısikeyim","ananisikeyim","ananisikerim","ananısikerim","ananisikerim","ananısikerim","orospucocugu","oruspucocu","amk","amq","sikik","götveren","götveren","amınoğlu","aminoglu","amınoglu","gavat","kavat","anneni","annenin","ananın","ananin","dalyarak","sikik","amcık","siktir","piç","pic","sie","yarram","göt","meme","dildo","skcem","skerm","skerim","skecem","orrospu","annesiz","kahpe","kappe","yarak","yaram","dalaksız","yaraksız","amlı","s1kerim","s1kerm","s1krm","sikim","orospuçocukları", "oç"]
    if (küfür.some(word => newMessage.content.toLowerCase().includes(word))) {
      try {
        if (!newMessage.member.permissions.has('BAN_MEMBERS')) {
         newMessage.delete();

          return newMessage.channel.send(`:x: **Hey ${newMessage.author} Dur! Bu Sunucuda Küfürü Engelliyorum!**`).then(message => message.delete(3000));

        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});


///////// KÜFÜR EGEL




//////////////////REKLAM ENGEL

client.on("message", async message => {

  const lus = await db.fetch(`reklamengel_${message.guild.id}`)
  if (lus) {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glitch.me/", ".rf.gd", ".biz", "www.", "www", ".gg", ".tk", ".tr.ht", ".ml", ".ga", ".cf", ".cq"];
    if (reklamengel.some(word => message.content.toLowerCase().includes(word))) {
      try {
        if (!message.member.permissions.has('BAN_MEMBERS')) {
          message.delete();

          return message.channel.send(`> **Hey ${message.author} Dur! Bu Sunucuda Reklamı Engelliyorum!**`).then(message => message.delete(3000));

        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
client.on("messageUpdate", async (newMessage, oldMessage) => {

  const lus = await db.fetch(`reklamengel_${newMessage.guild.id}`)
  if (lus) {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glitch.me/", ".rf.gd", ".biz", "www.", "www", ".gg", ".tk", ".tr.ht", ".ml", ".ga", ".cf", ".cq"];
    if (reklamengel.some(word => newMessage.content.toLowerCase().includes(word))) {
      try {
        if (!newMessage.member.permissions.has('BAN_MEMBERS')) {
         newMessage.delete();

          return newMessage.channel.send(`> **Hey ${newMessage.author} Dur! Bu Sunucuda Reklamı Engelliyorum!**`).then(message => message.delete(3000));

        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});



// SA-AS SİSTEMİ

client.on("message", async msg => {


  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea' || msg.content.toLowerCase() == 's.a.' || msg.content.toLowerCase() == 'selam' || msg.content.toLowerCase() == 'slm') {
          try {

                  return msg.reply('**> Aleyküm Selam, Hoşgeldin.** ')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {

    }
    if (!i) return;

    });

// SAYAÇ SİSTEMİ

client.on("guildMemberAdd", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!kanal) return;
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
    const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacHG_${member.guild.id}`)
    ///....

  ///....
  if (!mesaj) {
    return client.channels.cache.get(kanal).send("> `"+ member.user.username + "`**Adlı Kullanıcı Aramıza Katıldı!** `" + sayaç + "` **Kişi Olmamıza** `" + sonuç + "` **Kişi Kaldı.** `" + member.guild.memberCount + "` **Kişiyiz!**");
  }

  if (member.guild.memberCount == sayaç) {
    return client.channels.get(kanal).send(`> **Sayaç Sıfırlandı!** \`${member.guild.memberCount}\` **Kişiyiz!**`)
    await db.delete(`sayacK_${member.guild.id}`)
    await db.delete(`sayacS_${member.guild.id}`)
    await db.delete(`sayacHG_${member.guild.id}`)
    await db.delete(`sayacBB_${member.guild.id}`)
  }
  if (mesaj) {
    const mesaj31 = mesaj.replace("-uyetag-", `${member.user.tag}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.size}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)
    return client.channels.cache.get(kanal).send(mesaj31);

  }
});

client.on("guildMemberRemove", async member => {

  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacBB_${member.guild.id}`)
  if (!kanal) return;
  if (!sayaç) return;
    ///....

  if (!mesaj) {
    return client.channels.cache.get(kanal).send("> `" + member.user.username + "` **Adlı Kullanıcı Aramızdan Ayrıldı.**`" + sayaç + "` **Kişi Olmamıza** `" + sonuç + "` **Kişi Kaldı.** `" + member.guild.memberCount + "` **Kişiyiz!**");
      }

  if (mesaj) {
    const mesaj31 = mesaj.replace("-uye-", `${member.user.tag}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.cache.size}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)
    return client.channels.cache.get(kanal).send(mesaj31);
  }
});

//KAYIT SİSTEMİ

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`kayitKanal_${member.guild.id}`);
    let mesaj = db.fetch(`kayitGM_${member.guild.id}`);
  if (!kanal) return;

  if (!mesaj) {
    client.channels.cache.get(kanal).send("> **Selam!** `" + member.user.username + "`**!kayıtol yazarak kayıt olabilirsin!**");

  }

  if (mesaj) {
    var mesajs = mesaj.replace("-uye-", `${member.user.username}`).replace("-uyetag-", `${member.user.tag}`);
    return client.channels.cache.get(kanal).send(mesajs);
     }
});

/// OTOROL SİSTEMİ

client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`otoRK_${member.guild.id}`);
  let rol = await db.fetch(`otoRL_${member.guild.id}`);
  let mesaj = db.fetch(`otoRM_${member.guild.id}`);
  if (!rol) return;

  if (!mesaj) {
    client.channels.cache.get(kanal).send("> `" + member.user.username + "`** Hoş Geldin! Otomatik Rolün Verildi Seninle Beraber** `" + member.guild.memberCount + "` **Kişiyiz!**");
    return member.roles.add(rol);
  }

  if (mesaj) {
    var mesajs = mesaj.replace("-uye-", `${member.user}`).replace("-uyetag-", `${member.user.tag}`).replace("-rol-", `${member.guild.roles.cache.get(rol).name}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.cache.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.cache.size}`);
    member.roles.add(rol);
    return client.channels.cache.get(kanal).send(mesajs);
     }
});

client.on('message', async msg => {
  let ozelkomut = await db.fetch(`sunucuKomut_${msg.guild.id}`);
  let ozelkomutYazi;
  if (ozelkomut == null) ozelkomutYazi = 'Burayı silme yoksa hatalı olur'
  else ozelkomutYazi = ''+ ozelkomut +''
  if (msg.content.toLowerCase() === ozelkomutYazi) {
      let mesaj = await db.fetch(`sunucuMesaj_${msg.guild.id}`);
  let mesajYazi;
  if (mesaj == null) mesajYazi = 'Burayı silme yoksa hatalı olur'
  else mesajYazi = ''+ mesaj +''
    msg.channel.send(mesajYazi)
  }
});


/// YASAKLI TAG

client.on('guildMemberAdd', async member => {
let guild = member.guild;
let user = guild.members.cache.get(member.id);

const tag = await db.fetch(`banned-tag.${guild.id}`)
const sayı = await db.fetch(`atıldın.${guild.id}.${user.id}`)
if(user.user.username.includes(tag)) {

if(sayı === null) {
await db.add(`atıldın.${guild.id}.${user.id}`, 1)
user.send(new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(guild.name, guild.iconURL)
.setDescription(`Sunucumuzun yasaklı tagında bulunduğunuz için atıldınız, tekrar giriş yapmayı denerseniz **yasaklanacaksınız**!`))
await user.kick() }

if(sayı === 1) {
await db.delete(`atıldın.${guild.id}.${user.id}`)
user.send(new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(guild.name, guild.iconURL)
.setDescription(`Sunucumuzun yasaklı tagında bulunduğunuz için atılmıştınız, tekrar giriş yapmayı denediğiniz için **${guild.name}** sunucusundan kalıcı olarak **yasaklandınız**!`))
await user.ban() } }

})

//OTO CEVAP//
//1
client.on("message", message => {
    if(message.content.toLowerCase() == "bot")
    return message.channel.send(`**meybaa ben w4ldocuk senle aykadaş olalımmı? <:cry:822481201309810688> (bu ayda hiç aykadaşım yok <:cry:822481201309810688> )**`)
});
//2
client.on("message", message => {
    if(message.content.toLowerCase() == "waldo")
    return message.channel.send(`**efendim bebeğim sana itaat etmeye hazırım ❤️**`)
});
//3
client.on("message", message => {
    if(message.content.toLowerCase() == "xd")
    return message.channel.send(`eheheheh`)
});
//5
client.on("message", message => {
    if(message.content.toLowerCase() == "sen")
    return message.channel.send(`sen ne dedin sen mi kim yoksa anladım sen misin o?`)
});
//6
client.on("message", message => {
    if(message.content.toLowerCase() == "naber")
    return message.channel.send(`iyiyim senden?`)
});
//7
const iyi = ["iyi,senden"]
client.on("message", message => {
    if(message.content.toLowerCase() == "iyi")
    return message.channel.send(`harikaaa ❤❤`)
});
//8
client.on("message", message => {
    if(message.content.toLowerCase() == "sonra")
    return message.channel.send(`ne oldu sonra anlat hedi dinliyoz şurda ehehhe`)
});
//9
client.on("message", message => {
    if(message.content.toLowerCase() == "link")
    return message.channel.send(`**w!davet** bu özel komutu kullanmalısın yoksa sunucunu süper haçkır sahibim heçkırlar`)
});
//10
client.on("message", message => {
    if(message.content.toLowerCase() == "kalp")
    return message.channel.send(`kalp adama dm at ==> melikchankaneki' 🌙 ꪶ ㄨ#1971 :heart:`)
});
//11
client.on("message", message => {
    if(message.content.toLowerCase() == "hack")
    return message.channel.send(`ben polisim discord polisi seni içerim alıyorum (!)`)
});
//12
client.on("message", message => {
    if(message.content.toLowerCase() == "st")
    return message.channel.send(`Selam Tarık`)
});
//13
client.on("message", message => {
    if(message.content.toLowerCase() == "bruh")
    return message.channel.send(`https://www.youtube.com/watch?v=IAfgo8nncpU`)
});
//15
client.on("message", message => {
    if(message.content.toLowerCase() == ".")
    return message.channel.send(`hayırdır sen kimse **.** koyuyon burda son noktayı koyan benim ulann`)
});
//TAKIM//
client.on("message", message => {
    if(message.content.toLowerCase() == "galatasaray")
    return message.channel.send(`ohhh helal sahibim takımıııı :heart:`)
});
//fenerbahçe//
client.on("message", message => {
    if(message.content.toLowerCase() == "fenerbahçe")
    return message.channel.send(`eh işte güzel bir takım 😁`)
});
//beşiktaş
client.on("message", message => {
    if(message.content.toLowerCase() == "beşiktaş")
    return message.channel.send(`🤢->🤮`)
});
//maç
client.on("message", message => {
    if(message.content.toLowerCase() == "maç")
    return message.channel.send(`kawga mı yoksa spor maçımı kawgaysa hazırım ben 👊👊`)
});
//TÜREME//
client.on("message", message => {
    if(message.content.toLowerCase() == "üye")
    return message.channel.send(`hayırdır olm üye kimmiş üye ehehhe üye en yüze discord kullanıcısıdır onlara iyi davran yoksa dc de hiçbir şey yapamazsın ;-;`)
});
//kayıtsız//
client.on("message", message => {
    if(message.content.toLowerCase() == "kayıtsız")
    return message.channel.send(`kayıtsız sa kayıt et zeka küpü yeminlen ;-;`)
});
//pc//
client.on("message", message => {
    if(message.content.toLowerCase() == "pc")
    return message.channel.send(`bilgisayarmı yoksa yanlış anlamaz umarım kimse xd`)
});
//hosting//
client.on("message", message => {
    if(message.content.toLowerCase() == "hosting")
    return message.channel.send(`oney be?`)
});
//server//
client.on("message", message => {
    if(message.content.toLowerCase() == "sw")
    return message.channel.send(`lütfen inglizceyi katletme onun adı **__server__**`)
});
//bb/
client.on("message", message => {
    if(message.content.toLowerCase() == "bb")
    return message.channel.send(`kabi daha gelme sakın görmücem snei buralarda`)
});
//komik//
client.on("message", message => {
    if(message.content.toLowerCase() == "komik")
    return message.channel.send(`xd`)
});
//saat//
client.on("message", message => {
    if(message.content.toLowerCase() == "saat")
    return message.channel.send(`kawga mı yoksa spor maçımı kawgaysa hazırım ben 👊👊`)
});
//organ//
client.on("message", message => {
    if(message.content.toLowerCase() == "organ")
    return message.channel.send(`organ mafyası senii`)
});
//---------------argo cevap--------------------//
client.on("message", message => {
    if(message.content.toLowerCase() == "salak")
    return message.channel.send(`hayır yakışmadı ;-;`)
});
    client.on("message", message => {
        if(message.content.toLowerCase() == "mal")
        return message.channel.send(`Aaaaa lütfen yakışmadı hiç deme öyle`)
});
        client.on("message", message => {
            if(message.content.toLowerCase() == "özürlü")
            return message.channel.send(`adını yazma`)
});
            client.on("message", message => {
                if(message.content.toLowerCase() == "spastik")
                return message.channel.send(`https://www.youtube.com/watch?v=oXTZXtOki0s`)
});
                client.on("message", message => {
                    if(message.content.toLowerCase() == "osuruk")
                    return message.channel.send(`zart zart zart`)
});
                    client.on("message", message => {
                        if(message.content.toLowerCase() == "sıç")
                        return message.channel.send(`lütfen o iş tuvallette yapılır aa`)
});
                        client.on("message", message => {
                            if(message.content.toLowerCase() == "vur")
                            return message.channel.send(`aaaaaaaaaa anne vurdu bana seni anneme sölücem 😢`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "varya")
    return message.channel.send(`ee nabıcan bakim sen ağla eheheh`)
});
