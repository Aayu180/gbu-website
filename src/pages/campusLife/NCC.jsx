 import React, { useState, useEffect, useContext, createContext } from "react";
import {
  Shield,
  Users,
  Award,
  Image,
  BookOpen,
  Globe,
} from "lucide-react";

import HeroBanner from "../../components/HeroBanner";
import NCCIntroduction from "../../components/ncc/NCCIntroduction";
import NCCStructure from "../../components/ncc/NCCStructure";
import NCCTraining from "../../components/ncc/NCCTraining";
import NCCRegistration from "../../components/ncc/NCCRegistration";
import NCCEvents from "../../components/ncc/NCCEvents";
import NCCAchievements from "../../components/ncc/NCCAchievements";
import NCCResources from "../../components/ncc/NCCResources";
import NCCGallery from "../../components/ncc/NCCGallery";
import NCCSocialMedia from "../../components/ncc/NCCSocialMedia";
import SearchableWrapper from "../../components/Searchbar/SearchableWrapper";

// Tabs Context and Components
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
  <div
    className={`flex justify-center overflow-x-auto scrollbar-hide ${className}`}
    {...props}
  >
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

// Main NCC Component
const NCC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { value: "overview", label: "Overview", icon: BookOpen },
    { value: "structure", label: "Structure", icon: Shield },
    { value: "training", label: "Training", icon: Users },
    { value: "register", label: "Register", icon: Globe },
    { value: "events", label: "Events", icon: Globe },
    { value: "achievements", label: "Achievements", icon: Award },
    { value: "resources", label: "Resources", icon: BookOpen },
    { value: "gallery", label: "Gallery", icon: Image },
    { value: "social", label: "Social", icon: Globe },
  ];

  return (
    <SearchableWrapper>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
        <HeroBanner
          title="National Cadet Corps"
          subtitle='"Unity and Discipline"'
          bgTheme={1}
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
                  <NCCIntroduction />
                </TabsContent>
                <TabsContent value="structure">
                  <NCCStructure />
                </TabsContent>
                <TabsContent value="training">
                  <NCCTraining />
                </TabsContent>
                <TabsContent value="register">
                  <NCCRegistration />
                </TabsContent>
                <TabsContent value="events">
                  <NCCEvents />
                </TabsContent>
                <TabsContent value="achievements">
                  <NCCAchievements />
                </TabsContent>
                <TabsContent value="resources">
                  <NCCResources />
                </TabsContent>
                <TabsContent value="gallery">
                  <NCCGallery />
                </TabsContent>
                <TabsContent value="social">
                  <NCCSocialMedia />
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

export default NCC;
