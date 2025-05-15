import { NestFactory } from '@nestjs/core';
import { error } from 'console';
import { AppModule } from './app.module';
import { AppDataSource } from './database/data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await AppDataSource.initialize();
  if (AppDataSource.isInitialized) {
    console.log('Database connection established');
  } else {
    console.error('Database connection failed', error);
    process.exit(1);
  }

  app.enableCors();
  await AppDataSource.runMigrations();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
