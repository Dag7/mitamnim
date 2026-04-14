'use client';

import { useEffect, useRef } from 'react';

interface WaiverModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaiverModal({ isOpen, onClose }: WaiverModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 z-[9999] flex justify-center items-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div ref={modalRef} className="bg-white rounded-2xl max-w-[800px] w-full max-h-[90vh] overflow-y-auto p-8" dir="rtl">
        <button
          onClick={onClose}
          className="sticky top-0 float-left bg-red-600 text-white rounded-full w-10 h-10 text-2xl flex items-center justify-center z-10 cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-center text-navy text-2xl font-bold border-b-[3px] border-navy pb-3 mb-5">
          כתב ויתור, שחרור מאחריות והצהרת בריאות
          <br />
          <span className="text-base text-gray-600">קורס &ldquo;מתאמנים מהבית עם ליווי ותמיכה&rdquo;</span>
        </h2>

        <div className="bg-[#f0f4fa] border border-[#c0d0e8] rounded-md p-4 my-4 text-sm">
          <strong>הקדמה</strong><br />
          מסמך זה מהווה הסכם משפטי מחייב בין המתאמן/ת לבין מאמני הקורס. אנא קרא/י בעיון לפני החתימה.
          <br />פרטי המתאמן/ת יימלאו בדף הקליטה הדיגיטלי וישמרו יחד עם החתימה הדיגיטלית.
        </div>

        <h3 className="text-navy border-r-4 border-orange pr-3 mt-5 font-bold">1. פרטי המאמנים ורקע מקצועי</h3>
        <p className="my-2"><strong>נותני השירות:</strong> אופיר דר, אבידן שלו ועמרי הרמתי – מייסדי ורכזי הקורס</p>
        <p><strong>כישורים מקצועיים:</strong></p>
        <ul className="list-disc pr-6 mb-4">
          <li><strong>אופיר דר</strong> – בוגר תואר ראשון ותואר שני בחינוך גופני ממכון וינגייט, מאמן כושר מוסמך, בוגר מגמת אימון הגיל המבוגר</li>
          <li><strong>אבידן שלו</strong> – בעל תואר שני בבריאות הציבור, מרצה בקורס מדריכי חדר כושר גופני ובריאות</li>
          <li><strong>עמרי הרמתי</strong> – בוגר תואר ראשון בחינוך גופני בהצטיינות ממכון וינגייט, בוגר מגמת שיקום לב, מאמן כושר בעל 7 שנות ניסיון</li>
        </ul>

        <h3 className="text-navy border-r-4 border-orange pr-3 mt-5 font-bold">2. תיאור הקורס ואופי השירות</h3>
        <p className="my-2"><strong>מהות הקורס:</strong> קורס דיגיטלי לאימוני כוח ושיווי משקל המבוצעים באופן עצמאי בביתו של המתאמן/ת, הכולל:</p>
        <ul className="list-disc pr-6 mb-4">
          <li>סרטונים מוקלטים עם הדגמה ויזואלית ברורה</li>
          <li>ליווי קולי והנחיות מפורטות</li>
          <li>כתוביות בעברית לכל הסרטונים</li>
          <li>אימונים במשקל גוף ללא דרישה לציוד מיוחד</li>
          <li>תזכורות בדבר ביצוע אימונים</li>
          <li>מענה ותמיכה מקצועית בוואטסאפ</li>
          <li>גישה לתכני הקורס כל עוד המתאמן מנוי</li>
        </ul>
        <p className="mb-4"><strong>חשוב להבין:</strong> האימונים מתבצעים באופן עצמאי בבית. המאמנים אינם נוכחים פיזית ואין פיקוח בזמן אמת. המתאמן/ת אחראי/ת לסביבת אימון בטוחה.</p>

        <h3 className="text-navy border-r-4 border-orange pr-3 mt-5 font-bold">3. הצהרת בריאות</h3>
        <p className="my-2 italic">(מנוסח בלשון זכר מטעמי נוחות, מיועד גם לנקבה.)</p>
        <p><strong>שאלון רפואי:</strong></p>
        <ol className="list-decimal pr-6 mb-4">
          <li>האם הרופא אמר לך שאתה סובל ממחלת לב?</li>
          <li>האם אתה חש כאבים בחזה במנוחה, בשיגרה או בפעילות גופנית?</li>
          <li>האם בשנה האחרונה איבדת שיווי משקל עקב סחרחורת או איבדת הכרה?</li>
          <li>האם אובחנת עם אסתמה ונזקקת לטיפול או סבלת מקוצר נשימה?</li>
          <li>האם בן משפחה מדרגה ראשונה נפטר ממחלת לב או ממוות פתאומי?</li>
          <li>האם הרופא אמר לך לבצע פעילות רק תחת השגחה רפואית?</li>
          <li>האם אתה סובל ממחלה כרונית שעלולה להגביל פעילות גופנית?</li>
          <li>לנשים בהריון – האם ההיריון הוגדר בסיכון?</li>
        </ol>
        <div className="bg-red-50 border border-red-300 rounded-md p-4 my-4">
          <p><strong>אם ענית &ldquo;כן&rdquo; על שאלה כלשהי:</strong> חייב/ת להמציא אישור רפואי תוך 14 ימים. שליחה בוואטסאפ: 0522661801</p>
          <p><strong>אם ענית &ldquo;לא&rdquo; על הכל:</strong> אשר/י באמצעות הסימון למטה.</p>
        </div>

        <h3 className="text-navy border-r-4 border-orange pr-3 mt-5 font-bold">4-5. סיכונים, בטיחות ואחריות</h3>
        <p className="mb-4">פעילות גופנית כרוכה בסיכונים. המתאמן/ת מקבל/ת אחריות מלאה, מתחייב/ת לבצע תרגילים בקצב מתאים, להפסיק במקרה כאב, לשתות מים ולפנות לעזרה רפואית במקרה הצורך.</p>

        <h3 className="text-navy border-r-4 border-orange pr-3 mt-5 font-bold">6. ויתור על תביעות ושחרור מאחריות</h3>
        <p className="mb-4">המתאמן/ת מוותר/ת באופן מלא על כל טענה כלפי המאמנים, למעט מקרה של רשלנות חמורה. הוויתור חל על כל נזק – גופני, נפשי, רכושי או כספי.</p>

        <h3 className="text-navy border-r-4 border-orange pr-3 mt-5 font-bold">7. קניין רוחני</h3>
        <p className="mb-4">כל התכנים מוגנים. כל סרטון מסומן בשם המתאמן/ת. נאסר: העתקה, הפצה, הקלטה או שיתוף. שימוש אישי בלבד. הפרה תגרור הליכים משפטיים.</p>

        <h3 className="text-navy border-r-4 border-orange pr-3 mt-5 font-bold">8. תנאים כספיים וביטולים</h3>
        <p className="mb-4">97 ₪/חודש בהוראת קבע. ביטול בכל עת בוואטסאפ/מייל. חיוב מלא על החודש השוטף, הפסקת חיובים מהחודש הבא. אין החזרים.</p>

        <h3 className="text-navy border-r-4 border-orange pr-3 mt-5 font-bold">9-11. פרטיות והוראות כלליות</h3>
        <p className="mb-4">המידע נשמר בסודיות ולא יועבר לצדדים שלישיים. הדין הישראלי חל, סמכות שיפוט – ת&ldquo;א. חתימה דיגיטלית או אישור אלקטרוני שקולים לחתימה פיזית.</p>

        <p className="text-center text-xs text-gray-500 mt-5 border-t pt-4">
          מסמך זה מהווה הסכם משפטי מחייב. מומלץ לשמור עותק.<br />עדכון אחרון: ינואר 2026
        </p>

        <div className="text-center mt-5">
          <button
            onClick={onClose}
            className="bg-green-600 text-white font-bold px-8 py-4 rounded-lg text-lg hover:-translate-y-1 transition-transform"
          >
            קראתי והבנתי – סגירה ✓
          </button>
        </div>
      </div>
    </div>
  );
}
