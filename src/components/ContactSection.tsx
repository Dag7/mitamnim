export function ContactSection() {
  return (
    <section className="bg-[#f0f8f0] rounded-2xl p-8 my-10 text-center" style={{ border: '3px solid #25D366' }}>
      <h3 className="text-[#128C7E] text-3xl font-bold mb-5">יש שאלות? מתלבטים?</h3>
      <p className="text-lg mb-5">דברו איתנו בוואטסאפ - נשמח לעזור ולענות על כל שאלה!</p>
      <a
        href="https://wa.me/9720522661801"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-whatsapp text-white font-bold text-xl px-8 py-4 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all"
      >
        📱 שלחו לנו הודעה בוואטסאפ
      </a>
      <p className="mt-5 text-sm text-gray-500">זמני מענה: ראשון וחמישי, 07:00-22:00</p>
    </section>
  );
}
