import { config } from 'dotenv';
import 'module-alias/register';
import { DataSource } from 'typeorm';

config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: false,
  logging: true,
});

// Log thông tin để debug
console.log('Current directory:', __dirname);
console.log('Entities path:', __dirname + '/../**/*.entity{.ts,.js}');
console.log('Migrations path:', __dirname + '/../migrations/*{.ts,.js}');
