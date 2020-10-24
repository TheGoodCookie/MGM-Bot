module.exports = {
    name: 'unmute',
    description: 'Unmute command.',
    execute(message, args){
        const prefix = '-';
        let globalSwitch = message.content.substring(prefix.length).split(" ");

        message.delete()

        switch(globalSwitch[0]){
            case 'unmute':
                
            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(globalSwitch[1]))
            if(!person) return message.channel.send("No user specified.");

            if(message.member.roles.cache.find(r => r.name === "Moderator")){
                if(person.roles.cache.find(r => r.name === "Muted")){
                    person.roles.remove('722581844226473985').catch('console.error');
                    message.channel.send("<@" + person.id + ">" + " has now been unmuted");
                }
                break;              
            }
        
        }
    }   
}

