const Discord = require('discord.js');
const db = require('quick.db');


module.exports = {
    name: "aquarare",
    aliases: ["raqua"],
    category: "Anime",
    description: "rare aqua",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let raqua = await db.fetch(`raqua_${user.id}`)
    if (raqua === null)raqua ='You dont have this Card';
    if (raqua === 0)raqua ='You dont have this Card';
    if (raqua === 1)raqua =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Aqua**')
    .setAuthor('Konosuba Collection')
    .setColor('6bfff8')
    .setImage('https://i.pinimg.com/originals/b0/b5/a8/b0b5a85d051b1caf6ad5cf255f637a53.gif')
    .addField('Owned', `${raqua}`)
    .setFooter('#00005')
    message.channel.send(Fembed)




}}