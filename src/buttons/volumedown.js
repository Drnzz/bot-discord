const maxVol = client.config.opt.maxVol;

module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `****Nenhuma Musica Tocando...** ❓`, ephemeral: true });

        const vol = Math.floor(queue.volume - 5)

        if (vol < 0 ) return inter.reply({ content: `**Não Posso Abaixar o Volume** ${inter.member}... **Tentar Denovo** ❌`, ephemeral: true })
        
        if (queue.volume === vol) return inter.reply({ content: `**O Volume Ja Foi Modifiado** ${inter.member}... **Tente Denovo** ❌`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `**Volume Foi Abaixado **${vol}**/**${maxVol}**% 🔊` : `**Algo Deu Errado** ${inter.member}... **Tente Denovo** ❌`, ephemeral: true});
}