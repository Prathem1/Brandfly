import Carousel from "@/components/Carousel";
import ProductOffers from "./components/ProductOffers";
import ServicesMarquee from "./components/ServicesMarquee";
import BannerImage from "./components/BannerImage";
import ClientShowcase from "./components/ClientShowcase";
import BlogCards from "./components/BlogCards";
import Allways from "./components/Allways-ready";
import VideoImageSection from "./components/VideoImageSection";

export default function HomePage() {
  const slides = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
    "/images/slide6.jpg",
    "/images/slide7.jpg",
  ];

  return (
     <>
     
        <Carousel images={slides} />
    
      <ServicesMarquee />
      <ProductOffers />
      <BannerImage />
       
       <div>
        <BlogCards />
       </div>
       <div>
          <ClientShowcase />
       </div>

       <div>
        <Allways />
       </div>

       <div className="mt-12 mb-12">
        <VideoImageSection />
       </div>
    </>
  );
}
