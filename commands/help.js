module.exports = {
    name: 'help',
    description: 'Help command.',
    execute(message, args){
        message.delete()
        if(message.member.roles.cache.find(r => r.name === "Moderator")){
            message.reply("\nModerator Commands: **Mute(Any Channel):** -mute <@user> time(s, m, h, d) (reason coming soon). **Kick:** -kick <@user>. **Ban:** -ban <@user> (time coming soon) *(DO NOT USE UNLESS NECESSARY!)*.\nOther Commands: **Request Division(#select-division):** -req dust or -req unturned or -req rovive.");    
        } else if(!message.member.roles.cache.find(r => r.name === "Moderator")){
            message.reply("**Request Division(#select-division):** -req dust or -req unturned or -req rovive.");
        }
    }   
}