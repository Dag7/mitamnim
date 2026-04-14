export function PriceBox() {
  return (
    <div className="bg-navy text-white p-10 rounded-2xl text-center my-8">
      <h2 className="text-[2em] font-bold mb-3">כמה זה עולה?</h2>
      <div className="text-[4em] md:text-[4em] font-bold my-5">₪97</div>
      <p className="text-xl opacity-90">לחודש בלבד! (3.2 ₪ ליום)</p>
      <p className="mt-3 opacity-80">ביטול בכל עת ללא התחייבות</p>
    </div>
  );
}
