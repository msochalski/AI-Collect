const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "rchika",
    category: "Anime",
    description: "Rare Chika Fujiwara",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rchika = await db.fetch(`rchika_${user.id}`)
    if (rchika === null)rchika ='You dont have this Card';
    if (rchika === 0)rchika ='You dont have this Card';
    if (rchika === 1)rchika =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Chika**')
    .setAuthor('Love is War Collection')
    .setColor('f5429b')
    .setImage('https://cdn.discordapp.com/attachments/720193254502432826/740198483059015700/createcard.png')
    .addField('Owned', `${rchika}`)
    message.channel.send(Fembed)




}}