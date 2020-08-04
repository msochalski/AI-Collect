const db = require('quick.db');
const Discord = require('discord.js');
const ms = require('parse-ms');



module.exports.run = async (bot, message, args) => {

  let user = message.author;

  let starts = await db.fetch(`starts_${message.author}`)
    if (starts === null) starts =0;
    let whitelistt = await db.fetch(`whitelistt_${user}`)
    if (whitelistt === null) whitelistt =0;

    if(whitelistt === 1){
      message.channel.send("you are whitelisted!")
      return;
  }

    if(starts === 0){
        message.channel.send("you need to start! `c!start` to begin!")
        return;
    }


    
    let timeout = 5000
    let amount = 5
    let ammount = 10
    let completet = await db.fetch(`completet_${message.author.id}`)
    let complete = await db.fetch(`complete_${message.author.id}`)
    let pizzac = await db.fetch(`pizzac_${message.authorid}`)
    let mpizza = await db.fetch(`mpizza_${message.author.id}`)
    let bpizza = await db.fetch(`bpizza_${message.author.id}`)
    let ppizza = await db.fetch(`ppizza_${message.author.id}`)
    let konosubac = await db.fetch(`waifuc_${message.author.id}`)
    let mwaifu = await db.fetch(`mwaifu_${message.author.id}`)    
    let gwaifu = await db.fetch(`gwaifu_${message.author.id}`)
    let awaifu = await db.fetch(`awaifu_${message.author.id}`)
    let ywaifu = await db.fetch(`ywaifu_${message.author.id}`)
    let kwaifu = await db.fetch(`kwaifu_${message.author.id}`)
    let dwaifu = await db.fetch(`dwaifu_${message.author.id}`)
    let epicc = await db.fetch(`epicc_${message.author.id}`)
    let rarec = await db.fetch(`rarec_${message.author.id}`)
    let commonc = await db.fetch(`commonc_${message.author.id}`)

    let cardshards = await db.fetch(`cardshards_${user.id}`)
    if (cardshards === null) cardshards =0;

    let searchin = await db.fetch(`searchin_${message.author.id}`)
    let bal = await db.fetch(`cards_${message.author.id}`)


    if (searchin !== null && timeout - (Date.now() - searchin) > 0) {
        let time = ms(timeout - (Date.now() - searchin));
    
        message.channel.send(`${message.author} You just went searching try again in ${time.minutes}m ${time.seconds}s`)
    } else {
        

       let math = Math.floor((Math.random() * 1500) + 1);
        function between(math, min, max) {
            return math >= min && math <= max;
          }
          // ...
          if (between(math, 1, 100)) {

              if(mpizza === 1){
                  message.channel.send('You already have the Margerita Pizza Card!! so you got 3 card shards!!!')
                  db.set(`searchin_${message.author.id}`, Date.now())
                  db.add(`cardshards_${message.author.id}`, 3)
                  return;
              }
              if(mpizza === 2)db.set(`mpizza_${message.author.id}`, 1)
              
              db.add(`mpizza_${message.author.id}`, 1)
            db.add(`pizzac_${message.author.id}`, 1)
            db.add(`complete_${message.author.id}`, 1)
            db.add(`completet_${message.author.id}`, 1)
            let bal = await db.fetch(`cards_${message.author.id}`)
            let Pembed = new Discord.RichEmbed()
            .setDescription('You went searching!!')
            .setColor(`f5429b`)
            .addField('You found the margherita pizza card!!', '***EPIC!!***');

            message.channel.send(Pembed)
            db.set(`searchin_${message.author.id}`, Date.now())
            return;

        }

        function between(math, min, max) {
            return math >= min && math <= max;
          }
          // ...
          if (between(math, 101, 200)) {
            // something
          
          
            if(bpizza === 1){
                message.channel.send('You already have the BBQ Chicken card!! so you got 3 card shards!!!')
                db.set(`searchin_${message.author.id}`, Date.now())
                db.add(`cardshards_${message.author.id}`, 3)
                return;
            }

            db.add(`bpizza_${message.author.id}`, 1)
          db.add(`pizzac_${message.author.id}`, 1)
          db.add(`complete_${message.author.id}`, 1)
            db.add(`completet_${message.author.id}`, 1)
          let bal = await db.fetch(`bpizza_${message.author.id}`)
          let Cembed = new Discord.RichEmbed()
          .setDescription('You went searching!!')
          .setColor(`f5429b`)
          .addField('You found the BBQ Chicken pizza card!!', '***EPIC!!***');

          message.channel.send(Cembed)
          db.set(`searchin_${message.author.id}`, Date.now())
        return;}



          function between(math, min, max) {
            return math >= min && math <= max;
          }
          // ...
          if (between(math, 201, 210)) {
            // something
          
          
        
            db.add(`epicc_${message.author.id}`, 1)
          let Cembed = new Discord.RichEmbed()
          .setDescription('You went searching!!')
          .setColor(`f5429b`)
          .addField('You found an Epic Crate!!', '***EPIC!!***');

          message.channel.send(Cembed)
          db.set(`searchin_${message.author.id}`, Date.now())
        return;}


        
          
          // ...
          if (between(math, 211, 569)) {

              if(ppizza === 1){
                  message.channel.send('You already have the Pepperoni Pizza Card!! so you got 3 card shards!!!')
                  db.set(`searchin_${message.author.id}`, Date.now())
                  db.add(`cardshards_${message.author.id}`, 3)
                  return;
              }
              
        
            let Wembed = new Discord.RichEmbed()
            .setDescription('You went searching!!')
            .setColor(`f5429b`)
            .addField('You found the pepperoni pizza card!!', '***EPIC!!***');
            db.add(`ppizza_${message.author.id}`, 1)
            db.add(`pizzac_${message.author.id}`, 1)
            db.add(`complete_${message.author.id}`, 1)
            db.add(`completet_${message.author.id}`, 1)

            message.channel.send(Wembed)
            db.set(`searchin_${message.author.id}`, Date.now())}
        

        if (between(math, 570, 573)) {

            if(mwaifu === 1){
                message.channel.send('You already have the Megumin Card!! so you got 100 card shards!!!')
                db.set(`searchin_${message.author.id}`, Date.now())
                db.add(`cardshards_${message.author.id}`, 100)
                return;
            }
        
          let Membed = new Discord.RichEmbed()
          .setDescription('You went searching!!')
          .setColor(`f5429b`)
          .addField('You found the Megumin card!!', '***EPIC!!***');
          db.add(`waifuc_${message.author.id}`, 1)
          db.add(`mwaifu_${message.author.id}`, 1)
          db.add(`complete_${message.author.id}`, 1)
            db.add(`completet_${message.author.id}`, 1)

          message.channel.send(Membed)
          db.set(`searchin_${message.author.id}`, Date.now())
        return;}
      

  

        
  
  if (between(math, 574, 577)) {

    if(awaifu === 1){
        message.channel.send('You already have the Aqua Card!! so you got 100 card shards!!!')
        db.set(`searchin_${message.author.id}`, Date.now())
        db.add(`cardshards_${message.author.id}`, 100)
        return;
    
    } 
    
  
  let Aembed = new Discord.RichEmbed()
  .setDescription('You went searching!!')
  .setColor(`f5429b`)
  .addField('You found the Aqua card!!', '***EPIC!!***');
  db.add(`waifuc_${message.author.id}`, 1)
  db.add(`awaifu_${message.author.id}`, 1)
  db.add(`complete_${message.author.id}`, 1)
            db.add(`completet_${message.author.id}`, 1)

  message.channel.send(Aembed)
  db.set(`searchin_${message.author.id}`, Date.now())
return;}




  if (between(math, 578, 581)) {

    if(ywaifu === 1){
        message.channel.send('You already have the YunYun Card!! so you got 100 card shards!!!')
        db.set(`searchin_${message.author.id}`, Date.now())
        db.add(`cardshards_${message.author.id}`, 100)
        
        return;
    
    }

  let Aembed = new Discord.RichEmbed()
  .setDescription('You went searching!!')
  .setColor(`f5429b`)
  .addField('You found the YunYun card!!', '***EPIC!!***');
  db.add(`waifuc_${message.author.id}`, 1)
  db.add(`ywaifu_${message.author.id}`, 1)
  db.add(`complete_${message.author.id}`, 1)
            db.add(`completet_${message.author.id}`, 1)

  message.channel.send(Aembed)
  db.set(`searchin_${message.author.id}`, Date.now())
return;}



  function between(math, min, max) {
    return math >= min && math <= max;
  }
  // ...
  if (between(math, 582, 607)) {
    // something
  
  

    db.add(`rarec_${message.author.id}`, 1)
  let Rembed = new Discord.RichEmbed()
  .setDescription('You went searching!!')
  .setColor(`f5429b`)
  .addField('You found an Rare Crate!!', '***EPIC!!***');

  message.channel.send(Rembed)
  db.set(`searchin_${message.author.id}`, Date.now())
return;}

  ////////////



  if (between(math, 608, 707)) {
    // something
  
  

    db.add(`commonc_${message.author.id}`, 1)
  let CCembed = new Discord.RichEmbed()
  .setDescription('You went searching!!')
  .setColor(`f5429b`)
  .addField('You found an Common Crate!!', '***EPIC!!***');

  message.channel.send(CCembed)
  db.set(`searchin_${message.author.id}`, Date.now())
return;}

  ////////////


/////////////
  if (between(math, 708, 711)) {

    if(kwaifu === 1){
        message.channel.send('You already have the Kazuma Card!! so you got 100 card shards!!!')
        db.set(`searchin_${message.author.id}`, Date.now())
        db.add(`cardshards_${message.author.id}`, 100)   
        return;
    
    }

  let kembed = new Discord.RichEmbed()
  .setDescription('You went searching!!')
  .setColor(`f5429b`)
  .addField('You found the Kazuma card!!', '***EPIC!!***');
  db.add(`waifuc_${message.author.id}`, 1)
  db.add(`kwaifu_${message.author.id}`, 1)
  db.add(`complete_${message.author.id}`, 1)
            db.add(`completet_${message.author.id}`, 1)

  message.channel.send(kembed)
  db.set(`searchin_${message.author.id}`, Date.now())
return;}
/////////

/////////////////////////////////

////////
if (between(math, 712, 715)) {

  if(kwaifu === 1){
      message.channel.send('You already have the Darkness Card!! so you got 100 card shards!!!')
      db.set(`searchin_${message.author.id}`, Date.now())
      db.add(`cardshards_${message.author.id}`, 100)   
      return;
  
  }

let kembed = new Discord.RichEmbed()
.setDescription('You went searching!!')
.setColor(`f5429b`)
.addField('You found the Darkness card!!', '***EPIC!!***');
db.add(`waifuc_${message.author.id}`, 1)
db.add(`dwaifu_${message.author.id}`, 1)
db.add(`complete_${message.author.id}`, 1)
          db.add(`completet_${message.author.id}`, 1)

message.channel.send(kembed)
db.set(`searchin_${message.author.id}`, Date.now())
return;}


//////

        if (between(math, 716, 1500)) {

          let Wembed = new Discord.RichEmbed()
          .setDescription('You went searching!!')
          .setColor(`f5429b`)
          .addField('You found nothing!!', '***NOT EPIC***');

          message.channel.send(Wembed)
          db.set(`searchin_${message.author.id}`, Date.now())
        return;}




          
      

        

          
    }

}



module.exports.config = {
    name: "search",
    aliases: ["find", "f"]
}
