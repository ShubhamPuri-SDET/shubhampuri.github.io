import React, { useState, useMemo } from 'react';
import PageHeader from '../components/ui/PageHeader';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { Calendar, User, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, cardHover } from '../lib/animations';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.summary.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="bg-background">
      <PageHeader
        title="Our Blog"
        subtitle="Insights, tips, and articles on web development, career services, and digital design."
      />
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter Controls */}
          <div className="mb-12">
            <div className="relative max-w-lg mx-auto mb-6">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 rounded-full border-slate-300 dark:border-slate-600 bg-background shadow-sm focus:border-primary-500 focus:ring-primary-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            </div>
            <div className="flex justify-center flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer()}
              initial="hidden"
              animate="show"
            >
              {filteredPosts.map(post => (
                <motion.div key={post.slug} variants={fadeInUp} whileHover={cardHover}>
                  <Link to={`/blog/${post.slug}`} className="block bg-slate-50 dark:bg-slate-900/50 rounded-lg overflow-hidden shadow-md h-full">
                    <img src={`https://images.unsplash.com/photo-${post.category === 'Web Development' ? '1461749280684-6e8b3e3e3e3e' : post.category === 'Career' ? '1586953208270-e1e0ce0e8cb8' : '1542744173-05336fcc7ad4'}?auto=format&fit=crop&w=500&q=80`} alt={`Editorial workspace for an article on ${post.title}`} className="w-full h-48 object-cover" />
                    <div className="p-6">
                      <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">{post.category}</p>
                      <h3 className="mt-2 text-xl font-bold text-foreground">{post.title}</h3>
                      <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">{post.summary}</p>
                      <div className="mt-4 flex items-center text-xs text-slate-500 dark:text-slate-400 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1.5" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1.5" />
                          {post.author}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-foreground">No Articles Found</h2>
              <p className="mt-2 text-slate-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
