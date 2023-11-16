import { DiscordRequest } from '../utils.js';
import { InteractionResponseType } from "discord-interactions";

// Display all current guild roles
export async function role(request, response) {
    let guildId = request.body.guild_id;
    let discordRequest = await DiscordRequest(`guilds/${guildId}/roles`, { method: 'GET' })
    let requestJson = await discordRequest.json()
    
    let roles = [];
    requestJson.forEach(role => {
      roles.push(role.name);
    });

    return response.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: roles.filter(r => r != "@everyone").join("\n")
        }
    });
}