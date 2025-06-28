
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Car Pooling Web Application',
      description: 'A comprehensive web application that connects ride-givers and ride-seekers to promote shared and sustainable transport. Features real-time location tracking, secure user authentication, and intelligent matching algorithms.',
      technologies: ['HTML', 'Python', 'MySQL', 'MongoDB', 'JWT', 'Google Maps API'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop',
      features: [
        'Real-time ride matching system',
        'Secure JWT authentication',
        'Interactive Google Maps integration',
        'User rating and review system'
      ]
    },
    {
      title: 'Contact Management System',
      description: 'A streamlined contact management application with an intuitive interface for organizing and managing contact information. Built with Python backend and clean frontend design.',
      technologies: ['Python', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      features: [
        'CRUD operations for contacts',
        'Advanced search and filtering',
        'Export functionality',
        'Responsive design'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing professional experience and projects. Built with React and modern web technologies for optimal performance and user experience.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      features: [
        'Responsive design',
        'Smooth animations',
        'SEO optimized',
        'Fast loading performance'
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing projects that demonstrate technical expertise and creative problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="animate-fade-in hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" className="text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="secondary" className="text-xs">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
