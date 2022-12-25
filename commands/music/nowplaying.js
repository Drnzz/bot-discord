const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    description: 'Veja Oque Esta Tocando!',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue) return inter.reply({ content: `**Nenhuma Musica Tocando...** ❓`, ephemeral: true });

        const track = queue.current;

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();

        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        const progress = queue.createProgressBar();
        

        const embed = new EmbedBuilder()
        .setAuthor({ name: track.title,  iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setThumbnail(track.thumbnail)
        .setDescription(`Volume **${queue.volume}**%\nDuracao **${trackDuration}**\nProgresso ${progress}\nLoop modo **${methods[queue.repeatMode]}**\nPedido por ${track.requestedBy}`)
        .setFooter({ text: '🎧', iconURL: inter.member.avatarURL({ dynamic: true })})
        .setColor('ff0000')
        .setTimestamp()

        const saveButton = new ButtonBuilder()
        .setLabel('Salve A Musica')
        .setCustomId(JSON.stringify({ffb: 'savetrack'}))
        .setStyle('Danger')

        const volumeup = new ButtonBuilder()
        .setLabel('Levantar Vol')
        .setCustomId(JSON.stringify({ffb: 'volumeup'}))
        .setStyle('Primary')

        const volumedown = new ButtonBuilder()
        .setLabel('Abaixar Vol')
        .setCustomId(JSON.stringify({ffb: 'volumedown'}))
        .setStyle('Primary')

        const loop = new ButtonBuilder()
        .setLabel('Loop')
        .setCustomId(JSON.stringify({ffb: 'loop'}))
        .setStyle('Danger')

        const resumepause = new ButtonBuilder()
         .setLabel('Despause & Pause')
         .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
         .setStyle('Success')



        const row = new ActionRowBuilder().addComponents(volumedown, saveButton, resumepause, loop, volumeup);

         inter.reply({ embeds: [embed], components: [row] });
    },
};