module.exports = {
    name: 'back',
    description: "Volte Para A Musica",
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `**Nenhuma Musica Tocando...** ❓`, ephemeral: true });

        if (!queue.previousTracks[1]) return inter.reply({ content: `**Nenhuma Musica Tocada Antes** ${inter.member}... **Tente Denovo** ❌`, ephemeral: true });

        await queue.back();

        inter.reply({ content:`**Tocando Musica Anterior** ✅`});
    },
};