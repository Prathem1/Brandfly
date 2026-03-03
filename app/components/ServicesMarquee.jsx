export default function ServicesMarquee() {
  const services = ["LOGO", "BROCHURE", "POSTER", "CATALOGUE", "FLYER" , "PACKAGING", "WEDDING CARD", "INVITATION VIDEO", "BUSINESS CARD"];

  return (
    <div className="bg-yellow-400 h-[2cm] md:h-[3cm] w-full overflow-hidden relative flex items-center mt-[0.5cm] md:mt-[1cm]">
      <div className="absolute flex gap-10 md:gap-16 whitespace-nowrap text-black text-xl md:text-3xl font-semibold animate-marquee">
        {Array(2).fill(null).map((_, i) =>
          services.map((service, j) => (
            <span key={`${i}-${j}`} className="mx-4">
              {service}
            </span>
          ))
        )}
      </div>
    </div>
  );
}
