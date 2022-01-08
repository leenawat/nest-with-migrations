console.log({ NODE_ENV: process.env.NODE_ENV });
const config = {
  host: 'localhost',
  type: 'mysql',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'nestdb',
  entities: ['src/**/**.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
  synchronize: false,
};

export = config;
