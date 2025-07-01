import React, { useEffect, useState } from 'react';
import {
  Globe, Users, BookOpen, MapPin, Plane
} from 'lucide-react';

const Collaboration = () => {
  const [hero, setHero] = useState(null);
  const [partners, setPartners] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [opportunities, setOpportunities] = useState([]);
  const [cta, setCta] = useState(null);

  useEffect(() => {
    setHero({
      title: "Global Collaborations & MoUs",
      description: "Gautam Buddha University fosters global partnerships through active MoUs with leading universities and institutions worldwide to facilitate academic exchange, joint research, and innovation.",
      activemou_count: 37,
      participants_count: 450,
      countries_count: 18,
      publications_count: 120
    });

    setPartners([
      {
        id: 1,
        card_title: "Kyungdong University, South Korea",
        types: "International MoU",
        card_desc: "Joint degree programs, faculty and student exchange, and Korean language training.",
        country: "South Korea",
        since_year: "2017",
        url: "https://www.gbu.ac.in/Content.aspx?ID=MoU"
      },
      {
        id: 2,
        card_title: "University of Warwick, UK",
        types: "Research Collaboration",
        card_desc: "Joint research in data science and workshops on advanced analytics.",
        country: "United Kingdom",
        since_year: "2021",
        url: "https://www.gbu.ac.in/Content.aspx?ID=MoU"
      },
      {
        id: 3,
        card_title: "Tsinghua University, China",
        types: "Academic MoU",
        card_desc: "Collaborative online courses and student exchange in engineering programs.",
        country: "China",
        since_year: "2020",
        url: "https://www.gbu.ac.in/Content.aspx?ID=MoU"
      },
      {
        id: 4,
        card_title: "IIT Kanpur",
        types: "National MoU",
        card_desc: "Co-development of AI curriculum and joint student research internships.",
        country: "India",
        since_year: "2019",
        url: "https://www.gbu.ac.in/Content.aspx?ID=MoU"
      }
    ]);

    setPrograms([
      {
        id: 1,
        title: "Academic Exchange Programs",
        description: "Students gain global exposure through immersive programs with international universities.",
        card_title: "Semester Abroad with NTU Singapore",
        card_desc: "B.Tech students can spend a semester at NTU with full credit transfer and guided research.",
        duration: "1 Semester",
        participants: "25",
        benefits: "Global Certification\r\nResearch Supervision\r\nAccommodation Support\r\nCultural Immersion"
      },
      {
        id: 2,
        card_title: "Dual Degree with Kyungdong University",
        card_desc: "Earn a dual degree in Management or IT with 2 years each at GBU and KDU Korea.",
        duration: "4 Years",
        participants: "15",
        benefits: "Dual Degree\r\n100% Scholarship\r\nInternational Placement\r\nCultural Exchange"
      },
      {
        id: 3,
        card_title: "Research Fellowship with IIT Bombay",
        card_desc: "Summer research internships under GBU-IITB Collaborative Fellowship.",
        duration: "2 Months (Summer)",
        participants: "10",
        benefits: "Research Publication\r\nMentorship\r\nStipend\r\nLab Access"
      }
    ]);

    setOpportunities([
      {
        id: 1,
        title: "Global Opportunities 2025",
        description: "Upcoming funded international programs and training for students and faculty.",
        card_title: "Erasmus+ Europe Student Exchange",
        duration: "6 Months",
        benefits: "Travel and living funded\r\nCredit Transfer",
        eligibility: "UG/PG students with GPA above 7.0",
        deadline: "2025-08-10",
        url: "https://www.gbu.ac.in/Content.aspx?ID=International-Programs",
        button_text: "Apply Now"
      },
      {
        id: 2,
        card_title: "Shastri Indo-Canadian Research Program",
        duration: "3 Months",
        benefits: "Research Funding\r\nFaculty Exchange",
        eligibility: "Faculty/PhD Scholars",
        deadline: "2025-09-01",
        url: "https://www.gbu.ac.in/Content.aspx?ID=International-Programs",
        button_text: "Submit Proposal"
      },
      {
        id: 3,
        card_title: "Asia-Pacific AI Internship (Korea)",
        duration: "5 Months",
        benefits: "AI Research\r\nIndustry Mentorship\r\nStipend",
        eligibility: "Final year UG/PG students",
        deadline: "2025-07-15",
        url: "https://www.gbu.ac.in/Content.aspx?ID=International-Programs",
        button_text: "Apply"
      }
    ]);

    setCta({
      title: "Partner with GBU for Academic Excellence",
      description: "Join hands with Gautam Buddha University to foster global learning, joint innovation, and inclusive development.",
      background_color: "#e0f2fe",
      button1_text: "Explore MoUs",
      button2_text: "Become a Partner",
      url1: "https://www.gbu.ac.in/Content.aspx?ID=MoU",
      url2: "https://www.gbu.ac.in/Contact.aspx"
    });
  }, []);

  if (!hero || !cta) return <div className="text-center py-20">Loading...</div>;

  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 via-blue-600 to-indigo-600 text-white py-16">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">{hero.title}</h1>
          <p className="text-lg">{hero.description}</p>
        </div>
      </section>

      <section className="py-10 bg-white text-center grid grid-cols-2 sm:grid-cols-4 gap-6 px-4">
        {[
          { label: 'Active MOUs', metric: hero.activemou_count, icon: Globe },
          { label: 'Participants', metric: hero.participants_count, icon: Users },
          { label: 'Countries', metric: hero.countries_count, icon: MapPin },
          { label: 'Publications', metric: hero.publications_count, icon: BookOpen }
        ].map((stat, i) => (
          <div key={i}>
            <div className="w-12 h-12 mx-auto bg-blue-100 text-blue-600 flex items-center justify-center rounded-full mb-2">
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold">{stat.metric}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="py-10 bg-gray-50 px-4">
        <h2 className="text-center text-3xl font-bold mb-6">Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p) => (
            <div key={p.id} className="bg-white rounded-xl p-4 shadow">
              <h3 className="text-lg font-bold">{p.card_title}</h3>
              <p className="text-sm text-gray-600">{p.card_desc}</p>
              <p className="text-xs text-gray-500">Country: {p.country}</p>
              <p className="text-xs text-gray-500">Since {p.since_year}</p>
              <a href={p.url} className="text-blue-600 text-xs">View MoU</a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-white px-4">
        <h2 className="text-center text-3xl font-bold mb-6">{programs[0]?.title}</h2>
        <p className="text-center text-gray-600 mb-6">{programs[0]?.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p) => (
            <div key={p.id} className="border border-blue-100 p-4 rounded-lg">
              <h3 className="font-bold">{p.card_title}</h3>
              <p className="text-sm text-gray-600">{p.card_desc}</p>
              <p className="text-xs text-gray-500">Duration: {p.duration}</p>
              <p className="text-xs text-gray-500">Participants: {p.participants}</p>
              <ul className="text-xs list-disc pl-4">
                {p.benefits.split('\r\n').map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 bg-gray-50 px-4">
        <h2 className="text-center text-3xl font-bold mb-6">{opportunities[0]?.title}</h2>
        <p className="text-center text-gray-600 mb-6">{opportunities[0]?.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((o) => (
            <div key={o.id} className="bg-white rounded-xl shadow p-4 flex flex-col">
              <div className="flex justify-between mb-2">
                <Plane className="text-blue-600 w-5 h-5" />
                <span className="text-xs text-red-600">Deadline: {new Date(o.deadline).toLocaleDateString()}</span>
              </div>
              <h3 className="text-sm font-bold">{o.card_title}</h3>
              <p className="text-xs">Duration: {o.duration}</p>
              <p className="text-xs">Benefits: {o.benefits}</p>
              <p className="text-xs">Eligibility: {o.eligibility}</p>
              <a href={o.url} className="mt-auto bg-blue-600 text-white text-xs px-4 py-2 rounded text-center hover:bg-blue-700">
                {o.button_text}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10 px-4 text-center" style={{ backgroundColor: cta.background_color }}>
        <h2 className="text-3xl font-bold mb-2">{cta.title}</h2>
        <p className="text-gray-600 mb-4">{cta.description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={cta.url1} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">{cta.button1_text}</a>
          <a href={cta.url2} className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50">{cta.button2_text}</a>
        </div>
      </section>
    </div>
  );
};

export default Collaboration;
