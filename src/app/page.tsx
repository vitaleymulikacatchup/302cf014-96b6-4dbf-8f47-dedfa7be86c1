"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Spade, PenTool, Shield } from 'lucide-react';

const assetMap = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A luxurious hotel lobby featuring elegant architecture, rich decor, and comfortable seating under a stained glass ceiling." },
  { "id": "feature1", "url": "https://images.pexels.com/photos/3673978/pexels-photo-3673978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A serene moment of relaxation and wellness in a Budapest, Hungary hotel spa." },
  { "id": "feature2", "url": "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Elegant rooftop pool with cityscape backdrop at sunset, reflecting urban luxury." },
  { "id": "feature3", "url": "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Young man workouts on treadmill in modern gym with large windows and natural light." },
  { "id": "team1", "url": "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Smiling waiter stands in an elegant restaurant interior, exuding warmth and professionalism." },
  { "id": "team2", "url": "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A chef artfully plating a gourmet dish with mushrooms and greens on wood slices." }
];

const App = () => {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About Us", id: "about" },
            { name: "Amenities", id: "features" },
            { name: "Rooms", id: "rooms" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Hotel Lux"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Hotel Lux"
            description="Experience luxury and comfort in the heart of the city."
            imageSrc={assetMap.find(a => a.id === 'heroImage')?.url}
            buttons={[
              { text: "Book Now", href: "https://example.com" },
              { text: "Explore", href: "about" }
            ]}
            className="bg-pink-100"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "Hotel Lux is renowned for delivering unparalleled luxury and comfort to our guests.",
              "Our mission is to ensure a memorable experience for every visitor."
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
            className="bg-pink-100"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>

      <div id="features" data-section="features" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Spa", description: "Relax and rejuvenate at our world-class spa.", icon: Spade },
              { title: "Pool", description: "Enjoy our rooftop pool with a stunning view.", icon: PenTool },
              { title: "Gym", description: "Stay fit with our state-of-the-art gym facilities.", icon: Shield }
            ]}
            className="bg-pink-100"
            cardTitleClassName="text-gray-800"
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Updated"
            description="Subscribe to our newsletter for the latest offers and updates."
            className="bg-pink-100"
            titleClassName="text-gray-800"
            descriptionClassName="text-gray-800"
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24 bg-pink-100">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Explore", items: [ { label: "Rooms", href: "rooms" }, { label: "Dining", href: "dining" } ] },
              { title: "Connect", items: [ { label: "Contact", href: "contact" }, { label: "FAQ", href: "faq" } ] }
            ]}
            copyrightText="© 2025 Hotel Lux"
            className="bg-pink-100"
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
