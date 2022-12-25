const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'Ajuste o Volume',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'Numero Do Volume',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `**Nenhuma Musica Tocando...** ❓`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.volume === vol) return inter.reply({ content: `**O Volume Desejado Ja Esta Setado** ${inter.member}... **Tente Denovo **❌`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `**Volume Alterado Para** **${vol}**/**${maxVol}**% 🔊` : `**Algo Deu Errado** ${inter.member}... **Tente Denovo** ❌`});
    },
};