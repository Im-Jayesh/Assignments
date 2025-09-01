import ClientLogo from "../components/ClientLogo";

const clientLogos = [
  "/clients/Layer 17.png",
  "/clients/Layer 18.png",
  "/clients/Layer 19.png",
  "/clients/Layer 20.png",
  "/clients/Layer 21.png",
  "/clients/Layer 22.png",
  "/clients/Layer 23.png",
  "/clients/Layer 24.png",
  "/clients/Layer 25.png",
];

const Home = () => {

  return (
    <>
      {/* Hero Section */}
      <section className="relative top-0 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 font-rubik text-left">
        {/* Hero Image - left on desktop, bottom on mobile */}
        <img
          src="hero.png"
          alt=""
          className="w-full max-w-[410px] md:max-w-[643px] aspect-[1.5/1] -z-9 p-6 pt-16 md:pt-0 md:p-0 md:translate-y-[22.4vh] md:-translate-x-[70px] object-contain"
        />

        {/* Hero Content */}
        <div className="w-full md:w-[500px] p-4 flex flex-col items-center md:items-start justify-center gap-6 text-center md:text-left">
          <h1 className="font-medium text-[36px] md:text-[56px] leading-tight">Mendleson Communication and Engagement</h1>
          <p className="text-[16px] md:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada sed ipsum, ut quam volutpat, tortor.
          </p>
        </div>

        {/* Decorative Images */}
        <img
          src="/decor/decor1.png"
          alt=""
          className="absolute left-0 bottom-0 -z-9 w-[20%] md:w-[12%] opacity-70 pointer-events-none"
        />
        <img
          src="/decor/decor2.png"
          alt=""
          className="absolute left-0 bottom-0 -z-10 w-[28%] md:w-[40%] pointer-events-none"
        />
        <img
          src="/decor/decor3.png"
          alt=""
          className="absolute left-0 top-0 -z-10 w-[26vw] md:w-[8%] pointer-events-none"
        />
        <img
          src="/decor/decor4.png"
          alt=""
          className="absolute right-0 top-0 -z-10 w-[26vw] md:w-[8%] pointer-events-none"
        />
        <img
          src="/decor/decor5.png"
          alt=""
          className="absolute right-0 bottom-0 -z-10 w-[26vw] md:w-[8%] pointer-events-none"
        />
      </section>

      {/* About Us */}
      <section className="flex flex-col md:flex-row min-h-screen items-center justify-center gap-10 md:gap-20 font-rubik text-center md:text-left p-6 md:p-0 md:px-20">
        {/* About Image */}
        <img
          src="section2.png"
          alt=""
          className="w-full max-w-[410px] md:max-w-[500px] aspect-[1.5/1] mb-8 md:mb-0 object-contain"
        />
        {/* About Content */}
        <div className="w-full md:w-[500px] flex flex-col items-center md:items-start justify-center gap-6">
          <div className="text-center md:text-left w-full">
            <div className="group mb-2">
              <h1 className="font-rubik font-medium text-[32px] md:text-[48px]">ABOUT US</h1>
              {/* Line container */}
              <div className="relative w-full max-w-[238px] mx-auto md:mx-0">
                {/* Track */}
                <div className="w-full border border-[#A9A9A9] rounded-sm"></div>
                {/* Bar */}
                <div
                  className="
                    absolute left-0 top-1/2 -translate-y-1/2
                    w-[120px] md:w-[156px] h-[7px] rounded-lg bg-[#A9A9A9]
                    transition-transform duration-1000 ease-in-out
                    group-hover:translate-x-[40px] md:group-hover:translate-x-[82px]
                  "
                />
              </div>
            </div>
            <p className="font-rubik text-[16px] md:text-[18px] mt-2">
              We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creativity, results and exceptional levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
            </p>
          </div>
          {/* About Features */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
            <div className="flex flex-col items-center md:items-start gap-2 flex-1 min-w-[150px]">
              <img src="settings.svg" alt="" className="w-10 h-10 mx-auto md:mx-0" />
              <h1 className="font-rubik font-medium text-[20px] md:text-[24px]">Engagement</h1>
              <p className="font-rubik text-[14px] md:text-[18px]">
                We are engagement specialists, who have led projects at all levels of the IAP2 spectrum. READ MORE
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-2 flex-1 min-w-[150px]">
              <img src="coomunication.svg" alt="" className="w-10 h-10 mx-auto md:mx-0" />
              <h1 className="font-rubik font-medium text-[20px] md:text-[24px]">Communications</h1>
              <p className="font-rubik text-[14px] md:text-[18px]">
                We are award-winning leaders in communications and campaign management. READ MORE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="flex flex-col items-center justify-center gap-10 md:gap-20 font-rubik p-6 md:p-0 md:px-6 overflow-x-hidden">
        <div className="group mb-2 w-full max-w-7xl">
          {/* Heading */}
          <h1 className="font-rubik font-medium text-[32px] md:text-[48px] text-center">SERVICES</h1>
          {/* Line container */}
          <div className="relative w-full max-w-[238px] mx-auto">
            {/* Track */}
            <div className="w-full border border-[#A9A9A9] rounded-sm"></div>
            {/* Bar */}
            <div
              className="
                absolute left-0 top-1/2 -translate-y-1/2
                w-[40px] md:w-[62px] h-[7px] rounded-lg bg-[#A9A9A9]
                transition-transform duration-1000 ease-in-out
                group-hover:translate-x-[120px] md:group-hover:translate-x-[182px]
              "
            />
          </div>
        </div>

        {/* Service Items */}
        <div className="flex flex-col w-full items-center justify-center gap-6 md:gap-20">
          {/* Engagement */}
          <div className="flex flex-col md:flex-row items-center justify-between text-right gap-8 md:gap-20 w-full max-w-6xl">
            <div className="order-2 md:order-1 flex-shrink min-w-0 w-[521px] p-20">
              <h1 className="font-rubik font-medium text-[28px] md:text-[42px] uppercase">Engagement</h1>
              <p className="font-rubik font-regular text-[15px] md:text-[16px] max-w-[521px]">
                We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creativity, results and exceptional levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
              </p>
            </div>
            <img
              src="/services/service1.png"
              alt=""
              className="order-1 md:order-2 w-full max-w-[454px] h-[240px] md:h-[375px] object-cover rounded-lg"
            />
          </div>
          {/* Communications */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 w-full max-w-6xl">
            <img
              src="/services/service2.png"
              alt=""
              className="w-full max-w-[487px] h-[178px] md:h-[251px] object-cover rounded-lg"
            />
            <div className="flex-shrink min-w-0 w-[521px] p-20">
              <h1 className="font-rubik font-medium text-[28px] md:text-[42px] uppercase">Communications</h1>
              <p className="font-rubik font-regular text-[15px] md:text-[16px] max-w-[521px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
              </p>
            </div>
          </div>
          {/* Facilitation */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 w-full max-w-6xl">
            <div className="order-2 md:order-1 flex-shrink min-w-0 w-[521px] p-20">
              <h1 className="font-rubik font-medium text-[28px] md:text-[42px] uppercase">Facilitation</h1>
              <p className="font-rubik font-regular text-[15px] md:text-[16px] max-w-[521px]">
                We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creativity, results and exceptional levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
              </p>
            </div>
            <img
              src="/services/service3.png"
              alt=""
              className="order-1 md:order-2 w-full max-w-[454px] h-[240px] md:h-[375px] object-cover rounded-lg"
            />
          </div>
          {/* Consultation and Research */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 w-full max-w-6xl">
            <img
              src="/services/service4.png"
              alt=""
              className="w-full max-w-[487px] h-[178px] md:h-[251px] object-cover rounded-lg"
            />
            <div className="flex-shrink min-w-0 w-[521px] p-20">
              <h1 className="font-rubik font-medium text-[28px] md:text-[42px] uppercase max-w-[407px]">Consultation and Research</h1>
              <p className="font-rubik font-regular text-[15px] md:text-[16px] max-w-[521px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus quam quis egestas orci. Scelerisque eu, vitae sapien, pellentesque et. Sit ac fames facilisis nibh faucibus.
              </p>
            </div>
          </div>
          {/* Training & Mentoring */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 w-full max-w-6xl">
            <div className="order-2 md:order-1 flex-shrink min-w-0 w-[521px] p-20">
              <h1 className="font-rubik font-medium text-[28px] md:text-[42px] uppercase">Traning & Mentoring</h1>
              <p className="font-rubik font-regular text-[15px] md:text-[16px] max-w-[521px]">
                We love what we do and are driven by achieving great results for our clients. Our awards and impressive client list are testament to our high quality approach. We deliver value, creativity, results and exceptional levels of customer service and professionalism. We specialise in infrastructure development, energy and natural resources.
              </p>
            </div>
            <img
              src="/services/service5.png"
              alt=""
              className="order-1 md:order-2 w-full max-w-[454px] h-[240px] md:h-[375px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="flex flex-col items-center justify-center gap-10 md:gap-20 p-6 py-6 md:py-10">
        <div className="group mb-2">
          {/* Heading */}
          <h1 className="font-rubik font-medium text-[32px] md:text-[48px] text-center">OUR TEAM</h1>
          {/* Line container */}
          <div className="relative w-full max-w-[238px] mx-auto">
            {/* Track */}
            <div className="w-full border border-[#A9A9A9] rounded-sm"></div>
            {/* Bar */}
            <div
              className="
                absolute left-0 top-1/2 -translate-y-1/2
                w-[40px] md:w-[62px] h-[7px] rounded-lg bg-[#A9A9A9]
                transition-transform duration-1000 ease-in-out
                group-hover:translate-x-[120px] md:group-hover:translate-x-[182px]
              "
            />
          </div>
        </div>
        {/* Team Members */}
        <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 md:gap-40 font-rubik text-[18px] md:text-[24px] font-regular">
          <div className="flex flex-col items-center gap-4 py-4 md:py-0">
            <img src="/team/person1.png" alt="" className="w-[205px] md:w-[278px] h-[162px] md:h-[221px] object-cover rounded-lg" />
            <h3>Jessica D’suza</h3>
          </div>
          <div className="flex flex-col items-center gap-4 py-4 md:py-0">
            <img src="/team/person2.png" alt="" className="w-[205px] md:w-[278px] h-[162px] md:h-[221px] object-cover rounded-lg" />
            <h3>Johny Williams</h3>
          </div>
          <div className="flex flex-col items-center gap-4 py-4 md:py-0">
            <img src="/team/person3.png" alt="" className="w-[205px] md:w-[278px] h-[162px] md:h-[221px] object-cover rounded-lg" />
            <h3>Sanya R,</h3>
          </div>
        </div>
      </section>

      {/* OUR PROJECTS */}
      <section className="flex flex-col items-center justify-center gap-10 md:gap-20 p-6 py-6 md:py-10">
        <div className="group mb-2">
          <h1 className="font-rubik font-medium text-[32px] md:text-[48px] text-center">OUR PROJECTS</h1>
          {/* Line container */}
          <div className="relative w-full max-w-[362px] mx-auto">
            {/* Track */}
            <div className="w-full border border-[#A9A9A9] rounded-sm"></div>
            {/* Bar */}
            <div
              className="
                absolute left-0 top-1/2 -translate-y-1/2
                w-[60px] md:w-[103px] h-[7px] rounded-lg bg-[#A9A9A9]
                transition-transform duration-1000 ease-in-out
                group-hover:translate-x-[100px] md:group-hover:translate-x-[260px]
              "
            />
          </div>
        </div>
        {/* Projects grid */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap">
          <img
            src="/projects/project1.png"
            alt="Project Main"
            className="w-full max-w-[360px] md:max-w-[554px] h-[220px] md:h-[667px] object-cover rounded-lg"
          />
          <div className="flex flex-col gap-6 w-full max-w-[554px]">
            <div className="relative group w-full h-[160px] md:h-[322px] overflow-hidden rounded-lg">
              <img
                src="/projects/project2.png"
                alt="Project"
                className="w-full h-full object-cover"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-50 transition duration-300" />
              <h1 className="font-rubik font-medium text-lg md:text-3xl text-white absolute z-10 left-4 md:left-6 bottom-4 md:bottom-6">
                Project Name
              </h1>
            </div>
            <div className="relative group w-full h-[160px] md:h-[322px] overflow-hidden rounded-lg">
              <img
                src="/projects/project3.png"
                alt="Project"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-50 transition duration-300" />
              <h1 className="font-rubik font-medium text-lg md:text-3xl text-white absolute z-10 left-4 md:left-6 bottom-4 md:bottom-6">
                Project Name
              </h1>
            </div>
          </div>
        </div>
      </section>

        {/* Our Clients */}
      <section className="flex flex-col items-center justify-center gap-10 md:gap-20 p-6 py-6 md:py-10">
                <div className="group mb-2">
                <h1 className="font-rubik font-medium text-[32px] md:text-[48px] text-center uppercase">OUR Clients</h1>
                {/* Line container */}
                <div className="relative w-full max-w-[362px] mx-auto">
                    {/* Track */}
                    <div className="w-full border border-[#A9A9A9] rounded-sm"></div>
                    {/* Bar */}
                    <div
                    className="
                        absolute left-0 top-1/2 -translate-y-1/2
                        w-[60px] md:w-[103px] h-[7px] rounded-lg bg-[#A9A9A9]
                        transition-transform duration-1000 ease-in-out
                        group-hover:translate-x-[100px] md:group-hover:translate-x-[260px]
                    "
                    />
                </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20 p-6 py-6 md:py-10 w-full max-w-7xl">
                    {clientLogos.map((logo, idx) => (
                        <ClientLogo key={idx} src={logo} alt={`Client logo ${idx + 1}`} />
                    ))}
                </div>
      </section>
    
    {/* decor */}

    <img src="/decor/Asset 5 1.svg" alt="" className="absolute left-0 top-[1468px] w-[366px] h-[431px]" />
    <img src="/decor/Asset 5 2.svg" alt="" className="absolute left-0 top-[3624px] -z-10"/>
    <img src="/decor/Asset 6 1.svg" alt="" className="absolute right-0 top-[2147px] -z-10"/>
    <img src="/decor/Asset 7 1.svg" alt="" className="absolute left-0 top-[2633px] -z-10"/>
    <img src="/decor/Asset 8 2.svg" alt="" className="absolute right-0 top-[3101px] -z-10"/>
    <img src="/decor/Asset 8 3.svg" alt="" className="absolute right-0 top-[4547px] -z-10"/>
    <img src="/decor/Assets 9 1.svg" alt="" className="absolute left-0 md:top-[5500px] -z-10"/>

    </>
  );
};

export default Home;
