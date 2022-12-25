const maxVol = client.config.opt.maxVol;
module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `****Nenhuma Musica Tocando...** ❓`, ephemeral: true });

    const vol = Math.floor(queue.volume + 5)

    if (vol > maxVol ) return inter.reply({ content: `**Não Posso Aumentar o Volume **${inter.member}... **Tente Denovo** ❌`, ephemeral: true })

    if (queue.volume === vol) return inter.reply({ content: `**O Volume Que Voce Deseja Ja Foi Setado** ${inter.member}... **Espere e Tente Denovo** ❌`, ephemeral: true });

    const success = queue.setVolume(vol);

    return inter.reply({ content:success ? `**O Volume Foi Aumentado **${vol}**/**${maxVol}**% 🔊` : `**Algo Deu Errado** ${inter.member}... **Tente Denovo** ❌`, ephemeral: true});
}