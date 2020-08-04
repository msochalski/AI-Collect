const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "kiritorare",
    aliases: ["rkirito"],
    category: "Anime",
    description: "kirito",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rkirito = await db.fetch(`rkirito_${user.id}`)
    if (rkirito === null)rkirito ='You dont have this Card';
    if (rkirito === 0)rkirito ='You dont have this Card';
    if (rkirito === 1)rkirito =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Kirito**')
    .setAuthor('SAO Collection')
    .setColor('000000')
    .setImage('https://media1.tenor.com/images/635ff7de4d9228e140153bff49b6dd4d/tenor.gif?itemid=11034208')
    .addField('Owned', `${rkirito}`)
    .setFooter('#00020')
    message.channel.send(Fembed)




}}