import React, { useState } from 'react';

const EligibilityReservation = () => {
  const [activeTab, setActiveTab] = useState('eligibility');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample data for undergraduate programs
  const ugEligibility = [
    {
      course: "B.Tech",
      minPercentage: "75% (70% for reserved categories)",
      academic: "12th with Physics, Chemistry, Mathematics (PCM)",
      entrance: "JEE Main qualified",
      ageLimit: "Born on or after October 1, 1999"
    },
    {
      course: "B.Sc",
      minPercentage: "60% (55% for reserved categories)",
      academic: "12th with relevant subjects",
      entrance: "University entrance exam",
      ageLimit: "Born on or after October 1, 2001"
    },
    {
      course: "BBA",
      minPercentage: "50% (45% for reserved categories)",
      academic: "12th from any stream",
      entrance: "University entrance exam",
      ageLimit: "Born on or after October 1, 2001"
    }
  ];

  // Sample data for postgraduate programs
  const pgEligibility = [
    {
      course: "M.Tech",
      minPercentage: "60% (55% for reserved categories)",
      academic: "B.Tech/B.E. in relevant field",
      entrance: "GATE qualified",
      ageLimit: "No age limit"
    },
    {
      course: "M.Sc",
      minPercentage: "55% (50% for reserved categories)",
      academic: "B.Sc in relevant field",
      entrance: "University entrance exam",
      ageLimit: "Born on or after October 1, 1997"
    },
    {
      course: "MBA",
      minPercentage: "50% (45% for reserved categories)",
      academic: "Bachelor's degree in any discipline",
      entrance: "CAT/MAT/XAT qualified",
      ageLimit: "No age limit"
    }
  ];

  // Sample reservation policy data
  const reservationPolicy = [
    {
      category: "Scheduled Caste (SC)",
      percentage: "15%",
      description: "Reservation for candidates belonging to Scheduled Caste as per Government of India list",
      documents: [
        "Caste Certificate from competent authority",
        "Income Certificate (if applicable)",
        "Residence Certificate"
      ]
    },
    {
      category: "Scheduled Tribe (ST)",
      percentage: "7.5%",
      description: "Reservation for candidates belonging to Scheduled Tribe as per Government of India list",
      documents: [
        "Tribe Certificate from competent authority",
        "Income Certificate (if applicable)",
        "Residence Certificate"
      ]
    },
    {
      category: "Other Backward Classes (OBC)",
      percentage: "27%",
      description: "Reservation for candidates belonging to OBC (Non-Creamy Layer) as per Central list",
      documents: [
        "OBC Certificate from competent authority",
        "Non-Creamy Layer Certificate",
        "Income Certificate"
      ]
    },
    {
      category: "Economically Weaker Section (EWS)",
      percentage: "10%",
      description: "Reservation for candidates from Economically Weaker Section of General category",
      documents: [
        "EWS Certificate from competent authority",
        "Income Certificate",
        "Asset Declaration"
      ]
    }
  ];

  // Sample special categories data
  const specialCategories = [
    {
      category: "Persons with Disability (PwD)",
      percentage: "5%",
      description: "Horizontal reservation for persons with benchmark disabilities",
      documents: [
        "Disability Certificate from competent medical authority",
        "Medical Board Certificate",
        "Functional Assessment Report"
      ]
    },
    {
      category: "Kashmiri Migrants",
      percentage: "Supernumerary",
      description: "Special provision for Kashmiri Migrant candidates",
      documents: [
        "Kashmiri Migrant Certificate",
        "Migration Certificate",
        "Residence Proof"
      ]
    },
    {
      category: "Defense Personnel",
      percentage: "5%",
      description: "Reservation for wards of defense personnel killed/disabled in action",
      documents: [
        "Defense Personnel Certificate",
        "Service Certificate",
        "Casualty Certificate (if applicable)"
      ]
    }
  ];

  const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  const BookOpenIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  );

  const AwardIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  );

  const AlertCircleIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );



  const EligibilityCard = ({ course }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{course.course}</h3>
          <span className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full border">
            {course.minPercentage}
          </span>
        </div>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <BookOpenIcon />
            <div className="flex-1">
              <p className="font-medium text-gray-900">Academic Qualification</p>
              <p className="text-gray-600 text-sm">{course.academic}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <AwardIcon />
            <div className="flex-1">
              <p className="font-medium text-gray-900">Entrance Exam</p>
              <p className="text-gray-600 text-sm">{course.entrance}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <UsersIcon />
            <div className="flex-1">
              <p className="font-medium text-gray-900">Age Limit</p>
              <p className="text-gray-600 text-sm">{course.ageLimit}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ReservationCard = ({ category }) => (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{category.category}</h3>
          <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
            {category.percentage}
          </span>
        </div>
        <div className="space-y-4">
          <p className="text-gray-600 text-sm">{category.description}</p>
          <div>
            <p className="font-medium text-gray-900 mb-2">Required Documents:</p>
            <ul className="space-y-2">
              {category.documents.map((doc, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                  <CheckCircleIcon />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">

      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Eligibility & Reservation</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
              Complete information about admission criteria and reservation policy
            </p>
          </div>
        </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        

        {/* Important Notice */}
        <div className="mb-8 border-l-4 border-l-orange-500 border-solid bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
          <div className="p-6">
            <div className="flex items-start space-x-3">
              <AlertCircleIcon />
              <div>
                <h3 className="font-semibold text-orange-900 mb-2">Important Notice</h3>
                <p className="text-orange-800">
                  All percentage calculations are based on the best of four subjects. Reserved category candidates 
                  get 5% relaxation in minimum qualifying marks. Age relaxation of 5 years for SC/ST and 3 years 
                  for OBC candidates where applicable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="grid grid-cols-3 mb-8 bg-white shadow-sm rounded-lg p-1">
            <button
              onClick={() => setActiveTab('eligibility')}
              className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'eligibility'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <BookOpenIcon />
              <span className="hidden sm:inline">Eligibility Criteria</span>
              <span className="sm:hidden">Eligibility</span>
            </button>
            <button
              onClick={() => setActiveTab('reservation')}
              className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'reservation'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <UsersIcon />
              <span className="hidden sm:inline">Reservation Policy</span>
              <span className="sm:hidden">Reservation</span>
            </button>
            <button
              onClick={() => setActiveTab('special')}
              className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'special'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              <AwardIcon />
              <span className="hidden sm:inline">Special Categories</span>
              <span className="sm:hidden">Special</span>
            </button>
          </div>
          
          {/* Tab Content */}
          {activeTab === 'eligibility' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <BookOpenIcon />
                    <span className="ml-2">Undergraduate Programs</span>
                  </h3>
                  {ugEligibility.map((course, index) => (
                    <EligibilityCard key={index} course={course} />
                  ))}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                    <AwardIcon />
                    <span className="ml-2">Postgraduate Programs</span>
                  </h3>
                  {pgEligibility.map((course, index) => (
                    <EligibilityCard key={index} course={course} />
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'reservation' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <UsersIcon />
                  <span className="ml-2">Reservation Categories</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Reservation is provided as per Government of India norms and state government guidelines. 
                  All certificates must be issued by competent authorities and be valid at the time of admission.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {reservationPolicy.map((category, index) => (
                  <ReservationCard key={index} category={category} />
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'special' && (
            <div className="space-y-6">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                  <AwardIcon />
                  <span className="ml-2">Special Categories & Quotas</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Additional reservations and special provisions for specific categories as per university and government policies.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {specialCategories.map((category, index) => (
                  <ReservationCard key={index} category={category} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {/* <div className="mt-12 pt-8 border-t border-gray-200 border-solid">
          <div className="text-center text-gray-600">
            <p className="mb-2">For more information, contact the admissions office</p>
            <p className="text-sm">Last updated: June 2025</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default EligibilityReservation;