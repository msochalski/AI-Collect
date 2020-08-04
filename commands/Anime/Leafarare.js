const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "rleafa",
    category: "Anime",
    description: "rleafa/rsugu",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let rleafa = await db.fetch(`rleafa_${user.id}`)
    if (rleafa === null)rleafa ='You dont have this Card';
    if (rleafa === 0)rleafa ='You dont have this Card';
    if (rleafa === 1)rleafa =':white_check_mark:';
    
    

    let Fembed = new Discord.MessageEmbed()
    .setTitle('**Rare**')
    .setDescription('**Leafa**')
    .setAuthor('SAO Collection')
    .setColor('0fb000')
    .setImage('https://thumbs.gfycat.com/LinedPreciousAfricanparadiseflycatcher-size_restricted.gif')
    .addField('Owned', `${rleafa}`)
    .setFooter('#00032')
    message.channel.send(Fembed)




}}