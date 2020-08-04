const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "trade",
    aliases: ["swap"],
    category: "economy",
    description: "trade with user",
    run: async (client, message, args) => {

let user = message.mentions.members.first() || message.author;

//--------------Aqua--------------
    let aqua = await db.fetch(`aqua_${user.id}`)
//--------------Rare Aqua--------------
    let raqua = await db.fetch(`raqua_${user.id}`)
//--------------Shiny Aqua--------------
    let saqua = await db.fetch(`saqua_${user.id}`)
//--------------Megumin--------------
    let megumin = await db.fetch(`megumin_${user.id}`)
//--------------Rare Megumin--------------
    let rmegumin = await db.fetch(`rmegumin_${user.id}`)
//--------------Shiny Megumin--------------
    let smegumin = await db.fetch(`smegumin_${user.id}`)
//--------------Darkness--------------
    let darkness = await db.fetch(`darkness_${user.id}`)
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


//---Megumin---
    if (args[0] == '00001'){
        var card = 'Shiny Megumin'
        var acard ='smegumin'
        var image = 'https://media1.tenor.com/images/a5200ff8939402e4e2bbda3a8107d2b1/tenor.gif?itemid=7559840'
    }

    if (args[0] = '00002'){
        var card = 'Rare Megumin';
        var acard = 'rmegumin'
        var image = 'https://giffiles.alphacoders.com/353/35302.gif'
    }

    if (args[0] = '00003'){
        var card = 'Megumin';
        var acard = 'megumin'
        var image = 'https://vignette.wikia.nocookie.net/p__/images/c/cb/Bg1.jpg/revision/latest/top-crop/width/300/height/300?cb=20180208015150&path-prefix=protagonist'
    }
//---Aqua---
    if (args[0] = '00006'){
        var card = 'Shiny Aqua';
        var acard = 'saqua'
        var image = 'https://66.media.tumblr.com/68bb2569443f6a3fc24fa8834fafa3ec/b19587c5206e190f-eb/s500x750/058941838e532e0b330a2a7af1949875398a9b81.gif'
    }

    if (args[0] = '00005'){
        var card = 'Rare Aqua';
        var acard = 'raqua'
        var image = 'https://i.pinimg.com/originals/b0/b5/a8/b0b5a85d051b1caf6ad5cf255f637a53.gif'
    }

    if (args[0] = '00004'){        
        var card = 'Aqua';
        var acard = 'aqua'
        var image = 'https://i.pinimg.com/236x/42/3c/8e/423c8e21de42d1f3c1814d55af9aa182--konosuba-aqua-anime.jpg'
    }
//---Darkness---
    if (args[0] = '00009'){
        var card = 'Shiny Darkness';
        var acard = 'sdarkness'
        var image = 'https://pa1.narvii.com/6662/45f4156f1513b95ab6ea51f06616c8eba2076704_hq.gif'
    }

    if (args[0] = '00008'){
        var card = 'Rare Darkness';
        var acard = 'rdarkness'
        var image = 'https://i.pinimg.com/originals/97/70/40/9770409f25e4f3e1f860dd28d342be10.gif'
    }

    if (args[0] = '00007'){
        var card = 'Darkness';
        var acard = 'darkness'
        var image = 'https://66.media.tumblr.com/4bd8c527be2fa04f48047d78d207aee7/tumblr_pkx23vbl6J1vfst3g_1280.jpg'
    }
//---Kazuma---
    if (args[0] = '00012'){
        var card = 'Shiny Kazuma';
        var acard = 'skazuma'
        var image = 'https://media.giphy.com/media/LZmMH7lmHeNFe/200.gif'
    }

    if (args[0] = '00011'){
        var card = 'Rare Kazuma';
        var acard = 'rkazuma'
        var image = 'https://pa1.narvii.com/7129/9509575c56bc6d70b26baea5a44a95900cb38257r1-300-249_00.gif'
    }

    if (args[0] = '00010'){
        var card = 'Kazuma';
        var acard = 'kazuma'
        var image = 'https://cdn.anisearch.com/images/character/cover/full/55/55426.jpg'
    }

//---YunYun---
    if (args[0] = '00015'){
        var card = 'Shiny YunYun';
        var acard = 'syunyun'
        var image = 'https://66.media.tumblr.com/0e36276d1a9e27020acc09ffe58d2585/tumblr_ok0hlld7rH1v6bs4yo6_250.gif'
    }

    if (args[0] = '00014'){
        var card = 'Rare YunYun';
        var acard = 'ryunyun'
        var image = 'https://media1.tenor.com/images/06ca5c51338a00349f52e0bf53a03b35/tenor.gif?itemid=7587347'
    }

    if (args[0] = '00013'){
        var card = 'YunYun';
        var acard = 'yunyun'
        var image = 'https://www.anime-evo.net/wp-content/uploads/2017/01/Konosuba2_02_1-700x385.jpg'
    }

//---Chomusuke---
    if (args[0] = '00018'){
        var card = 'Shiny Chomusuke';
        var acard = 'schomusuke'
        var image = 'https://68.media.tumblr.com/9428bead7dc6b2abb95b3faa631384ca/tumblr_otu9i8FETy1tr842yo1_540.gif'
    }

    if (args[0] = '00017'){
        var card = 'Rare Chomusuke';
        var acard = 'rchomusuke'
        var image = 'https://media1.tenor.com/images/38d4692cee605f3dc85a80150fd5c9a5/tenor.gif?itemid=7617612'
    }

    if (args[0] = '00016'){
        var card = 'Chomusuke';
        var acard = 'chomusuke'
        var image = 'https://pm1.narvii.com/6792/cec8aa2156d6a177d9e2e7316688d7d2a1d101b8v2_00.jpg'
    }

//---Kirito---
    if (args[0] = '00021'){
        var card = 'Shiny Kirito';
        var acard = 'skirito'
        var image = 'https://i.imgur.com/geUqsfL.gif'
    }

    if (args[0] = '00020'){
        var card = 'Rare Kirito';
        var acard = 'rkirito'
        var image = 'https://media1.tenor.com/images/635ff7de4d9228e140153bff49b6dd4d/tenor.gif?itemid=11034208'
    }

    if (args[0] = '00019'){
        var card = 'Kirito';
        var acard = 'kirito'
        var image = 'https://www.anime-planet.com/images/characters/kirito-30045.jpg'
    }

//---Asuna---
    if (args[0] = '00024'){
        var card = 'Shiny Asuna';
        var acard = 'sasuna'
        var image = 'https://i.imgur.com/VTuHrb8.gif?noredirect'
    }

    if (args[0] = '00023'){
        var card = 'Rare Asuna';
        var acard = 'rasuna'
        var image = 'https://media.giphy.com/media/7xM9loGcAmqoU/giphy.gif'
    }

    if (args[0] = '00022'){
        var card = 'Asuna';
        var acard = 'asuna'
        var image = 'https://vignette.wikia.nocookie.net/sao-abridged/images/8/88/Asuna_SAO.png/revision/latest?cb=20190905123928'
    }

//---Klein---
    if (args[0] = '00027'){
        var card = 'Shiny Klein';
        var acard = 'sklein'
        var image = 'https://thumbs.gfycat.com/LegalSecondaryHoki-size_restricted.gif'
    }

    if (args[0] = '00026'){
        var card = 'Rare Klein';
        var acard = 'rklein'
        var image = 'https://media.tenor.com/images/b9c3609d86dc125c912e2dc101239056/tenor.gif'
    }

    if (args[0] = '00025'){
        var card = 'Klein';
        var acard = 'klein'
        var image = 'https://s2.narvii.com/image/fdfibzhyis6yzyycqtmetqpocoqqqcee_00.jpg'
    }

//---Heathcliff---
    if (args[0] = '00030'){
        var card = 'Shiny Heathcliff';
        var acard = 'sheathcliff'
        var image = 'https://66.media.tumblr.com/6e572679c48f3e3de19cb06f01ba4b71/tumblr_o6nhkaYKJL1tpri36o1_500.gif'
    }

    if (args[0] = '00029'){
        var card = 'Rare Heathcliff';
        var acard = 'rheathcliff'
        var image = 'https://pa1.narvii.com/6321/4ee1a8c7d8f40654e6e96feedd4e5d48c4b69c1b_00.gif'
    }

    if (args[0] = '00028'){
        var card = 'Heathcliff';
        var acard = 'heathcliff'
        var image = 'https://cdn.ezcosplay.com/media/catalog/product/cache/88a5a78f5dc8f5fb801e9020fd0d9592/e/w/ewg0962.jpg'
    }

    //---Megumin---
    if (args[1] == '00001'){
        var tcard = 'Shiny Megumin'
        var bcard ='smegumin'
        var timage = 'https://media1.tenor.com/images/a5200ff8939402e4e2bbda3a8107d2b1/tenor.gif?itemid=7559840'
    }

    if (args[1] = '00002'){
        var tcard = 'Rare Megumin';
        var bcard = 'rmegumin'
        var timage = 'https://giffiles.alphacoders.com/353/35302.gif'
    }

    if (args[1] = '00003'){
        var tcard = 'Megumin';
        var bcard = 'megumin'
        var timage = 'https://vignette.wikia.nocookie.net/p__/images/c/cb/Bg1.jpg/revision/latest/top-crop/width/300/height/300?cb=20180208015150&path-prefix=protagonist'
    }
//---Aqua---
    if (args[1] = '00006'){
        var tcard = 'Shiny Aqua';
        var bcard = 'saqua'
        var timage = 'https://66.media.tumblr.com/68bb2569443f6a3fc24fa8834fafa3ec/b19587c5206e190f-eb/s500x750/058941838e532e0b330a2a7af1949875398a9b81.gif'
    }

    if (args[1] = '00005'){
        var tcard = 'Rare Aqua';
        var bcard = 'raqua'
        var timage = 'https://i.pinimg.com/originals/b0/b5/a8/b0b5a85d051b1caf6ad5cf255f637a53.gif'
    }

    if (args[1] = '00004'){        
        var tcard = 'Aqua';
        var bcard = 'aqua'
        var timage = 'https://i.pinimg.com/236x/42/3c/8e/423c8e21de42d1f3c1814d55af9aa182--konosuba-aqua-anime.jpg'
    }
//---Darkness---
    if (args[1] = '00009'){
        var tcard = 'Shiny Darkness';
        var bcard = 'sdarkness'
        var timage = 'https://pa1.narvii.com/6662/45f4156f1513b95ab6ea51f06616c8eba2076704_hq.gif'
    }

    if (args[1] = '00008'){
        var tcard = 'Rare Darkness';
        var bcard = 'rdarkness'
        var timage = 'https://i.pinimg.com/originals/97/70/40/9770409f25e4f3e1f860dd28d342be10.gif'
    }

    if (args[1] = '00007'){
        var tcard = 'Darkness';
        var bcard = 'darkness'
        var timage = 'https://66.media.tumblr.com/4bd8c527be2fa04f48047d78d207aee7/tumblr_pkx23vbl6J1vfst3g_1280.jpg'
    }
//---Kazuma---
    if (args[1] = '00012'){
        var tcard = 'Shiny Kazuma';
        var bcard = 'skazuma'
        var timage = 'https://media.giphy.com/media/LZmMH7lmHeNFe/200.gif'
    }

    if (args[1] = '00011'){
        var tcard = 'Rare Kazuma';
        var bcard = 'rkazuma'
        var timage = 'https://pa1.narvii.com/7129/9509575c56bc6d70b26baea5a44a95900cb38257r1-300-249_00.gif'
    }

    if (args[1] = '00010'){
        var tcard = 'Kazuma';
        var bcard = 'kazuma'
        var timage = 'https://cdn.anisearch.com/images/character/cover/full/55/55426.jpg'
    }

//---YunYun---
    if (args[1] = '00015'){
        var tcard = 'Shiny YunYun';
        var bcard = 'syunyun'
        var timage = 'https://66.media.tumblr.com/0e36276d1a9e27020acc09ffe58d2585/tumblr_ok0hlld7rH1v6bs4yo6_250.gif'
    }

    if (args[1] = '00014'){
        var tcard = 'Rare YunYun';
        var bcard = 'ryunyun'
        var timage = 'https://media1.tenor.com/images/06ca5c51338a00349f52e0bf53a03b35/tenor.gif?itemid=7587347'
    }

    if (args[1] = '00013'){
        var tcard = 'YunYun';
        var bcard = 'yunyun'
        var timage = 'https://www.anime-evo.net/wp-content/uploads/2017/01/Konosuba2_02_1-700x385.jpg'
    }

//---Chomusuke---
    if (args[1] = '00018'){
        var tcard = 'Shiny Chomusuke';
        var bcard = 'schomusuke'
        var timage = 'https://68.media.tumblr.com/9428bead7dc6b2abb95b3faa631384ca/tumblr_otu9i8FETy1tr842yo1_540.gif'
    }

    if (args[1] = '00017'){
        var tcard = 'Rare Chomusuke';
        var bcard = 'rchomusuke'
        var timage = 'https://media1.tenor.com/images/38d4692cee605f3dc85a80150fd5c9a5/tenor.gif?itemid=7617612'
    }

    if (args[1] = '00016'){
        var tcard = 'Chomusuke';
        var bcard = 'chomusuke'
        var timage = 'https://pm1.narvii.com/6792/cec8aa2156d6a177d9e2e7316688d7d2a1d101b8v2_00.jpg'
    }

//---Kirito---
    if (args[1] = '00021'){
        var tcard = 'Shiny Kirito';
        var bcard = 'skirito'
        var timage = 'https://i.imgur.com/geUqsfL.gif'
    }

    if (args[1] = '00020'){
        var tcard = 'Rare Kirito';
        var bcard = 'rkirito'
        var timage = 'https://media1.tenor.com/images/635ff7de4d9228e140153bff49b6dd4d/tenor.gif?itemid=11034208'
    }

    if (args[1] = '00019'){
        var tcard = 'Kirito';
        var bcard = 'kirito'
        var timage = 'https://www.anime-planet.com/images/characters/kirito-30045.jpg'
    }

//---Asuna---
    if (args[1] = '00024'){
        var tcard = 'Shiny Asuna';
        var bcard = 'sasuna'
        var timage = 'https://i.imgur.com/VTuHrb8.gif?noredirect'
    }

    if (args[1] = '00023'){
        var tcard = 'Rare Asuna';
        var bcard = 'rasuna'
        var timage = 'https://media.giphy.com/media/7xM9loGcAmqoU/giphy.gif'
    }

    if (args[1] = '00022'){
        var tcard = 'Asuna';
        var bcard = 'asuna'
        var timage = 'https://vignette.wikia.nocookie.net/sao-abridged/images/8/88/Asuna_SAO.png/revision/latest?cb=20190905123928'
    }

//---Klein---
    if (args[1] = '00027'){
        var tcard = 'Shiny Klein';
        var bcard = 'sklein'
        var timage = 'https://thumbs.gfycat.com/LegalSecondaryHoki-size_restricted.gif'
    }

    if (args[1] = '00026'){
        var tcard = 'Rare Klein';
        var bcard = 'rklein'
        var timage = 'https://media.tenor.com/images/b9c3609d86dc125c912e2dc101239056/tenor.gif'
    }

    if (args[1] = '00025'){
        var tcard = 'Klein';
        var bcard = 'klein'
        var timage = 'https://s2.narvii.com/image/fdfibzhyis6yzyycqtmetqpocoqqqcee_00.jpg'
    }

//---Heathcliff---
    if (args[1] = '00030'){
        var tcard = 'Shiny Heathcliff';
        var bcard = 'sheathcliff'
        var timage = 'https://66.media.tumblr.com/6e572679c48f3e3de19cb06f01ba4b71/tumblr_o6nhkaYKJL1tpri36o1_500.gif'
    }

    if (args[1] = '00029'){
        var tcard = 'Rare Heathcliff';
        var bcard = 'rheathcliff'
        var timage = 'https://pa1.narvii.com/6321/4ee1a8c7d8f40654e6e96feedd4e5d48c4b69c1b_00.gif'
    }

    if (args[1] = '00028'){
        var tcard = 'Heathcliff';
        var bcard = 'heathcliff'
        var timage = 'https://cdn.ezcosplay.com/media/catalog/product/cache/88a5a78f5dc8f5fb801e9020fd0d9592/e/w/ewg0962.jpg'
    }

    
    const embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} is offering their ${card} for ${message.mentions.user}'s ${tcard}`)


    message.channel.send(embed)


}}