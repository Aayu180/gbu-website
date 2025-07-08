 import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";

const RecentPlacements = () => {
  // 🔹 Dynamic Data Object
  const data = {
    heading: "Recent Placements",
    subheading: "Our students securing positions at top companies",
    sectionTitle: "Success Stories",
    students: [
      {
        name: "Rahul Sharma",
        company: "TCS",
        package: "₹6.5 LPA",
        department: "B.Tech CSE",
        photo:
          "https://images.unsplash.com/photo-1571945192246-4fcee13c27b1?w=200&h=200&fit=crop&crop=face",
      },
      {
        name: "Priya Verma",
        company: "BlackRock",
        package: "₹16 LPA",
        department: "B.Tech IT",
        photo:
          "https://images.unsplash.com/photo-1619346344241-3f6082489467?w=200&h=200&fit=crop&crop=face",
      },
      {
        name: "Amit Kumar",
        company: "Honda",
        package: "₹8.2 LPA",
        department: "B.Tech ME",
        photo:
          "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=200&h=200&fit=crop&crop=face",
      },
      {
        name: "Neha Singh",
        company: "HDFC Bank",
        package: "₹7.5 LPA",
        department: "MBA Finance",
        photo:
          "https://images.unsplash.com/photo-1619346344878-db3c555dab3a?w=200&h=200&fit=crop&crop=face",
      },
      {
        name: "Aditya Patel",
        company: "Paytm",
        package: "₹12 LPA",
        department: "B.Tech ECE",
        photo:
          "https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?w=200&h=200&fit=crop&crop=face",
      },
      {
        name: "Riya Gupta",
        company: "HCL Technologies",
        package: "₹7.8 LPA",
        department: "MCA",
        photo:
          "https://images.unsplash.com/photo-1619346344878-db3c555dab3a?w=200&h=200&fit=crop&crop=face",
      },
      {
        name: "Mohammed Siddiqui",
        company: "Wipro",
        package: "₹6.8 LPA",
        department: "B.Tech CSE",
        photo:
          "https://images.unsplash.com/photo-1621784563330-caee0b138a00?w=200&h=200&fit=crop&crop=face",
      },
      {
        name: "Ananya Reddy",
        company: "OYO",
        package: "₹9.5 LPA",
        department: "MBA Marketing",
        photo:
          "https://images.unsplash.com/photo-1619346344878-db3c555dab3a?w=200&h=200&fit=crop&crop=face",
      },
    ],
  };


  const [currentSlide, setCurrentSlide] = useState(0);
const fallbackImage = "https://cdn-icons-png.flaticon.com/512/847/847969.png";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(data.students.length / 2)
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [data.students.length]);

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + 1) % Math.ceil(data.students.length / 2)
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(data.students.length / 2)) %
        Math.ceil(data.students.length / 2)
    );
  };

  const getCurrentPlacements = () => {
    const startIndex = currentSlide * 2;
    return data.students.slice(startIndex, startIndex + 2);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-800">
            {data.heading}
          </h2>
          <p className="text-xl text-gray-600">{data.subheading}</p>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Card */}
        <div className="rounded-xl shadow-2xl border-0 bg-white backdrop-blur-sm relative overflow-hidden">
          <div className="bg-white border-b border-gray-200 p-4 text-center">
            <h3 className="flex justify-center items-center text-blue-800 text-lg font-bold">
              <div className="w-2 h-8 bg-blue-500 rounded-full mr-3" />
              {data.sectionTitle}
            </h3>
          </div>

          <div className="p-8">
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-8">
                {getCurrentPlacements().map((placement, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 p-6 bg-gradient-to-r from-gray-50 to-blue-50/50 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <img
                      src={placement.photo}
                      alt={placement.name}
                      onError={(e) => (e.target.src = fallbackImage)}
                      className="w-20 h-20 rounded-full object-cover ring-4 ring-yellow-300/30 group-hover:ring-yellow-400/60 transition-all duration-300"
                    />
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                        {placement.name}
                      </h4>
                      <p className="text-gray-600 mb-2">
                        {placement.department}
                      </p>
                      <p className="font-bold text-green-600 text-xl mb-1">
                        {placement.package}
                      </p>
                      <Badge
                        variant="outline"
                        className="border-blue-600 text-blue-600"
                      >
                        {placement.company}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              {/* Arrows */}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full p-2"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/80 hover:bg-white shadow-lg rounded-full p-2"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({
                length: Math.ceil(data.students.length / 2),
              }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-blue-600 shadow-lg scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentPlacements;
