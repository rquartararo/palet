// connects our postgres database to our server

const Pool = require('pg').Pool;

const uri = 'postgres://buutetfr:IRII6Wgus0ucpg-jlJi6QdKDdHvimaqc@drona.db.elephantsql.com:5432/buutetfr';

const pool = new Pool({
  user: 'jimmyphong',
  password: '4500',
  host: 'localhost',
  port: 5432,
  database: 'palet'
})

const poolRemote = new Pool({
  connectionString: uri,
});

// module.exports = pool;
module.exports = poolRemote;