import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import StatsCard from "../../StatsCard";

// Reusable Card
const Card = ({ children, className = "", ...props }) => (
  <motion.div
    whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
    whileTap={{ scale: 0.98 }}
    className={`rounded-2xl bg-white border border-gray-200 shadow-md transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div
    className={`px-6 pt-6 pb-2 bg-gradient-to-r from-gray-50 via-white to-gray-100 rounded-t-2xl ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3
    className={`font-semibold text-lg md:text-xl tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`px-6 pb-6 pt-2 ${className}`} {...props}>
    {children}
  </div>
);

const Faculty = ({
  title = "Faculty Section",
  subtitle = "Meet our distinguished faculty members.",
  facultyMembers = [],
  bottomStats = {
    text: "Our faculty stats",
    stats: [
      { icon: null, custom: "PhD", value: "100%", label: "PhD Faculty", bg: "bg-purple-50", color: "bg-purple-600" },
    ],
  },
}) => {
  return (
    <section
      id="faculty"
      className="py-20 bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 max-w-6xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          {title}
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
          {subtitle}
        </p>

        {/* Faculty Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {facultyMembers.map((faculty, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="overflow-hidden border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                          src={faculty.image}
                          alt={faculty.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${faculty.color} rounded-full border-2 border-white`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle>{faculty.name}</CardTitle>
                      <p
                        className={`font-medium bg-gradient-to-r ${faculty.color} bg-clip-text text-transparent`}
                      >
                        {faculty.position}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {faculty.specialization}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 bg-gray-50/50">
                  <div className="flex items-center space-x-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>{faculty.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    {faculty.extraIcon && (
                      <faculty.extraIcon className="h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{faculty.achievements}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
         
            <p className="text-muted-foreground text-center text-lg">
              {bottomStats.text}
            </p>
           <StatsCard
             stats={bottomStats.stats}
           />
     
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Faculty;
