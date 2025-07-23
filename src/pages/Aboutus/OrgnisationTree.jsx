import React from "react";
import { Users, UserCircle2, BriefcaseBusiness, BookOpen, School } from "lucide-react";

const organizationalStructure = [
  {
    name: "Hon'ble Chancellor",
    person: "Shri Yogi Adityanath Ji",
    icon: <UserCircle2 className="text-blue-500" size={22} />,
    color: "border-blue-300 bg-blue-50",
    children: [
      {
        name: "Vice Chancellor",
        person: "Prof. Ravindra Kumar Sinha",
        icon: <UserCircle2 className="text-purple-500" size={22} />,
        color: "border-purple-300 bg-purple-50",
        children: [
          {
            name: "Registrar",
            person: "Mr. Ajay Kumar Mishra",
            icon: <BriefcaseBusiness className="text-green-600" size={22} />,
            color: "border-green-300 bg-green-50",
          },
          {
            name: "Finance Officer",
            person: "Dr. Neelam Yadav",
            icon: <Users className="text-yellow-600" size={22} />,
            color: "border-yellow-300 bg-yellow-50",
          },
          {
            name: "Controller of Examinations",
            person: "Dr. Alok Kumar Gupta",
            icon: <BriefcaseBusiness className="text-red-500" size={22} />,
            color: "border-red-300 bg-red-50",
          },
          // 8 DEANS BELOW 👇
          {
            name: "Dean, School of Management",
            person: "Dr. Indu Uprety",
            icon: <School className="text-sky-600" size={22} />,
            color: "border-sky-300 bg-sky-50",
          },
          {
            name: "Dean, School of ICT",
            person: "Dr. Amit Singh",
            icon: <School className="text-indigo-600" size={22} />,
            color: "border-indigo-300 bg-indigo-50",
          },
          {
            name: "Dean, School of Biotechnology",
            person: "Dr. Nivedita Sharma",
            icon: <School className="text-emerald-600" size={22} />,
            color: "border-emerald-300 bg-emerald-50",
          },
          {
            name: "Dean, School of Law",
            person: "Dr. Rajeev Shukla",
            icon: <School className="text-rose-600" size={22} />,
            color: "border-rose-300 bg-rose-50",
          },
          {
            name: "Dean, School of Buddhist Studies",
            person: "Dr. Meera Tiwari",
            icon: <School className="text-fuchsia-600" size={22} />,
            color: "border-fuchsia-300 bg-fuchsia-50",
          },
          {
            name: "Dean, School of Humanities",
            person: "Dr. Satish Gupta",
            icon: <School className="text-teal-600" size={22} />,
            color: "border-teal-300 bg-teal-50",
          },
          {
            name: "Dean, School of Vocational Studies",
            person: "Dr. Pooja Sharma",
            icon: <School className="text-cyan-600" size={22} />,
            color: "border-cyan-300 bg-cyan-50",
          },
          {
            name: "Dean, School of Engineering",
            person: "Dr. Ankur Jain",
            icon: <School className="text-orange-600" size={22} />,
            color: "border-orange-300 bg-orange-50",
          },
        ],
      },
    ],
  },
];

// Reusable Node UI
const OrgNode = ({ node }) => (
  <div className="flex flex-col items-center relative group text-center">
    <div
      className={`rounded-xl border-2 shadow-lg px-4 py-3 w-52 transition-all duration-300 ${node.color} hover:scale-105`}
    >
      <div className="flex justify-center gap-2 items-center mb-1 text-sm font-semibold text-gray-800">
        {node.icon}
        {node.name}
      </div>
      <div className="text-gray-700 text-xs font-medium">{node.person}</div>
    </div>
  </div>
);

// Final Tree UI
const OrgTree = ({ data }) => {
  const root = data[0];
  const deputy = root.children[0];
  const vps = deputy.children.slice(0, 3);
  const deans = deputy.children.slice(3);

  return (
    <div className="w-full overflow-x-auto px-2 md:px-10 py-8  min-h-screen rounded-xl">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        GBU Administrative Structure
      </h2>

      <div className="flex flex-col items-center gap-10">

        {/* Chancellor */}
        <OrgNode node={root} />
        <div className="h-6 w-1 bg-gray-400" />

        {/* Vice Chancellor */}
        <OrgNode node={deputy} />
        <div className="h-6 w-1 bg-gray-400" />

        {/* 3 Authorities */}
        <div className="flex flex-wrap justify-center gap-8">
          {vps.map((vp, i) => (
            <div key={i} className="flex flex-col items-center">
              <OrgNode node={vp} />
              <div className="h-6 w-1 bg-gray-400 mt-1" />
            </div>
          ))}
        </div>

        {/* 8 Deans */}
        <div className="border-t-2 border-gray-300 pt-6 mt-2 w-full">
          <div className="flex flex-wrap justify-center gap-6">
            {deans.map((dean, i) => (
              <OrgNode key={i} node={dean} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function GbuTreePage() {
  return <OrgTree data={organizationalStructure} />;
}
