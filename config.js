/* 
Royal-MD V1.0
Coded BY CH HASEEB 

*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || 'youre session id',
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'youre POSTGRESQL url',
LANG: process.env.BOT_LANG || 'EN' ,
ANTI_BAD: process.env.ANTI_BAD || 'false',
MAX_SIZE: process.env.MAX_SIZE || 200,
ONLY_GROUP: process.env.ONLY_GROUP || 'false',
ANTI_LINK: process.env.ANTI_LINK || 'false' ,
ANTI_BOT: process.env.ANTI_BOT || 'false',
ALIVE: process.env.ALIVE || `default`,
FOOTER: process.env.FOOTER ||  '©Royal MD',
LOGO: process.env.LOGO || `https://telegra.ph/file/17dc3ef1830606fdb1988.jpg` 
};

// My YouTube : https://www.youtube.com/@mhmodsofc
