import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import { blogPosts } from '../data/blogData.tsx';
import { ArrowRight } from 'lucide-react';

const BlogCard: React.FC<typeof blogPosts[0]> = ({ id, title, date, author, excerpt }) => {
  return (
    <div className="bg-background rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">{date} • {author}</p>
        <h3 className="text-xl font-bold mt-2 mb-3 text-foreground">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">{excerpt}</p>
        <Link to={`/blog/${id}`} className="font-semibold text-primary-600 dark:text-primary-400 hover:underline flex items-center">
          Read More <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

const BlogHome: React.FC = () => {
  return (
    <div className="bg-background">
      <PageHeader 
        title="Our Blog"
        subtitle="Insights, tips, and stories on branding, design, and career development."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
