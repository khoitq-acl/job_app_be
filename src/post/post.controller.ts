import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BlogPost, CreateBlogPostDto, PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPost(): any[] {
    return this.postService.getPosts();
  }

  @Get('user')
  getPostUser(): string[] {
    return this.postService.getPostUser();
  }

  @Get('title')
  getPostTitle(): string[] {
    return this.postService.getPostTitle();
  }

  // Create / new
  @Post()
  createPost(@Body() body: CreateBlogPostDto): BlogPost {
    return this.postService.createPost(body);
  }

  // Rest api -> id của dữ liệu để xoá
  // Delete
  @Delete(':id')
  deletePost(@Param() params: any): boolean {
    console.log('params: ', params);
    const id: number = +params.id;
    // riêng nút xoá -> http request -> localhost:3000/post/${id}
    return this.postService.deletePost(id);
  }
}
