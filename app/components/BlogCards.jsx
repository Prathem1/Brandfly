'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogCards() {
  const cards = [
    {
      date: 'Logo Design',
      title: 'Logo Design: Memorable Logo that Define Your Brand Face',
      desc: 'When identity matters most, we shape bold, timeless logos your brand can grow with...',
      img: '/images/BlogCard1.png',
      link: '/services/logo-design',
      alt: 'Logo design case preview',
    },
    {
      date: 'Social Media Design',
      title: 'Social Media Design: Catchy Visuals that Speak Your Brand',
      desc: 'When your post deserves to stand out on the feed, we create scroll-stopping designs...',
      img: '/images/BlogCard2.png',
      link: '/services/social-media-design',
      alt: 'Social media post design preview',
    },
    {
      date: 'Packaging Design',
      title: 'Packing Design: Creative Packaging that Reflects Your Brand',
      desc: 'When your product needs to impress at first glance, our designs do all the talking...',
      img: '/images/BlogCard3.png',
      link: '/services/packing-design',
      alt: 'Packaging design mockups',
    },
    {
      date: 'Festival Post Design',
      title: 'Festival Post Design: Bright & Joyful Festive Brand Creati',
      desc: 'When festivals call for celebration, our vibrant designs light up your brand online...',
      img: '/images/BlogCard4.png',
      link: '/services/festival-post-design',
      alt: 'Festival post design examples',
    },
  ];

  return (
        <section className="site-container">
   <div className="w-full px-0 py-8"> {/* or w-screen */}
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {cards.map((card, idx) => (
          <article
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 flex flex-col"
          >
            {/* Responsive image with fixed aspect ratio */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={card.img}
                alt={card.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                priority={idx < 2} /* optionally eager-load first couple */
              />
            </div>

            <div className="p-4 flex flex-col gap-2">
              <p className="text-sm text-gray-500">{card.date}</p>

              <h2 className="text-base md:text-lg font-semibold leading-snug text-black line-clamp-2">
                {card.title}
              </h2>

              <p className="text-sm text-gray-600 line-clamp-3">
                {card.desc}
              </p>

              <div className="pt-2">
                <Link
                  href={card.link}
                  className="inline-flex items-center gap-1 bg-yellow-400 rounded-full px-3 py-1.5 text-black text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Read More <span className="text-lg">⟶</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
    </section>
  );
}
