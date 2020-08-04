const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "yunyunrare",
    aliases: ["ryunyun"],
    category: "Anime",
    description: "ryunyun",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let ryunyun = await db.fetch(`ryunyun_${user.id}`)
    if (ryunyun === null)ryunyun ='You dont have this Card';
    if (ryunyun === 0)ryunyun ='You dont have this Card';
    if (ryunyun === 1)ryunyun =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**YunYun**')
    .setAuthor('Konosuba Collection')
    .setColor('000000')
    .setImage('https://media1.tenor.com/images/06ca5c51338a00349f52e0bf53a03b35/tenor.gif?itemid=7587347')
    .addField('Owned', `${ryunyun}`)
    .setFooter('#00014')
    message.channel.send(Fembed)




}}