import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    title: "GBU STUDENTS VISIT WORKSHOPS",
    date: "March 15, 2024",
    image: "https://workshop.sobt.lbsonline.in/assets/p2-XrJoWuig.webp",
    description: "Students from various departments visited industry workshops to explore practical applications and innovations."
  },
  {
    title: "TECH INNOVATION FAIR",
    date: "April 2, 2024",
    image: "https://static.wixstatic.com/media/bc6a73_a51fa15dce7d4c229f9090932d2071f3~mv2.jpg/v1/fill/w_793,h_639,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/bc6a73_a51fa15dce7d4c229f9090932d2071f3~mv2.jpg",
    description: "A showcase of student-led innovations with live prototypes and demos."
  },
  {
    title: "WOMEN IN TECH SEMINAR",
    date: "April 28, 2024",
    image: "https://www.gburif.org/event/students.jpeg",
    description: "Celebrating women innovators and leaders through talks, networking, and mentorship sessions."
  },
  {
    title: "AI & ROBOTICS WORKSHOP",
    date: "May 10, 2024",
    image: "https://www.nvidia.com/content/nvidiaGDC/sg/en_SG/industries/robotics/_jcr_content/root/responsivegrid/nv_container_1842050078/nv_tabs/item_1/nv_teaser_copy_68232_723076021.coreimg.100.1070.jpeg/1749568225098/robotics-video-learn-ari-1920x1080.jpeg",
    description: "Hands-on experience with real robots and AI models designed by students."
  },
  {
    title: "CAMPUS HACKATHON 2024",
    date: "June 5, 2024",
    image: "https://www.ic3ecsbhi.com/Events/IMG-20221122-WA0091.jpg",
    description: "24-hour coding competition attracting teams from across India."
  },
  {
    title: "STARTUP PITCH DAY",
    date: "June 20, 2024",
    image: "https://www.ic3ecsbhi.com/Events/FB_IMG_1664482115262.jpg",
    description: "Incubated startups presented their business ideas to angel investors and mentors."
  },
  {
    title: "GREEN TECH CONFERENCE",
    date: "July 3, 2024",
    image: "https://images.hindustantimes.com/img/2022/09/13/1600x900/02cb1596-3350-11ed-aaf6-899a59fb6c14_1663065626595.jpg",
    description: "Focused on sustainability, recycling innovation, and green energy."
  },
  {
    title: "INTERNATIONAL GUEST TALK",
    date: "July 18, 2024",
    image: "https://www.ic3ecsbhi.com/Events/20231028_115832.jpg",
    description: "Dr. Emily Tan from Stanford spoke on global research opportunities for students."
  },
  {
    title: "OPEN MIC & IDEATHON",
    date: "August 1, 2024",
    image: "https://www.ic3ecsbhi.com/Events/h1.jpg",
    description: "Students pitched raw ideas and received feedback from peers and faculty."
  },
  {
    title: "EXHIBITION DAY",
    date: "August 25, 2024",
    image: "https://tennews.in/wp-content/uploads/2018/03/WhatsApp-Image-2018-03-16-at-1.56.41-PM.jpeg",
    description: "All departments displayed their annual project work in a public showcase."
  }
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
  >
    <ChevronLeft size={20} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
  >
    <ChevronRight size={20} />
  </button>
);

export default function EventSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gray-50 rounded-xl">
            <h1 className="text-3xl font-bold text-center mb-8">EVENTS GALLERY</h1>
      <Slider {...settings}>
        {events.map((event, idx) => (
          <div key={idx} className="px-3">
            <div className="bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{event.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-600">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
