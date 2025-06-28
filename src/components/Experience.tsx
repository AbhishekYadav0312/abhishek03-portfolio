import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'HR Intern - Marketing',
      company: 'Fintech Pvt Ltd',
      duration: '2024',
      location: 'Remote',
      description: [
        'Responsible for onboarding new clients and managing client relationships',
        'Conducted interviews and assisted in the recruitment process',
        'Collaborated with marketing team to develop client acquisition strategies',
        'Gained experience in HR processes and client relationship management'
      ]
    },
    {
      title: 'Freelance Web Developer',
      company: 'Self-Employed',
      duration: '2023 - Present',
      location: 'Remote',
      description: [
        'Design and develop custom web applications for clients',
        'Create responsive, user-friendly interfaces using modern web technologies',
        'Provide end-to-end solutions including hosting and deployment support',
        'Maintain ongoing client relationships and project management'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building expertise through hands-on experience and real-world projects
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-xl text-primary font-semibold mb-2">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
