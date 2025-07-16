import React, { useState } from "react";
import {
  Crown,
  Users,
  Building,
  GraduationCap,
  DollarSign,
  User,
  NotebookPen,
} from "lucide-react";
const data = {
  academic: [
    {
      date: "24th April 2025",
      description: "Academic Council Meeting - 25",
      link: "",
    },
    {
      date: "18th March 2025",
      description: "Academic Council Meeting - 24",
      link: "",
    },
    {
      date: "05th January 2024",
      description: "Academic Council Meeting - 23",
      link: "",
    },
    {
      date: "06th April 2023",
      description: "Academic Council Meeting - 22",
      link: "",
    },
    {
      date: "30th August 2022",
      description: "Academic Council Meeting - 21",
      link: "",
    },
    {
      date: "20th March 2022",
      description: "Academic Council Meeting - 20",
      link: "",
    },
    {
      date: "14th June 2021",
      description: "Academic Council Meeting - 19",
      link: "",
    },
    {
      date: "14th August 2020",
      description: "Academic Council Meeting - 18",
      link: "",
    },
    {
      date: "13th March 2019",
      description: "Academic Council Meeting - 17",
      link: "",
    },
    {
      date: "10th March 2018",
      description: "Academic Council Meeting - 16",
      link: "",
    },
  ],

  boardOfManagement: [
    {
      date: "24.02.2023",
      description: "3rd Meeting of the Board of Management",
      link: "",
    },
    {
      date: "06.02.2023",
      description: "2nd Meeting of the Board of Management",
      link: "",
    },
    {
      date: "30.10.2022",
      description: "1st Meeting of the Board of Management",
      link: "",
    },
  ],

  boardOfGovernors: [
    {
      date: "25 June 2018",
      description: "Board Of Governors Meeting - VI",
      link: "",
    },
    {
      date: "18 September 2017",
      description: "Board Of Governors Meeting - V",
      link: "",
    },
    {
      date: "01 August 2015",
      description: "Board Of Governors Meeting - IV",
      link: "",
    },
    {
      date: "6 May 2011",
      description: "Board Of Governors Meeting - III",
      link: "",
    },
    {
      date: "10 February 2010",
      description: "Board Of Governors Meeting - II",
      link: "",
    },
    {
      date: "03 February 2009",
      description: "Board Of Governors Meeting - I",
      link: "",
    },
  ],
};

