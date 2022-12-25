const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'jump',
    description: "Pule Para Uma Musica Da Fila",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'Nome/Url Para Onde Quer Pular',
            type: ApplicationCommandOptionType.String,
            required: false,
        },
        {
            name: 'number',
            description: 'Coloque o Numero Aqui',
            type: ApplicationCommandOptionType.Number,
            required: false,
        }
    ],

    async execute({ inter }) { 
        const track = inter.options.getString('song');
        const number =  inter.options.getNumber('number')

        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `**Nenhuma Musica Tocando...** ❓`, ephemeral: true });
        if (!track && !number) inter.reply({ content: `You have to use one of the options to jump to a song ${inter.member}... try again ? ❌`, ephemeral: true });

            if (track) {
        for (let song of queue.tracks) {
            if (song.title === track || song.url === track ) {
                queue.skipTo(song)
                return inter.reply({ content: `**Skipado Para** ${track} ✅` });
            }
        }
        return inter.reply({ content: `**Impossivel Achar** ${track} ${inter.member}... **Tente Denovo** ❌`, ephemeral: true });    
    }
    if (number) {
        const index = number - 1
        const trackname = queue.tracks[index].title
        if (!trackname) return inter.reply({ content: `**Essa Musica Não Esta Na Fila** ${inter.member}...  **Tente Denovo**❌`, ephemeral: true });   
        queue.skipTo(index);
        return inter.reply({ content: `**Pulado Para** ${trackname}  ✅` });
    }
         
    }
}