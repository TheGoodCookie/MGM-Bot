module.exports = {
    name: 'verify',
    description: 'Verify command.',
    execute(message, args){
        if(message.channel.id == '766752651714887761'){
            message.member.roles.remove('766752449453096989').catch('console.error');
            message.member.roles.add('766749296728866826').catch('console.error');        
        }
    }   
}

