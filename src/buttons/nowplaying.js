const { EmbedBuilder } = require('discord.js');
module.exports = async ({ client, inter, queue }) => { 
    if (!queue || !queue.playing) return inter.reply({ content: `**Nenhuma Musica Tocando...** ❓`, ephemeral: true });

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

    inter.reply({ embeds: [embed], ephemeral: true });
}