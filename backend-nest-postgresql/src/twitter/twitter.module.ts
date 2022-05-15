import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Twitter } from './twitter.entity';
import { TwitterController } from './twitter.controller';
import { TwitterService } from './twitter.service';

@Module({
  imports: [TypeOrmModule.forFeature([Twitter])],
  controllers: [TwitterController],
  providers: [TwitterService],
  exports: [TypeOrmModule],
})
export class TwitterModule {}
