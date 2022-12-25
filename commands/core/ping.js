const ms = require('ms');

module.exports = {
    name: 'ping',
    description: "Veja O Ping Do Bot!",
    async execute({ client, inter }) {

        const m = await inter.reply("Ping?")
        inter.editReply(`**Pong! Latencia Da API É** ${Math.round(client.ws.ping)}ms 🛰️, **Ultimo Calculo Feito Há** ${ms(Date.now() - client.ws.shards.first().lastPingTimestamp, { long: true })} **Atras**`)

    },
};