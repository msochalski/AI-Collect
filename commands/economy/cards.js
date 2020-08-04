const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "cards",
    category: "economy",
    description: "shows all collected cards",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let cards = await db.fetch(`cards_${user.id}`)
    if (cards === null)cards ='0';

//--------------Aqua--------------
    let aqua = await db.fetch(`aqua_${user.id}`)
    if (aqua === null)aqua = ':x:'
    if (aqua === 0)aqua = ':x:'
    if (aqua > 0)aqua = ':white_check_mark:'

//--------------Rare Aqua--------------
    let raqua = await db.fetch(`raqua_${user.id}`)
    if (raqua === null)raqua = ':x:'
    if (raqua === 0)raqua = ':x:'
    if (raqua > 0)raqua = ':white_check_mark:'
    
//--------------Shiny Aqua--------------
    let saqua = await db.fetch(`saqua_${user.id}`)
    if (saqua === null)saqua = ':x:'
    if (saqua === 0)saqua = ':x:'
    if (saqua > 0)saqua = ':white_check_mark:'

//--------------Megumin--------------
    let megumin = await db.fetch(`megumin_${user.id}`)
    if (megumin === null)megumin = ':x:'
    if (megumin === 0)megumin = ':x:'
    if (megumin > 0)megumin = ':white_check_mark:'

//--------------Rare Megumin--------------
    let rmegumin = await db.fetch(`rmegumin_${user.id}`)
    if (rmegumin === null)rmegumin = ':x:'
    if (rmegumin === 0)rmegumin = ':x:'
    if (rmegumin > 0)rmegumin = ':white_check_mark:'

//--------------Shiny Megumin--------------
    let smegumin = await db.fetch(`smegumin_${user.id}`)
    if (smegumin === null)smegumin = ':x:'
    if (smegumin === 0)smegumin = ':x:'
    if (smegumin > 0)smegumin = ':white_check_mark:'

//--------------Darkness--------------
    let darkness = await db.fetch(`darkness_${user.id}`)
    if (darkness === null)darkness = ':x:'
    if (darkness === 0)darkness = ':x:'
    if (darkness > 0)darkness = ':white_check_mark:'

//--------------Rare Darkness--------------
    let rdarkness = await db.fetch(`rdarkness_${user.id}`)
    if (rdarkness === null)rdarkness = ':x:'
    if (rdarkness === 0)rdarkness = ':x:'
    if (rdarkness > 0)rdarkness = ':white_check_mark:'

//--------------Shiny Darkness--------------
    let sdarkness = await db.fetch(`sdarkness_${user.id}`)
    if (sdarkness === null)sdarkness = ':x:'
    if (sdarkness === 0)sdarkness = ':x:'
    if (sdarkness > 0)sdarkness = ':white_check_mark:'

//--------------Kazuma--------------
    let kazuma = await db.fetch(`kazuma_${user.id}`)
    if (kazuma === null)kazuma = ':x:'
    if (kazuma === 0)kazuma = ':x:'
    if (kazuma > 0)kazuma = ':white_check_mark:'

//--------------Rare Kazuma--------------
    let rkazuma = await db.fetch(`rkazuma_${user.id}`)
    if (rkazuma === null)rkazuma = ':x:'
    if (rkazuma === 0)rkazuma = ':x:'
    if (rkazuma > 0)rkazuma = ':white_check_mark:'

//--------------Shiny Kazuma--------------
    let skazuma = await db.fetch(`skazuma_${user.id}`)
    if (skazuma === null)skazuma = ':x:'
    if (skazuma === 0)skazuma = ':x:'
    if (skazuma > 0)skazuma = ':white_check_mark:'

//--------------YunYun--------------
    let yunyun = await db.fetch(`yunyun_${user.id}`)
    if (yunyun === null)yunyun = ':x:'
    if (yunyun === 0)yunyun = ':x:'
    if (yunyun > 0)yunyun = ':white_check_mark:' 
    
//--------------Rare YunYun--------------
    let ryunyun = await db.fetch(`ryunyun_${user.id}`)
    if (ryunyun === null)ryunyun = ':x:'
    if (ryunyun === 0)ryunyun = ':x:'
    if (ryunyun > 0)ryunyun = ':white_check_mark:'

//--------------Shiny YunYun--------------
    let syunyun = await db.fetch(`syunyun_${user.id}`)
    if (syunyun === null)syunyun = ':x:'
    if (syunyun === 0)syunyun = ':x:'
    if (syunyun > 0)syunyun = ':white_check_mark:'

//--------------Chomusuke--------------
    let chomusuke = await db.fetch(`chomusuke_${user.id}`)
    if (chomusuke === null)chomusuke = ':x:'
    if (chomusuke === 0)chomusuke = ':x:'
    if (chomusuke > 0)chomusuke = ':white_check_mark:' 

