const maxVol = client.config.opt.maxVol;

module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `****Nenhuma Musica Tocando...** â`, ephemeral: true });

        const vol = Math.floor(queue.volume - 5)

        if (vol < 0 ) return inter.reply({ content: `**NÃ£o Posso Abaixar o Volume** ${inter.member}... **Tentar Denovo** â`, ephemeral: true })
        
        if (queue.volume === vol) return inter.reply({ content: `**O Volume Ja Foi Modifiado** ${inter.member}... **Tente Denovo** â`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `**Volume Foi Abaixado **${vol}**/**${maxVol}**% ð` : `**Algo Deu Errado** ${inter.member}... **Tente Denovo** â`, ephemeral: true});
}