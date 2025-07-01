import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, Download, Calendar, Eye, BookOpen,
  TrendingUp, Users
} from 'lucide-react';

const ReportsPublications = () => {
  const [hero, setHero] = useState(null);
  const [reports, setReports] = useState([]);

  const BASE = import.meta.env.VITE_HOST?.replace(/\/$/, '');

  const categories = ['All', 'Institutional', 'Accreditation', 'Finance', 'Student'];

  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'institutional':
        return 'bg-blue-100 text-blue-800';
      case 'accreditation':
        return 'bg-green-100 text-green-800';
      case 'finance':
        return 'bg-purple-100 text-purple-800';
      case 'student':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    // Static realistic data simulation for GBU context
    const heroData = {
      title: 'Reports & Publications',
      description:
        'Explore a comprehensive collection of institutional reports, financial audits, accreditations, and student achievements from Gautam Buddha University.',
      sub_title: 'Transparency & Academic Excellence',
      sub_description:
        'We prioritize openness and continuous improvement through timely reporting and documentation across academic and administrative domains.',
      reprts_count: 120,
      accreditation_count: 8,
      acheivements_counts: 45
    };

    const reportsData = [
      {
        id: 1,
        card_title: 'Annual Institutional Report 2024',
        card_desc: 'A detailed account of academic, research, and administrative activities for the year 2024.',
        category: 'Institutional',
        date: '2025-03-15',
        downloads: 2356,
        pages: 120,
        file_size_mb: 5.4,
        file: 'downloads/reports/annual_report_2024.pdf'
      },
      {
        id: 2,
        card_title: 'NAAC Accreditation Report',
        card_desc: 'NAAC peer team report with institutional assessment outcomes and recommendations.',
        category: 'Accreditation',
        date: '2023-11-05',
        downloads: 1728,
        pages: 84,
        file_size_mb: 3.2,
        file: 'downloads/reports/naac_accreditation.pdf'
      },
      {
        id: 3,
        card_title: 'Finance Audit Report 2023-24',
        card_desc: 'Audit report covering university finances, grants, and expenditures for FY 2023-24.',
        category: 'Finance',
        date: '2024-07-20',
        downloads: 980,
        pages: 95,
        file_size_mb: 4.1,
        file: 'downloads/reports/finance_audit_2023.pdf'
      },
      {
        id: 4,
        card_title: 'Student Achievements Digest 2024',
        card_desc: 'A compilation of national and international accolades received by students.',
        category: 'Student',
        date: '2025-01-25',
        downloads: 1460,
        pages: 52,
        file_size_mb: 2.8,
        file: 'downloads/reports/student_achievements_2024.pdf'
      },
      {
        id: 5,
        card_title: 'Academic Calendar Implementation Report',
        card_desc: 'Monitoring and review of the academic schedule compliance across departments.',
        category: 'Institutional',
        date: '2024-06-15',
        downloads: 894,
        pages: 60,
        file_size_mb: 2.5,
        file: 'downloads/reports/academic_calendar_review.pdf'
      },
      {
        id: 6,
        card_title: 'IQAC Annual Quality Assurance Report (AQAR)',
        card_desc: 'Annual report by the Internal Quality Assurance Cell as per NAAC guidelines.',
        category: 'Accreditation',
        date: '2024-12-10',
        downloads: 1120,
        pages: 88,
        file_size_mb: 3.9,
        file: 'downloads/reports/iqac_aqar_2024.pdf'
      }
    ];

    setHero(heroData);
    setReports(reportsData);
  }, []);

  if (!hero) return <div className="text-center py-20">Loading...</div>;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">{hero.title}</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto animate-fade-in">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{hero.sub_title}</h2>
            <p className="text-xl text-gray-600">{hero.sub_description}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: `${hero.reprts_count}+`,
                label: 'Institutional Reports',
                description: 'Published annually for transparency and progress',
                icon: <TrendingUp className="w-10 h-10 text-blue-600" />
              },
              {
                metric: `${hero.accreditation_count}`,
                label: 'National Accreditations',
                description: 'Recognized by top accreditation bodies',
                icon: <FileText className="w-10 h-10 text-green-600" />
              },
              {
                metric: `${hero.acheivements_counts}+`,
                label: 'Student Achievements',
                description: 'Awards and recognitions in various fields',
                icon: <Users className="w-10 h-10 text-purple-600" />
              }
            ].map((highlight, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-1">{highlight.metric}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">{highlight.label}</p>
                <p className="text-sm text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Report List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{hero.title}</h2>
            <p className="text-xl text-gray-600">{hero.description}</p>
          </div>

          {/* Filter Category UI */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
            <input
              type="text"
              placeholder="Search reports..."
              className="ml-4 px-4 py-2 rounded-full border border-gray-300 border-solid focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm"
              style={{ minWidth: 200 }}
              disabled
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reports.map((report, index) => (
              <div
                key={report.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{report.card_title}</h3>
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                          report.category
                        )}`}
                      >
                        {report.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{report.card_desc}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {new Date(report.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{report.downloads.toLocaleString()} downloads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{report.pages} pages</span>
                  </div>
                  <div className="text-gray-600">
                    PDF • {report.file_size_mb} MB
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to={`/reports/${report.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    View Details
                  </Link>
                  <a
                    href={`${BASE}/${report.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReportsPublications;
