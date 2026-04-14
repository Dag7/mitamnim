'use client';

import { useState, useCallback } from 'react';
import { WaiverModal } from './WaiverModal';
import { SignatureCanvas } from './SignatureCanvas';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyAVtqP02nfpxxIb7NKk-CHwA-4l-ceBKFffMhnJSlBKCYQGoaB-a2fWQn9vlB17sLEiA/exec';

export function PurchaseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [waiverOpen, setWaiverOpen] = useState(false);
  const [showSignature, setShowSignature] = useState(false);
  const [signatureData, setSignatureData] = useState('');
  const [formDisabled, setFormDisabled] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [status, setStatus] = useState<{ text: string; color: string } | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [consent, setConsent] = useState(false);
  const [health, setHealth] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleSignatureChange = useCallback((dataUrl: string) => {
    setSignatureData(dataUrl);
  }, []);

  const validateEmail = (value: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !pattern.test(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !phone || !idNumber) {
      setStatus({ text: '❌ אנא מלאו את כל השדות', color: '#dc3545' });
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus({ text: '❌ אנא הכניסו כתובת מייל תקינה', color: '#dc3545' });
      return;
    }
    if (!consent || !health) {
      setStatus({ text: '❌ אנא סמנו את שני האישורים', color: '#dc3545' });
      return;
    }

    const timestamp = new Date().toLocaleString('he-IL');
    const formData = {
      timestamp,
      name,
      email,
      phone,
      id: idNumber,
      consent: consent ? 'כן' : 'לא',
      healthDeclaration: health ? 'כן' : 'לא',
      signature: signatureData,
    };

    setStatus({ text: '⏳ שומר את הנתונים...', color: '#1B365D' });

    try {
      const urlEncodedData = new URLSearchParams();
      for (const [key, value] of Object.entries(formData)) {
        urlEncodedData.append(key, value);
      }
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: urlEncodedData,
      });
      setStatus({ text: `✅ הנתונים נשמרו בהצלחה! תאריך: ${timestamp}`, color: '#28a745' });
      setFormDisabled(true);
      setShowPayment(true);
      setTimeout(() => {
        document.getElementById('paymentSection')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);
    } catch {
      setStatus({ text: '❌ שגיאה בשמירה. אנא נסו שוב', color: '#dc3545' });
    }
  };

  const showPurchase = () => {
    setIsVisible(true);
    setTimeout(() => {
      document.getElementById('purchaseSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      {/* Decision CTA 1 */}
      <div className="bg-[#FFF8F2] rounded-2xl p-10 my-10 text-center" style={{ border: '3px solid #E8762B' }}>
        <h2 className="text-navy text-[2.5em] font-bold mb-8">החלטתם להירשם?</h2>
        <button
          onClick={showPurchase}
          className="bg-orange text-white font-bold text-xl px-10 py-5 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all"
        >
          כן! אני רוצה להצטרף עכשיו
        </button>
      </div>

      {/* Purchase / Waiver Form */}
      {isVisible && (
        <div id="purchaseSection" className="bg-[#FFF8F2] rounded-2xl p-8 my-8" style={{ border: '3px solid #E8762B' }}>
          <h3 className="text-navy text-center text-3xl font-bold mb-5">הצהרת בריאות וכתב ויתור</h3>

          {/* Open waiver button */}
          <div className="bg-white p-5 rounded-lg my-5">
            <p className="text-center text-orange font-bold text-lg mb-4">חשוב! אנא קראו בעיון:</p>
            <button
              onClick={() => setWaiverOpen(true)}
              className="block mx-auto bg-navy text-white font-bold px-8 py-4 rounded-lg max-w-[400px] w-full hover:-translate-y-1 transition-transform"
            >
              לחצו כאן לקריאת המסמך המלא
            </button>
            <p className="text-center text-sm text-gray-500 mt-3">המסמך כולל: כתב ויתור + הצהרת בריאות + תנאי שימוש</p>
          </div>

          <WaiverModal isOpen={waiverOpen} onClose={() => setWaiverOpen(false)} />

          {/* Personal details */}
          <div className="bg-white p-5 rounded-lg mb-5">
            <h4 className="mb-4 text-navy font-bold">פרטים אישיים:</h4>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="שם מלא *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={formDisabled}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:border-navy outline-none disabled:opacity-50"
                autoComplete="name"
              />
              <input
                type="email"
                placeholder="אימייל *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={(e) => validateEmail(e.target.value)}
                disabled={formDisabled}
                className={`w-full p-3 border-2 rounded-lg text-lg focus:border-navy outline-none disabled:opacity-50 ${emailError ? 'border-red-500' : 'border-gray-300'}`}
                autoComplete="email"
                inputMode="email"
              />
              {emailError && <p className="text-red-500 text-sm">אנא הכניסו כתובת מייל תקינה</p>}
              <input
                type="tel"
                placeholder="טלפון *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={formDisabled}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:border-navy outline-none disabled:opacity-50"
                autoComplete="tel"
                inputMode="tel"
              />
              <input
                type="text"
                placeholder="תעודת זהות *"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                disabled={formDisabled}
                className="w-full p-3 border-2 border-gray-300 rounded-lg text-lg focus:border-navy outline-none disabled:opacity-50"
                inputMode="numeric"
              />
            </div>
          </div>

          {/* Consent checkboxes */}
          <div className="bg-white p-5 rounded-lg my-5">
            <h4 className="mb-4 text-navy font-bold text-center">אישור כתב ויתור והצהרת בריאות</h4>

            <div className="bg-[#f0f4fa] border-2 border-navy rounded-lg p-5 mb-4">
              <label className="flex items-start gap-3 cursor-pointer text-base leading-relaxed">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  disabled={formDisabled}
                  className="w-6 h-6 min-w-[24px] mt-1 accent-navy"
                />
                <span>אני מאשר/ת שקראתי את כתב הוויתור, הצהרת הבריאות ותנאי השימוש במלואם, אני מבין/ה את תוכנם ומסכים/ה לכל התנאים המפורטים בהם.</span>
              </label>
            </div>

            <div className="bg-[#f0f4fa] border-2 border-orange rounded-lg p-5 mb-4">
              <label className="flex items-start gap-3 cursor-pointer text-base leading-relaxed">
                <input
                  type="checkbox"
                  checked={health}
                  onChange={(e) => setHealth(e.target.checked)}
                  disabled={formDisabled}
                  className="w-6 h-6 min-w-[24px] mt-1 accent-navy"
                />
                <span>אני מצהיר/ה כי מילאתי את השאלון הרפואי בכנות, מסרתי מידע מלא ונכון על מצבי הבריאותי, ואני מתחייב/ת להודיע על כל שינוי.</span>
              </label>
            </div>

            {/* Optional signature */}
            <div className="mt-4">
              <p
                onClick={() => setShowSignature(!showSignature)}
                className="text-navy cursor-pointer underline text-center text-sm"
              >
                {showSignature ? 'הסתרת חתימה ▲' : 'רוצים להוסיף חתימה דיגיטלית? (אופציונלי) ▼'}
              </p>
              {showSignature && (
                <div className="mt-3">
                  <p className="text-center text-sm text-gray-500 mb-3">חתימה מחזקת את ההגנה המשפטית</p>
                  <SignatureCanvas onSignatureChange={handleSignatureChange} />
                </div>
              )}
            </div>

            {/* Submit button */}
            <div className="text-center mt-5">
              <button
                onClick={handleSubmit}
                disabled={formDisabled}
                className="bg-orange text-white font-bold text-xl px-10 py-5 rounded-lg w-full max-w-[400px] hover:-translate-y-1 transition-transform disabled:opacity-50"
              >
                אשר ושלח ✓
              </button>
            </div>

            {status && (
              <p className="text-center mt-4 font-bold text-lg" style={{ color: status.color }}>
                {status.text}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Payment section */}
      {showPayment && (
        <div id="paymentSection" className="bg-[#FFF8F2] rounded-2xl p-10 my-8 text-center" style={{ border: '3px solid #E8762B' }}>
          <h3 className="text-navy text-[2em] font-bold mb-5">השלמת התשלום</h3>
          <p className="text-xl mb-6">תודה על האישור! כעת אנא השלימו את התשלום:</p>
          <p className="text-[2.5em] font-bold text-orange my-5">₪97 לחודש</p>
          <a
            href="https://secure.cardcom.solutions/EA/EA5/d0aVLYIFPU2NEXTPg5mdog/PaymentSP"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange text-white font-bold text-xl px-10 py-5 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            לחצו כאן לתשלום מאובטח 🔒
          </a>
          <p className="mt-5 text-sm text-gray-500">התשלום מאובטח ומוצפן לחלוטין</p>
          <p className="mt-3 text-sm text-gray-500">לאחר התשלום תקבלו מייל עם פרטי הכניסה לקורס</p>
        </div>
      )}

      {/* Decision CTA 2 */}
      <div className="bg-[#FFF8F2] rounded-2xl p-10 mt-12 text-center" style={{ border: '3px solid #E8762B' }}>
        <h2 className="text-navy text-[2.5em] font-bold mb-8">מוכנים להתחיל?</h2>
        <p className="text-xl mb-8">בואו נתחיל את המסע לחיים בריאים יותר!</p>
        <button
          onClick={showPurchase}
          className="bg-orange text-white font-bold text-xl px-10 py-5 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all"
        >
          כן! אני רוצה להצטרף עכשיו
        </button>
      </div>

      <div className="text-center py-8 text-xl text-navy">
        <strong>נתראה בקורס! 💪</strong>
      </div>
    </>
  );
}