const governanceData = {
  executive: {
    title: "Academic Council",
    icon: <Crown className="w-6 h-6" />,
    members: [
      {
        photo: "/images/governance/rps.jpg",
        name: "Prof. Rana Pratap Singh",
        role: "Vice Chancellor, Gautam Buddha University",
      },
      {
        photo: "/images/governance/dk.jpg",
        name: "Prof. Dinesh Kumar",
        role: "Vice Chancellor, Gurugram University",
      },
      {
        photo: "/images/governance/psc.jpg",
        name: "Prof. Pradeep Singh Chauhan",
        role: "Center of Economics Studies and Planning, JNU, Delhi",
      },
      {
        photo: "/images/governance/rcs.jpg",
        name: "Prof. Ram Chandra Singh",
        role: "Mechanical Engg, DTU Delhi",
      },
      {
        photo: "/images/governance/rkm.jpg",
        name: "Prof. Raj Kumar Mittal",
        role: "Vice Chancellor, CBLU, Bhiwani",
      },
      {
        photo: "/images/governance/npm.jpg",
        name: "Prof. N.P. Melkania",
        role: "Dean, Academics, GBU",
      },
      {
        photo: "/images/governance/iu.jpg",
        name: "Dr. Indu Uprety",
        role: "Dean (I/C), Planning & Research, GBU",
      },
      {
        photo: "/images/governance/bp.jpg",
        name: "Prof. Bandana Pandey",
        role: "Dean, Humanities and Social Sciences, GBU",
      },
      {
        photo: "/images/governance/sa.jpg",
        name: "Prof. Shweta Anand",
        role: "Dean, Buddhist Studies & Civilization, GBU",
      },
      {
        photo: "/images/governance/ab.jpg",
        name: "Dr. Arpit Bhardwaj",
        role: "Dean (I/C), ICT, GBU",
      },
      {
        photo: "/images/governance/kkd.jpg",
        name: "Dr. Krishna Kant Dwivedi",
        role: "Dean (I/C), Law Justice and Governance, GBU",
      },
      {
        photo: "/images/governance/kp.jpg",
        name: "Dr. Kirti Pal",
        role: "Dean (I/C), Engineering, GBU",
      },
      {
        photo: "/images/governance/vt.jpg",
        name: "Dr. Vishwas Tripathi",
        role: "Registrar, Gautam Buddha University",
      },
    ],
  },

  boardOfGovernors: {
    title: "Board of Governors",
    icon: <GraduationCap className="w-6 h-6" />,
    members: [
      {
        photo: "/images/governance/cs.jpg",
        name: "Chief Secretary",
        role: "U.P. Government",
      },
      {
        photo: "/images/governance/vc.jpg",
        name: "Vice Chancellor",
        role: "Gautam Buddha University",
      },
      {
        photo: "/images/governance/jb.jpg",
        name: "Prof. Jaimala Bishnoi",
        role: "Dept. of Mathematics, CCS University, Meerut",
      },
      {
        photo: "/images/governance/hdc.jpg",
        name: "Prof. H.D. Charan",
        role: "VC, Bikaner Technical University",
      },
      {
        photo: "/images/governance/sbl.jpg",
        name: "Prof. Shyam Bihari Lal",
        role: "MJPRU, Bareilly",
      },
      {
        photo: "/images/governance/sec.jpg",
        name: "Secretary",
        role: "Industry Development Dept, U.P. Govt.",
      },
      {
        photo: "/images/governance/ugc.jpg",
        name: "UGC Nominee",
        role: "University Grants Commission",
      },
      {
        photo: "/images/governance/ten.jpg",
        name: "Technical Education Nominee",
        role: "Technical Education Dept.",
      },
      {
        photo: "/images/governance/ssg.jpg",
        name: "Prof. Shailendra Singh Gaurav",
        role: "Dean, Agriculture, CCSU, Meerut",
      },
      {
        photo: "/images/governance/skk.jpg",
        name: "Prof. S.K. Khare",
        role: "IIT Delhi, Dept. of Chemistry",
      },
      {
        photo: "/images/governance/sk.jpg",
        name: "Prof. Santosh Kumar",
        role: "Kumaun University, Nainital",
      },
      {
        photo: "/images/governance/mss.jpg",
        name: "Dr. Manmohan Singh Sisodia",
        role: "Incharge, Student Affairs, GBU",
      },
    ],
  },

  boardOfManagement: {
    title: "Board of Management",
    icon: <Users className="w-6 h-6" />,
    members: [
      {
        photo: "/images/governance/vc.jpg",
        name: "Vice Chancellor",
        role: "Chairman - Gautam Buddha University, Greater Noida",
      },
      {
        photo: "/images/governance/ten.jpg",
        name: "Technical Education Nominee",
        role: "Member",
      },
      {
        photo: "/images/governance/ssg.jpg",
        name: "Prof. Shailendra Singh Gaurav",
        role: "Dean, Agriculture, CCSU Meerut (Education Society Nominee)",
      },
      {
        photo: "/images/governance/skk.jpg",
        name: "Prof. S.K. Khare",
        role: "Chair Prof. of Biochemistry, IIT Delhi",
      },
      {
        photo: "/images/governance/sk.jpg",
        name: "Prof. Santosh Kumar",
        role: "Geology, Kumaun University, Nainital",
      },
      {
        photo: "/images/governance/npm.jpg",
        name: "Prof. N.P. Melkania",
        role: "Dean, Academics, GBU (Coordinating Dean)",
      },
      {
        photo: "/images/governance/iu.jpg",
        name: "Dr. Indu Uprety",
        role: "Dean (I/C), Planning & Research, GBU (Coordinating Dean)",
      },
      {
        photo: "/images/governance/mss.jpg",
        name: "Dr. Manmohan Singh Sisodia",
        role: "Incharge Student Affairs, GBU",
      },
      {
        photo: "/images/governance/npm.jpg",
        name: "Prof. N.P. Melkania",
        role: "Dean, Vocational Studies & Biotech, GBU (School Dean)",
      },
      {
        photo: "/images/governance/bp.jpg",
        name: "Prof. Bandana Pandey",
        role: "Dean, Humanities & Social Sciences, GBU",
      },
      {
        photo: "/images/governance/sa.jpg",
        name: "Prof. Shweta Anand",
        role: "Dean, Buddhist Studies & Civilization, GBU",
      },
      {
        photo: "/images/governance/ab.jpg",
        name: "Dr. Arpit Bhardwaj",
        role: "Dean (I/C), ICT, GBU",
      },
      {
        photo: "/images/governance/iu.jpg",
        name: "Dr. Indu Uprety",
        role: "Dean (I/C), Management, GBU",
      },
      {
        photo: "/images/governance/kkd.jpg",
        name: "Dr. Krishna Kant Dwivedi",
        role: "Dean (I/C), Law Justice and Governance, GBU",
      },
      {
        photo: "/images/governance/kp.jpg",
        name: "Dr. Kirti Pal",
        role: "Dean (I/C), Engineering, GBU",
      },
      {
        photo: "/images/governance/sec.jpg",
        name: "Secretary, U.P. Govt.",
        role: "Industry Development Department",
      },
      {
        photo: "/images/governance/vt.jpg",
        name: "Dr. Vishwas Tripathi",
        role: "Registrar, Gautam Buddha University (Secretary)",
      },
    ],
  },
};

