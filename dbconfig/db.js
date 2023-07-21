
module.exports = {
    mongo_base_connection_url: 'mongodb://localhost:27017',
    mongo_db: 'mongodb://localhost:27017/shorturl',
    mongo_options: {
        autoReconnect: true,
        keepAlive: true,
        reconnectTries: 50,
        reconnectInterval: 1000,
        connectTimeoutMS: 5000000,
    }
}
console.log("Connection local mongo db");