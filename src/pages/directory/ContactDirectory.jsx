import React, { useState, useEffect, useMemo } from 'react';
import { Search, Users, Filter } from 'lucide-react';
import ContactCard from '../../components/directory/ContactCard';
import CategoryDropdown from '../../components/directory/CategoryDropdown';
import { contactsData } from './contactsData';

import BannerSection from '../../components/HeroBanner';
import SearchableWrapper from '../../components/Searchbar/SearchableWrapper';

const ContactDirectory = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setIsScrolled(scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ SAFE FILTER
  const filteredContacts = useMemo(() => {
    let filtered = contactsData;

    if (selectedCategory) {
      filtered = filtered.filter(
        (contact) => contact.category === selectedCategory
      );
    }

    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter((contact) =>
        (contact.name?.toLowerCase().includes(searchLower) ||
          contact.designation?.toLowerCase().includes(searchLower) ||
          contact.department?.toLowerCase().includes(searchLower) ||
          contact.email?.toLowerCase().includes(searchLower) ||
          contact.phone?.includes(searchTerm.trim()))
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
  };

  return (
    <SearchableWrapper>
      <div className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 min-h-screen smooth-transition">
        <BannerSection
          title="Contact Directory"
          subtitle="Gautam Buddha University"
          bgTheme={4} // or any theme number you want
        />

        <div
          className={`sticky top-0 z-50 bg-white/95 backdrop-blur-enhanced border-b border-slate-200/60 shadow-lg transition-all duration-500 ease-out ${
            isScrolled
              ? 'shadow-2xl backdrop-blur-enhanced'
              : 'shadow-md'
          }`}
        >
          <div className="container mx-auto px-4 py-4 md:py-6 animate-slide-down">
            <div className="space-y-4 lg:space-y-0 lg:flex lg:items-center lg:justify-around lg:gap-6">
              <div className="flex items-center justify-between lg:flex-col lg:items-start lg:justify-start lg:min-w-0">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-gradient-to-r from-blue-50 to-emerald-50 px-5 py-4.5 rounded-full border border-blue-100 smooth-hover animate-scale-in">
                    <Users className="h-4 w-4 text-blue-600 smooth-transition" />
                    <span className="text-blue-700 smooth-transition">
                      {filteredContacts.length}
                    </span>
                    <span className="hidden sm:inline text-slate-600 smooth-transition">
                      contacts
                    </span>
                  </div>

                  {(searchTerm || selectedCategory) && (
                    <button
                      onClick={clearFilters}
                      className="text-md font-medium text-slate-600 hover:text-blue-600 transition-all duration-300 px-3 py-4 rounded-xl hover:bg-blue-50 btn-smooth animate-fade-in-up"
                    >
                      Clear filters
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:flex-1 lg:max-w-4xl lg:justify-between">
                {/* Search Input */}
                <div className="relative flex-1 lg:flex-[0.5] lg:max-w-full animate-fade-in-up stagger-delay-1">
                  <Search
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 ${
                      isSearchFocused
                        ? 'text-blue-500 scale-110'
                        : 'text-slate-400'
                    }`}
                  />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className={`w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400 bg-white/80 text-slate-700 placeholder-slate-500 input-smooth hover:shadow-lg ${
                      isSearchFocused
                        ? 'bg-white shadow-xl ring-2 ring-blue-400/30'
                        : ''
                    }`}
                  />
                </div>

                {/* Category Filter */}
                <div className="flex items-center flex-1 lg:flex-[0.5] gap-2 sm:min-w-0 animate-fade-in-up stagger-delay-2">
                  <Filter className="h-4 w-4 text-slate-500 sm:hidden smooth-transition hover:scale-110" />
                  <CategoryDropdown
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          {filteredContacts.length === 0 ? (
            <div className="text-center py-16 md:py-24 animate-fade-in">
              <div className="max-w-md mx-auto">
                <div className="text-slate-400 mb-6 animate-scale-in">
                  <Search className="h-20 w-20 mx-auto mb-6 opacity-50 smooth-transition hover:scale-110 hover:rotate-3" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-slate-600 mb-3 animate-fade-in-up stagger-delay-1">
                  No contacts found
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed animate-fade-in-up stagger-delay-2">
                  {searchTerm || selectedCategory
                    ? "Try adjusting your search terms or category filter to find what you're looking for."
                    : 'No contacts are available at the moment.'}
                </p>
                {(searchTerm || selectedCategory) && (
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl btn-smooth animate-fade-in-up stagger-delay-3"
                  >
                    <Filter className="h-4 w-4 smooth-transition" />
                    Clear all filters
                  </button>
                )}
              </div>
            </div>
          ) : (
            <>
              {(searchTerm || selectedCategory) &&
                filteredContacts.length > 0 && (
                  <div className="mb-8 text-center animate-fade-in-up">
                    <p className="text-slate-600 text-lg text-reveal">
                      {searchTerm && (
                        <>
                          Showing results for{' '}
                          <span className="font-semibold text-blue-700">
                            "{searchTerm}"
                          </span>
                          {selectedCategory && (
                            <span className="text-slate-500"> in </span>
                          )}
                        </>
                      )}
                      {selectedCategory && (
                        <span className="font-semibold text-emerald-700">
                          {selectedCategory}
                        </span>
                      )}
                    </p>
                  </div>
                )}

              <div className="grid grid-cols-1 mx-30 sm:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredContacts.map((contact, index) => (
                  <div
                    key={contact.id}
                    className="animate-fade-in smooth-transition"
                    style={{
                      animationDelay: `${Math.min(index * 80, 800)}ms`,
                      animationFillMode: 'both',
                    }}
                  >
                    <ContactCard contact={contact} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </SearchableWrapper>
  );
};

export default ContactDirectory;
