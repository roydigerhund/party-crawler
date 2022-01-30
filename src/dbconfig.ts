import { Pool } from 'pg';

export default new Pool ({
    max: 20,
    connectionString: 'postgres://partycrawler:partycrawler@localhost:5432/partycrawler',
    idleTimeoutMillis: 30000
});