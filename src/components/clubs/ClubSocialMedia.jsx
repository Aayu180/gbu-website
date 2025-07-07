import React from 'react';
import { clubsData} from './data/clubsData';
import SearchableWrapper from '../Searchbar/SearchableWrapper';

const Card = ({ children, className, ...props }) => (
  <div className={`rounded-lg shadow bg-white ${className ?? ''}`} {...props}>{children}</div>
);

const CardHeader = ({ children, className, ...props }) => (
  <div className={`border-b px-4 py-3 ${className ?? ''}`} {...props}>{children}</div>
);

const CardTitle = ({ children, className, ...props }) => (
  <div className={`font-semibold text-lg ${className ?? ''}`} {...props}>{children}</div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={`px-4 py-3 ${className ?? ''}`} {...props}>{children}</div>
);

const Button = ({ children, className, ...props }) => (
  <button
    className={`rounded px-4 py-2 font-medium focus:outline-none ${className ?? ''}`}
    {...props}
  >
    {children}
  </button>
);

const ClubSocialMedia = ({ club }) => {
  const socialLinks = [
    {
      name: 'Instagram',
      url: club.socialMedia.instagram,
      icon: '📸',
      color: 'from-pink-500 to-purple-600',
      handle: '@' + club.name.toLowerCase().replace(/\s+/g, '_') + '_gbu'
    },
    {
      name: 'LinkedIn',
      url: club.socialMedia.linkedin,
      icon: '💼',
      color: 'from-blue-600 to-blue-700',
      handle: club.name + ' - GBU'
    },
    {
      name: 'YouTube',
      url: club.socialMedia.youtube,
      icon: '🎥',
      color: 'from-red-500 to-red-600',
      handle: club.name + ' GBU'
    },
    {
      name: 'WhatsApp',
      url: club.socialMedia.whatsapp,
      icon: '💬',
      color: 'from-green-500 to-green-600',
      handle: 'Join Group'
    }
  ].filter(link => link.url);

  return (
    <SearchableWrapper>
    <Card className="sticky top-8">
      <CardHeader>
        <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
          <span className="text-xl">🌐</span>
          Connect With Us
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            variant="outline"
            className={`w-full justify-start gap-3 hover:scale-105 transition-all duration-300 border-0 bg-gradient-to-r ${link.color} text-white hover:shadow-lg`}
            onClick={() => window.open(link.url, '_blank')}
          >
            <span className="text-lg">{link.icon}</span>
            <div className="text-left flex-1">
              <div className="font-medium">{link.name}</div>
              <div className="text-xs opacity-90 truncate">{link.handle}</div>
            </div>
          </Button>
        ))}
        {socialLinks.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            <span className="text-2xl mb-2 block">📱</span>
            <p className="text-sm">Social media links coming soon!</p>
          </div>
        )}
      </CardContent>
    </Card>
    </SearchableWrapper>
  );
};

export default ClubSocialMedia;
