const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: 'bgqlyyiuxy4lagus1gcm-mysql.services.clever-cloud.com',
    user: 'upzfcb5lazh82ux2',
    password: 'rbyugNdZHiPQtf0V5pG1',
    database: 'bgqlyyiuxy4lagus1gcm',
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
  });
  

module.exports = pool;
