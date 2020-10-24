module.exports = {
    name: 'mute',
    description: 'Mute command.',
    execute(message, args){
        const prefix = '-';
        let globalSwitch = message.content.substring(prefix.length).split(" ");
        const ms = require('ms');

        message.delete()

        switch(globalSwitch[0]){
            case 'mute':
                
            let person = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(globalSwitch[1]))
            if(!person) return message.channel.send("No user specified.");

            if(message.member.roles.cache.find(r => r.name === "Moderator")){
                if(!person.roles.cache.find(r => r.name === "Moderator")){
                    let muterole = message.guild.roles.cache.find(role => role.name === "Muted");

                    let time = globalSwitch[2];
                    if(!time) return message.channel.send("No time specified.");

                    person.roles.add('722581844226473985').catch('console.error');

                    message.channel.send("<@" + person.id + ">" + " has been muted for " + `${ms(ms(time))}`);
                    
                    setTimeout(function(){
                        person.roles.remove('722581844226473985').catch('console.error');
                        if(person.roles.cache.find(r => r.name === "Muted")){
                            message.channel.send("<@" + person.id + ">" + " has now been unmuted");                
                        }
                    }, ms(time) );
                    break;
                }                
            }
        }
    }   
}

