const Discord = require('discord.js');
const bot = new Discord.Client();


const PREFIX = '$';

bot.on('ready', () =>{
    console.log('THIS BOT IS ONLINE!');
})
bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('Pong!');
            break;
        case 'Youtube':
            message.channel.send('https://www.youtube.com/channel/UCGw_svU6fZ_zA0uIO7n_zDQ');
            break;
        case 'TeccyBot':
            message.channel.send('You Can Invite Me To Your Server Using This Link: https://discordapp.com/oauth2/authorize?client_id=711340059487633581&scope=bot&permissions=8');
            break;
        case 'clear':
            if(!args[1]) return message.reply('Command Incomplete')
            message.channel.bulkDelete(args[1]);
            break;
    }
})

client.login(process.env.BOT_TOKEN);
