const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "chika",
    category: "Anime",
    description: "Chika Fujiwara",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let chika = await db.fetch(`chika_${user.id}`)
    if (chika === null)chika ='You dont have this Card';
    if (chika === 0)chika ='You dont have this Card';
    if (chika === 1)chika =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Chika**')
    .setAuthor('Love is War Collection')
    .setColor('f5429b')
    .setImage('https://cdn.discordapp.com/attachments/720193254502432826/740197897148170310/createcard.png')
    .addField('Owned', `${chika}`)
    message.channel.send(Fembed)




}}