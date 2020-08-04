const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: 'NzE3MTA0NjczMTQ3OTc3NzI4.XtVhUg.3GgApcXMeEQQcyLK0AgOVm7STNc' });

manager.spawn();
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
