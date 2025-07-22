import React from 'react';
import Breadcrumb from '../../components/tenders/BreadcrumbTender';
import TendersTable from '../../components/tenders/TendersTable';
import { motion } from "framer-motion";

import SearchableWrapper from "../../components/Searchbar/SearchableWrapper.jsx";

const TenderMain = () => {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Tenders / RFPs / RFE / RFQ' }
  ];

  return (
    // <SearchableWrapper>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 font-sans">
        <div className="container mx-auto px-6 py-12 max-w-7xl">

          {/* Page Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Breadcrumb items={breadcrumbItems} />

            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-6">
              Tenders / RFPs / RFE / RFQ
            </h1>

            {/* Introduction */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-indigo-50 to-teal-50 border border-teal-300 rounded-2xl shadow-lg p-8 sm:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Welcome to our procurement portal. Here you can find current tender opportunities,
                requests for proposals (RFPs), requests for expressions (RFE), and requests for
                quotations (RFQ). All interested vendors and contractors are encouraged to review
                the available opportunities and submit their proposals before the specified closing
                dates. Please ensure you download and review all tender documents carefully before
                submitting your bid.
              </p>
            </motion.div>
          </motion.div>

          {/* Tenders Table */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <TendersTable />
          </motion.div>

          {/* Footer */}
          <div className="border-t border-gray-400 pt-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-700">
              <div>
                Looking for past opportunities?
                <a
                  href="#"
                  className="text-teal-600 hover:text-teal-800 underline ml-1 transition-colors duration-200 font-medium"
                >
                  View Archived Tenders
                </a>
              </div>
              <div>
                © 2025 Procurement Portal. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>

    // </SearchableWrapper>
  );
};

export default TenderMain;
