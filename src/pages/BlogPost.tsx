import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import PageHeader from '../components/ui/PageHeader';
import { Calendar, User, ArrowLeft } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-primary-600 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <PageHeader
        title={post.title}
        subtitle={`A deep dive into ${post.category}`}
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="mb-8">
            <Link to="/blog" className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:underline">
              <ArrowLeft size={16} className="mr-1" />
              Back to all articles
            </Link>
          </div>

          <article>
            <div className="mb-8">
              <img
                src={`https://images.unsplash.com/photo-${post.category === 'Web Development' ? '1461749280684-6e8b3e3e3e3e' : post.category === 'Career' ? '1586953208270-e1e0ce0e8cb8' : '1542744173-05336fcc7ad4'}?auto=format&fit=crop&w=1200&q=80`}
                alt={`Editorial workspace for an article on ${post.title}`}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="mt-4 flex items-center text-sm text-slate-500 dark:text-slate-400 space-x-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>Published on {post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1.5" />
                  <span>By {post.author}</span>
                </div>
              </div>
            </div>

            <div
              className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            >
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
