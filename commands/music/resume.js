module.exports = {
    name: 'resume',
    description: 'Despause Sua Musica',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `**Nenhuma Musica Tocando...** ❓`, ephemeral: true });
        

        if(!queue.connection.paused) return inter.reply({content: `**A Musica Está Sendo Tocada,** ${inter.member}... ❌`, ephemeral: true})

        const success = queue.setPaused(false);
        
        return inter.reply({ content:success ? `**Musica Atual Despausada** ✅` : `**Algo Deu Errado ${inter.member}... Tente Denovo** ❌`});
    },
};
