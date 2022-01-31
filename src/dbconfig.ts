import { Pool } from 'pg';

export default new Pool({
  max: 20,
  connectionString: 'postgres://partycrawler:partycrawler@localhost:5433/partycrawler',
  idleTimeoutMillis: 3000000,
  connectionTimeoutMillis: 3000000,
  statement_timeout: 30000,
});
