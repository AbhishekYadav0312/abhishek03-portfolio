
import { GraduationCap, Code, Database, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { category: 'Programming', items: ['Python', 'C++', 'Java'], icon: Code },
    { category: 'Databases', items: ['MySQL', 'MongoDB'], icon: Database },
    { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React'], icon: Code },
    { category: 'Tools & APIs', items: ['JWT', 'Google Maps API', 'Git'], icon: Award },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating impactful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I am a B.Tech pursuing student currently in my 4th year at Raj Kumar Goel Institute of Technology (AKTU). 
              I'm passionate about developing clean, efficient, and impactful digital experiences using technologies like 
              Python, SQL, and modern web tools.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Education</h4>
              </div>
              <div>
                <p className="font-medium text-gray-900">B.Tech in Computer Science</p>
                <p className="text-gray-600">Raj Kumar Goel Institute of Technology (AKTU)</p>
                <p className="text-primary font-medium">Expected Graduation: 2026</p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <IconComponent className="h-5 w-5 text-primary mr-2" />
                        <h4 className="font-semibold text-gray-900">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
