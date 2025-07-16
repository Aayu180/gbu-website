import React from "react";

// ✅ Reusable Card components
const Card = ({ className = "", children }) => (
  <div
    className={`relative isolate rounded-2xl shadow-lg border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "" }) => (
  <div className={`p-5 border-b border-white/10 ${className}`}>{children}</div>
);

const CardTitle = ({ className = "", children }) => (
  <h3 className={`font-semibold text-xl mb-1 ${className}`}>{children}</h3>
);

const CardDescription = ({ className = "", children }) => (
  <p className={`text-gray-300 text-base ${className}`}>{children}</p>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-5 ${className}`}>{children}</div>
);

const Research = ({
  banner: BannerComponent,
  researchAreas = [],
  stats = [],
  sectionId = "research",
  sectionBg = "bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900",
  textColor = "text-white",
}) => {
  return (
    <section id={sectionId} className={`pb-16 pt-6 ${sectionBg} ${textColor}`}>
      <div className="container mx-auto">
        {BannerComponent && <BannerComponent />}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20 mt-10">
          {researchAreas.map((area, index) => (
            <Card
              key={index}
              className="hover:bg-white/20 group overflow-hidden"
            >
              <div className="relative isolate h-48 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 z-0"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${area.gradient} opacity-80 z-10`}
                ></div>
                <div className="absolute bottom-4 left-4 z-20">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-lg text-white">
                  {area.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {area.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <h4 className="font-semibold text-white mb-2 text-sm">
                  Current Projects:
                </h4>
                <ul className="space-y-1">
                  {area.projects.map((project, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded"
                    >
                      • {project}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="bg-white/10 backdrop-blur-sm p-8 mt-10 mx-10 rounded-2xl border border-white/20">
        <h3 className="text-3xl font-bold text-center mb-8">Research Impact</h3>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} p-6 rounded-xl`}
            >
              <div className="text-3xl font-bold mb-2">{item.value}</div>
              <div className="text-sm text-gray-300">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
