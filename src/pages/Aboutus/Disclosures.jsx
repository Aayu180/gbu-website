import React, { useState } from 'react';
 
import {
  CheckCircle,
  Download,
  Eye,
  FileText,
  Award,
  Users,
  DollarSign,
  Calendar
} from 'lucide-react';

const Disclosures = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const disclosures = [
    {
      category: 'Academic Information',
      icon: FileText,
      color: 'from-blue-400 to-blue-600',
      items: [
        { title: 'NAAC Accreditation Certificate', status: 'completed', lastUpdated: '2024' },
        { title: 'Academic Calendar 2024-25', status: 'completed', lastUpdated: '2024' },
        { title: 'Fee Structure', status: 'completed', lastUpdated: '2024' },
        { title: 'Admission Criteria', status: 'completed', lastUpdated: '2024' }
      ]
    },
    {
      category: 'Financial Disclosures',
      icon: DollarSign,
      color: 'from-green-400 to-green-600',
      items: [
        { title: 'Annual Financial Statement', status: 'completed', lastUpdated: '2023-24' },
        { title: 'Audit Report', status: 'completed', lastUpdated: '2023-24' },
        { title: 'Budget Allocation', status: 'completed', lastUpdated: '2024-25' },
        { title: 'Expenditure Report', status: 'completed', lastUpdated: '2023-24' }
      ]
    },
    {
      category: 'Faculty Information',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
      items: [
        { title: 'Faculty Qualification Details', status: 'completed', lastUpdated: '2024' },
        { title: 'Student-Faculty Ratio', status: 'completed', lastUpdated: '2024' },
        { title: 'Faculty Development Programs', status: 'completed', lastUpdated: '2024' },
        { title: 'Research Publications', status: 'completed', lastUpdated: '2024' }
      ]
    },
    {
      category: 'Infrastructure Details',
      icon: Award,
      color: 'from-red-400 to-red-600',
      items: [
        { title: 'Campus Facilities', status: 'completed', lastUpdated: '2024' },
        { title: 'Library Resources', status: 'completed', lastUpdated: '2024' },
        { title: 'Laboratory Details', status: 'completed', lastUpdated: '2024' },
        { title: 'Hostel Facilities', status: 'completed', lastUpdated: '2024' }
      ]
    }
  ];

  const complianceMetrics = [
    { label: 'NAAC Grade', value: 'A+', description: 'Accreditation Status' },
    { label: 'Compliance Rate', value: '98%', description: 'Regulatory Compliance' },
    { label: 'Transparency Index', value: '95%', description: 'Information Disclosure' },
    { label: 'Audit Score', value: 'A', description: 'Financial Audit Rating' }
  ];

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return ( <>
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-emerald-900 via-teal-800 to-blue-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3")'
          }}
        ></div>
        {/* <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Mandatory Disclosures</h1>
            <p className="text-xl opacity-90">Transparency and Accountability in Education</p>
          </div>
        </div> */}
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Mandatory Disclosures</h1>
            <p className="text-xl opacity-90">Transparency and Accountability in Education</p>
          </div>
        </div>
      </section>

      {/* Compliance Dashboard */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Compliance Dashboard</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {complianceMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20 hover:shadow-3xl transition-all duration-300">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{metric.value}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{metric.label}</h3>
                  <p className="text-gray-600">{metric.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Disclosure Categories */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {disclosures.map((disclosure, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full p-8 text-left hover:bg-white/50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${disclosure.color} rounded-2xl flex items-center justify-center mr-6`}>
                      <disclosure.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{disclosure.category}</h3>
                      <p className="text-gray-600">{disclosure.items.length} items available</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mr-4">
                      ✓ Complete
                    </span>
                    <Eye className="w-6 h-6 text-gray-400" />
                  </div>
                </button>

                {expandedSection === index && (
                  <div className="border-t border-gray-200">
                    <div className="p-8 bg-gray-50/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {disclosure.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                </div>
                                <div className="flex items-center text-sm text-gray-500 mb-4">
                                  <Calendar className="w-4 h-4 mr-2" />
                                  Last Updated: {item.lastUpdated}
                                </div>
                              </div>
                              <button className="text-emerald-600 hover:text-emerald-800 transition-colors">
                                <Download className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Regulatory Compliance</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <RegulatoryCard icon={<Award className="w-10 h-10 text-white" />} title="UGC Recognition" desc="Recognized by University Grants Commission" color="from-blue-400 to-blue-600" />
                <RegulatoryCard icon={<CheckCircle className="w-10 h-10 text-white" />} title="NAAC Accredited" desc="National Assessment and Accreditation Council" color="from-green-400 to-green-600" />
                <RegulatoryCard icon={<FileText className="w-10 h-10 text-white" />} title="AICTE Approved" desc="All India Council for Technical Education" color="from-purple-400 to-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>
  </>
  );
};

const RegulatoryCard = ({ icon, title, desc, color }) => (
  <div className="text-center">
    <div className={`w-20 h-20 bg-gradient-to-br ${color} rounded-full flex items-center justify-center mx-auto mb-6`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </div>
   
);

export default Disclosures;