//--------------Rare Chomusuke--------------
    let rchomusuke = await db.fetch(`rchomusuke_${user.id}`)
    if (rchomusuke === null)rchomusuke = ':x:'
    if (rchomusuke === 0)rchomusuke = ':x:'
    if (rchomusuke > 0)rchomusuke = ':white_check_mark:'

//--------------Shiny Chomusuke--------------
    let schomusuke = await db.fetch(`schomusuke_${user.id}`)
    if (schomusuke === null)schomusuke = ':x:'
    if (schomusuke === 0)schomusuke = ':x:'
    if (schomusuke > 0)schomusuke = ':white_check_mark:'

//--------------Kirito--------------
    let kirito = await db.fetch(`kirito_${user.id}`)
    if (kirito === null)kirito = ':x:'
    if (kirito === 0)kirito = ':x:'
    if (kirito > 0)kirito = ':white_check_mark:'  

//--------------Rare Kirito--------------
    let rkirito = await db.fetch(`rkirito_${user.id}`)
    if (rkirito === null)rkirito = ':x:'
    if (rkirito === 0)rkirito = ':x:'
    if (rkirito > 0)rkirito = ':white_check_mark:'
    
//--------------Shiny Kirito--------------
    let skirito = await db.fetch(`skirito_${user.id}`)
    if (skirito === null)skirito = ':x:'
    if (skirito === 0)skirito = ':x:'
    if (skirito > 0)skirito = ':white_check_mark:'

//--------------Asuna--------------
    let asuna = await db.fetch(`asuna_${user.id}`)
    if (asuna === null)asuna = ':x:'
    if (asuna === 0)asuna = ':x:'
    if (asuna > 0)asuna = ':white_check_mark:'  

//--------------Rare Asuna--------------
    let rasuna = await db.fetch(`rasuna_${user.id}`)
    if (rasuna === null)rasuna = ':x:'
    if (raqua === 0)rasuna = ':x:'
    if (rasuna > 0)rasuna = ':white_check_mark:'
    
//--------------Shiny Asuna--------------
    let sasuna = await db.fetch(`sasuna_${user.id}`)
    if (sasuna === null)sasuna = ':x:'
    if (sasuna === 0)sasuna = ':x:'
    if (sasuna > 0)sasuna = ':white_check_mark:'

//--------------Klein--------------
    let klein = await db.fetch(`klein_${user.id}`)
    if (klein === null)klein = ':x:'
    if (klein === 0)klein = ':x:'
    if (klein > 0)klein = ':white_check_mark:'  

//--------------Rare Klein--------------
    let rklein = await db.fetch(`rklein_${user.id}`)
    if (rklein === null)rklein = ':x:'
    if (rklein === 0)rklein = ':x:'
    if (rklein > 0)rklein = ':white_check_mark:'

//--------------Shiny Klein--------------
    let sklein = await db.fetch(`sklein_${user.id}`)
    if (sklein === null)sklein = ':x:'
    if (sklein === 0)sklein = ':x:'
    if (sklein > 0)sklein = ':white_check_mark:'

//--------------Heathcliff--------------
    let heathcliff = await db.fetch(`heathcliff_${user.id}`)
    if (heathcliff === null)heathcliff = ':x:'
    if (heathcliff === 0)heathcliff = ':x:'
    if (heathcliff > 0)heathcliff = ':white_check_mark:'

//--------------Rare Heathcliff--------------
    let rheathcliff = await db.fetch(`rheathcliff_${user.id}`)
    if (rheathcliff === null)rheathcliff = ':x:'
    if (rheathcliff === 0)rheathcliff = ':x:'
    if (rheathcliff > 0)rheathcliff = ':white_check_mark:'

//--------------Shiny Heathcliff--------------
    let sheathcliff = await db.fetch(`sheathcliff_${user.id}`)
    if (sheathcliff === null)sheathcliff = ':x:'
    if (sheathcliff === 0)sheathcliff = ':x:'
    if (sheathcliff > 0)sheathcliff = ':white_check_mark:'

//--------------Leafa--------------
    let leafa = await db.fetch(`leafa_${user.id}`)
    if (leafa === null)leafa = ':x:'
    if (leafa === 0)leafa = ':x:'
    if (leafa > 0)leafa = ':white_check_mark:'

//--------------Rare Leafa--------------
    let rleafa = await db.fetch(`rleafa_${user.id}`)
    if (rleafa === null)rleafa = ':x:'
    if (rleafa === 0)rleafa = ':x:'
    if (rleafa > 0)rleafa = ':white_check_mark:'

//--------------Shiny Leafa--------------
    let sleafa = await db.fetch(`sleafa_${user.id}`)
    if (sleafa === null)sleafa = ':x:'
    if (sleafa === 0)sleafa = ':x:'
    if (sleafa > 0)sleafa = ':white_check_mark:'

//--------------Shiny Kaguya--------------
let skaguya = await db.fetch(`skaguya_${user.id}`)
if (skaguya === null)skaguya = ':x:'
if (skaguya === 0)skaguya = ':x:'
if (skaguya > 0)skaguya = ':white_check_mark:'

