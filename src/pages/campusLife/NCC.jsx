import React, {
  useState,
  useEffect,
  Children,
  isValidElement,
  cloneElement,
} from "react";
import { Shield, Users, Award } from "lucide-react";
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

const Tabs = ({ value, onValueChange, children, className = "", ...props }) => {
  // Pass value and onValueChange via context
  const [active, setActive] = React.useState(value);
  React.useEffect(() => setActive(value), [value]);
  return (
    <TabsContext.Provider value={{ active, setActive: onValueChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsContext = React.createContext();

const TabsList = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const TabsTrigger = ({ value, children, className = "", ...props }) => {
  const ctx = React.useContext(TabsContext);
  const isActive = ctx.active === value;
  return (
    <button
      className={`transition-colors border-b-2 ${
        isActive
          ? "border-blue-600 text-blue-600 bg-blue-50"
          : "border-transparent text-gray-700 hover:bg-gray-100"
      } font-medium focus:outline-none ${className}`}
      onClick={() => ctx.setActive(value)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, ...props }) => {
  const ctx = React.useContext(TabsContext);
  if (ctx.active !== value) return null;
  return <div {...props}>{children}</div>;
};

// Main NCC Page
const NCC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <SearchableWrapper>
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}

      <HeroBanner
        title="National Cadet Corps"
        subtitle='"Unity and Discipline"'
        bgTheme={1}
      />
      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-1 p-1">

              <TabsTrigger value="overview" className="text-xs sm:text-lg lg:text-sm py-3">
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="structure"
                className="text-xs sm:text-lg  lg:text-sm py-3"
              >
                Structure
              </TabsTrigger>
              <TabsTrigger value="training" className="text-xs sm:text-lg lg:text-sm py-3">
                Training
              </TabsTrigger>
              <TabsTrigger value="register" className="text-xs sm:text-lg lg:text-sm py-3">
                Register
              </TabsTrigger>
              <TabsTrigger value="events" className="text-xs sm:text-lg lg:text-sm py-3">
                Events
              </TabsTrigger>
              <TabsTrigger
                value="achievements"
                className="text-xs sm:text-lg lg:text-sm py-3"
              >
                Achievements
              </TabsTrigger>
              <TabsTrigger
                value="resources"
                className="text-xs sm:text-lg  lg:text-sm py-3"
              >
                Resources
              </TabsTrigger>
              <TabsTrigger value="gallery" className="text-xs sm:text-lg  lg:text-sm py-3">
                Gallery 
              </TabsTrigger>
              <TabsTrigger value="social" className="text-xs sm:text-lg  lg:text-sm py-3">
                Social
              </TabsTrigger>
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
    </SearchableWrapper>
  );
};

export default NCC;
