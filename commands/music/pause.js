module.exports = {
    name: 'pause',
    description: 'Pause A Musica',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `**Nenhuma Musica Tocando...** ❓`, ephemeral: true });
        
        if(queue.connection.paused) return inter.reply({content: '**Musica Pausada!**', ephemeral: true})

        if(queue.connection.paused) return inter.reply({content: `**A Musica Ja Foi Pausada,** ${inter.member}... **Calma ae** ❌`, ephemeral: true})

        const success = queue.setPaused(true);
        
        return inter.reply({ content: success ? `**Musica Atual Pausada** ✅` : `**Algo Deu Errado ${inter.member}... Tente Denovo** ❌` });
    },
};
