module.exports = async ({  inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `****Nenhuma Musica Tocando...** ❓`, ephemeral: true });

    if (!queue.previousTracks[1]) return inter.reply({ content: `**Não Havia Musicas Tocadas Antes...**`, ephemeral: true });

    await queue.back();

    inter.reply({ content:`**Tocando Musica Anterior** ✅`, ephemeral: true});
}
