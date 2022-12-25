const { QueueRepeatMode } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'loop',
    description: 'Repita Uma Musica',
    voiceChannel: true,
    options: [
        {
        name: 'action' ,
        description: 'Ação Do Loop',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'Queue', value: 'enable_loop_queue' },
            { name: 'Disable', value: 'disable_loop'},
            { name: 'Song', value: 'enable_loop_song' },
        ],
    }
    ],
    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `**Nenhuma Musica Tocando...** ❓`, ephemeral: true });
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.repeatMode === 1) return inter.reply({ content:`**Primeiro Desative O Antigo Loop (/loop Disable)** ${inter.member}... ❌`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.QUEUE);

                return inter.reply({ content:success ? `**Modo Repetir** Ativado **A Musica Atual Sera Repetida Infinitamente 🔁` : `Algo Deu Errado ${inter.member}... Tente Denovo** ❌` });
                break
            }
            case 'disable_loop': {
                const success = queue.setRepeatMode(QueueRepeatMode.OFF);

                return inter.reply({ content:success ? `**Modo Repetir Destivado**` : `**Algo Deu Errado** ${inter.member}... ❌` });
                break
            }
            case 'enable_loop_song': {
                if (queue.repeatMode === 2) return inter.reply({ content:`**Primeiro Desative O Antigo Loop (/loop Disable)** ${inter.member}... ❌`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.TRACK);
                
                return inter.reply({ content:success ? `**Modo Repetir** Ativado **A Musica Atual Sera Repetida Infinitamente **🔁` : `**Algo Deu Errado ${inter.member}... Tente Denovo** ❌` });
                break
            }
        }
       
    },
};