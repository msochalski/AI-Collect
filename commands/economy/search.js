const db = require('quick.db');
const Discord = require('discord.js');
const talkedRecently = new Set();


module.exports = {
    name: "search",
    aliases: ["find", "s"],
    category: "economy",
    description: "users balance",
    run: async (client, message, args) => {

        function between(math, min, max) {
            return math >= min && math <= max;
          }



     const user = message.author
     if (talkedRecently.has(message.author.id)) {
        message.channel.send("Wait 2 minutes before typing this again. - " + `${message.author}`);
}   else {

       // the user can type the command ... your command code goes here :)
//--------------Aqua--------------
let aqua = await db.fetch(`aqua_${user.id}`) //1000
//--------------Rare Aqua--------------
    let raqua = await db.fetch(`raqua_${user.id}`)// 100
//--------------Shiny Aqua--------------
    let saqua = await db.fetch(`saqua_${user.id}`)// 5
//--------------Megumin--------------
    let megumin = await db.fetch(`megumin_${user.id}`)// 1000
//--------------Rare Megumin--------------
    let rmegumin = await db.fetch(`rmegumin_${user.id}`)// 100
//--------------Shiny Megumin--------------
    let smegumin = await db.fetch(`smegumin_${user.id}`)// 1
//--------------Darkness--------------
    let darkness = await db.fetch(`darkness_${user.id}`)// 1000
//--------------Rare Darkness--------------
    let rdarkness = await db.fetch(`rdarkness_${user.id}`)// 100
//--------------Shiny Darkness--------------
    let sdarkness = await db.fetch(`sdarkness_${user.id}`)// 5
//--------------Kazuma--------------
    let kazuma = await db.fetch(`kazuma_${user.id}`)// 1000
//--------------Rare Kazuma--------------
    let rkazuma = await db.fetch(`rkazuma_${user.id}`)// 100
//--------------Shiny Kazuma--------------
    let skazuma = await db.fetch(`skazuma_${user.id}`)// 5
//--------------YunYun--------------
    let yunyun = await db.fetch(`yunyun_${user.id}`)// 1000
//--------------Rare YunYun--------------
    let ryunyun = await db.fetch(`ryunyun_${user.id}`)// 100
//--------------YunYun--------------
    let syunyun = await db.fetch(`syunyun_${user.id}`)//5
//--------------Chomusuke--------------
    let chomusuke = await db.fetch(`chomusuke_${user.id}`)// 1000
//--------------Rare Chomusuke--------------
    let rchomusuke = await db.fetch(`crhomusuke_${user.id}`)// 100
//--------------Shiny Chomusuke--------------
    let schomusuke = await db.fetch(`srhomusuke_${user.id}`)// 5
//--------------Kirito--------------
    let kirito = await db.fetch(`kirito_${user.id}`)// 1000
//--------------Rare Kirito--------------
    let rkirito = await db.fetch(`rkirito_${user.id}`)// 100
//--------------Shiny Kirito--------------
    let skirito = await db.fetch(`skirito_${user.id}`)// 5
//--------------Asuna--------------
    let asuna = await db.fetch(`asuna_${user.id}`)// 1000
//--------------Rare Asuna--------------
    let rasuna = await db.fetch(`rasuna_${user.id}`)// 100
//--------------Shiny Asuna--------------
    let sasuna = await db.fetch(`sasuna_${user.id}`)// 5
//--------------Klein--------------
    let klein = await db.fetch(`klein_${user.id}`)// 1000
//--------------Rare Klein--------------
    let rklein = await db.fetch(`rklein_${user.id}`)// 100
//--------------Shiny Klein--------------
    let sklein = await db.fetch(`sklein_${user.id}`)// 5
//--------------Shiny Kaguya--------------
let skaguya = await db.fetch(`skaguya_${user.id}`)// 5
//--------------Rare Kaguya--------------
let rkaguya = await db.fetch(`rkaguya_${user.id}`)// 100
//--------------Kaguya--------------
let kaguya = await db.fetch(`kaguya_${user.id}`)// 1000


    let Chance = Math.floor(Math.random() * 19882) + 0;


    if (Chance > 11046){
        let embed = new Discord.MessageEmbed()
        .setDescription("Your waifu/husbando went hunting")
        .addField("They found", "Nothing ;-;")
        .setColor("00020")
        message.channel.send(embed)
        return;
    }

//---Megumin---
    if (between(Chance, 0, 0)) {
        var card = 'Shiny Megumin'
        var acard ='smegumin'
        var image = 'https://media1.tenor.com/images/a5200ff8939402e4e2bbda3a8107d2b1/tenor.gif?itemid=7559840'
    }

    if (between(Chance, 1, 100)) {
        var card = 'Rare Megumin';
        var acard = 'rmegumin'
        var image = 'https://giffiles.alphacoders.com/353/35302.gif'
    }

    if (between(Chance, 101, 1000)) {
        var card = 'Megumin';
        var acard = 'megumin'
        var image = 'https://vignette.wikia.nocookie.net/p__/images/c/cb/Bg1.jpg/revision/latest/top-crop/width/300/height/300?cb=20180208015150&path-prefix=protagonist'
    }
//---Aqua---
    if (between(Chance, 1001, 1005)) {
        var card = 'Shiny Aqua';
        var acard = 'saqua'
        var image = 'https://66.media.tumblr.com/68bb2569443f6a3fc24fa8834fafa3ec/b19587c5206e190f-eb/s500x750/058941838e532e0b330a2a7af1949875398a9b81.gif'
    }

    if (between(Chance, 1006, 1111)) {
        var card = 'Rare Aqua';
        var acard = 'raqua'
        var image = 'https://i.pinimg.com/originals/b0/b5/a8/b0b5a85d051b1caf6ad5cf255f637a53.gif'
    }

    if (between(Chance, 1112, 2112)) {
        var card = 'Aqua';
        var acard = 'aqua'
        var image = 'https://i.pinimg.com/236x/42/3c/8e/423c8e21de42d1f3c1814d55af9aa182--konosuba-aqua-anime.jpg'
    }
//---Darkness---
    if (between(Chance, 2113, 2118)) {
        var card = 'Shiny Darkness';
        var acard = 'sdarkness'
        var image = 'https://pa1.narvii.com/6662/45f4156f1513b95ab6ea51f06616c8eba2076704_hq.gif'
    }

    if (between(Chance, 2119, 2219)) {
        var card = 'Rare Darkness';
        var acard = 'rdarkness'
        var image = 'https://i.pinimg.com/originals/97/70/40/9770409f25e4f3e1f860dd28d342be10.gif'
    }

    if (between(Chance, 2220, 3220)) {
        var card = 'Darkness';
        var acard = 'darkness'
        var image = 'https://66.media.tumblr.com/4bd8c527be2fa04f48047d78d207aee7/tumblr_pkx23vbl6J1vfst3g_1280.jpg'
    }
//---Kazuma---
    if (between(Chance, 3221, 3226)) {
        var card = 'Shiny Kazuma';
        var acard = 'skazuma'
        var image = 'https://media.giphy.com/media/LZmMH7lmHeNFe/200.gif'
    }

    if (between(Chance, 3227, 3327)) {
        var card = 'Rare Kazuma';
        var acard = 'rkazuma'
        var image = 'https://pa1.narvii.com/7129/9509575c56bc6d70b26baea5a44a95900cb38257r1-300-249_00.gif'
    }

    if (between(Chance, 3328, 4328)) {
        var card = 'Kazuma';
        var acard = 'kazuma'
        var image = 'https://cdn.anisearch.com/images/character/cover/full/55/55426.jpg'
    }

//---YunYun---
    if (between(Chance, 4329, 4334)) {
        var card = 'Shiny YunYun';
        var acard = 'syunyun'
        var image = 'https://66.media.tumblr.com/0e36276d1a9e27020acc09ffe58d2585/tumblr_ok0hlld7rH1v6bs4yo6_250.gif'
    }

    if (between(Chance, 4335, 4435)) {
        var card = 'Rare YunYun';
        var acard = 'ryunyun'
        var image = 'https://media1.tenor.com/images/06ca5c51338a00349f52e0bf53a03b35/tenor.gif?itemid=7587347'
    }

    if (between(Chance, 4436, 5436)) {
        var card = 'YunYun';
        var acard = 'yunyun'
        var image = 'https://www.anime-evo.net/wp-content/uploads/2017/01/Konosuba2_02_1-700x385.jpg'
    }

//---Chomusuke---
    if (between(Chance, 5437, 5442)) {
        var card = 'Shiny Chomusuke';
        var acard = 'schomusuke'
        var image = 'https://68.media.tumblr.com/9428bead7dc6b2abb95b3faa631384ca/tumblr_otu9i8FETy1tr842yo1_540.gif'
    }

    if (between(Chance, 5443, 5543)) {
        var card = 'Rare Chomusuke';
        var acard = 'rchomusuke'
        var image = 'https://media1.tenor.com/images/38d4692cee605f3dc85a80150fd5c9a5/tenor.gif?itemid=7617612'
    }

    if (between(Chance, 5544, 6544)) {
        var card = 'Chomusuke';
        var acard = 'chomusuke'
        var image = 'https://pm1.narvii.com/6792/cec8aa2156d6a177d9e2e7316688d7d2a1d101b8v2_00.jpg'
    }

//---Kirito---
    if (between(Chance, 6545, 6550)) {
        var card = 'Shiny Kirito';
        var acard = 'skirito'
        var image = 'https://i.imgur.com/geUqsfL.gif'
    }

    if (between(Chance, 6551, 6651)) {
        var card = 'Rare Kirito';
        var acard = 'rkirito'
        var image = 'https://media1.tenor.com/images/635ff7de4d9228e140153bff49b6dd4d/tenor.gif?itemid=11034208'
    }

    if (between(Chance, 6652, 7652)) {
        var card = 'Kirito';
        var acard = 'kirito'
        var image = 'https://www.anime-planet.com/images/characters/kirito-30045.jpg'
    }

//---Asuna---
    if (between(Chance, 7653, 7658)) {
        var card = 'Shiny Asuna';
        var acard = 'sasuna'
        var image = 'https://i.imgur.com/VTuHrb8.gif?noredirect'
    }

    if (between(Chance, 7659, 7759)) {
        var card = 'Rare Asuna';
        var acard = 'rasuna'
        var image = 'https://media.giphy.com/media/7xM9loGcAmqoU/giphy.gif'
    }

    if (between(Chance, 7760, 8760)) {
        var card = 'Asuna';
        var acard = 'asuna'
        var image = 'https://vignette.wikia.nocookie.net/sao-abridged/images/8/88/Asuna_SAO.png/revision/latest?cb=20190905123928'
    }

//---Klein---
    if (between(Chance, 8761, 8764)) {
        var card = 'Shiny Klein';
        var acard = 'sklein'
        var image = 'https://thumbs.gfycat.com/LegalSecondaryHoki-size_restricted.gif'
    }

    if (between(Chance, 8765, 8865)) {
        var card = 'Rare Klein';
        var acard = 'rklein'
        var image = 'https://media.tenor.com/images/b9c3609d86dc125c912e2dc101239056/tenor.gif'
    }

    if (between(Chance, 8866, 9866)) {
        var card = 'Klein';
        var acard = 'klein'
        var image = 'https://s2.narvii.com/image/fdfibzhyis6yzyycqtmetqpocoqqqcee_00.jpg'
    }

//---Kaguya---
    if (between(Chance, 9867, 9872)) {
        var card = 'Shiny Kaguya';
        var acard = 'skaguya'
        var image = 'https://cdn.discordapp.com/attachments/720193254502432826/740194796966248508/createcard.png'
    }

    if (between(Chance, 9873, 9973)) {
        var card = 'Rare Kaguya';
        var acard = 'rkaguya'
        var image = 'https://cdn.discordapp.com/attachments/720193254502432826/740194076669902910/createcard.png'
    }

    if (between(Chance, 9978, 10978)) {
        var card = 'Kaguya';
        var acard = 'kaguya'
        var image = 'https://cdn.discordapp.com/attachments/720193254502432826/740193430613000323/createcard.png'
    }

    if(Chance <= 11046){
    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} Your waifu/husbando went searching`)
    .addField("They found", `a new ${card} card`)
    .setImage(image)
    .setColor('9c0918')
    message.channel.send(embed)



    db.add(`${acard}_${user.id}`, 1)}    
    // Adds the user to the set so that they can't talk for two minutes
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      // Removes the user from the set after two minutes
      talkedRecently.delete(message.author.id);
    }, 120000);
    
}     
   
    













}}