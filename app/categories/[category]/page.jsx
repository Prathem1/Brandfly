
import CategoryClient from "./CategoryClient";

const CATEGORY_TITLES = {
  "metal-business-cards": "Metal Business Cards",
  "800gsm-business-cards": "800 GSM Business Cards",
  "500gsm-business-cards": "500 GSM Business Cards",
  "nt-pvc-business-cards": "NT/PVC Business Cards",
  "atm-pouches": "ATM Pouches",
  "regular-business-cards": "Regular Business Cards",
  "visiting-cards": "Visiting Cards",
  "flex-printing": "Flex Printing",
  "graphic-designing": "Graphic Designing",
  "digital-promotion": "Digital Promotion",
  "paper-printing": "Paper Printing",
  "wedding-services": "Wedding Related Services",
  "standee-services": "Standee Services",
};

// Full products data with price
const CATEGORY_PRODUCTS = {
  "metal-business-cards": [
    {
      image: "/visiting-card/visiting-card1.png",
      name: "Metal Cards",
      minQty: 50,
      details: `Sheet Color – Gold, Silver, SS & Copper
Die Cut Option – Any Shape
Product Code No.: 1`,
      subitems: [
        { name: "Print With", info: "1 Color.", price: 8500 },
        { name: "Print With", info: "2 Color.", price: 9000 },
        { name: "Print With", info: "3 Color.", price: 9480 },
        { name: "Print With", info: "4 Color.", price: 9960 },
        { name: "Print With", info: "5 Color.", price: 1000 },
        { name: "Print With", info: "6 Color.", price: 1000 },
      ],
    },
  ],
  "800gsm-business-cards": [
    //     {
    //  image: "/images/Rockerz1.png",
    //       name: "800 GSM + Velvet ( Comming Soon )",
    //        minQty: 100,
    //       details: `Lamination Type: Velvet
    // UV Option – Available
    // Foil Option – Available (5 Colors)
    // Die Cut Option – Available (36 Shapes)

    // Product Code No.: 2`,
    //       subitems: [
    //         { name: "Printing", info: "Single / Double Side.", price: 1600, },
    //         { name: "Gold Foil", info: "Front / Back / Both Side.", price: 1800 },
    //         { name: "Spot UV", info: "Front / Back / Both Side.", price: 1900 },
    //       ],
    //     },
    {
      image: "/visiting-card/800-GSM/800-GSM1.png",
      name: "800 GSM + Matt + UV+ Foil",
      minQty: 100,
      details: `Lamination Type: Matt
UV Option – Available
Foil Option – Available (5 Colors)
Product Code No.: 3
`,
      subitems: [
        { name: "Printing", info: "Single / Double Side.", price: 2000 },
        { name: "Gold Foil", info: "Front / Back / Both Side.", price: 2000 },
        { name: "Spot UV", info: "Front / Back / Both Side. ", price: 2000 },
      ],
    },
    {
      image: "/visiting-card/800-GSM/800-GSM2.png",
      name: "800 GSM + Matt + UV+ Foil + Die Cut",
      minQty: 100,
      details: `Lamination Type: Matt
UV Option – Available
Foil Option – Available (5 Colors)
Die Cut Option – Available (36 Shapes)
Product Code No.: 4`,
      subitems: [
        { name: "Printing", info: "Single / Double Side.", price: 2200 },
        { name: "Gold Foil", info: "Front / Back / Both Side.", price: 2200 },
        { name: "Spot UV", info: "Front / Back / Both Side. ", price: 2200 },
        { name: "Die Cut", info: "Mention No. From 1 to 36.", price: 2200 },
      ],
    },
    //     {
    // image: "public/visiting-card/800-GSM/800-GSM1.png",
    //       name: "800 GSM Black Sheet",
    //       minQty: 100,
    //       details: `UV Option – Available
    // Foil Option – Available (5 Colors)
    // Die Cut Option – Available (36 Shapes)
    // Product Code No.: 5`,
    //       subitems: [
    //         { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 2200 },
    //         { name: "Silver Metal", info: "Premium silver business card.", price: 2200 },
    //         { name: "Copper Metal", info: "Classic copper look.", price: 2200 },
    //       ],
    //     },
    //     {
    // image: "/images/Rockerz1.png",
    //       name: "800 GSM Craft Paper",
    //       minQty: 100,
    //       details: `UV Option – Available
    // Foil Option – Available (5 Colors)
    // Die Cut Option – Available (36 Shapes)
    // Product Code No.: 6`,
    //       subitems: [
    //         { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1400 },
    //         { name: "Silver Metal", info: "Premium silver business card.", price: 1450 },
    //         { name: "Copper Metal", info: "Classic copper look.", price: 1500 },
    //       ],
    //     },
    {
      image: "/visiting-card/800-GSM/800-GSM3.png",
      name: "800 GSM + Texture",
      minQty: 100,
      details: `Lamination Type: Matt
Texture Option – Available (8 Types)
Die Cut Option – Available (36 Shapes)
Product Code No.: 7
`,
      subitems: [
        { name: "Printing", info: "Single / Double Side.", price: 1500 },
        { name: "Select Texture Type", info: "Texture No.'s.", price: 1500 },
        { name: "Die Shape", info: "Die Shapes up to 36.", price: 1500 },
      ],
    },
  ],
  "500gsm-business-cards": [
    {
      image: "/visiting-card/500 GSM + Matt/500 GSM1.png",
      name: "500 GSM + Velvet",
      minQty: 100,
      details: `Lamination Type: Velvet
UV Option – Available
Foil Option – Available (5 Colors)
Die Cut Option – Available (36 Shapes)
Product Code No.: 8`,
      subitems: [
        { name: "500 GSM + Velvet", info: ".", price: 1500 },
        { name: "500 GSM + Velvet", info: "UV.", price: 1700 },
        { name: "500 GSM + Velvet", info: "UV + Die cut.", price: 1700 },
        { name: "500 GSM + Velvet", info: "UV + Foil.", price: 2000 },
        { name: "500 GSM + Velvet", info: "UV + Foil + Die cut.", price: 2000 },
        { name: "500 GSM + Velvet", info: "UV + Foil + Customize Die cut.", price: 2200 },
      ],
    },
    {
      image: "/visiting-card/500 GSM + Matt/500 GSM2.png",
      name: "500 GSM + Matt",
      minQty: 100,
      details: `Lamination Type: Matt
UV Option – Available
Foil Option – Available (5 Colors)
Die Cut Option – Available (36 Shapes)
Product Code No.: 9`,
      subitems: [
        { name: "Gold Metal", info: "500 GSM + Matt + UV + Foil.", price: 1750 },
        { name: "Silver Metal", info: "500 Gsm + Matt + Die Cut.", price: 1500 },
        { name: "Copper Metal", info: "500 GSM + Matt + UV + Foil + Die Cut.", price: 1750 },
      ],
    },
    //     {
    // image: "/images/Rockerz1.png",
    //       name: "500 GSM Metallic Printing + Drip-Off",
    //       minQty: 100,
    //       details: `Metallic Printing + Drip-Off
    // Die Cut Option – Available (36 Shapes)
    // Product Code No.: 10`,
    //       subitems: [
    //         { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1400 },
    //         { name: "Silver Metal", info: "Premium silver business card.", price: 1450 },
    //         { name: "Copper Metal", info: "Classic copper look.", price: 1500 },
    //       ],
    //     },
  ],
  "nt-pvc-business-cards": [
    {
      image: "/visiting-card/800 Micron Fusing/Thread logo_shine design (Community).png",
      name: "800 Micron Fusing",
      minQty: 100,
      details: `Sheet Color – White, Gold & Silver
UV Option – Available
Foil Option – Available (5 Colors)
Die Cut Option – Available (2 Shapes)
Product Code No.: 11`,
      subitems: [
        { name: "Gold Metal", info: "800 Micron + Velvet.", price: 1500 },
        { name: "Silver Metal", info: "800 Micron + Matt.", price: 1500 },
        { name: "Copper Metal", info: "800 Micron Silver. + Gloss.", price: 1500 },
        { name: "Copper Metal", info: "800 Micron Gold + Gloss.", price: 1500 },
      ],
    },
    //     {
    // image: "/images/Rockerz1.png",
    //       name: "250 Micron Transparent (With White Ink)",
    //       minQty: 100,
    //       details: `250 Micron Transparent NT Sheet
    // Die Cut Option – Die No. 1 Only
    // Minimum Qty: 500
    // Product Code No.: 12`,
    //       subitems: [
    //         { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1200 },
    //         { name: "Silver Metal", info: "Premium silver business card.", price: 1250 },
    //         { name: "Copper Metal", info: "Classic copper look.", price: 1300 },
    //       ],
    //     },
    //     {
    // image: "/images/Rockerz1.png",
    //       name: "180 Micron",
    //       minQty: 100,
    //       details: `180 Micron White NT Sheet
    // Gloss UV Coating Option – Available
    // Drip-Off Option – Available
    // Minimum Qty: 1000
    // Product Code No.: 13`,
    //       subitems: [
    //         { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1100 },
    //         { name: "Silver Metal", info: "Premium silver business card.", price: 1150 },
    //         { name: "Copper Metal", info: "Classic copper look.", price: 1200 },
    //       ],
    //     },
  ],
  "atm-pouches": [
    {
      image: "/visiting-card/visiting-card5.png",
      name: "ATM Pouch",
      minQty: 100,
      details: `Lamination Option – Available (Matt & Gloss)
Minimum Qty: 1000 Pouches
Product Code No.: 14`,
      subitems: [
        { name: "ATM Pouch", info: "Shiny gold finish with durability.", price: 1500 },
        { name: "ATM Pouch", info: "Premium silver business card.", price: 1550 },
        { name: "ATM Pouch", info: "Classic copper look.", price: 1600 },
      ],
    },
  ],
  "regular-business-cards": [
    {
      image: "/regular-business/regular-business1.png",
      name: "Matt Lamination + UV",
      minQty: 1000,
      details: `Lamination Types – Matt
UV Option – Available
Product Code No.: 15`,
      subitems: [
        { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1500 },
        { name: "Silver Metal", info: "Premium silver business card.", price: 1550 },
        { name: "Copper Metal", info: "Classic copper look.", price: 1600 },
      ],
    },
    {
      image: "/regular-business/regular-business2.png",
      name: "Matt Lamination",
      minQty: 1000,
      details: `Lamination Types – Matt
Product Code No.: 16
`,
      subitems: [
        { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1500 },
        { name: "Silver Metal", info: "Premium silver business card.", price: 1550 },
        { name: "Copper Metal", info: "Classic copper look.", price: 1600 },
      ],
    },
    {
      image: "/regular-business/regular-business3.png",
      name: "Matt Lamination + Texture",
      minQty: 1000,
      details: `Lamination Types – Matt
Texture Option – Available
Product Code No.: 17`,
      subitems: [
        { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1500 },
        { name: "Silver Metal", info: "Premium silver business card.", price: 1550 },
        { name: "Copper Metal", info: "Classic copper look.", price: 1600 },
      ],
    },
    {
      image: "/regular-business/regular-business4.png",
      name: "Gloss Coated + Texture",
      minQty: 1000,
      details: `Lamination Types – Gloss UV
Texture Option – Available
Product Code No.: 18`,
      subitems: [
        { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1500 },
        { name: "Silver Metal", info: "Premium silver business card.", price: 1550 },
        { name: "Copper Metal", info: "Classic copper look.", price: 1600 },
      ],
    },
    {
      image: "/regular-business/regular-business5.png",
      name: "Gloss Lamination",
      minQty: 1000,
      details: `Gloss Thermal Lamination
Product Code No.: 19
`,
      subitems: [
        { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1500 },
        { name: "Silver Metal", info: "Premium silver business card.", price: 1550 },
        { name: "Copper Metal", info: "Classic copper look.", price: 1600 },
      ],
    },
    {
      image: "/regular-business/regular-business6.png",
      name: "Gloss UV Coated",
      minQty: 1000,
      details: `Gloss UV Coated
Product Code No.: 20
`,
      subitems: [
        { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1500 },
        { name: "Silver Metal", info: "Premium silver business card.", price: 1550 },
        { name: "Copper Metal", info: "Classic copper look.", price: 1600 },
      ],
    },
    {
      image: "/regular-business/regular-business7.png",
      name: "Without Coated",
      minQty: 1000,
      details: `Product Code No.: 21
    `,
      subitems: [
        { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1500 },
        { name: "Silver Metal", info: "Premium silver business card.", price: 1550 },
        { name: "Copper Metal", info: "Classic copper look.", price: 1600 },
      ],
    },
    {
      image: "/regular-business/regular-business8.png",
      name: "Gloss UV Coated (Small)",
      minQty: 1000,
      details: `Gloss UV Coated
Product Code No.: 22`,
      subitems: [
        { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1500 },
        { name: "Silver Metal", info: "Premium silver business card.", price: 1550 },
        { name: "Copper Metal", info: "Classic copper look.", price: 1600 },
      ],
    },
    {
      image: "/regular-business/regular-business1.png",
      name: "Without Coated (Small)",
      minQty: 1000,
      details: `Product Code No.: 23
    `,
      subitems: [
        { name: "Gold Metal", info: "Shiny gold finish with durability.", price: 1500 },
        { name: "Silver Metal", info: "Premium silver business card.", price: 1550 },
        { name: "Copper Metal", info: "Classic copper look.", price: 1600 },
      ],
    },
  ],
  

  // Flex Printing Start From Here
"flex-printing": [
  {
    image: "/flex-printing/flex-printing1.png",
    name: "Flex Printing (Flex Boards)",
    minQty: 100,
    details: `Printing Types – Flex Boards
     CMYK Option - Available
     Custom Size - Available
     Product Code No.: 16`,
    subitems: [
      { name: "Flex Boards", info: "Sturdy boards ideal for indoor & outdoor displays.", price: 3500 },
    ],
  },
  {
    image: "/flex-printing/flex-printing2.png",
    name: "Flex Printing (Vinyl Printing)",
    minQty: 100,
    details: `Printing Types – Flex Printing
     CMYK Option - Available
     Custom Size - Available
     Product Code No.: 15`,
    subitems: [
      { name: "Vinyl Printing", info: "High-quality vinyl prints, vibrant colors.", price: 3200 },
    ],
  },
  {
    image: "/flex-printing/flex-printing3.png",
    name: "Flex Printing (One-Way Vision)",
    minQty: 100,
    details: `Printing Types – Flex Printing
     CMYK Option - Available
     Custom Size - Available
     Product Code No.: 15`,
    subitems: [
      { name: "One-Way Vision", info: "Perforated vinyl for privacy & style.", price: 3200 },
    ],
  },
  {
    image: "/flex-printing/flex-printing6.png",
    name: "Flex Printing (Transparent Vinyl)",
    minQty: 100,
    details: `Printing Types – Flex Printing
     CMYK Option - Available
     Custom Size - Available
     Product Code No.: 15`,
    subitems: [
      { name: "Transparent Vinyl", info: "Clear vinyl, perfect for all surfaces.", price: 3200 },
    ],
  },
  {
    image: "/service-img/service2.png",
    name: "Flex Printing (Outdoor Vinyl)",
    minQty: 100,
    details: `Printing Types – Flex Printing
     CMYK Option - Available
     Custom Size - Available
     Product Code No.: 15`,
    subitems: [
      { name: "Outdoor Vinyl", info: "Durable vinyl for outdoor use.", price: 3200 },
    ],
  },
  {
    image: "/flex-printing/flex-printing9.png",
    name: "Flex Printing (Bulk Flexes)",
    minQty: 100,
    details: `Printing Types – Flex Printing
     CMYK Option - Available
     Custom Size - Available
     Product Code No.: 15`,
    subitems: [
      { name: "Bulk Flexes", info: "Custom flex banners in any size.", price: 3200 },
    ],
  },
  {
    image: "/flex-printing/flex-printing10.png",
    name: "Flex Printing (Flex Wallpaper)",
    minQty: 100,
    details: `Printing Types – Flex Printing
     CMYK Option - Available
     Custom Size - Available
     Product Code No.: 15`,
    subitems: [
      { name: "Flex Wallpaper", info: "Decorative vinyl wallpaper for walls.", price: 3200 },
    ],
  },
],

 // Graphic Designing Start From Here
"graphic-designing": [
  {
    image: "/graphic-design/graphic-design1.png",
    name: "Logo Designing",
    minQty: 1,
    details: `Unique and professional logo design for your brand.`,
    subitems: [
      { name: "Basic Logo", info: "Simple, clean logo design.", price: 500 },
      { name: "Premium Logo", info: "Creative, brand-focused design.", price: 1500 },
    ],
  },
  {
    image: "/graphic-design/graphic-design2.png",
    name: "Brochure Designing",
    minQty: 50,
    details: `Attractive brochure designs for promotions.`,
    subitems: [
      { name: "Bi-Fold", info: "Two-panel brochure.", price: 800 },
      { name: "Tri-Fold", info: "Three-panel brochure.", price: 1200 },
    ],
  },
  {
    image: "/graphic-design/graphic-design3.png",
    name: "Catalogue Designing",
    minQty: 10,
    details: `Product and service catalogues in custom styles.`,
    subitems: [
      { name: "Basic Catalogue", info: "Up to 10 pages.", price: 1500 },
      { name: "Premium Catalogue", info: "Up to 25 pages.", price: 3000 },
    ],
  },
  {
    image: "/graphic-design/graphic-design4.png",
    name: "Pamphlets Designing",
    minQty: 100,
    details: `Eye-catching pamphlets for events and offers.`,
    subitems: [
      { name: "Single Side", info: "One-side pamphlet.", price: 300 },
      { name: "Double Side", info: "Two-side pamphlet.", price: 500 },
    ],
  },
  {
    image: "/graphic-design/graphic-design5.png",
    name: "Menu Card Designing",
    minQty: 50,
    details: `Stylish and readable menu card designs.`,
    subitems: [
      { name: "Single Page Menu", info: "Compact menu design.", price: 600 },
      { name: "Multi-Page Menu", info: "Detailed multi-page design.", price: 1200 },
    ],
  },
  {
    image: "/graphic-design/graphic-design6.png",
    name: "Social Media Packages",
    minQty: 1,
    details: `Custom social media post and banner designs.`,
    subitems: [
      { name: "Starter Pack", info: "10 posts per month.", price: 2000 },
      { name: "Premium Pack", info: "30 posts + banners.", price: 6000 },
    ],
  },
  {
    image: "/graphic-design/graphic-design7.png",
    name: "Video Editing",
    minQty: 1,
    details: `Professional editing for ads and social media.`,
    subitems: [
      { name: "Basic Editing", info: "Cuts and transitions.", price: 1000 },
      { name: "Advanced Editing", info: "Full effects & branding.", price: 3000 },
    ],
  },
],

// Digital Promotion Start From Here
"digital-promotion": [
  {
    image: "/digital-permotion/digital-permotion1.png",
    name: "Digital Promotion",
    minQty: 1,
    details: `Boost your brand through online promotions.`,
    subitems: [
      { name: "Basic", info: "Simple digital promotion campaigns.", price: 2000 },
      { name: "Advanced", info: "Extended promotion for wider reach.", price: 5000 },
    ],
  },
  {
    image: "/digital-permotion/digital-permotion2.png",
    name: "Google SEO",
    minQty: 1,
    details: `Improve your website visibility on Google.`,
    subitems: [
      { name: "Basic SEO", info: "Keyword & on-page optimization.", price: 3000 },
      { name: "Premium SEO", info: "Advanced SEO with analytics.", price: 6000 },
    ],
  },
  {
    image: "/digital-permotion/digital-permotion3.png",
    name: "Social Media Handling",
    minQty: 1,
    details: `Manage your social media platforms professionally.`,
    subitems: [
      { name: "Facebook & Instagram", info: "Regular posts & engagement.", price: 4000 },
      { name: "Snapchat & YouTube", info: "Content management & promotion.", price: 5000 },
    ],
  },
  {
    image: "/digital-permotion/digital-permotion4.png",
    name: "Google Map & 360° View",
    minQty: 1,
    details: `Showcase your shop or office virtually on Google Maps.`,
    subitems: [
      { name: "Map Listing", info: "Basic map setup.", price: 1000 },
      { name: "360° View", info: "Interactive virtual tour.", price: 4000 },
    ],
  },
  {
    image: "/digital-permotion/digital-permotion5.png",
    name: "Promotion Through Mobile & Camera",
    minQty: 1,
    details: `Reach customers directly through mobile and camera promotions.`,
    subitems: [
      { name: "Mobile", info: "Targeted mobile campaigns.", price: 3000 },
      { name: "Camera", info: "On-site camera-based promotions.", price: 4000 },
    ],
  },
  {
    image: "/digital-permotion/digital-permotion6.png",
    name: "Video Packages",
    minQty: 1,
    details: `Create professional videos for your promotions.`,
    subitems: [
      { name: "Basic Video", info: "Short promotional videos.", price: 2000 },
      { name: "Advanced Video", info: "Full-featured videos with branding.", price: 5000 },
    ],
  }
],
// Paper Printing Services Start From Here
"paper-printing": [
  {
    image: "/graphic-design/graphic-design3.png",
    name: "Pamphlet Printing",
    minQty: 100,
    details: `Professional pamphlet designs
     Multiple sizes available
     Eye-catching colors`,
    subitems: [
      { name: "Tri-Fold Pamphlet", info: "Perfect for promotions and marketing.", price: 1200 },
    ],
  },
  {
    image: "/graphic-design/graphic-design4.png",
    name: "Catalogue Printing",
    minQty: 50,
    details: `Detailed catalogues
     High-resolution images
     Custom layouts`,
    subitems: [
      { name: "Product Catalogue", info: "Showcase products professionally.", price: 2500 },
    ],
  },
  {
    image: "/paper-printing/paper-printing1.png",
    name: "Mug Printing",
    minQty: 10,
    details: `Custom mugs
     Full-color prints
     Durable coating`,
    subitems: [
      { name: "Ceramic Mug", info: "Ideal for gifts and branding.", price: 350 },
    ],
  },
  {
    image: "/paper-printing/paper-printing2.png",
    name: "T-Shirt Printing",
    minQty: 10,
    details: `Custom T-shirts
     Durable print quality
     Multiple sizes`,
    subitems: [
      { name: "Cotton T-Shirt", info: "Comfortable and vibrant prints.", price: 400 },
    ],
  },
  {
    image: "/paper-printing/paper-printing3.png",
    name: "Garments Tag Printing",
    minQty: 50,
    details: `Professional garment tags
     Durable materials
     Custom branding`,
    subitems: [
      { name: "Clothing Tags", info: "Enhance product identity.", price: 200 },
    ],
  },
  {
    image: "/paper-printing/paper-printing4.png",
    name: "Doctor Files Printing",
    minQty: 50,
    details: `Organized files
     Durable covers
     Custom branding`,
    subitems: [
      { name: "Medical Files", info: "Perfect for clinics and hospitals.", price: 800 },
    ],
  },
  {
    image: "/paper-printing/paper-printing5.png",
    name: "ID Cards Printing",
    minQty: 20,
    details: `Professional ID cards
     Laminated finish
     Custom designs`,
    subitems: [
      { name: "Employee ID", info: "Safe, durable, and professional.", price: 150 },
    ],
  },
  {
    image: "/paper-printing/paper-printing6.png",
    name: "Stickers Printing",
    minQty: 50,
    details: `Custom stickers
     Various shapes and sizes
     Durable material`,
    subitems: [
      { name: "Vinyl Stickers", info: "Perfect for branding and packaging.", price: 300 },
    ],
  },
  {
    image: "/paper-printing/paper-printing7.png",
    name: "Envelope Printing",
    minQty: 50,
    details: `Custom envelopes
     Multiple sizes
     Professional finish`,
    subitems: [
      { name: "Business Envelope", info: "Ideal for official correspondence.", price: 200 },
    ],
  },
  {
    image: "/paper-printing/paper-printing8.png",
    name: "Letterhead Printing",
    minQty: 50,
    details: `Professional letterheads
     High-quality paper
     Custom designs`,
    subitems: [
      { name: "Company Letterhead", info: "Enhance your corporate identity.", price: 300 },
    ],
  },
  {
    image: "/paper-printing/paper-printing9.png",
    name: "Stamps Printing",
    minQty: 10,
    details: `Custom stamps
     Durable rubber
     Precision engraving`,
    subitems: [
      { name: "Rubber Stamp", info: "Perfect for office and official use.", price: 400 },
    ],
  },
],
// Wedding Services Start From Here
"wedding-services": [
  {
    image: "/Wedding/Wedding1.png",
    name: "Wedding Cards",
    minQty: 10,
    details: `Elegant wedding invitation cards
     Multiple designs & themes
     Premium paper quality`,
    subitems: [
      { name: "Designer Wedding Card", info: "Modern & traditional styles available.", price: 2500 },
    ],
  },
  {
    image: "/Wedding/Wedding2.png",
    name: "Wedding Boxes",
    minQty: 10,
    details: `Stylish invitation/gift boxes
     Durable and attractive
     Customizable sizes`,
    subitems: [
      { name: "Royal Wedding Box", info: "Perfect for gifts & premium invites.", price: 10000 },
    ],
  },
  {
    image: "/Wedding/Wedding3.png",
    name: "Shagun Envelopes",
    minQty: 10,
    details: `Elegant money envelopes
     Multiple colors & textures
     Traditional & modern designs`,
    subitems: [
      { name: "Designer Shagun Envelope", info: "Ideal for weddings & occasions.", price: 1500 },
    ],
  },
  {
    image: "/Wedding/Wedding4.png",
    name: "Shaahi Chithi",
    minQty: 10,
    details: `Royal-style invitation letters
     Premium calligraphy designs
     High-quality paper`,
    subitems: [
      { name: "Traditional Shaahi Chithi", info: "Perfect for formal & royal invites.", price: 2200 },
    ],
  },
],
// Standee Services Start From Here
"standee-services": [
  {
    image: "/Standees/Standees1.png",
    name: "Roll-Up Standees",
    minQty: 10,
    details: `High-quality roll-up standees
     Easy to carry & assemble
     Perfect for events & promotions`,
    subitems: [
      { name: "Standard Roll-Up Standee", info: "Durable & lightweight for regular use.", price: 13000 },
    ],
  },
  {
    image: "/Standees/Standees2.png",
    name: "White Acrylic Standees",
    minQty: 10,
    details: `Premium acrylic standees
     Sleek white finish
     Long-lasting & sturdy`,
    subitems: [
      { name: "White Acrylic Standee", info: "Elegant & durable for display branding.", price: 25000 },
    ],
  },
  {
    image: "/Standees/Standees3.png",
    name: "Table Standees",
    minQty: 10,
    details: `Compact table-top standees
     Suitable for counters & receptions
     Customizable prints`,
    subitems: [
      { name: "Standard Table Standee", info: "Ideal for restaurants, shops & offices.", price: 7000 },
    ],
  },
  {
    image: "/Standees/Standees4.png",
    name: "Table Standees with Light",
    minQty: 10,
    details: `Illuminated table standees
     Eye-catching LED design
     Perfect for premium displays`,
    subitems: [
      { name: "LED Table Standee", info: "Highlight promotions with lighting.", price: 14000 },
    ],
  },
  {
    image: "/Standees/Standees5.png",
    name: "A4 Table Standees",
    minQty: 10,
    details: `Compact A4 size standees
     Easy to place on desks/tables
     Professional & elegant look`,
    subitems: [
      { name: "A4 Table Standee", info: "Perfect for menus, offers & branding.", price: 5000 },
    ],
  },
  {
    image: "/Standees/Standees6.png",
    name: "A3 Standees",
    minQty: 10,
    details: `Medium-sized A3 standees
     Ideal for indoor promotions
     Custom designs available`,
    subitems: [
      { name: "A3 Standee", info: "Balanced size for counters & shops.", price: 13000 },
    ],
  },
]

};


export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const slug = decodeURIComponent(resolvedParams.category ?? "");
  const title = CATEGORY_TITLES[slug];
  const products = CATEGORY_PRODUCTS[slug];

  if (!title || !products) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-xl shadow max-w-5xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-2 text-black">Unknown Category</h1>
          <a href="/AddOrder" className="inline-block mt-4 px-4 py-2 bg-black rounded text-white hover:bg-yellow-300 hover:text-black transition">
            Back to Order
          </a>
        </div>
      </div>
    );
  }

  return (
    <CategoryClient title={title} products={products} />
  );
}