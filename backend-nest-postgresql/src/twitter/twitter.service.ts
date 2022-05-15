import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, UpdateResult, Repository } from 'typeorm';
import { Twitter } from './twitter.entity';

@Injectable()
export class TwitterService {
  constructor(
    @InjectRepository(Twitter)
    private twitterRepository: Repository<Twitter>,
  ) {}

  async addTwitter(twitter: Twitter): Promise<InsertResult> {
    return this.twitterRepository.insert(twitter);
  }

  async findAll(): Promise<Twitter[]> {
    return this.twitterRepository.find();
  }

  async findOne(id: string): Promise<Twitter> {
    return this.twitterRepository.findOneBy({ id });
  }

  async update(id: string, twitter: Twitter): Promise<UpdateResult> {
    const twitterUpdate = await this.findOne(id);

    if (!twitterUpdate) throw new NotFoundException();

    return this.twitterRepository.update(id, twitter);
  }

  async delete(id: string): Promise<DeleteResult> {
    const twitterUpdate = await this.findOne(id);

    if (!twitterUpdate) throw new NotFoundException();

    return this.twitterRepository.delete(id);
  }
}
