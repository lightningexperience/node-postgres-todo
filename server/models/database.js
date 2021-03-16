const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'mysql://wm4jfhlhd06yrpzk:ggevaba3yzcx2pif@g84t6zfpijzwx08q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/iabmgvpuekopvhlv';

const client = new pg.Client(connectionString);
client.connect();
const query = client.query(
  'CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', () => { client.end(); });