const organizationalStructure = [
  {
    name: "Chancellor",
    person: "Shri Yogi Adityanath",
    color: "bg-gradient-to-r from-red-100 to-red-200 border-red-300",
    icon: <Crown className="w-7 h-7 text-red-600" />,
    children: [
      {
        name: "Vice Chancellor",
        person: "Prof. R.K. Singh",
        color: "bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300",
        icon: <User className="w-7 h-7 text-blue-600" />,
        children: [
          {
            name: "Dean, Engineering",
            person: "Dr. Kirti Pal",
            color:
              "bg-gradient-to-r from-green-100 to-green-200 border-green-300",
            icon: <Building className="w-6 h-6 text-green-600" />,
          },
          {
            name: "Dean, Management",
            person: "Dr. Indu Uprety",
            color:
              "bg-gradient-to-r from-yellow-100 to-yellow-200 border-yellow-300",
            icon: <Building className="w-6 h-6 text-yellow-600" />,
          },
          {
            name: "Dean, Humanities",
            person: "Prof. Bandana Pandey",
            color: "bg-gradient-to-r from-pink-100 to-pink-200 border-pink-300",
            icon: <Building className="w-6 h-6 text-pink-600" />,
          },

          {
            name: "Dean, ICT",
            person: "Dr. Arpit Bhardwaj",
            color: "bg-gradient-to-r from-blue-100 to-blue-200 border-blue-300",
            icon: <Building className="w-6 h-6 text-blue-600" />,
          },
          {
            name: "Dean, Biotechnology",
            person: "Dr. N.P. Melkania",
            color: "bg-gradient-to-r from-teal-100 to-teal-200 border-teal-300",
            icon: <Building className="w-6 h-6 text-teal-600" />,
          },
          {
            name: "Dean, Buddhist Studies & Civilization",
            person: "Prof. Shweta Anand",
            color:
              "bg-gradient-to-r from-purple-100 to-purple-200 border-purple-300",
            icon: <Building className="w-6 h-6 text-purple-600" />,
          },
          {
            name: "Dean, Law, Justice & Governance",
            person: "Dr. Krishna Kant Dwivedi",
            color:
              "bg-gradient-to-r from-indigo-100 to-indigo-200 border-indigo-300",
            icon: <Building className="w-6 h-6 text-indigo-600" />,
          },
          {
            name: "Dean, Vocational & Applied Sciences",
            person: "Prof. N.P. Melkania",
            color:
              "bg-gradient-to-r from-orange-100 to-orange-200 border-orange-300",
            icon: <Building className="w-6 h-6 text-orange-600" />,
          },
        ],
      },
    ],
  },
];

