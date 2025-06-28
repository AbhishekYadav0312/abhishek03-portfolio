
import { Code, Palette, Server, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Creating visually stunning and user-friendly interfaces that engage your audience and reflect your brand identity.',
      features: ['Responsive Design', 'UI/UX Planning', 'Modern Aesthetics', 'Brand Integration']
    },
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building interactive and responsive web applications using the latest technologies and best practices.',
      features: ['React Development', 'JavaScript/TypeScript', 'CSS Frameworks', 'Performance Optimization']
    },
    {
      icon: Server,
      title: 'Backend Integration',
      description: 'Developing robust backend systems and APIs to power your web applications with secure data management.',
      features: ['API Development', 'Database Design', 'Authentication Systems', 'Server Configuration']
    },
    {
      icon: Smartphone,
      title: 'Deployment & Support',
      description: 'Complete hosting setup and ongoing maintenance to ensure your website performs optimally at all times.',
      features: ['Hosting Setup', 'Domain Configuration', 'Performance Monitoring', 'Technical Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="animate-fade-in hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Let's collaborate to bring your ideas to life with clean, efficient, and responsive web solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="text-primary font-semibold">✉️ Abhisiknu@gmail.com</span>
              <span className="text-gray-400 hidden sm:block">|</span>
              <span className="text-gray-600">Available for freelance projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
