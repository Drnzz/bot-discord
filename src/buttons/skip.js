module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `****Nenhuma Musica Tocando...** ❓`, ephemeral: true });
    
    const success = queue.skip();

    return inter.reply({ content: success ? `**A Musica Atual Foi Skipada** ✅` : `**Algo Deu Errado** ${inter.member}... **Tente Denovo** ❌`, ephemeral: true});
}