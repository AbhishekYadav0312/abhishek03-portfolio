
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-2xl p-2">
              <div className="w-44 h-44 rounded-full overflow-hidden bg-white flex items-center justify-center">
                <img 
                  src="https://i.postimg.cc/Yq4VRYpz/absji.jpg" 
                  alt="Abhishek Kumar - Profile Picture"
                  className="w-40 h-40 rounded-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            <span className="text-gradient">Abhishek Kumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Web Developer | Python Programmer | Final Year B.Tech Student
          </p>
          
          <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Turning ideas into responsive, elegant web solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('#portfolio')}
              size="lg"
              className="group text-lg px-8 py-3 bg-primary hover:bg-primary/90"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-primary text-primary hover:bg-primary hover:text-white"
            >
              Get in Touch
            </Button>
          </div>

          <div className="mt-12 text-sm text-gray-400">
            <p>📍 Raj Kumar Goel Institute of Technology (AKTU)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
