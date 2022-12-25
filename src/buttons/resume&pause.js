module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `****Nenhuma Musica Tocando...** ❓`, ephemeral: true });

    const success = queue.setPaused(false);
    
    if (!success) queue.setPaused(true);
    

    return inter.reply({ content: `${success ? `**A Musica Atual Foi Despausada** ✅` : `**A Musica Atual Foi Pausada** ✅`}`, ephemeral: true});
}