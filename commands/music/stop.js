module.exports = {
    name: 'stop',
    description: 'Pare A Musica',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content:`**Nenhuma Musica Tocando...** ❓`, ephemeral: true });

        queue.destroy();

        inter.reply({ content: `**Musica parada, até outra hora** ✅`});
    },
};