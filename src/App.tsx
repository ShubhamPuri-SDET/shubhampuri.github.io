
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { useAuth } from './contexts/AuthContext';
import PageLayout from './components/layout/PageLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Quote from './pages/Quote';
import DigitalInvitationGallery from './pages/DigitalInvitationGallery';
import ResumeSamples from './pages/ResumeSamples';
import BlogHome from './pages/BlogHome';
import BlogPostPage from './pages/BlogPostPage';
import Testimonials from './pages/Testimonials';
import Faq from './pages/Faq';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Referral from './pages/Referral';
import Login from './pages/Login';
import ScrollToTop from './components/ui/ScrollToTop';

// Dashboard components
import DashboardOverview from './components/dashboard/Overview';
import DashboardOrders from './components/dashboard/Orders';
import DashboardUpload from './components/dashboard/Upload';
import DashboardApprovals from './components/dashboard/Approvals';
import DashboardChat from './components/dashboard/Chat';
import DashboardNotifications from './components/dashboard/Notifications';
import DashboardPayments from './components/dashboard/Payments';
import DashboardSettings from './components/dashboard/Settings';

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* Public routes with Header and Footer */}
          <Route element={<PageLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<DigitalInvitationGallery />} />
            <Route path="/samples" element={<ResumeSamples />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<BlogHome />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/referral" element={<Referral />} />
          </Route>

          {/* Auth routes */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard routes */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          >
            <Route index element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<DashboardOverview />} />
            <Route path="orders" element={<DashboardOrders />} />
            <Route path="upload" element={<DashboardUpload />} />
            <Route path="approvals" element={<DashboardApprovals />} />
            <Route path="chat" element={<DashboardChat />} />
            <Route path="notifications" element={<DashboardNotifications />} />
            <Route path="payments" element={<DashboardPayments />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
