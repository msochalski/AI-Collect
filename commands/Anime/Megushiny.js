const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: "megushiny",
    aliases: ["smegu"],
    category: "Anime",
    description: "shiny megumin",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let smegumin = await db.fetch(`smegumin_${user.id}`)
    if (smegumin === null)smegumin ='You dont have this Card';
    if (smegumin === 0)smegumin ='You dont have this Card';
    if (smegumin === 1)smegumin =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Megumin**')
    .setAuthor('Konosuba Collection')
    .setColor('f5429b')
    .setImage('https://media1.tenor.com/images/a5200ff8939402e4e2bbda3a8107d2b1/tenor.gif?itemid=7559840')
    .addField('Owned', `${smegumin}`)
    .setFooter('#00001')
    message.channel.send(Fembed)


    }}
