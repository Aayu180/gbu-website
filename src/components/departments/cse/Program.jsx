import { GraduationCap, BookOpen, Users, Clock } from "lucide-react";

// Custom Card components (unchanged)
const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl shadow-md border border-gray-200 transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`px-6 pt-6 pb-2 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-semibold text-lg leading-tight mb-1 ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = "" }) => (
  <p className={`text-gray-500 text-sm mb-1 ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`px-6 pb-6 pt-2 ${className}`}>{children}</div>
);

const Programs = ({
  heading = "Academic Programs",
  subheading = "Choose from our diverse range of programs designed to meet your academic and career goals in computer science.",
  programs = [],
}) => {
  return (
    <section
      id="programs"
      className="py-16 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-4">
            {heading}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            {subheading}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border-0 shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-80`}
                  ></div>
                  <div className="absolute bottom-4 left-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-foreground">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{program.intake}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Key Areas
                    </h4>
                    <div className="grid grid-cols-1 gap-1 text-sm text-muted-foreground">
                      {program.highlights.slice(0, 6).map((highlight, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-blue-50 px-2 py-1 rounded"
                        >
                          • {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
