import { repl } from '@nestjs/core';
import { AppModule } from 'src/app.module';

// npm run start -- --entryFile repl (pnpm doesn't support --)
async function bootstrap() {
  await repl(AppModule);
}

bootstrap();

// await get("UserRepository").update({id: 1}, {role: 'regular'})
// await get("UserRepository").find()
