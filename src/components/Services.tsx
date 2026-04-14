const services = [
  { icon: '📹', title: 'סרטונים ברורים ומפורטים', desc: 'כל אימון כולל: וידאו איכותי + כתוביות מלאות בעברית + הסבר קולי ברור' },
  { icon: '♿', title: 'נגישות מלאה לכולם', desc: 'התוכנית מותאמת לאנשים עם מוגבלויות, כולל חרשים וכבדי שמיעה - עם כתוביות מלאות והדגמה ויזואלית' },
  { icon: '💬', title: 'מענה בוואטסאפ פעמיים בשבוע', desc: 'ימים ראשון וחמישי, 07:00-22:00 - תמיכה ומענה אישי מהמאמנים' },
  { icon: '📋', title: 'תוכנית אימונים מותאמת אישית', desc: 'תוכנית שמתאימה לרמה שלכם ומתקדמת אתכם בהדרגה' },
];

export function Services() {
  return (
    <section className="my-10">
      <h2 className="text-center text-navy text-[2em] font-bold mb-8">השירות שלנו</h2>
      <div className="space-y-4">
        {services.map((s) => (
          <div key={s.title} className="bg-white p-5 rounded-lg border-r-4 border-orange">
            <h4 className="text-orange font-bold text-lg mb-2">{s.icon} {s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
