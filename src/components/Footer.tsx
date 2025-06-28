
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gradient mb-2">Abhishek Kumar</h3>
            <p className="text-gray-400">Web Developer & Python Programmer</p>
          </div>
          
          <div className="flex justify-center items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span>by Abhishek Kumar © {new Date().getFullYear()}</span>
          </div>
          
          <div className="mt-4 text-xs text-gray-500">
            <p>B.Tech Student at Raj Kumar Goel Institute of Technology (AKTU)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
