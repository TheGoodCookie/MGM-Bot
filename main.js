const { verify } = require('crypto');
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');
const ms = require('ms');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    client.user.setActivity('made by SkerpTheDerp#9181', { type: 'PLAYING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(console.error);
});


client.on('message', message =>{
    let globalSwitch = message.content.substring(prefix.length).split(" ");

    if(message.channel.id == '766752651714887761' || message.channel.id == '767217789944725544'){
        //message.delete()
    }

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'verify'){
        client.commands.get('verify').execute(message, args);        
    } else if(command === 'apply'){
        client.commands.get('apply').execute(message, args);
    } else if(command === 'help'){
        client.commands.get('help').execute(message, args);
    } else if(command === 'req'){
        client.commands.get('req').execute(message, args);
    } else if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    } else if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if(command === 'test'){
        message.delete()
        message.channel.send("These are our Divisions so far:\n\n**Unturned\n\nDust\n\nRovive**");
    }
    
});

client.login('NzY2NzQ3MzAwNzIxNzIxMzkz.X4n3EQ.NnOU2UjbTIlXp6q4_lVZfBdSJVg');