//--------------Rare Kaguya--------------
let rkaguya = await db.fetch(`rkaguya_${user.id}`)
if (rkaguya === null)rkaguya = ':x:'
if (rkaguya === 0)rkaguya = ':x:'
if (rkaguya > 0)rkaguya = ':white_check_mark:'

//--------------Kaguya--------------
let kaguya = await db.fetch(`kaguya_${user.id}`)
if (kaguya === null)kaguya = ':x:'
if (kaguya === 0)kaguya = ':x:'
if (kaguya > 0)kaguya = ':white_check_mark:'

    let pages = ['Collection Page 1', 'Collection Page 2', 'Collection Page 3']; 
    let page = 1; 

    let embed01 = new Discord.MessageEmbed()
    .setColor("#15f153")
    .setDescription(pages[page-1])
    .setFooter(`Page ${page} of ${pages.length}`)
    .addField("Konosuba Collection", `Aqua Card ${aqua} \n Rare Aqua Card ${raqua} \n Shiny Aqua Card ${saqua}\n Megumin Card ${megumin} \n Rare Megumin Card ${rmegumin} \n Shiny Megumin Card ${smegumin} \n Darkness Card ${darkness} \n Rare Darkness Card ${rdarkness} \n Shiny Darkness Card ${sdarkness} \n Kazuma Card ${kazuma} \n Rare Kazuma Card ${rkazuma} \n Shiny Kazuma Card ${skazuma} \n YunYun Card ${yunyun} \n Rare YunYun Card ${ryunyun} \n Shiny YunYun Card ${syunyun} \n Chomusuke Card ${chomusuke} \n Rare Chomusuke Card ${rchomusuke} \n Shiny Chomusuke Card ${schomusuke}`)

    
    let embed02 = new Discord.MessageEmbed()
    .setColor("#15f153")
    .setDescription(pages[page-2])
    .setFooter(`Page ${page} of ${pages.length}`)
    .addField("SAO Collection", `Kirito Card ${kirito} \n Rare Kirito Card ${rkirito} \n Shiny Kirito Card ${skirito}\n Asuna Card ${asuna} \n Rare Asuna Card ${rasuna} \n Shiny Asuna Card ${sasuna} \n Klein Card ${klein} \n Rare Klein Card ${rklein} \n Shiny Klein Card ${sklein} \n Heathcliff Card ${heathcliff} \n Rare Heithcliff Card ${rheathcliff} \n Shiny Heathcliff Card ${sheathcliff} \n Leafa Card ${leafa} \n Rare Leafa Card ${rleafa} \n Shiny Leafa Card ${sleafa}`)

    let embed03 = new Discord.MessageEmbed()
    .setColor("#15f153")
    .setDescription(pages[page-3])
    .setFooter(`Page ${page} of ${pages.length}`)
    .addField("Love is War Collection", `Kaguya Card ${kaguya} \n Rare Kaguya Card ${rkaguya} \n Shiny Kaguya Card ${skaguya}`)

    
    message.channel.send(embed01).then(msg => {
    
        msg.react(`⏪`).then( r => {
            msg.react(`◀`).then(r => {
                msg.react(`▶`).then(r => {
                    msg.react(`⏩`)
            
    
            const backwardsFilter = (reaction, user) => reaction.emoji.name === `⏪` && user.id === message.author.id;
            const btwiceFilter = (reaction, user) => reaction.emoji.name === `◀` && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === `▶` && user.id === message.author.id;
            const twiceFilter = (reaction, user) => reaction.emoji.name === `⏩` && user.id === message.author.id;
            
            const backwards = msg.createReactionCollector(backwardsFilter, {timer: 5000});
            const btwice = msg.createReactionCollector(btwiceFilter, {timer: 5000});
            const forwards = msg.createReactionCollector(forwardsFilter, {timer: 5000});
            const twice = msg.createReactionCollector(twiceFilter, {timer: 5000});

    
    backwards.on("collect", r => {
        if (page === 1) return;
        page--;
        embed01.setDescription(pages[page-0])
        embed01.setFooter(`Page ${page} of ${pages.length}`)
        msg.edit(embed01)
    })
    btwice.on("collect", r => {
        if (page === pages.length) return;
        page--;
        embed02.setDescription(pages[page-1])
        embed02.setFooter(`Page ${page} of ${pages.length}`)
        msg.edit(embed02)
    })
    forwards.on("collect", r => {
        if (page === pages.length) return;
        page++;
        embed02.setDescription(pages[page-1])
        embed02.setFooter(`Page ${page} of ${pages.length}`)
        msg.edit(embed02)
    })
    twice.on("collect", r => {
        if (page === pages.length) return;
        page++;
        embed03.setDescription(pages[page-2])
        embed03.setFooter(`Page ${page} of ${pages.length}`)
        msg.edit(embed03)
    })
})})})})}}