const OrgNode = ({ node }) => (
  <div className="flex flex-col items-center relative ">
    <div
      className={`rounded-2xl sm:h-2 sm:w-2 border-2 shadow-xl px-8 py-5 mb-2 transition-all duration-300
        ${node.color} hover:scale-105 hover:shadow-2xl`}
      style={{
        height: 190,
        width: 240,
        zIndex: 10,
        boxShadow: "0 4px 24px 0 rgba(80,80,180,0.10)",
      }}
    >
      <div className="flex items-center  gap-3 mb-1">
        {node.icon}
        <span className="font-bold text-lg md:text-xl text-gray-800">
          {node.name}
        </span>
      </div>
      <div className="text-gray-700 font-medium text-base md:text-lg">
        {node.person}
      </div>
    </div>

    {node.children && (
      <div className="flex flex-col items-center">
        <div className="w-1 h-6 bg-gradient-to-b from-gray-300 to-gray-400"></div>
        <div className="mt-2 w-full">
          <div className="flex justify-center flex-wrap md:flex-nowrap md:overflow-x-auto gap-6">
            {node.children.map((child, idx) => (
              <OrgNode key={idx} node={child} />
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
);

const OrgNodeHorizontal = ({ node }) => (
  <div className="flex flex-col items-center relative min-w-[140px] md:min-w-[200px]">
    <div
      className={`rounded-xl border-2 shadow-lg px-3 py-2 md:px-6 md:py-4 mb-2 transition-all duration-300
        ${node.color} hover:scale-105 hover:shadow-2xl`}
      style={{
        minWidth: 120,
        minHeight: 140,
        width: 120,
        zIndex: 10,
        boxShadow: "0 2px 12px 0 rgba(80,80,180,0.10)",
      }}
    >
      <div className="flex items-center gap-1 md:gap-2 mb-1">
        {/* {node.icon} */}
        <span className="font-semibold text-xs md:text-base text-gray-800">
          {node.name}
        </span>
      </div>
      <div className="text-gray-700 font-medium text-xs md:text-base">
        {node.person}
      </div>
    </div>
  </div>
);

const UniversityGovernance = () => {
  const [activeTab, setActiveTab] = useState("executive");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const dataMap = {
    executive: data.academic,
    boardOfManagement: data.boardOfManagement,
    boardOfGovernors: data.boardOfGovernors,
  };

  const fullData = dataMap[activeTab] || [];
  const totalPages = Math.ceil(fullData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = fullData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {" "}
            Governance & Committees
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Leadership Structure and Academic Governance
          </p>
        </div>
      </section>
      <div className="mx-20 px-6 py-12 ">
        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            University Governance
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(governanceData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-3 px-7 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === key
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {data.icon}
                {data.title}
              </button>
            ))}
          </div>

          <div className="transition-all duration-500 ease-in-out">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full">
                {governanceData[activeTab].icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                {governanceData[activeTab].title}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {governanceData[activeTab].members.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    <div className="flex flex-col items-center text-center group">
                      <img
                        src={member.photo}
                        alt={member.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://cdn-icons-png.flaticon.com/512/847/847969.png";
                        }}
                        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100 group-hover:border-blue-200 transition-colors"
                      />
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-semibold mb-4">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Meeting Table */}
            <div className="flex items-center justify-center mt-7 gap-3 mb-4 ">
              <div className="p-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full">
                <NotebookPen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Minutes of Meeting
              </h3>
            </div>
            <div className="overflow-x-auto mt-10">
              <table className="min-w-full text-sm text-left rounded-xl shadow-lg overflow-hidden border border-blue-200">
                <thead className="bg-blue-100 text-blue-900 font-semibold text-base">
                  <tr>
                    <th className="px-6 py-4">Date of Meeting</th>
                    <th className="px-6 py-4">Description</th>
                    <th className="px-6 py-4">Link</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100 bg-white">
                  {paginatedData.map((meeting, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 transition duration-200"
                    >
                      <td className="px-6 py-4 text-gray-700">
                        {meeting.date}
                      </td>
                      <td className="px-6 py-4 text-gray-800 font-medium">
                        {meeting.description}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={meeting.link}
                          className="text-blue-600 font-semibold hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Details
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="flex justify-center items-center space-x-2 mt-6">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-2 rounded font-semibold ${
                      currentPage === index + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-black hover:bg-gray-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Organizational Structure */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="lg:text-4xl sm:text-2xl font-bold text-gray-800 my-1 text-center">
            Organizational Structure
          </h2>

          {/* Large screen: show full tree with deans in single row */}
          <div className="hidden md:flex justify-center scale-[0.60]">
            <OrgNode node={organizationalStructure[0]} />
          </div>

          {/* Small screen: vertical scroll for full structure */}
          <div className="md:hidden w-full mt-4">
            <div className="flex flex-row items-center gap-4 min-w-max pb-2">
              <OrgNodeHorizontal
                node={{
                  ...organizationalStructure[0],
                  children: undefined,
                }}
              />
              <OrgNodeHorizontal
                node={{
                  ...organizationalStructure[0].children[0],
                  children: undefined,
                }}
              />
              <div className="flex flex-col">
                {organizationalStructure[0].children[0].children.map(
                  (dean, idx) => (
                    <OrgNodeHorizontal key={idx} node={dean} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityGovernance;
