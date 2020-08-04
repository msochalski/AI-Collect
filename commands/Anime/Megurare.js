const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: "megurare",
    aliases: ["rmegu"],
    category: "Anime",
    description: "better megumin",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rmegumin = await db.fetch(`rmegumin_${user.id}`)
    if (rmegumin === null)rmegumin ='You dont have this Card';
    if (rmegumin === 0)rmegumin ='You dont have this Card';
    if (rmegumin === 1)rmegumin =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Megumin**')
    .setAuthor('Konosuba Collection')
    .setColor('f5429b')
    .setImage('https://giffiles.alphacoders.com/353/35302.gif')
    .addField('Owned', `${rmegumin}`)
    .setFooter('#00002')
    message.channel.send(Fembed)




}}