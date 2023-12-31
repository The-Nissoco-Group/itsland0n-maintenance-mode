import { ActivityType, Client, GatewayIntentBits, type Interaction } from "discord.js";

const client = new Client({"intents": GatewayIntentBits.Guilds})

client.on("ready", () => {
    client.user?.setPresence({
        activities: [{
            name: `Maintenance Mode`,
            type: ActivityType.Playing,
        }],
        status: "dnd"
    })
})

client.on("interactionCreate", (interaction: Interaction) => {
    if (interaction.isRepliable()) {
        interaction.reply({content: "<a:deny:1190937442203734066> itsland0n is currently in maintenance mode. Please try again later", ephemeral: true})
    }
})

client.login(Bun.env.TOKEN);