module.exports = {
    name: 'skip',
    description: 'Pule A Musica',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

         if (!queue || !queue.playing) return inter.reply({ content:`**Nenhuma Musica Tocando...** ❓`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `**Musica Atual Skipada** ✅` : `**Algo deu errado ${inter.member}... Tente Denovo** ❌`});
    },
};