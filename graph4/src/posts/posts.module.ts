/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';

@Module({
  providers: [PostsResolver, PostsService],
  imports: [PrismaModule],
})
export class PostsModule { }