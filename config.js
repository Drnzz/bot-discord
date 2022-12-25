module.exports = {
    app: {
        token: 'OTQ4OTk4NTAwNTkzNTg2MjE2.GVUzOp.I74HuMA3GUNdNy7fxQ4YVaXrmQz-GXWbTM9NSA',
        playing: '🎵 | Musicas',
        global: true,
        guild: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 200,
        leaveOnEnd: false,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 100,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
