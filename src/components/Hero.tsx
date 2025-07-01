
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
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 center w-80 h-80 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Enhanced Profile Picture */}
          <div className="mb-10 flex justify-center">
            <div className="relative group">
              <div className="w-56 h-56 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 ring-4 ring-blue-400/30 ring-opacity-50 relative bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600">
                <img 
                  src="https://i.postimg.cc/YqHrQNJJ/phoyo.jpg" 
                  alt="Abhishek Kumar - Full Stack Developer"
                  className="w-full h-full object-cover object-center scale-110 hover:scale-115 transition-transform duration-500 filter brightness-110 contrast-110"
                  style={{ objectPosition: 'center center' }}
                />
                {/* Gradient overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
              {/* Enhanced floating decorative elements */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-bounce delay-300 shadow-lg"></div>
              <div className="absolute top-1/2 -right-6 w-6 h-6 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full animate-pulse delay-700 shadow-md"></div>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tight">
              <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 bg-clip-text text-transparent drop-shadow-lg">
                Abhishek Kumar
              </span>
            </h1>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-base font-semibold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/20">
                🚀 Full Stack Developer
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full text-base font-semibold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/20">
                🐍 Python Expert
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-pink-600 to-red-500 text-white rounded-full text-base font-semibold shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border border-white/20">
                🎓 Computer Science Engineer
              </span>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Passionate <span className="text-gradient font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">software engineer</span> crafting 
              innovative digital solutions that bridge creativity with cutting-edge technology. 
              <br/>
              <span className="text-lg text-gray-300 mt-2 block">
                Transforming complex problems into elegant, scalable applications with precision and artistry.
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection('#portfolio')}
              size="lg"
              className="group text-xl px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 transition-all duration-300 border border-white/20"
            >
              Explore My Work
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button
              onClick={() => scrollToSection('#contact')}
              variant="outline"
              size="lg"
              className="text-xl px-10 py-4 border-2 border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 bg-white/10 backdrop-blur-sm"
            >
              Let's Connect
            </Button>
          </div>

          {/* Enhanced floating stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-110 transition-all duration-300 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-sm text-gray-300 font-medium">Live Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-110 transition-all duration-300 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
              <div className="text-sm text-gray-300 font-medium">Years Coding</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-110 transition-all duration-300 border border-white/20">
              <div className="text-3xl font-bold text-pink-400 mb-2">10+</div>
              <div className="text-sm text-gray-300 font-medium">Technologies Mastered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-2xl hover:shadow-red-500/25 transform hover:scale-110 transition-all duration-300 border border-white/20">
              <div className="text-3xl font-bold text-red-400 mb-2">100%</div>
              <div className="text-sm text-gray-300 font-medium">Client Satisfaction</div>
            </div>
          </div>

          <div className="text-base text-gray-300 flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <span className="font-medium">📍 Currently at Raj Kumar Goel Institute of Technology, AKTU</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
