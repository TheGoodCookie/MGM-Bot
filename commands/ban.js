module.exports = {
    name: 'ban',
    description: 'Ban command.',
    execute(message, args){
        const prefix = '-';
        let globalSwitch = message.content.substring(prefix.length).split(" ");
        const ms = require('ms');

        message.delete()

        switch(globalSwitch[0]){
            case 'ban':
            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(globalSwitch[1]))
            if(!person) return message.channel.send("No user specified.");

            if(message.member.roles.cache.find(r => r.name === "Moderator")){
                if(!person.roles.cache.find(r => r.name === "Moderator")){
                    person.ban()
                    message.channel.send("<@" + person.id + ">" + " has been banned!")
                }            
            }
        }
    }   
}