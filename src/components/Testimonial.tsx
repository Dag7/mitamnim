import { galitImage } from '@/data/galit-image';

export function Testimonial() {
  return (
    <div className="bg-[#FFF8F2] border-3 border-orange rounded-2xl p-8 my-8" style={{ borderWidth: '3px' }}>
      <h3 className="text-navy text-2xl font-bold mb-5 text-center">מה אומרים המתאמנים שלנו?</h3>
      <div className="flex flex-wrap gap-5 items-center justify-center md:justify-start">
        <div className="shrink-0 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={galitImage}
            alt="גלית - מתאמנת"
            className="w-[250px] h-[250px] rounded-2xl object-cover border-4 border-orange shadow-lg"
          />
        </div>
        <div className="flex-1 min-w-[250px] px-4">
          <p className="text-lg leading-relaxed italic mb-4">
            &ldquo;אחרי 3 חודשים אני מרגישה שינוי משמעותי! עולה במדרגות בלי להתנשף, יורדת לרצפה לשחק עם הנכדים
            ובעיקר - מרגישה בטוחה בתנועה. המאמנים מקצועיים ותומכים.&rdquo;
          </p>
          <p className="font-bold text-navy text-lg">— גלית, בת 68, מתאמנת 3 חודשים</p>
        </div>
      </div>
    </div>
  );
}
