const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "yunyun",
    category: "Anime",
    description: "yunyun",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let yunyun = await db.fetch(`yunyun_${user.id}`)
    if (yunyun === null)yunyun ='You dont have this Card';
    if (yunyun === 0)yunyun ='You dont have this Card';
    if (yunyun === 1)yunyun =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**YunYun**')
    .setAuthor('Konosuba Collection')
    .setColor('000000')
    .setImage('https://www.anime-evo.net/wp-content/uploads/2017/01/Konosuba2_02_1-700x385.jpg')
    .addField('Owned', `${yunyun}`)
    .setFooter('#000013')
    message.channel.send(Fembed)




}}