import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { error } from 'console';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filters';
import { AppDataSource } from './database/data-source';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('API docs')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new AllExceptionsFilter());
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
