 import React, { useState, useEffect, useContext, createContext } from "react";
import {
  FileText,
  Building2,
  Target,
  UserPlus,
  Calendar,
  Trophy,
  BookOpen,
  Camera,
  MessageCircle,
  Users,
} from "lucide-react";

import NSSIntroduction from "../../components/nss/NSSIntroduction";
import NSSStructure from "../../components/nss/NSSStructure";
import NSSActivities from "../../components/nss/NSSActivities";
import NSSRegistration from "../../components/nss/NSSRegistration";
import NSSEvents from "../../components/nss/NSSEvents";
import NSSAchievements from "../../components/nss/NSSAchievements";
import NSSResources from "../../components/nss/NSSResources";
import NSSGallery from "../../components/nss/NSSGallery";
import NSSSocialMedia from "../../components/nss/NSSSocialMedia";
import HeroBanner from "../../components/HeroBanner";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";

const TabsContext = createContext();

const Tabs = ({ value, onValueChange, children, className = "", ...props }) => {
  const [active, setActive] = useState(value);
  useEffect(() => setActive(value), [value]);

  return (
    <TabsContext.Provider value={{ active, setActive: onValueChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className = "", ...props }) => (
  <div className={`flex justify-center overflow-x-auto scrollbar-hide ${className}`} {...props}>
    <div className="flex flex-wrap justify-center">{children}</div>
  </div>
);

const TabsTrigger = ({ value, children, className = "", ...props }) => {
  const ctx = useContext(TabsContext);
  const isActive = ctx.active === value;

  return (
    <button
      className={`relative flex items-center px-4 py-3 mx-1 text-xs sm:text-sm font-medium rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 whitespace-nowrap ${
        isActive
          ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-200"
          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 hover:border-blue-200"
      } ${className}`}
      onClick={() => ctx.setActive(value)}
      type="button"
      {...props}
    >
      {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg blur-sm opacity-30 -z-10"></div>
      )}
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, ...props }) => {
  const ctx = useContext(TabsContext);
  if (ctx.active !== value) return null;
  return (
    <div className="animate-fadeIn" {...props}>
      {children}
    </div>
  );
};

const NSS = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { value: "overview", label: "Overview", icon: FileText },
    { value: "structure", label: "Structure", icon: Building2 },
    { value: "activities", label: "Activities", icon: Target },
    { value: "register", label: "Register", icon: UserPlus },
    { value: "events", label: "Events", icon: Calendar },
    { value: "achievements", label: "Achievements", icon: Trophy },
    { value: "resources", label: "Resources", icon: BookOpen },
    { value: "gallery", label: "Gallery", icon: Camera },
    { value: "social", label: "Social", icon: MessageCircle },
  ];

  return (
    <SearchableWrapper>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <HeroBanner
          title="National Service Scheme"
          subtitle='"Not Me, But You"'
          bgTheme={10}
        />

        <div className="bg-white/80 backdrop-blur-sm shadow-lg sticky top-0 z-10 border-b border-blue-100">
          <div className="container mx-auto px-4 py-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="py-2">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <TabsTrigger key={tab.value} value={tab.value}>
                      <IconComponent size={16} className="mr-2" />
                      {tab.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              <div className="py-8">
                <TabsContent value="overview">
                  <NSSIntroduction />
                </TabsContent>
                <TabsContent value="structure">
                  <NSSStructure />
                </TabsContent>
                <TabsContent value="activities">
                  <NSSActivities />
                </TabsContent>
                <TabsContent value="register">
                  <NSSRegistration />
                </TabsContent>
                <TabsContent value="events">
                  <NSSEvents />
                </TabsContent>
                <TabsContent value="achievements">
                  <NSSAchievements />
                </TabsContent>
                <TabsContent value="resources">
                  <NSSResources />
                </TabsContent>
                <TabsContent value="gallery">
                  <NSSGallery />
                </TabsContent>
                <TabsContent value="social">
                  <NSSSocialMedia />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </SearchableWrapper>
  );
};

export default NSS;
