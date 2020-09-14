import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['warn', 'error'],
  });

  app.setGlobalPrefix('/api');

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationError: ValidationError[] = []) => {
        return new BadRequestException(validationError);
      },
      validationError: {
        target: false,
      },
    }),
  );

  const PORT = process.env.PORT || 5000;

  await app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
  });
}

bootstrap();
