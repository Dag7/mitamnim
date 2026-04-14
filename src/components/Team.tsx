import { ofirImage } from '@/data/ofir-image';
import { avidanImage } from '@/data/avidan-image';
import { omriImage } from '@/data/omri-image';

const team = [
  {
    name: 'אופיר דר',
    desc: 'בוגר תואר ראשון ותואר שני בחינוך גופני ממכון וינגייט, מאמן כושר מוסמך, בוגר מגמת אימון הגיל המבוגר',
    image: ofirImage,
  },
  {
    name: 'אבידן שלו',
    desc: 'בעל תואר שני בבריאות הציבור, מרצה בקורס מדריכי חדר כושר גופני ובריאות',
    image: avidanImage,
  },
  {
    name: 'עמרי הרמתי',
    desc: 'בוגר תואר ראשון בחינוך גופני בהצטיינות ממכון וינגייט, בוגר מגמת שיקום לב, מאמן כושר בעל 7 שנות ניסיון',
    image: omriImage,
  },
];

export function Team() {
  return (
    <section className="bg-gray-50 p-8 rounded-2xl my-10">
      <h2 className="text-center text-navy text-[2em] font-bold mb-8">הצוות שלנו</h2>
      <div className="space-y-4">
        {team.map((t) => (
          <div key={t.name} className="bg-white p-5 rounded-lg border-r-4 border-navy flex gap-5 items-center">
            <div className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.image}
                alt={t.name}
                className="w-[120px] h-[120px] rounded-xl object-cover border-4 border-navy shadow-md"
              />
            </div>
            <div className="min-w-0">
              <h4 className="text-navy font-bold text-xl mb-2">{t.name}</h4>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
