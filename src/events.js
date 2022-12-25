const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder, EmbedBuilder } = require('discord.js');

player.on('error', (queue, error) => {
    console.log(`ERRO EMITIDO DA FILA! ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`ERRO EMITIDO DA CONEXAO! ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    const embed = new EmbedBuilder()
    .setAuthor({name: `TOCANDO AGORA: ${track.title} 🎧`, iconURL: track.requestedBy.avatarURL()})
    .setColor('#550091')

    const back = new ButtonBuilder()
    .setLabel('Voltar')
    .setCustomId(JSON.stringify({ffb: 'back'}))
    .setStyle('Primary')

    const skip = new ButtonBuilder()
    .setLabel('Pular')
    .setCustomId(JSON.stringify({ffb: 'skip'}))
    .setStyle('Primary')

    const resumepause = new ButtonBuilder()
    .setLabel('Despause % Pause')
    .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
    .setStyle('Danger')

    const loop = new ButtonBuilder()
    .setLabel('Loop')
    .setCustomId(JSON.stringify({ffb: 'loop'}))
    .setStyle('Secondary')
    
    const queuebutton = new ButtonBuilder()
    .setLabel('Fila')
    .setCustomId(JSON.stringify({ffb: 'queue'}))
    .setStyle('Secondary')

    const row1 = new ActionRowBuilder().addComponents(back, loop, resumepause, queuebutton, skip)
    queue.metadata.send({ embeds: [embed], components: [row1] })
});

player.on('trackAdd', (queue, track) => {
   
    queue.metadata.send(`**Musica Adicionada Na Fila** ✅`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('**Desconectado, Limpando Fila...** ❌');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('**Ninguem No Canal, Saindo Do Canal...** ❌');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('**Fila Finalizada** ✅');
});

player.on('tracksAdd', (queue, tracks) => {
    queue.metadata.send(`**Todas As Musicas Adicionadas a Fila** ✅`);
});