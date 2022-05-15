import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TwitterModule } from './twitter/twitter.module';
import { TwitterController } from './twitter/twitter.controller';
import { TwitterService } from './twitter/twitter.service';
import { Twitter } from './twitter/twitter.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'twitter',
      password: 'twitter',
      database: 'twitter',
      entities: [Twitter],
      synchronize: false,
    }),
    TwitterModule,
  ],
  controllers: [TwitterController],
  providers: [TwitterService],
})
export class AppModule {}
