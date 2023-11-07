import { Injectable } from '@nestjs/common';

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  user: string;
}

// DTO -> data transfer object
export interface CreateBlogPostDto {
  title: string;
  content: string;
  user: string;
}

@Injectable()
export class PostService {
  posts: BlogPost[] = [];

  getPosts(): BlogPost[] {
    return this.posts;
  }

  getPostUser(): string[] {
    const postUsers: string[] = this.posts.map((post: BlogPost) => {
      return post.user;
    });

    return postUsers;
  }

  getPostTitle(): string[] {
    const postTitles: string[] = this.posts.map((post: BlogPost) => {
      return post.title;
    });

    return postTitles;
  }

  createPost(body: CreateBlogPostDto): BlogPost {
    // em sẽ tạo id tăng dần theo số lượng bài post đang có. Ví dụ bài đầu tiên là id 1 ->  id 2
    const id: number = new Date().getTime();

    const newPost: BlogPost = {
      title: body.title,
      content: body.content,
      user: body.user,
      id: id,
    };

    this.posts.push(newPost);

    return newPost;
  }

  deletePost(id: number): boolean {
    const newPosts: BlogPost[] = this.posts.filter((post: BlogPost) => {
      return post.id !== id;
    });

    const deleteSuccess: boolean = newPosts.length < this.posts.length;

    this.posts = newPosts;

    return deleteSuccess;
  }
}
