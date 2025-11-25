import { BarChart, Brush, Code, FileText, Gem, Linkedin, Mail, PenTool, Search, CheckCircle, Award, Users, Smile } from 'lucide-react';

export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/about', key: 'about', label: 'About' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/gallery', key: 'gallery', label: 'Gallery' },
  { href: '/samples', key: 'samples', label: 'Samples' },
  { href: '/pricing', key: 'pricing', label: 'Pricing' },
  { href: '/blog', key: 'blog', label: 'Blog' },
  { href: '/testimonials', key: 'testimonials', label: 'Testimonials' },
  { href: '/faq', key: 'faq', label: 'FAQ' },
  { href: '/contact', key: 'contact', label: 'Contact' },
];

export const SERVICES = [
  {
    title: 'Website Development',
    description: 'Crafting bespoke, high-performance websites for businesses that captivate and convert.',
    icon: Code,
    details: {
      intro: "Build a professional, responsive, and fast website tailored to your business needs.",
      includes: [
        "Custom design",
        "Mobile-friendly layout",
        "SEO optimization",
        "Contact forms",
        "WhatsApp chat",
        "Portfolio or product listings",
        "Admin dashboard (optional upgrade)"
      ],
      industries: ["Restaurants", "Small businesses", "Coaching", "Consultants", "Freelancers", "Salons", "Agencies", "E-commerce"]
    }
  },
  {
    title: 'Digital Invitations',
    description: 'Designing elegant digital invitations for weddings, birthdays, and corporate events.',
    icon: Mail,
    details: {
      intro: "We design premium, trendy, and fully personalized digital invites.",
      types: ["Wedding invitations", "Birthday invitations", "Baby shower", "Business events", "Festival greetings", "Engagement ceremonies", "Anniversaries"],
      features: ["Animation", "Photos & videos", "Theme customization", "QR Code for event location"]
    }
  },
  {
    title: 'Printing Services',
    description: 'High-quality printing for business cards, banners, flyers, and marketing materials.',
    icon: Brush,
    details: {
      intro: "Print materials that reflect your brand perfectly.",
      prints: ["Business Cards", "Posters", "Banners", "Flyers", "Brochures", "Menu cards", "Event standees"]
    }
  },
  {
    title: 'Resume & Profile Services',
    description: 'ATS-friendly resumes and profile optimization to get you noticed.',
    icon: FileText,
    details: {
      intro: "Get an ATS-friendly CV that increases your chances of hiring.",
      offers: ["Professional resume writing", "Student resumes", "Cover letters", "Portfolio website", "Portfolio PDFs", "LinkedIn optimization", "Naukri profile rewrite", "Job referral assistance"]
    }
  },
  {
    title: 'Portfolio Creation',
    description: 'Building stunning portfolios for students and professionals to showcase their work.',
    icon: Gem,
  },
  {
    title: 'LinkedIn Profile Optimization',
    description: 'Optimizing your LinkedIn & Naukri profiles to attract recruiters and opportunities.',
    icon: Linkedin,
  },
  {
    title: 'Job Referrals',
    description: 'Leverage our network to get job referrals in top companies.',
    icon: Search,
  },
  {
    title: 'And More...',
    description: 'We are constantly expanding our services to meet your business needs.',
    icon: PenTool,
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Gallery", href: "/gallery" },
  ],
  support: [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQ", href: "/faq" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Get a Quote", href: "/quote" },
  ],
};

export const WHY_CHOOSE_US_POINTS = [
  "Professional Designs",
  "Fast Delivery",
  "Affordable Pricing",
  "100% Customizable",
  "Direct Support",
  "Customer Dashboard to track your order"
];

export const STATS = [
  { value: 300, label: "Websites Created", icon: Code },
  { value: 1500, label: "Resumes Designed", icon: FileText },
  { value: 900, label: "Invitation Cards Delivered", icon: Mail },
  { value: 98, label: "Client Satisfaction", icon: Smile, suffix: "%" }
];

