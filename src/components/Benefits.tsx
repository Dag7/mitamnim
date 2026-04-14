const benefits = [
  { icon: '🛡️', title: 'מניעת נפילות', desc: 'שיפור יציבות ובטחון בתנועה' },
  { icon: '🦴', title: 'שיפור צפיפות עצם', desc: 'חיזוק העצמות והפחתת סיכון לשברים' },
  { icon: '⚖️', title: 'שיפור שיווי משקל', desc: 'איזון טוב יותר בכל פעילות יומיומית' },
  { icon: '🪜', title: 'לעלות במדרגות בקלות', desc: 'כוח ברגליים לטיפוס ללא מאמץ' },
  { icon: '🧘', title: 'לקום מהרצפה בקלות', desc: 'כוח וגמישות לתנועות יומיומיות' },
  { icon: '🧦', title: 'לגרוב גרביים בקלות', desc: 'גמישות לפעולות פשוטות ויומיומיות' },
  { icon: '👶', title: 'לשחק עם הנכדים על הרצפה', desc: 'כושר וגמישות לזמן איכות עם המשפחה' },
  { icon: '💊', title: 'שיפור ברמות כאב בגוף', desc: 'הפחתת כאבים כרוניים ושיפור תחושת הגוף' },
  { icon: '💪', title: 'עליית מסת שריר', desc: 'בניית שרירים לכוח ותפקוד טוב יותר' },
];

export function Benefits() {
  return (
    <section className="my-10">
      <h2 className="text-center text-navy text-[2em] font-bold mb-8">יתרונות מהתכנית שלנו</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-white p-6 rounded-xl border-r-4 border-orange shadow-md hover:-translate-y-1 transition-transform"
          >
            <div className="text-5xl mb-4">{b.icon}</div>
            <h3 className="text-navy font-bold text-xl mb-2">{b.title}</h3>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
