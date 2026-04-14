import { Header } from '@/components/Header';
import { Benefits } from '@/components/Benefits';
import { Services } from '@/components/Services';
import { Testimonial } from '@/components/Testimonial';
import { Team } from '@/components/Team';
import { PriceBox } from '@/components/PriceBox';
import { Hesitations } from '@/components/Hesitations';
import { ContactSection } from '@/components/ContactSection';
import { PurchaseSection } from '@/components/PurchaseSection';

export default function Home() {
  return (
    <div className="p-3 md:p-5">
      <div className="max-w-[900px] mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <Header />
        <div className="px-5 md:px-8 py-10">
          <Benefits />
          <Services />
          <Testimonial />
          <Team />
          <PriceBox />
          <PurchaseSection />
          <ContactSection />
          <Hesitations />
        </div>
      </div>
    </div>
  );
}
