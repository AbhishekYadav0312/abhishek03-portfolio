
import { GraduationCap, Code, Database, Award, Rocket, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { category: 'Programming Languages', items: ['Python', 'C++', 'Java', 'JavaScript'], icon: Code },
    { category: 'Database Systems', items: ['MySQL', 'MongoDB', 'PostgreSQL'], icon: Database },
    { category: 'Web Technologies', items: ['HTML5', 'CSS3', 'React.js', 'Node.js'], icon: Code },
    { category: 'Tools & Frameworks', items: ['JWT Authentication', 'Google Maps API', 'Git/GitHub'], icon: Award },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Driven by curiosity and fueled by innovation - crafting the future one line of code at a time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Bio Section */}
          <div className="animate-slide-in-left">
            <div className="flex items-center mb-8">
              <Rocket className="h-8 w-8 text-primary mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">My Journey</h3>
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              I'm a passionate <strong>Computer Science Engineering student</strong> in my final year at 
              <span className="text-primary font-semibold"> Raj Kumar Goel Institute of Technology (AKTU)</span>. 
              My journey in technology began with a curiosity about how digital solutions can solve real-world problems.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              With expertise spanning <strong>full-stack development, database design, and modern web technologies</strong>, 
              I specialize in creating scalable, user-centric applications that make a meaningful impact. 
              My approach combines technical precision with creative problem-solving to deliver exceptional digital experiences.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-8 border border-blue-100 shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="h-7 w-7 text-primary mr-4" />
                <h4 className="text-2xl font-bold text-gray-900">Academic Excellence</h4>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">Bachelor of Technology - Computer Science Engineering</p>
                <p className="text-gray-700 text-lg">Raj Kumar Goel Institute of Technology (AKTU)</p>
                <p className="text-primary font-bold text-lg">Expected Graduation: 2026</p>
                <p className="text-gray-600 mt-3 italic">
                  "Specializing in software engineering, data structures, algorithms, and modern web development practices"
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
              <div className="flex items-center mb-3">
                <Brain className="h-6 w-6 text-purple-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-900">Philosophy</h4>
              </div>
              <p className="text-gray-700 italic leading-relaxed">
                "Every challenge is an opportunity to innovate. I believe in writing code that not only works 
                but inspires - creating solutions that are both technically sound and beautifully crafted."
              </p>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Technical Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-primary/20">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-4">
                        <IconComponent className="h-6 w-6 text-primary mr-3" />
                        <h4 className="font-bold text-gray-900 text-lg">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {skill.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold border border-blue-200 hover:from-blue-200 hover:to-indigo-200 transition-all duration-200"
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
