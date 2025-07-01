import React from 'react';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Dr. Shakti Sahi',
    position: 'Chief Technology Officer',
    linkedin: 'https://www.linkedin.com/in/shakti-sahi-32255a9/',
    image: 'https://www.gburif.org/mentors/shakti_sahi_edit.jpg'
  },
  {
    name: 'Dr. Satish K Mittal',
    position: 'Chief Operations Officer',
    linkedin: 'https://www.linkedin.com/in/drsatishkmittal/',
    image: 'https://www.gburif.org/mentors/satish_mittal.jpg'
  },
  {
    name: 'Dr. Vinay Kumar Litoria',
    position: 'Nodal Officer',
    linkedin: 'https://www.linkedin.com/in/vimlesh-kumar-ray-ph-d-99646b32/',
    image: 'https://www.gbu.ac.in/Content/clubs/wc/Vinay_kumar.jpeg'
  },
  {
    name: 'Mr. Raj Kumar',
    position: 'Manager',
    linkedin: 'https://www.linkedin.com/in/raj-kumar-34b0761b0/',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHeaguw0nI1sQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713076791131?e=1756944000&v=beta&t=DMiDFl0vqYLkd5ZeWkoc0DYeVUaYbuS6_s9lB50st6U'
  },
  {
    name: 'Mr. Manish Bhardwaj',
    position: 'Office Assistant',
    linkedin: 'https://www.linkedin.com/in/dr-manish-bhardwaj-48308a56/?originalSubdomain=in',
    image: 'https://media.licdn.com/dms/image/v2/C5103AQEqmwMAeRWXSA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516891760776?e=1756944000&v=beta&t=520pqvHDb-7s0fS-WJnjPoJyNI_XjgDtPz4RowUJnTg'
  },
  {
    name: 'Mr. Shekhar Chandra',
    position: 'Office Attendant',
    linkedin: 'https://www.linkedin.com/in/chandra-shekhar-07879473/?originalSubdomain=uk',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQHEbkxAOdEyDQ/profile-displayphoto-shrink_800_800/B56Zaf4CmjGoAc-/0/1746438990755?e=1756944000&v=beta&t=zs6AHwnYU1XDPZTiMtuoJBgaKUjuL_6Zx-sYeP1zUiA'
  }
];

export default function Team() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">MEET OUR TEAM</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
              />
              <h3 className="text-lg font-bold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium mb-4">{member.position}</p>
              <div className="flex justify-center">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
