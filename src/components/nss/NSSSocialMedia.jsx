import React from 'react';
// Minimal UI components for Card, CardContent, CardHeader, CardTitle, Button, and Badge

const Card = ({ className = '', children }) => (
  <div className={`rounded-lg shadow bg-white ${className}`}>{children}</div>
);

const CardContent = ({ className = '', children }) => (
  <div className={`px-4 py-4 sm:px-6 sm:py-6 ${className}`}>{children}</div>
);

const CardHeader = ({ className = '', children }) => (
  <div className={`border-b px-4 py-3 sm:px-6 sm:py-4 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
  <h4 className={`text-lg font-semibold ${className}`}>{children}</h4>
);

const Button = ({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 bg-white hover:bg-blue-50',
    secondary: 'bg-white text-green-600 border border-green-600 hover:bg-green-50'
  };
  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  return (
    <button
      className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Badge = ({
  children,
  className = '',
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: 'bg-blue-100 text-blue-700',
    outline: 'border border-blue-600 text-blue-600 bg-white',
    secondary: 'bg-blue-50 text-blue-600'
  };
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
import { ExternalLink, Share2, Users, Heart, MessageCircle } from 'lucide-react';

const NSSSocialMedia = () => {
  const socialHandles = [
    {
      platform: 'Facebook',
      handle: '@UniversityNSS',
      followers: '2.5K',
      link: 'https://facebook.com/universitynss',
      description: 'Updates on events, activities, and community impact',
      color: 'bg-blue-600',
      icon: '📘'
    },
    {
      platform: 'Instagram',
      handle: '@university_nss',
      followers: '3.2K',
      link: 'https://instagram.com/university_nss',
      description: 'Visual stories of our volunteer work and achievements',
      color: 'bg-pink-600',
      icon: '📷'
    },
    {
      platform: 'YouTube',
      handle: 'University NSS',
      followers: '1.8K',
      link: 'https://youtube.com/@universitynss',
      description: 'Training videos, event highlights, and impact stories',
      color: 'bg-red-600',
      icon: '📺'
    },
    {
      platform: 'Twitter',
      handle: '@UniversityNSS',
      followers: '1.2K',
      link: 'https://twitter.com/universitynss',
      description: 'Real-time updates and community engagement',
      color: 'bg-blue-500',
      icon: '🐦'
    }
  ];

  const recentPosts = [
    {
      id: 1,
      platform: 'Facebook',
      content:
        '🩸 Our Blood Donation Camp was a huge success! 150 units of blood collected, potentially saving 450 lives. Thank you to all volunteers and donors! #BloodDonation #NSS #CommunityService',
      image: '/placeholder.svg',
      date: '2024-01-16',
      likes: 245,
      shares: 32,
      comments: 18
    },
    {
      id: 2,
      platform: 'Instagram',
      content:
        '🌱 Tree plantation drive in full swing! Our volunteers are making the environment greener one sapling at a time. #GoGreen #NSS #Environment',
      image: '/placeholder.svg',
      date: '2024-01-14',
      likes: 189,
      shares: 24,
      comments: 12
    },
    {
      id: 3,
      platform: 'YouTube',
      content:
        'Watch our latest video: Digital Literacy Program Impact Story - How NSS volunteers are bridging the digital divide in rural communities.',
      image: '/placeholder.svg',
      date: '2024-01-12',
      likes: 156,
      shares: 45,
      comments: 28
    },
    {
      id: 4,
      platform: 'Twitter',
      content:
        'Proud to announce our NSS unit received the State Excellence Award for community service! 🏆 #NSS #Achievement #CommunityService',
      image: '/placeholder.svg',
      date: '2024-01-10',
      likes: 98,
      shares: 67,
      comments: 15
    }
  ];

  const hashtags = [
    '#NSS', '#CommunityService', '#VolunteerWork', '#SocialImpact',
    '#NotMeButYou', '#UniversityNSS', '#BloodDonation', '#DigitalLiteracy',
    '#Environment', '#HealthAwareness', '#RuralDevelopment', '#YouthPower'
  ];

  const engagementStats = {
    totalFollowers: 8700,
    monthlyReach: 25000,
    engagementRate: '4.2%',
    postsThisMonth: 24
  };

  const getPlatformIcon = (platform) => {
    const icons = {
      Facebook: '📘',
      Instagram: '📷',
      YouTube: '📺',
      Twitter: '🐦'
    };
    return icons[platform] || '📱';
  };

  const generateShareContent = (post) => {
    const baseUrl = window.location.href;
    const shareText = `${post.content} - Follow us for more updates!`;

    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(baseUrl)}&quote=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(baseUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl)}`
    };
  };

  return (
    <div className="space-y-8 mx-20">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Social Media Hub</h2>
        <p className="text-lg text-gray-600">
          Connect with us across platforms and stay updated with our latest activities
        </p>
      </div>

      {/* Engagement Statistics */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Social Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{engagementStats.totalFollowers.toLocaleString()}</div>
              <div className="text-blue-100">Total Followers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{engagementStats.monthlyReach.toLocaleString()}</div>
              <div className="text-blue-100">Monthly Reach</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{engagementStats.engagementRate}</div>
              <div className="text-blue-100">Engagement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{engagementStats.postsThisMonth}</div>
              <div className="text-blue-100">Posts This Month</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Media Handles */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialHandles.map((handle, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${handle.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto`}>
                  {handle.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{handle.platform}</h4>
                <p className="text-gray-600 mb-2">{handle.handle}</p>
                <div className="text-2xl font-bold text-blue-600 mb-4">{handle.followers}</div>
                <p className="text-sm text-gray-600 mb-4">{handle.description}</p>
                <Button
                  className="w-full"
                  onClick={() => window.open(handle.link, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Follow
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
  
    
    </div>
  );
};

export default NSSSocialMedia;
