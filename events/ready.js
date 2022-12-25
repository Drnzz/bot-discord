module.exports = async (client) => {
    console.log(`Pronto Para Tocar ${client.user.username}\n-> Tocando Em ${client.guilds.cache.size} Servidores Para ${client.users.cache.size} Usuarios`);
    client.user.setActivity(client.config.app.playing);

    
};