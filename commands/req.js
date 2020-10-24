module.exports = {
    name: 'req',
    description: 'Request command.',
    execute(message, args){
        const prefix = '-';
        let globalSwitch = message.content.substring(prefix.length).split(" ");
        const ms = require('ms');

        message.delete()

        switch(globalSwitch[0]){
            case 'req':
            
            let div = globalSwitch[1].toString().toLowerCase();

            if(div == 'dust'){
                if(message.channel.id == '768208227228975175'){
                    if(!message.member.roles.cache.find(r => r.name === "Dust")){
                        message.member.roles.add('767481592276713522');
                        message.reply("you now have the Dust role!")    
                    }
                }
            } else if(div == 'rovive'){
                if(message.channel.id == '768208227228975175'){
                    if(!message.member.roles.cache.find(r => r.name === "Rovive")){
                        message.member.roles.add('768212130700722178');
                        message.reply("you now have the Rovive role!")    
                    }
                }
            } else if(div == 'unturned'){
                if(message.channel.id == '768208227228975175'){
                    if(!message.member.roles.cache.find(r => r.name === "Unturned")){
                        message.member.roles.add('767193755031306261');
                        message.reply("you now have the Unturned role!")    
                    }
                }
            }
        }
    }   
}