import { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import SearchFilter from '../../components/announcement/SearchFilter';
import SocialShare from '../../components/announcement/SocialShare';
import Pagination from '../../components/announcement/Pagination';
import { useToast } from '../../hooks/use-toast';

// === Card ===
const Card = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -5 }}
    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    className={`bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col relative ${className}`}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children }) => (
  <div className="p-5 border-b border-gray-100 bg-gradient-to-r from-blue-50/60 to-white">{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-xl font-bold text-gray-800 tracking-tight ${className}`}>{children}</h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 ${className}`}>{children}</p>
);

const CardContent = ({ children }) => (
  <div className="p-5 flex flex-col flex-grow">{children}</div>
);

// === Button ===
const Button = ({ children, type = "button", variant = "primary", size = "md", className = "", ...props }) => {
  const base = "inline-flex items-center justify-center font-semibold rounded-xl transition focus:outline-none focus:ring-2 focus:ring-blue-500";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 shadow-md",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 shadow",
    outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 shadow",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
  };
  return (
    <button
      type={type}
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// === Input ===
const Input = ({ className = "", ...props }) => (
  <input className={`block w-full rounded-xl border border-gray-300 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 shadow-inner ${className}`} {...props} />
);

// === Badge ===
const Badge = ({ children, variant = "outline", className = "" }) => {
  const variants = {
    outline: "border border-blue-600 text-blue-600 bg-white",
    new: "bg-gradient-to-r from-green-400 to-green-600 text-white animate-pulse shadow-lg",
  };
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold tracking-wide ${variants[variant] || ""} ${className}`}>
      {children}
    </span>
  );
};

// === Mock Newsletters ===
// ✅ 12 fresh tested Unsplash images
const mockNewsletters = [
  {
    id: 1,
    title: "GBU Spring Fest 2025",
    issueNumber: "Vol. 15, Issue 1",
    date: "2025-03-15",
    coverImage: "https://cdn.thedecorjournalindia.com/wp-content/uploads/2022/11/9_Modern-day-marvel-Gautam-Buddha-University-by-CP-Kukreja-architects-transpires-fresh-vibe-and-ancient-wisdom.jpg?lossy=1&resize=1920%2C1357&ssl=1&strip=all",
    excerpt: "Highlights of GBU's Spring Fest — cultural nights, competitions, and student showcases.",
    pdfLink: "/newsletters/spring-fest-2025.pdf"
  },
  {
    id: 2,
    title: "Annual Convocation 2024",
    issueNumber: "Vol. 14, Issue 4",
    date: "2024-12-10",
    coverImage: "https://www.ic3ecsbhi.com/Events/IMG-20231224-WA0082.jpg",
    excerpt: "GBU's 14th Convocation ceremony highlights and graduate stories.",
    pdfLink: "/newsletters/convocation-2024.pdf"
  },
  {
    id: 3,
    title: "Research & Innovation Summit",
    issueNumber: "Vol. 14, Issue 3",
    date: "2024-09-20",
    coverImage: "https://gburif.org/images/intro-carousel/gautam-buddha-university-3.jpg",
    excerpt: "Breakthrough research, industry tie-ups, and student-led innovations at GBU.",
    pdfLink: "/newsletters/research-summit-2024.pdf"
  },
  {
    id: 4,
    title: "Sports Meet Highlights",
    issueNumber: "Vol. 14, Issue 2",
    date: "2024-06-15",
    coverImage: "https://www.gbu.ac.in/Content/img/sports/banner1.jpg",
    excerpt: "National Sports Meet 2024 hosted by GBU: winners, records, and sportsmanship.",
    pdfLink: "/newsletters/sports-meet-2024.pdf"
  },
  {
    id: 5,
    title: "Student Entrepreneurship Week",
    issueNumber: "Vol. 14, Issue 1",
    date: "2024-04-10",
    coverImage: "https://www.ux4g.gov.in/assets/img/awareness-workshop/gbu-19-11-24/900x1.webp",
    excerpt: "GBU students transform ideas into startups during Entrepreneurship Week.",
    pdfLink: "/newsletters/entrepreneurship-week-2024.pdf"
  },
  {
    id: 6,
    title: "Tech Symposium & Hackathon",
    issueNumber: "Vol. 13, Issue 4",
    date: "2024-02-25",
    coverImage: "https://tennews.in/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-22-at-8.24.01-PM-e1669129715871.jpeg",
    excerpt: "GBU's biggest hackathon yet — innovation, collaboration, and solutions.",
    pdfLink: "/newsletters/tech-symposium-2024.pdf"
  },
  {
    id: 7,
    title: "Cultural Night Highlights",
    issueNumber: "Vol. 13, Issue 3",
    date: "2023-11-10",
    coverImage: "https://images.unsplash.com/photo-1599491126263-3db86d7c3626?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Vibrant cultural diversity with music, dance, and art performances.",
    pdfLink: "/newsletters/cultural-night-2023.pdf"
  },
  {
    id: 8,
    title: "Green Campus Initiative",
    issueNumber: "Vol. 13, Issue 2",
    date: "2023-09-05",
    coverImage: "https://images.unsplash.com/photo-1581090700224-81b1b0b59f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "GBU's sustainability drive: plantation, waste management, and green tech.",
    pdfLink: "/newsletters/green-campus-2023.pdf"
  },
  {
    id: 9,
    title: "Alumni Meet 2023",
    issueNumber: "Vol. 13, Issue 1",
    date: "2023-07-20",
    coverImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "GBU alumni reconnect, share stories, and inspire students at the meet.",
    pdfLink: "/newsletters/alumni-meet-2023.pdf"
  },
  {
    id: 10,
    title: "Placement Drive Report",
    issueNumber: "Vol. 12, Issue 4",
    date: "2023-05-10",
    coverImage: "https://images.unsplash.com/photo-1584697964192-8d161b891f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Record-breaking placements with top companies and success stories.",
    pdfLink: "/newsletters/placement-drive-2023.pdf"
  },
  {
    id: 11,
    title: "Art & Photography Fest",
    issueNumber: "Vol. 12, Issue 3",
    date: "2023-03-18",
    coverImage: "https://images.unsplash.com/photo-1583321573717-7c1b746f0cb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "Students showcase creativity through art and photography exhibitions.",
    pdfLink: "/newsletters/art-photography-2023.pdf"
  },
  {
    id: 12,
    title: "Student Clubs Orientation",
    issueNumber: "Vol. 12, Issue 2",
    date: "2023-01-25",
    coverImage: "https://images.unsplash.com/photo-1588195533091-c89fa1b4e3b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    excerpt: "New students explore GBU's clubs and societies to join and grow.",
    pdfLink: "/newsletters/clubs-orientation-2023.pdf"
  },
];



// === Main ===
const NewsLetter = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  const itemsPerPage = 6;

  const totalPages = Math.ceil(mockNewsletters.length / itemsPerPage);
  const currentNewsletters = mockNewsletters.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "You'll receive our latest newsletters.",
      });
      setEmail('');
    }
  };

  const latestId = mockNewsletters[0].id;

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">GBU Newsletter</h1>
        <p className="text-xl">Stay updated with the latest campus highlights</p>
      </motion.section>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:mx-40 md:mx-30 sm:mx-10 my-10 "
      >
        {currentNewsletters.map((n) => (
          <motion.div
            key={n.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Card className='min-h-170'>
              {n.id === latestId && (
                <Badge variant="new" className="absolute top-4 right-4">New</Badge>
              )}
              <img src={n.coverImage} alt={n.title} className="w-full h-90 object-cover" />
              <CardHeader>
                <div className="flex justify-between mb-2">
                  <Badge>{n.issueNumber}</Badge>
                  <span className="text-sm text-gray-500">{format(new Date(n.date), 'MMM yyyy')}</span>
                </div>
                <CardTitle>{n.title}</CardTitle>
                <CardDescription>Published {format(new Date(n.date), 'MMMM dd, yyyy')}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-5">{n.excerpt}</p>
                <div className="mt-auto flex flex-col gap-2">
                  <Button
                    size="sm"
                    onClick={() => window.open(n.pdfLink, "_blank")}
                  >
                    <FileText size={18} className="mr-2" />
                    Read Online
                  </Button>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                    <SocialShare url={n.pdfLink} title={n.title} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-600 text-white py-10 px-6 rounded-3xl text-center mt-12"
      >
        <h2 className="text-3xl font-bold mb-3">Subscribe for Updates</h2>
        <p className="mb-5">Never miss out on important events and announcements.</p>
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required className='text-gray-900'
          />
          <Button type="submit" variant="secondary">Subscribe</Button>
        </form>
      </motion.div>
    </>
  );
};

export default NewsLetter;
