const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "sleafa",
    category: "Anime",
    description: "sleafa/ssugu",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let sleafa = await db.fetch(`sleafa_${user.id}`)
    if (sleafa === null)sleafa ='You dont have this Card';
    if (sleafa === 0)sleafa ='You dont have this Card';
    if (sleafa === 1)sleafa =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('***Shiny***')
    .setDescription('**Leafa**')
    .setAuthor('SAO Collection')
    .setColor('0fb000')
    .setImage('https://pa1.narvii.com/5731/3d5b8cbe1744ebec029f3702f687987f234d562a_hq.gif')
    .addField('Owned', `${sleafa}`)
    .setFooter('#00033')
    message.channel.send(Fembed)




}}