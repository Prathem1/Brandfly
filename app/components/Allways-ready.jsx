export default function ResponsiveBox() {
  return (
    <section className="site-container">
      <div className="max-w-7xl mx-auto p-1">
        <div className="bg-white rounded-[20px] shadow-2xl overflow-hidden p-6 pb-10 w-full flex flex-col md:flex-row gap-[20px] md:gap-[2cm]">
          
          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Always Here to Support Printing & Advertising Experts
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              We believe in building lasting relationships through honest work and creative support.
              As your go-to partner in printing and advertising, we're always here to guide, create,
              and deliver with care. No matter the scale of your project, our focus stays on quality,
              clarity, and consistency. Count on us for dependable service
              that’s driven by passion and purpose—not just business.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 h-[6cm] md:h-[9cm] flex items-center justify-center">
            <img
              src="/ClientShowcase/ready.png"
              alt="img"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