export const TESTIMONIALS = [
  {
    quote: "The website they delivered helped us get more clients in the first week! The design is modern and the performance is excellent.",
    name: "Priya Sharma",
    title: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "My resume transformation was incredible. The ATS-friendly format and professional writing helped me land a job within 14 days.",
    name: "Rohit Malhotra",
    title: "Student",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Our digital wedding invite was a big hit! Everyone loved the animations and the elegant design. It was so easy to share.",
    name: "Anjali & Karan",
    title: "Wedding Couple",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "InnovateX provided top-notch printing services for our business cards and banners. The quality was outstanding and delivery was fast.",
    name: "Sunita Reddy",
    title: "Business Owner",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The LinkedIn optimization service was game-changing. My profile views increased 5x and I started getting recruiter messages within a week!",
    name: "Arjun Patel",
    title: "Software Engineer",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Professional, responsive, and delivered exactly what we needed. Our portfolio website has helped us win multiple client projects.",
    name: "Maya Desai",
    title: "Graphic Designer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const FAQ_DATA = [
  {
    question: "How long does it take to deliver a website?",
    answer: "A basic website typically takes 3-5 days, while more complex projects with e-commerce functionality can take up to 10 days. We prioritize quality and will give you a clear timeline when we start."
  },
  {
    question: "Can I request revisions to the design?",
    answer: "Absolutely! We include 2-5 revision rounds for each project, depending on the service package. Your satisfaction is our priority, and we'll work with you to get the design just right."
  },
  {
    question: "Will my resume be ATS-friendly?",
    answer: "Yes, all our resumes are crafted to be Applicant Tracking System (ATS) friendly. We use modern formatting and relevant keywords to ensure your resume gets past the initial screening and into the hands of a recruiter."
  },
  {
    question: "Do you take urgent orders?",
    answer: "Yes, we offer expedited services for most of our offerings for a small additional fee. If you're on a tight deadline, just let us know, and we'll prioritize your project."
  },
  {
    question: "What information do you need to start?",
    answer: "It depends on the service. For a website, we'll need your content, logo, and any design preferences. For a resume, we'll ask for your work history and career goals. We have a simple onboarding process for each service."
  }
];

export const BLOG_POSTS = [
  {
    slug: "5-things-every-business-website-must-have",
    title: "5 Things Every Business Website Must Have in 2025",
    summary: "Discover the essential elements for a successful business website, including SEO, clarity, fast-loading pages, clear CTAs, and a mobile-first layout.",
    category: "Web Development",
    date: "2025-07-15",
    author: "Alex Johnson",
    content: `
            <p class="lead">In today's digital-first world, your website is often the first interaction a potential customer has with your business. To make a lasting impression and convert visitors into clients, your site needs more than just a pretty design. Here are five non-negotiable elements every business website must have in 2025.</p>
            <h3>1. A Clear Value Proposition</h3>
            <p>Within seconds, a visitor should understand who you are, what you do, and why they should care. Your headline and subheadline must be crystal clear. Don't use jargon; speak directly to your audience's pain points and offer a solution.</p>
            <blockquote class="border-l-4 border-primary-500 pl-4 italic">"Don't make them think. If they have to guess what you do, you've already lost."</blockquote>
            <h3>2. Mobile-First, Responsive Design</h3>
            <p>Over 60% of web traffic comes from mobile devices. If your website isn't optimized for smaller screens, you're alienating a huge portion of your audience. A mobile-first approach ensures a seamless experience on any device, which is crucial for user retention and SEO.</p>
            <h3>3. Blazing-Fast Load Times</h3>
            <p>Patience is a virtue few possess online. If your site takes more than three seconds to load, you're losing visitors. Optimize images, leverage browser caching, and use a reliable hosting provider to ensure your pages load almost instantly. Page speed is a significant ranking factor for Google.</p>
            <h3>4. Strategic Calls-to-Action (CTAs)</h3>
            <p>Every page on your website should guide the user toward a specific action. Whether it's "Get a Quote," "Contact Us," or "Download Our Guide," your CTAs should be prominent, compelling, and strategically placed. Don't make your visitors think about what to do next—tell them.</p>
            <h3>5. Search Engine Optimization (SEO) Fundamentals</h3>
            <p>A beautiful website is useless if no one can find it. Basic on-page SEO is crucial. This includes using relevant keywords in your titles, headings, and content; writing descriptive meta tags; creating a logical site structure; and ensuring your site is crawlable by search engines. This foundational work is the key to attracting organic traffic.</p>
        `
  },
  {
    slug: "how-to-make-your-resume-stand-out",
    title: "How to Make Your Resume Stand Out in 2025",
    summary: "Learn expert tips on ATS optimization, modern design, keyword usage, and personalization to make your resume impossible to ignore.",
    category: "Career Services",
    date: "2025-07-10",
    author: "Samantha Lee",
    content: `
            <p class="lead">Landing an interview in 2025 is tougher than ever. With recruiters spending an average of just seven seconds on each resume, yours needs to make an immediate impact. Here's how to ensure your resume not only gets noticed but also gets you the interview.</p>
            <h3>1. Beat the Bots (ATS Optimization)</h3>
            <p>Most large companies use Applicant Tracking Systems (ATS) to filter resumes. To pass this initial screening, you must include keywords from the job description. Use standard section headings like "Work Experience" and "Education," and avoid complex formatting, tables, or graphics that can confuse the software.</p>
            <h3>2. Quantify Your Achievements</h3>
            <p>Don't just list your responsibilities; showcase your impact with numbers. Instead of saying "Managed social media accounts," say "Grew social media engagement by 300% over six months by implementing a new content strategy." Quantifiable results provide concrete evidence of your value.</p>
            <h3>3. Tailor It for Every Application</h3>
            <p>A one-size-fits-all resume is a recipe for rejection. Take the time to customize your resume for each job you apply for. Mirror the language used in the job description, highlight the most relevant skills and experiences, and show that you're the perfect fit for that specific role.</p>
            <h3>4. Embrace a Clean, Modern Design</h3>
            <p>While content is king, design matters. A clean, professional, and easy-to-read layout makes a great first impression. Use a modern font, ensure there's plenty of white space, and use bolding or color sparingly to draw attention to key information. A well-designed resume is a reflection of your professionalism.</p>
        `
  },
  {
    slug: "why-digital-invitations-are-the-future",
    title: "Why Digital Invitations Are the Future",
    summary: "Explore the benefits of digital invitations, from convenience and instant sharing to eco-friendliness and endless customization options.",
    category: "Digital Design",
    date: "2025-07-05",
    author: "Maria Garcia",
    content: `
            <p class="lead">While traditional paper invitations have their charm, digital invitations are rapidly becoming the go-to choice for modern events, from weddings to corporate launches. Here's why they represent the future of event planning.</p>
            <h3>1. Unmatched Convenience</h3>
            <p>With digital invites, you can send your invitations to hundreds of guests with a single click via email, WhatsApp, or social media. No more addressing envelopes or dealing with postage. Plus, guests can RSVP instantly with a tap, making guest list management a breeze.</p>
            <h3>2. Eco-Friendly and Sustainable</h3>
            <p>Choosing digital over paper is a simple yet impactful way to reduce your event's environmental footprint. It saves trees, reduces waste, and eliminates the carbon emissions associated with printing and shipping.</p>
            <h3>3. Dynamic and Interactive Features</h3>
            <p>Digital invitations can do things paper never could. Embed animated maps to your venue, include a gallery of photos, add a video message, or link directly to your gift registry. These interactive elements create a richer, more engaging experience for your guests.</p>
            <h3>4. Cost-Effective</h3>
            <p>Printing and mailing hundreds of high-quality paper invitations can be incredibly expensive. Digital invitations offer a premium look and feel at a fraction of the cost, freeing up your budget for other important aspects of your event.</p>
        `
  }
];

export const COMPARISON_DATA = {
  title: "Website Feature Comparison",
  tiers: [
    { name: "Basic Portfolio", id: "basic" },
    { name: "Business Website", id: "business", popular: true },
    { name: "E-commerce", id: "ecommerce" }
  ],
  features: [
    { feature: "Number of Pages", values: { basic: "1-3", business: "Up to 8", ecommerce: "Unlimited" } },
    { feature: "Custom Design", values: { basic: true, business: true, ecommerce: true } },
    { feature: "Responsive Layout", values: { basic: true, business: true, ecommerce: true } },
    { feature: "Contact Form", values: { basic: true, business: true, ecommerce: true } },
    { feature: "Basic SEO Setup", values: { basic: true, business: true, ecommerce: true } },
    { feature: "CMS Integration", values: { basic: false, business: true, ecommerce: true } },
    { feature: "Advanced SEO", values: { basic: false, business: true, ecommerce: true } },
    { feature: "Payment Gateway", values: { basic: false, business: false, ecommerce: true } },
    { feature: "Product Management", values: { basic: false, business: false, ecommerce: true } },
    { feature: "Support", values: { basic: "Email", business: "Priority Email", ecommerce: "Dedicated Support" } },
  ]
};
