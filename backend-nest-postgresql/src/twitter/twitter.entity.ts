import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'twitter' })
export class Twitter {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tweet: string;

  @Column()
  img: string;
}
