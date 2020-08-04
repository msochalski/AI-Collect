const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "megumin",
    category: "Anime",
    description: "megumin",
    run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;

    let megumin = await db.fetch(`megumin_${user.id}`)
    if (megumin === null)megumin ='You dont have this Card';
    if (megumin === 0)megumin ='You dont have this Card';
    if (megumin === 1)megumin =':white_check_mark:';
    

    let Fembed = new Discord.MessageEmbed()
    .setDescription('**Megumin**')
    .setAuthor('Konosuba Collection')
    .setColor('f5429b')
    .setImage('https://vignette.wikia.nocookie.net/p__/images/c/cb/Bg1.jpg/revision/latest/top-crop/width/300/height/300?cb=20180208015150&path-prefix=protagonist')
    .addField('Owned', `${megumin}`)
    .setFooter('#00003')
    message.channel.send(Fembed)




}}