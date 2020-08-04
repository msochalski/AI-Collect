const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "schika",
    category: "Anime",
    description: "Shiny Chika Fujiwara",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let schika = await db.fetch(`schika_${user.id}`)
    if (schika === null)schika ='You dont have this Card';
    if (schika === 0)schika ='You dont have this Card';
    if (schika === 1)schika =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Chika**')
    .setAuthor('Love is War Collection')
    .setColor('f5429b')
    .setImage('https://cdn.discordapp.com/attachments/720193254502432826/740199327833522236/createcard.png')
    .addField('Owned', `${schika}`)
    message.channel.send(Fembed)




}}