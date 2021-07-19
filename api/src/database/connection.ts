import Knex from 'knex';
// import { Pool } from 'pg';


// export const pool = new Pool(knexfile.connection);

export const database = Knex({
    client: 'pg',
    connection: 'postgres://cbfbovwf:AkqrM_bFhkx_9Wts_i-5ibwvkNirNOXE@motty.db.elephantsql.com/cbfbovwf'

});