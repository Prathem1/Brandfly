'use client';

export default function VideoImageSection() {
  return (
     <div className="max-w-7xl mx-auto p-1">
      <div className="bg-white rounded-[20px] shadow-2xl overflow-hidden p-6 pb-10 w-full flex flex-col">
        
        {/* Heading inside white area */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-left">
          Product Highlights from Our Collection
        </h2>

        {/* Video + Image Row */}
        <div className="flex flex-col md:flex-row gap-[20px] md:gap-[2cm]">
          {/* Left - YouTube Video */}
          <div className="w-full md:w-[70%] h-[6cm] md:h-[9cm]">
            <iframe
              className="w-full h-full rounded-[20px]"
              src="https://www.youtube.com/embed/tv5CwxsWv24?si=FIlLTTlnTYjEnCyG"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

         {/* Right - Image */}
          <div className="w-full md:w-[30%] h-auto md:h-[9cm] flex items-start justify-center">
            <img
              src="/ClientShowcase/sidelogo.png"
              alt="Decor"
              className="w-full h-auto md:h-full object-contain rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
