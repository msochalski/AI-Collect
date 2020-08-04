const db = require('quick.db');
const Discord = require('discord.js');


module.exports = {
    name: "balance",
    aliases: ["bal"],
    category: "economy",
    description: "users balance",
    run: async (client, message, args) => {

    let bal = await db.fetch(`balance_${message.author.id}`)
    if (bal === null)bal = 0;
    


    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.author}'s, Balance`)
    .addField(`Balance`, `${bal} Coins`)

    message.channel.send(embed)











}}