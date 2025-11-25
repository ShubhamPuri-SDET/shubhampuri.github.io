import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { blogPosts } from '../data/blogData.tsx';
import { Calendar, User } from 'lucide-react';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="bg-background">
      <PageHeader 
        title={post.title}
        subtitle=""
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
