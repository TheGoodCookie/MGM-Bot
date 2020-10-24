module.exports = {
    name: 'apply',
    description: 'Apply command.',
    execute(message, args){
        message.delete()

        if(message.channel.id == '767217789944725544'){
            message.reply("How many hours do you have on Unturned? Steam > Library > Unturned > Play Time :\nWhich are you best in? (Farming, Building, PvPing, Scavenging) You can pick up to 2 :\nDo you have a basic understanding of all the core maps or at least a few? :\n\n**Please copy from the first question to the last and fill the app out in that format.**");
        } else if(message.channel.id == '768175548517843045'){
            message.reply("Dust applications are not open yet.");
        }  
    }   
}