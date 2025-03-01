import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div className="">
      <Navbar />
      {/* first section  */}

      <section className="bg-black text-white py-24 px-6 text-center flex flex-col items-center">
        <h1 className="text-3xl font-prosto  md:text-5xl max-w-[940px] text-center">
          AX Transportation <br></br> Your Trusted Partner in Freight & Fueling
          Solutions
        </h1>
        <p className="mt-6 text-3xl font-poppins font-medium text-center max-w-3xl">
          Providing Reliable, 24/7 Freight Hauling, Heavy Hauling (local and
          interstate) and Mobile Fueling Services (Nevada, California, and Utah)
        </p>

        {/* Image Section */}
        <div className="mt-6 w-full max-w-3xl flex justify-center">
          <img
            src="/assets/Frame.png"
            alt="Tracking Dashboard"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Description Section */}
        <p className="mt-6 font-poppins font-medium text-xl text-gray-300 max-w-3xl text-center">
          Welcome to AX Transportation, where we offer comprehensive
          transportation and fueling services to meet your needs. 24 hours a
          day, 365 days a year. Whether you require dry goods and food delivery
          or heavy-duty construction equipment transport,<br></br> we <br></br>
          have the fleet and expertise to get it done. Our mobile fueling
          division ensures your job sites stay powered with both clear and red
          diesel and unleaded fuel. Let us help keep your business moving!
        </p>

        {/* Buttons */}
        <div className="mt-8 flex space-x-4">
          <Button to="/" className="rounded-lg">
            Get Started
          </Button>
          <Button to="/" className="rounded-lg" variant="secondary">
            Learn More
          </Button>
        </div>
      </section>

      <section>
        <div className="bg-[#F7F7F7] py-20">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-36">
            {/* Text Section */}
            <div className="text-center mb-12">
              <h3 className="text-[20px] text-5xl font-prosto uppercase tracking-wide">
                What We Do
              </h3>
              <h2 className="text-[32px] max-w-[650px] mx-auto text-center font-medium font-poppins leading-tight mt-2">
                Comprehensive Freight Hauling & Mobile Fueling Services
              </h2>
              <p className="text-[20px] mx-auto font-medium font-poppins max-w-[880px] text-gray-600 mt-4">
                At AX Transportation, we offer a full range of hauling and
                fueling services tailored to your needs.
              </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:mb:8 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="relative bg-[#1B1717] h-[334px] text-white p-6 rounded-2xl shadow-lg mt-[60px]">
                {/* Truck Icon */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                  <img
                    src="/assets/bus.png"
                    alt="Truck Icon"
                    className="w-14 h-14"
                  />
                </div>

                {/* Content */}
                <div className="mt-10 text-center">
                  <h2 className="text-[24px] font-bold">
                    Freight <br /> Hauling
                  </h2>
                  <p className="text-[15px] mt-2 leading-[22.5px]">
                    We specialize in transporting all calibers of freight, from
                    dry goods and food to industrial machinery like scissor
                    lifts, forklifts, boom lifts, and steel. No job is too big
                    or small for our experienced team.
                  </p>
                </div>

                {/* Bottom Yellow Portion Under the Card */}
                <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
              </div>

              {/* Card 2 */}
              <div className="relative bg-[#1B1717] h-[334px] text-white p-6 rounded-2xl shadow-lg">
                {/* Fuel Icon */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                  <img
                    src="/assets/location.png"
                    alt="Fuel Icon"
                    className="w-20 h-20"
                  />
                </div>

                {/* Content */}
                <div className="mt-10 text-center">
                  <h2 className="text-[24px] font-bold">Mobile Fueling</h2>
                  <p className="text-[15px] mt-2 leading-[22.5px]">
                    AX Transportation’s Mobile Fuel Division offers on-site
                    fueling services, delivering clear diesel, red diesel
                    (dyed), and unleaded fuels to remote job sites and
                    locations.
                  </p>
                </div>

                {/* Bottom Yellow Portion Under the Card */}
                <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
              </div>

              {/* Card 3 */}
              <div className="relative bg-[#1B1717] h-[334px] text-white p-6 rounded-2xl shadow-lg mt-[60px]">
                {/* 24/7 Icon */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-white flex items-center justify-center rounded-full">
                  <img
                    src="/assets/24.png"
                    alt="24/7 Icon"
                    className="w-20 h-20"
                  />
                </div>

                {/* Content */}
                <div className="mt-10 text-center">
                  <h2 className="text-[24px] font-bold">24/7 Availability</h2>
                  <p className="text-[15px] mt-2 leading-[22.5px]">
                    We operate 24 hours a day, 7 days a week, ensuring your
                    freight and fueling needs are met on time—no matter when or
                    where you need us.
                  </p>
                </div>

                {/* Bottom Yellow Portion Under the Card */}
                <div className="absolute -bottom-8 -left-4 w-20 h-18 bg-orange-500 rounded-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-16 xl:px-36">
          {/* Heading */}
          <div className="text-left mb-12">
            <h3 className="text-3xl font-medium font-poppins text-black">
              Our Equipment & What We Haul
            </h3>
            <h2 className="text-5xl font-prosto mt-2">
              State of the Art Fleet & <br /> Drivers Freight Option
            </h2>
            <p className="text-lg text-gray-600 font-poppins font-medium max-w-[640px] mt-2">
              With a versatile fleet, AX Transportation ensures your goods
              arrive safely, securely, and on time.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 bg-orange-500 w-full p-6 rounded-xl">
            {/* Dry Vans */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <img
                src="/assets/newbus.png"
                alt="Dry Vans"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-3xl font-prosto text-center mt-4">
                Dry Vans
              </h3>
              <p className="text-center text-gray-600 font-poppins font-medium text-xl max-w-[514px] mt-2">
                Perfect for transporting dry goods, food, and other
                non-perishable items. Our dry vans are equipped to handle
                various freight sizes and ensure your cargo stays safe and
                secure.
              </p>
            </div>

            {/* Reefer Trailers */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <img
                src="/assets/meter.png"
                alt="Reefer Trailers"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-3xl font-prosto text-center mt-4">
                Reefer Trailers
              </h3>
              <p className="text-center text-gray-600 font-poppins font-medium text-xl max-w-[514px] mt-2">
                Our refrigerated trailers are designed to transport perishable
                items at controlled temperatures, ensuring your temperature
                sensitive goods arrive in pristine condition.
              </p>
            </div>

            {/* Mobile Fueling Tankers */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <img
                src="/assets/crane.png"
                alt="Mobile Fueling Tankers"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-3xl font-prosto text-center mt-4">
                Mobile Fueling <br />
                Tankers
              </h3>
              <p className="text-center text-gray-600 font-poppins font-medium text-xl max-w-[514px] mt-2">
                Our mobile fueling trucks ensure your remote job sites stay
                powered, with delivery of clear diesel, red diesel, and unleaded
                fuel right to where you need it.
              </p>
            </div>

            {/* Heavy Equipment Hauling */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <img
                src="/assets/newbus.png"
                alt="Heavy Equipment Hauling"
                className="w-16 h-16 mx-auto"
              />
              <h3 className="text-3xl font-prosto text-center mt-4">
                Heavy Equipment Hauling
              </h3>
              <p className="text-center text-gray-600 font-poppins font-medium text-xl max-w-[514px] mt-2">
                We handle construction and industrial equipment such as scissor
                lifts, forklifts, boom lifts, and steel, providing the right
                equipment to safely transport your machinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-16 xl:px-36">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-poppins font-medium ">
              Fueling Services
            </h3>
            <h2 className="text-5xl max-w-[756px] leading-[54px] mx-auto font-prosto mt-4">
              On Site Mobile Fueling for Remote Locations & Job Sites
            </h2>
            <p className="text-3xl font-medium text-center mx-auto  max-w-[956px] font-poppins  mt-4">
              AX Transportation brings the fuel to you, ensuring your equipment
              runs smoothly without the hassle of off-site refueling
            </p>
            <p className=" font-poppins font-medium text-xl mt-4 max-w-3xl mx-auto">
              Our Mobile Fueling Division specializes in providing fuel delivery
              directly to your job sites, wherever they may be. Whether you’re
              working on a <br /> construction project, at a <br /> remote
              location, or in need of fueling for industrial operations, we’ve
              got <br /> you covered.
            </p>
          </div>

          {/* Fueling Options Grid */}
          <div className="flex flex-wrap justify-center gap-[70px] items-center">
            {/* Clear Diesel */}
            <div className="relative group">
              <img
                src="/assets/disel.png"
                alt="Clear Diesel"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 flex items-end bg-black bg-opacity-50 rounded-xl p-4">
                <h3 className="text-white text-lg font-semibold">
                  Clear Diesel
                </h3>
              </div>
            </div>

            {/* Red Diesel (Dyed) */}
            <div className="relative group">
              <img
                src="/assets/red.png"
                alt="Red Diesel (Dyed)"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 flex items-end bg-black bg-opacity-50 rounded-xl p-4">
                <h3 className="text-white text-lg font-semibold">
                  Red Diesel (Dyed)
                </h3>
              </div>
            </div>

            {/* Unleaded Gasoline */}
            <div className="relative group">
              <img
                src="/assets/last.png"
                alt="Unleaded Gasoline"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 flex items-end bg-black bg-opacity-50 rounded-xl p-4">
                <h3 className="text-white text-lg font-semibold">
                  Unleaded Gasoline
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative mb-10 bg-[#FAA602] text-white pt-10 pr-10 pl-10 pb-2 rounded-2xl max-w-5xl mx-auto mt-10 shadow-lg">
        {/* Left Section - Text */}
        <div className="space-y-1">
          <h3 className="text-2xl  text-black text-[48px] font-prosto">
            Live Chat
          </h3>
          <p className="text-black text-xl font-medium">
            Instant customer support at your fingertips.
          </p>
        </div>

        {/* Chat Button with Motion Effect */}
        <div className="flex items-center justify-center mt-10">
          <button className="bg-white  text-black font-medium px-20 py-4 rounded-lg shadow-md hover:bg-gray-100 transition-all">
            Chat Ai
          </button>
        </div>

        {/* Chatbot Icon - Positioned on the right side */}
        <div className="absolute -right-32 -top-28">
          <img
            src="/assets/ai.png"
            alt="Chatbot Icon"
            className="w-80 h-80 drop-shadow-lg"
          />
        </div>
      </div>

      <div className="bg-gray-100 py-10 px-6 md:px-20 lg:px-32">
        <div className="bg-white shadow-boxshadow rounded-2xl p-8 flex flex-col md:flex-row items-center relative">
          {/* Left Side - Contact Form */}
          <div className="md:w-1/2 w-full px-6">
            <h2 className="text-3xl font-semibold text-black">
              Get in <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2 mb-6">
              Fill out the form below and we will get back to you shortly.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name*"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">How did you find us?</option>
                <option value="Google">Google</option>
                <option value="Social Media">Social Media</option>
                <option value="Referral">Referral</option>
              </select>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-all"
              >
                SEND
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex gap-6 mt-6 text-gray-500 text-sm">
              <div>
                <p>📞 PHONE</p>
                <p className="font-medium text-black">07 123 456</p>
              </div>
              <div>
                <p>📠 FAX</p>
                <p className="font-medium text-black">03 552 134</p>
              </div>
              <div>
                <p>📧 EMAIL</p>
                <p className="font-medium text-orange-500">info@example.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="md:w-1/2 w-full mt-6 md:mt-0 relative">
            <div className="rounded-xl overflow-hidden  relative z-50">
              <img src="/assets/mainmap.png" alt="" />
              {/* <div className="absolute top-0 left-0 w-full bg-[#FB8A00] opacity-10 rounded-lg"></div> */}
            </div>

            {/* Orange Background Effect */}
          </div>
            <div className="absolute top-0 right-0 bg-orange-500 w-96 h-full rounded-tr-3xl rounded-br-3xl hidden md:block"></div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Home;
