const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "yunyunshiny",
    aliases: ["syunyun"],
    category: "Anime",
    description: "syunyun",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let syunyun = await db.fetch(`syunyun_${user.id}`)
    if (syunyun === null)syunyun ='You dont have this Card';
    if (syunyun === 0)syunyun ='You dont have this Card';
    if (syunyun === 1)syunyun =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**YunYun**')
    .setAuthor('Konosuba Collection')
    .setColor('000000')
    .setImage('https://66.media.tumblr.com/0e36276d1a9e27020acc09ffe58d2585/tumblr_ok0hlld7rH1v6bs4yo6_250.gif')
    .addField('Owned', `${syunyun}`)
    .setFooter('#00015')
    message.channel.send(Fembed)




}}