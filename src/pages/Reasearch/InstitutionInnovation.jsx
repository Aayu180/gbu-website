import React, { useState, useEffect } from 'react';
import {
    ChevronDown, Calendar, Users, Award, Lightbulb, Target, BookOpen,
    ExternalLink, Menu, X, Star, ArrowRight, Building, Globe, Trophy,
    Zap, Brain, Rocket, Shield, Eye, Heart, MapPin, Phone, Mail,
    CheckCircle, Play, TrendingUp, Clock, User, Briefcase, GraduationCap,
    MessageCircle, Share2, Download, Search, Filter, ChevronRight,
    ArrowUp, Sparkles, Coffee, Code, Palette, Camera, Mic, Video,
    Monitor, Smartphone, Tablet, Database, Server, Cloud, Cpu,
    Activity, BarChart, PieChart, LineChart, Settings, Bell, Flag,
    Compass, Map, Navigation, Plane, Car, Train, Ship, Home, Building2
} from 'lucide-react';

const InstitutionInnovation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrollY, setScrollY] = useState(0);
    const [currentEventIndex, setCurrentEventIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);

        // Simulate loading
        setTimeout(() => setIsLoading(false), 100);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Auto-rotate featured events
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEventIndex((prev) => (prev + 1) % featuredEvents.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const stats = [
        { number: "2700+", label: "Institutions", icon: <Building className="w-8 h-8" />, color: "from-blue-500 to-cyan-500" },
        { number: "9232", label: "Certificate No.", icon: <Award className="w-8 h-8" />, color: "from-green-500 to-emerald-500" },
        { number: "100+", label: "Events Organized", icon: <Calendar className="w-8 h-8" />, color: "from-purple-500 to-pink-500" },
        { number: "5000+", label: "Students Impacted", icon: <Users className="w-8 h-8" />, color: "from-orange-500 to-red-500" }
    ];

    const functions = [
        {
            title: "Innovation Activities",
            description: "Conduct various Innovation, IPR and entrepreneurship-related activities in time bound fashion",
            icon: <Lightbulb className="w-10 h-10" />,
            color: "from-yellow-400 to-orange-500",
            features: ["Innovation Workshops", "IPR Sessions", "Entrepreneurship Training"]
        },
        {
            title: "Reward & Recognition",
            description: "Identify and reward innovations and share success stories across the institution",
            icon: <Trophy className="w-10 h-10" />,
            color: "from-emerald-400 to-teal-500",
            features: ["Innovation Awards", "Success Stories", "Recognition Programs"]
        },
        {
            title: "Workshops & Seminars",
            description: "Organize periodic workshops/seminars with entrepreneurs, investors, and professionals",
            icon: <BookOpen className="w-10 h-10" />,
            color: "from-blue-400 to-indigo-500",
            features: ["Expert Sessions", "Industry Interactions", "Mentor Pool"]
        },
        {
            title: "Innovation Portal",
            description: "Create portal to highlight innovative projects by faculty and students",
            icon: <Monitor className="w-10 h-10" />,
            color: "from-purple-400 to-pink-500",
            features: ["Project Showcase", "Innovation Gallery", "Digital Platform"]
        },
        {
            title: "Hackathons & Competitions",
            description: "Organize idea competitions, mini-challenges with industry involvement",
            icon: <Code className="w-10 h-10" />,
            color: "from-red-400 to-pink-500",
            features: ["Coding Challenges", "Innovation Contests", "Industry Partnerships"]
        },
        {
            title: "Network Building",
            description: "Connect with peers and national entrepreneurship development organizations",
            icon: <Globe className="w-10 h-10" />,
            color: "from-cyan-400 to-blue-500",
            features: ["National Network", "Peer Connections", "Collaboration Hub"]
        }
    ];

    const focusAreas = [
        { title: "Vibrant Innovation Ecosystem", icon: <Sparkles className="w-6 h-6" />, description: "Create dynamic local innovation environment" },
        { title: "Startup Support Mechanism", icon: <Rocket className="w-6 h-6" />, description: "Comprehensive startup support in HEIs" },
        { title: "Atal Ranking Preparation", icon: <TrendingUp className="w-6 h-6" />, description: "Prepare for innovation achievements framework" },
        { title: "Idea Scouting Ecosystem", icon: <Search className="w-6 h-6" />, description: "Establish functional ecosystem for pre-incubation" },
        { title: "Cognitive Development", icon: <Brain className="w-6 h-6" />, description: "Enhance student cognitive abilities" }
    ];

    const featuredEvents = [
        {
            title: "Academic R&D to Startups",
            speaker: "Prof. V. Ramgopal Rao",
            designation: "Former Director, IIT Delhi",
            date: "29th September, 2022",
            attendees: "2000+ students, 300+ faculty",
            type: "Keynote Lecture",
            description: "Comprehensive session on transforming academic research into successful startups",
            image: "🎓"
        },
        {
            title: "National Innovation Day",
            speaker: "Dr. A.P.J. Abdul Kalam Tribute",
            designation: "Innovation Celebration",
            date: "15th October, 2022",
            attendees: "University Wide",
            type: "Celebration",
            description: "Commemorating the birth anniversary of Dr. Kalam with innovation activities",
            image: "🚀"
        },
        {
            title: "Machine Learning for Process Design",
            speaker: "Multiple Experts",
            designation: "Industry Professionals",
            date: "5-10 June, 2023",
            attendees: "Online Training",
            type: "Training Program",
            description: "Comprehensive training on ML techniques and tools in Python",
            image: "🤖"
        }
    ];

    const allEvents = [
        {
            title: "Academic R&D to Startups",
            speaker: "Prof. V. Ramgopal Rao, Former Director, IIT Delhi",
            date: "29th September, 2022",
            attendees: "2000+ students, 300+ faculty",
            type: "Lecture",
            category: "Academic",
            description: "How to transform academic research into successful startups"
        },
        {
            title: "Water Centric Urban Planning",
            speaker: "Prof. K.K. Dhote, MANIT Bhopal",
            date: "12th October, 2022",
            attendees: "Online Session",
            type: "Workshop",
            category: "Urban Planning",
            description: "Live session on sustainable urban development approaches"
        },
        {
            title: "National Innovation Day",
            speaker: "Dr. A.P.J. Abdul Kalam Tribute",
            date: "15th October, 2022",
            attendees: "University Wide",
            type: "Celebration",
            category: "Innovation",
            description: "Commemorating Dr. Kalam's contributions to innovation"
        },
        {
            title: "Computational Design",
            speaker: "Mr. Firas Salim Noori, Ajman University, UAE",
            date: "1st November, 2022",
            attendees: "Online Session",
            type: "Workshop",
            category: "Technology",
            description: "Advanced computational design methodologies"
        },
        {
            title: "E-Commerce Opportunities & Challenges",
            speaker: "Mr. Pankaj Gupta",
            date: "2nd November, 2022",
            attendees: "Management Students",
            type: "Expert Lecture",
            category: "Business",
            description: "Entrepreneurial opportunities in e-commerce sector"
        },
        {
            title: "National Education Day",
            speaker: "Mr. Vivek Singh, IP Attorney",
            date: "11th November, 2022",
            attendees: "University Wide",
            type: "Celebration",
            category: "Education",
            description: "Intellectual Property awareness and education"
        },
        {
            title: "Machine Learning for Process Design",
            speaker: "Multiple Experts",
            date: "5-10 June, 2023",
            attendees: "Online Training",
            type: "Training",
            category: "Technology",
            description: "Comprehensive ML training program"
        },
        {
            title: "Startup Meet",
            speaker: "15 Startups, 50 Students",
            date: "10th August, 2023",
            attendees: "15 faculty mentors",
            type: "Meet",
            category: "Startup",
            description: "Networking event connecting startups with students"
        },
        {
            title: "IPR Awareness Programme",
            speaker: "Council of Science and Technology",
            date: "24th February, 2024",
            attendees: "University Wide",
            type: "Programme",
            category: "IPR",
            description: "National awareness program on intellectual property rights"
        },
        {
            title: "Poster Making Competition",
            speaker: "All Students",
            date: "28th February, 2024",
            attendees: "60+ entries",
            type: "Competition",
            category: "Creative",
            description: "University-level poster making competition"
        }
    ];

    const achievements = [
        { title: "MIC Establishment", description: "Ministry of Education established Innovation Cell", icon: <Building className="w-6 h-6" /> },
        { title: "2700+ Institutions", description: "Network of IICs across India", icon: <Globe className="w-6 h-6" /> },
        { title: "Certificate 9232", description: "GBU registered with IASHE code U-0514", icon: <Award className="w-6 h-6" /> },
        { title: "Innovation Ecosystem", description: "Vibrant local innovation environment", icon: <Lightbulb className="w-6 h-6" /> }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isLoading) {
        return (
            <div className="min-h-screen  flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-white mb-2">Loading Innovation...</h2>
                    {/* <p className="text-blue-200">Gautam Buddha University - IIC</p> */}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"></div>
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/10 rounded-full animate-pulse delay-500"></div>
                </div>

                <div className="relative container mx-auto px-4 text-center">
                    {/* <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium mb-8 animate-fadeIn">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            Certificate No. 9232 | IASHE Code: U-0514
        </div> */}

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        Institution's
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-2">
                            Innovation Council
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Fostering Innovation & Entrepreneurship Culture at
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => setActiveSection('about')}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                        >
                            Explore Innovation
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => setActiveSection('events')}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                        >
                            View Events
                        </button>
                    </div>
                </div>

            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        >
                            <div
                                className={`w-16 h-16 mx-auto mb-5 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center text-white text-2xl`}
                            >
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                            <p className="text-gray-500 text-sm uppercase tracking-wide font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>



            {/* About Section */}
            <section className="py-20 bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            About IIC
                        </h2>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                            The Ministry of Education (MoE), Government of India has established 'MoE's Innovation Cell (MIC)'
                            to systematically foster the culture of Innovation among all Higher Education Institutions (HEIs).
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                        <div className="space-y-8">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-600">Our Mission</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    To encourage, inspire and nurture young students by supporting them to work with new ideas
                                    and transform them into prototypes during their formative years.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                                        <Eye className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-purple-600">Our Vision</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    To create a vibrant innovation ecosystem that promotes entrepreneurship and transforms
                                    innovative ideas into successful startups.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                            <h3 className="text-2xl font-bold mb-8 text-emerald-600 flex items-center">
                                <Compass className="w-8 h-8 mr-3" />
                                Major Focus Areas
                            </h3>
                            <div className="space-y-6">
                                {focusAreas.map((area, index) => (
                                    <div key={index} className="flex items-start space-x-4 group">
                                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                            {area.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">{area.title}</h4>
                                            <p className="text-gray-600 text-sm">{area.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white mb-4">
                                    {achievement.icon}
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{achievement.title}</h3>
                                <p className="text-gray-600 text-sm">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Functions Section */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Functions of IIC
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our comprehensive approach to fostering innovation and entrepreneurship
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {functions.map((func, index) => (
                            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                                <div className={`w-16 h-16 bg-gradient-to-r ${func.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                                    {func.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">{func.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{func.description}</p>
                                <div className="space-y-2">
                                    {func.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-center text-sm text-gray-500">
                                            <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Events Carousel */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                            Featured Events
                        </h2>
                        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                            Highlighting our most impactful innovation and entrepreneurship events
                        </p>
                    </div>

                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="text-8xl mb-6">{featuredEvents[currentEventIndex].image}</div>
                                    <div className="flex items-center mb-4">
                                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${featuredEvents[currentEventIndex].type === 'Keynote Lecture' ? 'bg-blue-500/20 text-blue-300' :
                                            featuredEvents[currentEventIndex].type === 'Celebration' ? 'bg-purple-500/20 text-purple-300' :
                                                'bg-green-500/20 text-green-300'
                                            }`}>
                                            {featuredEvents[currentEventIndex].type}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">{featuredEvents[currentEventIndex].title}</h3>
                                    <p className="text-blue-200 text-lg mb-2">{featuredEvents[currentEventIndex].speaker}</p>
                                    <p className="text-blue-300 mb-4">{featuredEvents[currentEventIndex].designation}</p>
                                    <p className="text-gray-300 leading-relaxed">{featuredEvents[currentEventIndex].description}</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center text-blue-200">
                                        <Calendar className="w-5 h-5 mr-3" />
                                        <span>{featuredEvents[currentEventIndex].date}</span>
                                    </div>
                                    <div className="flex items-center text-blue-200">
                                        <Users className="w-5 h-5 mr-3" />
                                        <span>{featuredEvents[currentEventIndex].attendees}</span>
                                    </div>
                                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center">
                                        Learn More
                                        <ExternalLink className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Carousel Indicators */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {featuredEvents.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentEventIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentEventIndex ? 'bg-white' : 'bg-white/30'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Events Section */}
            <section className="py-20 bg-white/80 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            All Events
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Comprehensive list of our innovation and entrepreneurship activities
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allEvents.map((event, index) => (
                            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${event.type === 'Lecture' ? 'bg-blue-100 text-blue-800' :
                                        event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                                            event.type === 'Training' ? 'bg-purple-100 text-purple-800' :
                                                event.type === 'Competition' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-orange-100 text-orange-800'
                                        }`}>
                                        {event.type}
                                    </span>
                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        {event.category}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold mb-3 text-gray-800 leading-tight">{event.title}</h3>
                                <p className="text-blue-600 font-medium mb-2 text-sm">{event.speaker}</p>
                                <p className="text-gray-600 text-sm mb-2 flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {event.date}
                                </p>
                                <p className="text-gray-500 text-sm mb-3 flex items-center">
                                    <Users className="w-4 h-4 mr-1" />
                                    {event.attendees}
                                </p>
                                <p className="text-gray-600 text-sm">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                            Join the Innovation Journey
                        </h2>
                        <p className="text-xl mb-8 text-blue-200 leading-relaxed">
                            Be part of GBU's thriving innovation ecosystem and transform your ideas into reality.
                            Connect with like-minded innovators, access cutting-edge resources, and build the future.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                                Get Involved
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section >
        </div>
    )
        ;
};

export default InstitutionInnovation;