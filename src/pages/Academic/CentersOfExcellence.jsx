import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Zap, ArrowRight, Users, Award, BookOpen } from 'lucide-react';

const iconMap = {
  'cyber security': Shield,
  'artificial intelligence': Brain,
  'drone technology': Zap,
  'data science': Brain,
  'robotics': Zap
};

const CentersOfExcellence = () => {
  const [heroData, setHeroData] = useState(null);
  const [centers, setCenters] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [ctaData, setCtaData] = useState(null);

  useEffect(() => {
    // Simulated Realistic Static Data for Gautam Buddha University
    setHeroData({
      title: 'Centers of Excellence at Gautam Buddha University',
      description:
        'Pioneering research and innovation across disciplines through state-of-the-art facilities and collaborative ventures.',
      background_color: '#4f46e5',
      coe_count: 6,
      ResearchAndstudents: 350,
      projects_count: 42,
      memberrs_count: 56
    });

    setCenters([
      {
        id: 1,
        title: 'Cyber Security',
        src: 'https://www.gbu.ac.in/Content/gbudata/ccc/assets/img/Artboard%201ccc%20banner%201.jpg',
        card_title: 'Centre for Cyber Security & Digital Forensics',
        card_desc:
          'Focused on cyber defense, ethical hacking, and security audits in collaboration with national agencies.',
        faculty_count: 10,
        student_count: 85,
        project_count: 7,
        director: 'Dr. Arvind Sharma'
      },
      {
        id: 2,
        title: 'Artificial Intelligence',
        src: 'https://theacademicinsights.com/wp-content/uploads/2023/09/AI-Cover-min.jpg',
        card_title: 'AI & Machine Learning Innovation Hub',
        card_desc:
          'Research on deep learning, NLP, and intelligent systems with industry tie-ups.',
        faculty_count: 12,
        student_count: 95,
        project_count: 9,
        director: 'Dr. Neelam Tomar'
      },
      {
        id: 3,
        title: 'Drone Technology',
        src: 'https://aviationa2z.com/wp-content/uploads/2022/05/1.jpg',
        card_title: 'Unmanned Aerial Systems (UAS) Research Center',
        card_desc:
          'Development of drones for agriculture, disaster response, and surveillance.',
        faculty_count: 7,
        student_count: 45,
        project_count: 5,
        director: 'Prof. P. K. Singh'
      },
      {
        id: 4,
        title: 'Robotics',
        src: 'https://www.ic3ecsbhi.com/Events/h1.jpg',
        card_title: 'Advanced Robotics & Automation Lab',
        card_desc:
          'Innovations in industrial and humanoid robotics, supported by Mechatronics faculty.',
        faculty_count: 9,
        student_count: 60,
        project_count: 6,
        director: 'Dr. Ritu Yadav'
      },
      {
        id: 5,
        title: 'Data Science',
        src: 'https://image-static.collegedunia.com/public/college_data/images/campusimage/14974457561497432917vd.JPG',
        card_title: 'Centre for Big Data Analytics & Insights',
        card_desc:
          'Predictive analytics and real-time processing for smart city applications.',
        faculty_count: 8,
        student_count: 70,
        project_count: 8,
        director: 'Dr. Vikas Bhardwaj'
      },
      {
        id: 6,
        title: 'Neuroscience',
        src: 'https://www.gbu.ac.in/Content/img/library.jpg',
        card_title: 'Cognitive & Neural Research Centre',
        card_desc:
          'Explores neuroplasticity, brain-machine interfaces and human cognition studies.',
        faculty_count: 10,
        student_count: 55,
        project_count: 7,
        director: 'Dr. Seema Kaushik'
      }
    ]);

    setGalleryImages([
      {
        src: 'https://media.licdn.com/dms/image/v2/D5622AQHVG_0tv1kIvg/feedshare-shrink_800/feedshare-shrink_800/0/1730694043057?e=2147483647&t=jnjdvPXCCmKKFg-96TITusoTjqgGIfhJtC7NWMQtC0Q&v=beta',
        caption: 'Inauguration of Cyber Security Lab',
        alt: 'Cyber Security Lab'
      },
      {
        src: 'https://media.licdn.com/dms/image/v2/D5622AQEqgJAOmjG-Jw/feedshare-shrink_800/B56ZR35co4HsAg-/0/1737178339299?e=2147483647&t=E71gq1Rjgkv32hWljiRHuHMyKs27Yl20ukTSjKnFVgY&v=beta',
        caption: 'AI & Machine Learning Symposium 2024',
        alt: 'AI Symposium'
      },
      {
        src: 'https://static.wixstatic.com/media/bc6a73_a51fa15dce7d4c229f9090932d2071f3~mv2.jpg/v1/fill/w_950,h_799,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bc6a73_a51fa15dce7d4c229f9090932d2071f3~mv2.jpg',
        caption: 'Drone Deployment Test in GBU Grounds',
        alt: 'Drone Testing'
      },
      {
        src: 'https://www.ic3ecsbhi.com/Gallery/ict.jpeg',
        caption: 'Robotics Expo organized by School of ICT',
        alt: 'Robotics Expo'
      },
      {
        src: 'https://media.licdn.com/dms/image/v2/D5622AQF8FOcZALWIRA/feedshare-shrink_800/feedshare-shrink_800/0/1732025068965?e=2147483647&t=8wjR3UulvxrAXrXlBrz-I0jY_SUKWmEuxFH2P7o8WVI&v=beta',
        caption: 'Data Science Workshop – Predictive Analytics',
        alt: 'Data Science Workshop'
      },
      {
        src: 'https://data.gbu.ac.in/Events/1561675342_IMG-20231028-WA0038%20%281%29.jpg',
        caption: 'Interdisciplinary Research Showcase 2023',
        alt: 'Research Showcase'
      }
    ]);

    setCtaData({
      title: 'Join the Next Wave of Innovation',
      description:
        'Collaborate with our Centers of Excellence and be part of a transformative journey that shapes future technologies.',
      button1_text: 'Explore Collaborations',
      url1: 'https://gbu.ac.in/research/collaborations',
      button2_text: 'Apply as a Research Fellow',
      url2: 'https://gbu.ac.in/research/fellowship'
    });
  }, []);

  if (!heroData || !ctaData) return <div className="text-center py-10">Loading...</div>;

  return (
    <>
      {/* Hero Section */}
      <section className="text-white py-20" style={{ backgroundColor: heroData.background_color }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{heroData.title}</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">{heroData.description}</p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <StatCard icon={<Award className="w-8 h-8 text-purple-600" />} value={heroData.coe_count} label="Centers of Excellence" bg="bg-purple-100" />
            <StatCard icon={<Users className="w-8 h-8 text-blue-600" />} value={`${heroData.ResearchAndstudents}+`} label="Researchers & Students" bg="bg-blue-100" />
            <StatCard icon={<BookOpen className="w-8 h-8 text-green-600" />} value={`${heroData.projects_count}+`} label="Research Projects" bg="bg-green-100" />
            <StatCard icon={<Shield className="w-8 h-8 text-orange-600" />} value={heroData.memberrs_count} label="Faculty Members" bg="bg-orange-100" />
          </div>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Centers of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our centers drive excellence in research, technology, and societal impact through interdisciplinary collaboration and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {centers.map((center, index) => {
              const IconComponent = iconMap[center.title.toLowerCase()] || Shield;

              return (
                <div
                  key={center.id}
                  className="bg-white rounded-3xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group animate-fade-in"
                >
                  <div className="h-52 relative bg-gradient-to-br from-gray-600 to-gray-800 overflow-hidden flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-white z-10" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">{center.card_title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{center.card_desc}</p>

                    <div className="grid grid-cols-3 gap-4 text-center mb-4">
                      <div>
                        <div className="text-lg font-bold text-blue-600">{center.faculty_count}</div>
                        <div className="text-xs text-gray-500">Faculty</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600">{center.student_count}</div>
                        <div className="text-xs text-gray-500">Students</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">{center.project_count}</div>
                        <div className="text-xs text-gray-500">Projects</div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Director:</span> {center.director}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Gallery of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore moments of innovation, collaboration, and brilliance captured from across our Centers of Excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-3 text-sm backdrop-blur-sm">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">{ctaData.title}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{ctaData.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={ctaData.url1} target="_blank" rel="noopener noreferrer"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors transform hover:scale-105"
            >
              {ctaData.button1_text}
            </a>
            <a href={ctaData.url2} target="_blank" rel="noopener noreferrer"
              className="border border-purple-600 border-solid text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              {ctaData.button2_text}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const StatCard = ({ icon, value, label, bg }) => (
  <div className="animate-fade-in">
    <div className={`${bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
      {icon}
    </div>
    <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </div>
);

export default CentersOfExcellence;
