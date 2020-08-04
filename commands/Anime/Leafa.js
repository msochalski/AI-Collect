const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "leafa",
    category: "Anime",
    description: "leafa/sugu",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let leafa = await db.fetch(`leafa_${user.id}`)
    if (leafa === null)leafa ='You dont have this Card';
    if (leafa === 0)leafa ='You dont have this Card';
    if (leafa === 1)leafa =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Leafa**')
    .setAuthor('SAO Collection')
    .setColor('0fb000')
    .setImage('https://vignette.wikia.nocookie.net/narutofanon/images/0/04/ChixGetsuCouncilGirl.jpg/revision/latest?cb=20140126183406')
    .addField('Owned', `${leafa}`)
    .setFooter('#00031')
    message.channel.send(Fembed)




}}