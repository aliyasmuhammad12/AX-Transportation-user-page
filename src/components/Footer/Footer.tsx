import { Facebook, Github, Instagram, Twitter } from "lucide-react";


function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-[#282121] text-white p-8">
        <div className="footer container mx-auto flex flex-col md:flex-row justify-between items-start">
          {/* Logo Section */}
          <div className="relative w-[150px] sm:w-[200px] h-[250px] flex items-center mb-8 md:mb-0">
            {/* White Radial Gradient Background */}
            <div className="absolute w-[250px] sm:w-[300px] h-full top-[-30px] left-[-98px] sm:left-[-80px] bg-[radial-gradient(circle,_#ffffff_0%,_rgba(255,255,255,0.3)_30%,_transparent_70%)] logo" />

            {/* Logo Image */}
            <img
              src="/assets/image 54.png"
              alt="AXT Transportation Logo"
              className="relative left-[-26px] sm:left-[-0px] top-[-30px] z-10 w-[120px] sm:w-[150px] h-auto"
            />
          </div>

          {/* Left Section - Services */}
          <div className="w-full md:w-1/4 mt-7 ml-24 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>Reel-Time Tracking</li>
              <li>Driver Profiles</li>
              <li>Maintenance</li>
              <li>Reports</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Right Section - Corporate */}
          <div className="w-full md:w-1/3 mt-7 mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Corporate</h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>1722 W. Bonanza Rd.</li>
              <li>Las Vegas, NV 89106, USA</li>
              <li>1-702-478-1860</li>
              <li>General Inquiry: info@axtransportation.com</li>
              <li>Load Inquiry: load@axtransportation.com</li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3 mt-7 mb-8 md:mb-0">
            <img
              className="w-full max-w-[382px] h-auto"
              src="/assets/footerimg.png"
              alt="Footer Image"
            />
          </div>
        </div>
      </footer>
      <div className="border-t border-gray-800 bg-[#FB8A00] h-[60px] flex items-center justify-around text-center">
        <p className="text-sm text-[#fff]">
          &copy; {new Date().getFullYear()} AX Transportation. All rights
          reserved.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white bg-gray-500">
            <Facebook />
          </div>
          <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white bg-gray-500">
            <Instagram />
          </div>
          <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white bg-gray-500">
            <Twitter />
          </div>
          <div className="h-[40px] w-[40px] rounded-full flex justify-center items-center text-white bg-gray-500">
            <Github />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
