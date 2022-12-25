module.exports = {
    name: 'clear',
    description: 'Limpando Musicas Da Fila',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `**Nenhuma Musica Tocando...** ❓`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `**Nenhuma Musica Na Fila Apos a Atual** ${inter.member}... **Tente Denovo** ❌`, ephemeral: true });

        await queue.clear();

        inter.reply(`**Fila Foi Limpa** 🗑️`);
    },
};