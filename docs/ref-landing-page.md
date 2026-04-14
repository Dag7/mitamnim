<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>מתאמנים מהבית עם ליווי ותמיכה</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #1B365D;
    padding: 20px;
    line-height: 1.6;
}
.container {
    max-width: 900px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    overflow: hidden;
}
.header {
    background: #1B365D;
    color: white;
    padding: 40px 30px;
    text-align: center;
}
.header h1 { font-size: 2.5em; margin-bottom: 10px; }
.header p { font-size: 1.2em; opacity: 0.9; }
.content { padding: 40px 30px; }
.section { margin: 40px 0; }
.section-title { text-align: center; color: #1B365D; font-size: 2em; margin-bottom: 30px; }

/* Benefits */
.benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0; }
.benefit-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    border-right: 4px solid #E8762B;
    box-shadow: 0 4px 6px rgba(0,0,0,0.08);
    transition: transform 0.3s;
}
.benefit-card:hover { transform: translateY(-5px); }
.benefit-card .icon { font-size: 3em; margin-bottom: 15px; }
.benefit-card h3 { color: #1B365D; margin-bottom: 10px; font-size: 1.3em; }

/* Service cards */
.service-card {
    background: white;
    padding: 20px;
    border-radius: 10px;
    border-right: 4px solid #E8762B;
    margin: 15px 0;
}
.service-card h4 { color: #E8762B; font-size: 1.2em; margin-bottom: 8px; }

/* Testimonial */
.testimonial-box {
    background: #FFF8F2;
    border: 3px solid #E8762B;
    border-radius: 15px;
    padding: 30px;
    margin: 30px 0;
}
.testimonial-flex { display: flex; gap: 20px; flex-wrap: wrap; align-items: center; }
.image-upload-box { text-align: center; flex-shrink: 0; }
.galit-image { width: 250px; height: 250px; border-radius: 15px; object-fit: cover; border: 4px solid #E8762B; box-shadow: 0 8px 16px rgba(0,0,0,0.2); display: none; }
.galit-image.show { display: block; }
.image-placeholder { width: 250px; height: 250px; border-radius: 15px; background: #FFF3E8; border: 4px dashed #E8762B; display: flex; align-items: center; justify-content: center; font-size: 3em; }
.image-placeholder.hide { display: none; }
.testimonial-text { flex: 1; min-width: 250px; max-width: 100%; padding: 0 15px; }

/* Buttons */
.btn {
    display: inline-block;
    padding: 15px 30px;
    background: #1B365D;
    color: white;
    text-decoration: none;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.1em;
    margin: 10px 5px;
    transition: transform 0.3s, box-shadow 0.3s;
    border: none;
    cursor: pointer;
    text-align: center;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
}
.btn:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(27,54,93,0.3); }
.btn-upload { background: #E8762B; padding: 10px 20px; font-size: 0.9em; margin-top: 10px; }
.btn-save { background: #28a745; }
.btn-whatsapp { background: #25D366; font-size: 1.2em; }
.btn-whatsapp:hover { box-shadow: 0 10px 25px rgba(37,211,102,0.3); }
.btn-cta {
    background: #E8762B;
    font-size: 1.3em;
    padding: 20px 40px;
    color: white;
}
.btn-cta:hover { box-shadow: 0 10px 25px rgba(232,118,43,0.4); }

/* Team */
.team-section { background: #f8f9fa; padding: 30px; border-radius: 15px; }
.team-member { background: white; padding: 20px; margin: 15px 0; border-radius: 10px; border-right: 4px solid #1B365D; }
.team-member h4 { color: #1B365D; font-size: 1.3em; margin-bottom: 10px; }

/* Price */
.price-box {
    background: #1B365D;
    color: white;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
    margin: 30px 0;
}
.price-box .price { font-size: 4em; font-weight: bold; margin: 20px 0; }

/* Decision */
.decision-section {
    background: #FFF8F2;
    border: 3px solid #E8762B;
    border-radius: 15px;
    padding: 40px;
    margin: 40px 0;
    text-align: center;
}

/* Purchase/Waiver section */
.purchase-section {
    background: #FFF8F2;
    border: 3px solid #E8762B;
    border-radius: 15px;
    padding: 30px;
    margin: 30px 0;
    display: none;
}

/* Form inputs */
.user-info input {
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1.1em;
}
.user-info input:focus { border-color: #1B365D; outline: none; }
.user-info input.invalid { border-color: #dc3545; }

/* Checkbox consent */
.consent-box {
    background: #f0f4fa;
    border: 2px solid #1B365D;
    border-radius: 10px;
    padding: 20px;
    margin: 15px 0;
}
.consent-box label {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    cursor: pointer;
    font-size: 1.05em;
    line-height: 1.6;
}
.consent-box input[type="checkbox"] {
    width: 24px;
    height: 24px;
    min-width: 24px;
    margin-top: 4px;
    cursor: pointer;
    accent-color: #1B365D;
}

/* Signature (optional) */
.signature-section { margin-top: 15px; }
.signature-toggle { color: #1B365D; cursor: pointer; text-decoration: underline; font-size: 0.95em; text-align: center; margin: 10px 0; }
.signature-area { display: none; }
.signature-area.show { display: block; }
#signatureCanvas {
    border: 2px solid #666;
    border-radius: 10px;
    cursor: crosshair;
    display: block;
    margin: 15px auto;
    background: white;
    width: 100%;
    max-width: 600px;
    height: auto;
    touch-action: none;
}

/* Contact */
.contact-section {
    background: #f0f8f0;
    border: 3px solid #25D366;
    border-radius: 15px;
    padding: 30px;
    margin: 40px 0;
    text-align: center;
}

/* Hesitation */
.hesitation-section {
    background: #f5f7fa;
    border: 3px solid #1B365D;
    border-radius: 15px;
    padding: 40px;
    margin: 40px 0;
}
.hesitation-point {
    background: white;
    padding: 20px;
    margin: 15px 0;
    border-radius: 10px;
    border-right: 4px solid #E8762B;
}
.hesitation-point h4 { color: #1B365D; margin-bottom: 10px; }

/* Payment */
.payment-section {
    background: #FFF8F2;
    border: 3px solid #E8762B;
    border-radius: 15px;
    padding: 40px;
    margin: 40px 0;
    text-align: center;
    display: none;
}

@media (max-width: 768px) {
    body { padding: 10px; }
    .header h1 { font-size: 1.8em; }
    * { word-break: break-word !important; }
    .testimonial-flex { flex-direction: column; text-align: center; }
    .btn-cta { font-size: 1.1em; padding: 15px 25px; }
    .price-box .price { font-size: 3em; }
}
</style>
</head>
<body>
<div class="container">
    <div class="header">
        <h1>מתאמנים מהבית עם ליווי ותמיכה</h1>
        <p>אימונים מקצועיים שישפרו את איכות חיי היומיום שלכם</p>
    </div>
    <div class="content">

        <!-- יתרונות -->
        <div class="section">
            <h2 class="section-title">יתרונות מהתכנית שלנו</h2>
            <div class="benefits-grid">
                <div class="benefit-card"><div class="icon">🛡️</div><h3>מניעת נפילות</h3><p>שיפור יציבות ובטחון בתנועה</p></div>
                <div class="benefit-card"><div class="icon">🦴</div><h3>שיפור צפיפות עצם</h3><p>חיזוק העצמות והפחתת סיכון לשברים</p></div>
                <div class="benefit-card"><div class="icon">⚖️</div><h3>שיפור שיווי משקל</h3><p>איזון טוב יותר בכל פעילות יומיומית</p></div>
                <div class="benefit-card"><div class="icon">🪜</div><h3>לעלות במדרגות בקלות</h3><p>כוח ברגליים לטיפוס ללא מאמץ</p></div>
                <div class="benefit-card"><div class="icon">🧘</div><h3>לקום מהרצפה בקלות</h3><p>כוח וגמישות לתנועות יומיומיות</p></div>
                <div class="benefit-card"><div class="icon">🧦</div><h3>לגרוב גרביים בקלות</h3><p>גמישות לפעולות פשוטות ויומיומיות</p></div>
                <div class="benefit-card"><div class="icon">👶</div><h3>לשחק עם הנכדים על הרצפה</h3><p>כושר וגמישות לזמן איכות עם המשפחה</p></div>
                <div class="benefit-card"><div class="icon">💊</div><h3>שיפור ברמות כאב בגוף</h3><p>הפחתת כאבים כרוניים ושיפור תחושת הגוף</p></div>
                <div class="benefit-card"><div class="icon">💪</div><h3>עליית מסת שריר</h3><p>בניית שרירים לכוח ותפקוד טוב יותר</p></div>
            </div>
        </div>

        <!-- השירות -->
        <div class="section">
            <h2 class="section-title">השירות שלנו</h2>
            <div style="background: #f8f9fa; padding: 30px; border-radius: 15px;">
                <div class="service-card"><h4>📹 סרטונים ברורים ומפורטים</h4><p>כל אימון כולל: וידאו איכותי + כתוביות מלאות בעברית + הסבר קולי ברור</p></div>
                <div class="service-card"><h4>♿ נגישות מלאה לכולם</h4><p>התוכנית מותאמת לאנשים עם מוגבלויות, כולל חרשים וכבדי שמיעה - עם כתוביות מלאות והדגמה ויזואלית</p></div>
                <div class="service-card"><h4>💬 מענה בוואטסאפ פעמיים בשבוע</h4><p>ימים ראשון וחמישי, 07:00-22:00 - תמיכה ומענה אישי מהמאמנים</p></div>
                <div class="service-card"><h4>📋 תוכנית אימונים מותאמת אישית</h4><p>תוכנית שמתאימה לרמה שלכם ומתקדמת אתכם בהדרגה</p></div>
            </div>
        </div>

        <!-- המלצה -->
        <div class="testimonial-box">
            <h3 style="color: #1B365D; font-size: 1.5em; margin-bottom: 20px; text-align: center;">מה אומרים המתאמנים שלנו?</h3>
            <div class="testimonial-flex">
                <div class="image-upload-box">
                    <img id="galitImage" class="galit-image show" src="data:image/jpeg;base64,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NN8luEFW016FjifTb7UYhcKLHp1QX4khUdzCF5zvSAvg80lvSqbe7ZZnqJ2Yz6EzF/7QXtkhoSlmx6a3AgqUph5RUR83MD8qF0qpRUU3wOersfALn/2g3bPdIzkR+z6cS04QVBDLwJA6DPeZxS2dMqsWG2I9TJkVG+nN2xxX2n241mUWRtQFtOkBOcgY3+VUP8taNS3RbT78Y/sItRJLB5f/AKcvbFqWbJnXaJY3HJMVMM4juDa2DnA8fXPnVm/otN8lJyksezIpy8R5ZDxfpcdokGO/EhWexMMSAlKkIZcGAPQ78jqao2/Cuivi42uTTab574/kV5Uxn3J3T306e1vTcBi3wrTYHERyopLzTyiQo8g/WYplHwlotPd4sJS/LhJf0RPQ3R9LJxP/AGivbM2+3IZ05pZpbSSkFtmQnIPr9bWpLpFEvVosvVzfoiIuf06+026TTcHtJaVQ+pBbWpLD+VpJzg5d55pk+iaexeZv9P7EM7HZLcz1n6e3bJEjCJBtun47eclKI7hBGMYIK8YoXRaE08vj/vsIrJR7Mbf9+PtV/wCBaa/+EX/z1P8A4bD+Ji+NZ7nOtaJGCgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgAUACgD/9k=" alt="גלית">
                    <div id="galitPlaceholder" class="image-placeholder" style="display:none;">👤</div>
                    
                    
                </div>
                <div class="testimonial-text">
                    <p style="font-size: 1.2em; line-height: 1.8;"><em>"הצטרפתי לתוכנית לפני 3 חודשים ואני מרגישה שינוי אמיתי! עולה מדרגות בלי להתנשף, משחקת עם הנכדים על הרצפה ואפילו חזרתי לגן! המאמנים מדהימים, סבלניים ומקצועיים. ממליצה בחום!"</em></p>
                    <p style="margin-top: 15px; font-weight: bold; color: #1B365D;">- גלית, בת 68, הוד השרון</p>
                </div>
            </div>
        </div>

        <!-- הצוות -->
        <div class="team-section">
            <h2 class="section-title">הצוות שלנו</h2>
            <div class="team-member">
                <div style="display: flex; align-items: center; gap: 15px; flex-wrap: wrap;">
                    <div class="image-upload-box">
                        <img id="ofirImage" style="width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #1B365D;" src="data:image/jpeg;base64,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" alt="אופיר דר">
                        <div id="ofirPlaceholder" style="display:none;">👤</div>
                        
                        
                    </div>
                    <div><h4>אופיר דר</h4><p>בוגר תואר ראשון ותואר שני בחינוך גופני ממכון וינגייט, מאמן כושר מוסמך, בוגר מגמת אימון הגיל המבוגר</p></div>
                </div>
            </div>
            <div class="team-member">
                <div style="display: flex; align-items: center; gap: 15px; flex-wrap: wrap;">
                    <div class="image-upload-box">
                        <img id="avidanImage" style="width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #1B365D;" src="data:image/jpeg;base64,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" alt="אבידן שלו">
                        <div id="avidanPlaceholder" style="display:none;">👤</div>
                        
                        
                    </div>
                    <div><h4>אבידן שלו</h4><p>בעל תואר שני בבריאות הציבור, מרצה בקורס מדריכי חדר כושר גופני ובריאות</p></div>
                </div>
            </div>
            <div class="team-member">
                <div style="display: flex; align-items: center; gap: 15px; flex-wrap: wrap;">
                    <div class="image-upload-box">
                        <img id="omriImage" style="width:120px;height:120px;border-radius:50%;object-fit:cover;border:3px solid #1B365D;" src="data:image/jpeg;base64,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" alt="עמרי הרמתי">
                        <div id="omriPlaceholder" style="display:none;">👤</div>
                        
                        
                    </div>
                    <div><h4>עמרי הרמתי</h4><p>בוגר תואר ראשון בחינוך גופני בהצטיינות ממכון וינגייט, בוגר מגמת שיקום לב, מאמן כושר בעל 7 שנות ניסיון</p></div>
                </div>
            </div>
        </div>

        <!-- מחיר -->
        <div class="price-box">
            <h2 style="font-size: 2em; margin-bottom: 10px;">כמה זה עולה?</h2>
            <div class="price">₪97</div>
            <p style="font-size: 1.3em; margin-bottom: 10px;">לחודש בלבד!</p>
            <p style="font-size: 0.85em; opacity: 0.9;">תנאי ביטול מופיעים בתקנון</p>
        </div>

        <!-- החלטה 1 -->
        <div class="decision-section">
            <h2 style="color: #1B365D; font-size: 2.5em; margin-bottom: 30px;">החלטתם להירשם?</h2>
            <p style="font-size: 1.2em; margin-bottom: 30px;">מעולה! בואו נתחיל את התהליך</p>
            <a href="javascript:void(0)" id="startBtn1" class="btn btn-cta">כן! אני רוצה להתחיל</a>
        </div>

        <!-- טופס הרשמה -->
        <div class="purchase-section" id="purchaseSection">
            <h3 style="color: #1B365D; text-align: center; font-size: 1.8em; margin-bottom: 20px;">הצהרת בריאות וכתב ויתור</h3>

            <!-- כתב ויתור -->
            <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p style="font-size: 1.1em; margin-bottom: 15px; text-align: center; color: #E8762B; font-weight: bold;">חשוב! אנא קראו בעיון:</p>
                <a href="javascript:void(0)" id="openWaiverBtn" class="btn" style="display: block; text-align: center; margin: 20px auto; max-width: 400px; text-decoration: none; color: white;">לחצו כאן לקריאת המסמך המלא</a>
                <p style="font-size: 0.95em; color: #666; text-align: center; margin-top: 10px;">המסמך כולל: כתב ויתור + הצהרת בריאות + תנאי שימוש</p>
            </div>

            <!-- Waiver Modal -->
            <div id="waiverModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:9999; justify-content:center; align-items:center; padding:15px;">
                <div style="background:white; border-radius:15px; max-width:800px; width:100%; max-height:90vh; overflow-y:auto; padding:30px; direction:rtl; position:relative;">
                    <a href="javascript:void(0)" id="closeWaiverX" style="position:sticky; top:0; float:left; background:#dc3545; color:white; border:none; border-radius:50%; width:40px; height:40px; font-size:1.5em; cursor:pointer; z-index:10; touch-action:manipulation; display:flex; align-items:center; justify-content:center; text-decoration:none;">✕</a>
                    <h2 style="text-align:center; color:#1B365D; font-size:1.5em; border-bottom:3px solid #1B365D; padding-bottom:10px; margin-bottom:20px;">כתב ויתור, שחרור מאחריות והצהרת בריאות<br><span style="font-size:0.8em; color:#444;">קורס "מתאמנים מהבית עם ליווי ותמיכה"</span></h2>
                    <div style="background:#f0f4fa; border:1px solid #c0d0e8; border-radius:6px; padding:12px 16px; margin:15px 0; font-size:0.95em;"><strong>הקדמה</strong><br>מסמך זה מהווה הסכם משפטי מחייב בין המתאמן/ת לבין מאמני הקורס. אנא קרא/י בעיון לפני החתימה.<br>פרטי המתאמן/ת יימלאו בדף הקליטה הדיגיטלי וישמרו יחד עם החתימה הדיגיטלית.</div>
                    <h3 style="color:#1B365D; border-right:4px solid #E8762B; padding-right:10px; margin-top:20px;">1. פרטי המאמנים ורקע מקצועי</h3>
                    <p><strong>נותני השירות:</strong> אופיר דר, אבידן שלו ועמרי הרמתי – מייסדי ורכזי הקורס</p>
                    <p><strong>כישורים מקצועיים:</strong></p>
                    <ul style="padding-right:25px;"><li><strong>אופיר דר</strong> – בוגר תואר ראשון ותואר שני בחינוך גופני ממכון וינגייט, מאמן כושר מוסמך, בוגר מגמת אימון הגיל המבוגר</li><li><strong>אבידן שלו</strong> – בעל תואר שני בבריאות הציבור, מרצה בקורס מדריכי חדר כושר גופני ובריאות</li><li><strong>עמרי הרמתי</strong> – בוגר תואר ראשון בחינוך גופני בהצטיינות ממכון וינגייט, בוגר מגמת שיקום לב, מאמן כושר בעל 7 שנות ניסיון</li></ul>
                    <h3 style="color:#1B365D; border-right:4px solid #E8762B; padding-right:10px; margin-top:20px;">2. תיאור הקורס ואופי השירות</h3>
                    <p><strong>מהות הקורס:</strong> קורס דיגיטלי לאימוני כוח ושיווי משקל המבוצעים באופן עצמאי בביתו של המתאמן/ת, הכולל:</p>
                    <ul style="padding-right:25px;"><li>סרטונים מוקלטים עם הדגמה ויזואלית ברורה</li><li>ליווי קולי והנחיות מפורטות</li><li>כתוביות בעברית לכל הסרטונים</li><li>אימונים במשקל גוף ללא דרישה לציוד מיוחד</li><li>תזכורות בדבר ביצוע אימונים</li><li>מענה ותמיכה מקצועית בוואטסאפ</li><li>גישה לתכני הקורס כל עוד המתאמן מנוי</li></ul>
                    <p><strong>חשוב להבין:</strong> האימונים מתבצעים באופן עצמאי בבית. המאמנים אינם נוכחים פיזית ואין פיקוח בזמן אמת. המתאמן/ת אחראי/ת לסביבת אימון בטוחה.</p>
                    <h3 style="color:#1B365D; border-right:4px solid #E8762B; padding-right:10px; margin-top:20px;">3. הצהרת בריאות</h3>
                    <p><em>(מנוסח בלשון זכר מטעמי נוחות, מיועד גם לנקבה.)</em></p>
                    <p><strong>שאלון רפואי:</strong></p>
                    <ol style="padding-right:25px;"><li>האם הרופא אמר לך שאתה סובל ממחלת לב?</li><li>האם אתה חש כאבים בחזה במנוחה, בשיגרה או בפעילות גופנית?</li><li>האם בשנה האחרונה איבדת שיווי משקל עקב סחרחורת או איבדת הכרה?</li><li>האם אובחנת עם אסתמה ונזקקת לטיפול או סבלת מקוצר נשימה?</li><li>האם בן משפחה מדרגה ראשונה נפטר ממחלת לב או ממוות פתאומי?</li><li>האם הרופא אמר לך לבצע פעילות רק תחת השגחה רפואית?</li><li>האם אתה סובל ממחלה כרונית שעלולה להגביל פעילות גופנית?</li><li>לנשים בהריון – האם ההיריון הוגדר בסיכון?</li></ol>
                    <div style="background:#fef0f0; border:1px solid #e8a0a0; border-radius:6px; padding:12px 16px; margin:15px 0;"><p><strong>אם ענית "כן" על שאלה כלשהי:</strong> חייב/ת להמציא אישור רפואי תוך 14 ימים. שליחה בוואטסאפ: 0522661801</p><p><strong>אם ענית "לא" על הכל:</strong> אשר/י באמצעות הסימון למטה.</p></div>
                    <h3 style="color:#1B365D; border-right:4px solid #E8762B; padding-right:10px; margin-top:20px;">4-5. סיכונים, בטיחות ואחריות</h3>
                    <p>פעילות גופנית כרוכה בסיכונים. המתאמן/ת מקבל/ת אחריות מלאה, מתחייב/ת לבצע תרגילים בקצב מתאים, להפסיק במקרה כאב, לשתות מים ולפנות לעזרה רפואית במקרה הצורך.</p>
                    <h3 style="color:#1B365D; border-right:4px solid #E8762B; padding-right:10px; margin-top:20px;">6. ויתור על תביעות ושחרור מאחריות</h3>
                    <p>המתאמן/ת מוותר/ת באופן מלא על כל טענה כלפי המאמנים, למעט מקרה של רשלנות חמורה. הוויתור חל על כל נזק – גופני, נפשי, רכושי או כספי.</p>
                    <h3 style="color:#1B365D; border-right:4px solid #E8762B; padding-right:10px; margin-top:20px;">7. קניין רוחני</h3>
                    <p>כל התכנים מוגנים. כל סרטון מסומן בשם המתאמן/ת. נאסר: העתקה, הפצה, הקלטה או שיתוף. שימוש אישי בלבד. הפרה תגרור הליכים משפטיים.</p>
                    <h3 style="color:#1B365D; border-right:4px solid #E8762B; padding-right:10px; margin-top:20px;">8. תנאים כספיים וביטולים</h3>
                    <p>97 ₪/חודש בהוראת קבע. ביטול בכל עת בוואטסאפ/מייל. חיוב מלא על החודש השוטף, הפסקת חיובים מהחודש הבא. אין החזרים.</p>
                    <h3 style="color:#1B365D; border-right:4px solid #E8762B; padding-right:10px; margin-top:20px;">9-11. פרטיות והוראות כלליות</h3>
                    <p>המידע נשמר בסודיות ולא יועבר לצדדים שלישיים. הדין הישראלי חל, סמכות שיפוט – ת"א. חתימה דיגיטלית או אישור אלקטרוני שקולים לחתימה פיזית.</p>
                    <p style="text-align:center; font-size:0.85em; color:#666; margin-top:20px; border-top:1px solid #ddd; padding-top:15px;">מסמך זה מהווה הסכם משפטי מחייב. מומלץ לשמור עותק.<br>עדכון אחרון: ינואר 2026</p>
                    <div style="text-align:center; margin-top:20px;"><a href="javascript:void(0)" id="closeWaiverBtn" class="btn" style="background:#28a745; text-decoration:none; color:white;">קראתי והבנתי – סגירה ✓</a></div>
                </div>
            </div>

            <!-- פרטים אישיים -->
            <div style="background: white; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                <h4 style="margin-bottom: 15px; color: #1B365D;">פרטים אישיים:</h4>
                <div class="user-info">
                    <input type="text" id="userName" placeholder="שם מלא *" required autocomplete="name">
                    <input type="email" id="userEmail" placeholder="אימייל *" required autocomplete="email" inputmode="email">
                    <input type="tel" id="userPhone" placeholder="טלפון *" required autocomplete="tel" inputmode="tel">
                    <input type="text" id="userId" placeholder="תעודת זהות *" required inputmode="numeric" pattern="[0-9]*">
                    <p id="emailError" style="color: #dc3545; font-size: 0.9em; display: none;">אנא הכניסו כתובת מייל תקינה</p>
                </div>
            </div>

            <!-- אישור כתב ויתור - Checkbox -->
            <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h4 style="margin-bottom: 15px; color: #1B365D; text-align: center;">אישור כתב ויתור והצהרת בריאות</h4>
                <div class="consent-box">
                    <label>
                        <input type="checkbox" id="consentCheckbox">
                        <span>אני מאשר/ת שקראתי את כתב הוויתור, הצהרת הבריאות ותנאי השימוש במלואם, אני מבין/ה את תוכנם ומסכים/ה לכל התנאים המפורטים בהם.</span>
                    </label>
                </div>
                <div class="consent-box" style="border-color: #E8762B;">
                    <label>
                        <input type="checkbox" id="healthCheckbox">
                        <span>אני מצהיר/ה כי מילאתי את השאלון הרפואי בכנות, מסרתי מידע מלא ונכון על מצבי הבריאותי, ואני מתחייב/ת להודיע על כל שינוי.</span>
                    </label>
                </div>

                <!-- חתימה אופציונלית -->
                <div class="signature-section">
                    <p class="signature-toggle" id="signatureToggle">רוצים להוסיף חתימה דיגיטלית? (אופציונלי) ▼</p>
                    <div class="signature-area" id="signatureArea">
                        <p style="text-align: center; font-size: 0.9em; color: #666; margin-bottom: 10px;">חתימה מחזקת את ההגנה המשפטית</p>
                        <canvas id="signatureCanvas" width="600" height="200"></canvas>
                        <div style="text-align: center; margin-top: 10px;">
                            <button id="clearBtn" class="btn" style="background: #dc3545; padding: 8px 20px; font-size: 0.9em;">נקה חתימה</button>
                        </div>
                    </div>
                </div>

                <!-- כפתור שמירה -->
                <div style="text-align: center; margin-top: 20px;">
                    <button id="saveBtn" class="btn btn-cta" style="width: 100%; max-width: 400px;">אשר ושלח ✓</button>
                </div>
                <div id="signatureStatus" style="text-align: center; margin-top: 15px; font-weight: bold; font-size: 1.1em;"></div>
            </div>
        </div>

        <!-- תשלום -->
        <div class="payment-section" id="paymentSection">
            <h3 style="color: #1B365D; margin-bottom: 20px; font-size: 2em;">השלמת התשלום</h3>
            <p style="font-size: 1.2em; margin-bottom: 25px;">תודה על האישור! כעת אנא השלימו את התשלום:</p>
            <p style="font-size: 2.5em; font-weight: bold; color: #E8762B; margin: 20px 0;">₪97 לחודש</p>
            <a href="https://secure.cardcom.solutions/EA/EA5/d0aVLYIFPU2NEXTPg5mdog/PaymentSP" class="btn btn-cta" target="_blank" style="text-decoration:none; color:white;">לחצו כאן לתשלום מאובטח 🔒</a>
            <p style="margin-top: 20px; font-size: 0.95em; color: #666;">התשלום מאובטח ומוצפן לחלוטין</p>
            <p style="margin-top: 10px; font-size: 0.9em; color: #666;">לאחר התשלום תקבלו מייל עם פרטי הכניסה לקורס</p>
        </div>

        <!-- וואטסאפ -->
        <div class="contact-section">
            <h3 style="color: #128C7E; margin-bottom: 20px; font-size: 1.8em;">יש שאלות? מתלבטים?</h3>
            <p style="font-size: 1.1em; margin-bottom: 20px;">דברו איתנו בוואטסאפ - נשמח לעזור ולענות על כל שאלה!</p>
            <a href="https://wa.me/9720522661801" class="btn btn-whatsapp" target="_blank" style="text-decoration:none; color:white;">📱 שלחו לנו הודעה בוואטסאפ</a>
            <p style="margin-top: 20px; font-size: 0.9em; color: #666;">זמני מענה: ראשון וחמישי, 07:00-22:00</p>
        </div>

        <!-- התלבטויות -->
        <div class="hesitation-section">
            <h3 style="color: #1B365D; font-size: 2em; margin-bottom: 25px; text-align: center;">עדיין מתלבטים? בואו נבהיר כמה דברים</h3>
            <div class="hesitation-point"><h4>💭 "אני לא בטוח שזה יעבוד בשבילי..."</h4><p style="font-size: 1.1em; line-height: 1.7;">התוכנית מותאמת לכל רמת כושר. מתחילים מאפס ובונים בהדרגתיות. מאות אנשים כבר רואים שיפור אמיתי.</p></div>
            <div class="hesitation-point"><h4>⏰ "אין לי זמן להתאמן..."</h4><p style="font-size: 1.1em; line-height: 1.7;">רק 20-30 דקות, 3 פעמים בשבוע. פחות מפרק של סדרה! אתם בוחרים מתי - בוקר, צהריים או ערב.</p></div>
            <div class="hesitation-point"><h4>🏥 "יש לי בעיות בריאות או כאבים..."</h4><p style="font-size: 1.1em; line-height: 1.7;">בדיוק בשביל זה אנחנו כאן! המאמנים מתמחים בעבודה עם אתגרים בריאותיים. כל תרגיל מותאם לרמה שלכם.</p></div>
            <div class="hesitation-point"><h4>💰 "97 ₪ זה הרבה כסף..."</h4><p style="font-size: 1.1em; line-height: 1.7;">אימון אישי אחד עולה 200-350 ₪. אצלנו, 97 ₪ לחודש = <strong>3.2 ₪ ליום</strong>. פחות ממחיר קפה!</p></div>
            <div class="hesitation-point"><h4>🚶 "כבר נפלתי פעם, זה מתאים?"</h4><p style="font-size: 1.1em; line-height: 1.7;"><strong>בהחלט!</strong> התוכנית כוללת תרגילי שיווי משקל במיוחד למניעת נפילות. מתחילים מהבסיס.</p></div>
            <div class="hesitation-point"><h4>❤️ "אני אחרי אירוע לב..."</h4><p style="font-size: 1.1em; line-height: 1.7;">עם אישור קרדיולוג - בהחלט כן! פעילות גופנית מעולה לשיקום לב. המאמנים יתאימו את האימונים.</p></div>
            <div class="hesitation-point"><h4>📅 "אתחיל מחר..."</h4><p style="font-size: 1.1em; line-height: 1.7;">כשאומרים "מחר" הסיכוי להתחיל יורד ב-70%. כל יום שעובר = הפסד כוח וגמישות. הזמן הטוב ביותר הוא עכשיו!</p></div>
            <div class="hesitation-point"><h4>🤷 "מעולם לא התאמנתי..."</h4><p style="font-size: 1.1em; line-height: 1.7;"><strong>זה בדיוק הזמן!</strong> מתחילים מהבסיס לגמרי ובונים בהדרגתיות. מאות אנשים התחילו מאפס.</p></div>
        </div>

        <!-- החלטה 2 -->
        <div class="decision-section" style="margin-top: 50px;">
            <h2 style="color: #1B365D; font-size: 2.5em; margin-bottom: 30px;">מוכנים להתחיל?</h2>
            <p style="font-size: 1.2em; margin-bottom: 30px;">בואו נתחיל את המסע לחיים בריאים יותר!</p>
            <a href="javascript:void(0)" id="startBtn2" class="btn btn-cta" style="text-decoration:none; color:white;">כן! אני רוצה להצטרף עכשיו</a>
        </div>

        <div style="text-align: center; padding: 30px 0; font-size: 1.3em; color: #1B365D;">
            <strong>נתראה בקורס! 💪</strong>
        </div>
    </div>
</div>

<script>
    // === Start Buttons ===
    function showPurchase(e) {
        if (e) e.preventDefault();
        var el = document.getElementById('purchaseSection');
        el.style.display = 'block';
        setTimeout(function() { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
    }
    document.getElementById('startBtn1').addEventListener('click', showPurchase);
    document.getElementById('startBtn2').addEventListener('click', showPurchase);

    // === Waiver Modal ===
    document.getElementById('openWaiverBtn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('waiverModal').style.display = 'flex';
    });
    document.getElementById('closeWaiverX').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('waiverModal').style.display = 'none';
    });
    document.getElementById('closeWaiverBtn').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('waiverModal').style.display = 'none';
    });
    document.getElementById('waiverModal').addEventListener('click', function(e) {
        if (e.target === this) this.style.display = 'none';
    });

    // === Signature Toggle ===
    document.getElementById('signatureToggle').addEventListener('click', function() {
        var area = document.getElementById('signatureArea');
        if (area.classList.contains('show')) {
            area.classList.remove('show');
            this.textContent = 'רוצים להוסיף חתימה דיגיטלית? (אופציונלי) ▼';
        } else {
            area.classList.add('show');
            this.textContent = 'הסתרת חתימה ▲';
        }
    });

    // === Canvas Signature ===
    var canvas = document.getElementById('signatureCanvas');
    var ctx = canvas.getContext('2d');
    var isDrawing = false, lastX = 0, lastY = 0;

    function startDrawing(e) { isDrawing = true; var c = getCoords(e); lastX = c[0]; lastY = c[1]; }
    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault();
        var c = getCoords(e);
        ctx.strokeStyle = '#000'; ctx.lineWidth = 2; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
        ctx.beginPath(); ctx.moveTo(lastX, lastY); ctx.lineTo(c[0], c[1]); ctx.stroke();
        lastX = c[0]; lastY = c[1];
    }
    function stopDrawing() { isDrawing = false; }
    function getCoords(e) {
        var rect = canvas.getBoundingClientRect();
        var cx = e.clientX || (e.touches && e.touches[0].clientX);
        var cy = e.clientY || (e.touches && e.touches[0].clientY);
        return [(cx - rect.left) * (canvas.width / rect.width), (cy - rect.top) * (canvas.height / rect.height)];
    }
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    canvas.addEventListener('touchstart', function(e) { e.preventDefault(); startDrawing(e); });
    canvas.addEventListener('touchmove', draw);
    canvas.addEventListener('touchend', stopDrawing);
    document.getElementById('clearBtn').addEventListener('click', function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    // === Email Validation ===
    var emailInput = document.getElementById('userEmail');
    var emailError = document.getElementById('emailError');
    emailInput.addEventListener('blur', function() {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (this.value && !pattern.test(this.value)) {
            this.classList.add('invalid');
            emailError.style.display = 'block';
        } else {
            this.classList.remove('invalid');
            emailError.style.display = 'none';
        }
    });

    // === Save Button ===
    document.getElementById('saveBtn').addEventListener('click', async function() {
        var statusDiv = document.getElementById('signatureStatus');
        var userName = document.getElementById('userName').value.trim();
        var userEmail = document.getElementById('userEmail').value.trim();
        var userPhone = document.getElementById('userPhone').value.trim();
        var userId = document.getElementById('userId').value.trim();
        var consent = document.getElementById('consentCheckbox').checked;
        var health = document.getElementById('healthCheckbox').checked;

        // Validate fields
        if (!userName || !userEmail || !userPhone || !userId) {
            statusDiv.textContent = '❌ אנא מלאו את כל השדות';
            statusDiv.style.color = '#dc3545';
            return;
        }
        // Validate email
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(userEmail)) {
            statusDiv.textContent = '❌ אנא הכניסו כתובת מייל תקינה';
            statusDiv.style.color = '#dc3545';
            return;
        }
        // Validate checkboxes
        if (!consent || !health) {
            statusDiv.textContent = '❌ אנא סמנו את שני האישורים';
            statusDiv.style.color = '#dc3545';
            return;
        }

        // Check for optional signature
        var signatureData = '';
        var signatureArea = document.getElementById('signatureArea');
        if (signatureArea.classList.contains('show')) {
            var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            var hasSignature = false;
            for (var i = 0; i < imgData.data.length; i += 4) {
                if (imgData.data[i + 3] !== 0) { hasSignature = true; break; }
            }
            if (hasSignature) signatureData = canvas.toDataURL('image/png');
        }

        var formData = {
            timestamp: new Date().toLocaleString('he-IL'),
            name: userName,
            email: userEmail,
            phone: userPhone,
            id: userId,
            consent: consent ? 'כן' : 'לא',
            healthDeclaration: health ? 'כן' : 'לא',
            signature: signatureData
        };

        statusDiv.textContent = '⏳ שומר את הנתונים...';
        statusDiv.style.color = '#1B365D';

        try {
            var GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxiRaXxfa2m4Utrx43JuLjuav3oV035JKDZ8TpSlG1zIVI1vvPRycQbRzRlzjD7eCAeig/exec';
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            statusDiv.textContent = '✅ הנתונים נשמרו בהצלחה! תאריך: ' + formData.timestamp;
            statusDiv.style.color = '#28a745';

            document.querySelectorAll('.user-info input, #consentCheckbox, #healthCheckbox').forEach(function(el) { el.disabled = true; });
            document.getElementById('saveBtn').disabled = true;
            document.getElementById('saveBtn').style.opacity = '0.5';

            var paymentSection = document.getElementById('paymentSection');
            paymentSection.style.display = 'block';
            setTimeout(function() { paymentSection.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 300);
        } catch (error) {
            console.error('Error:', error);
            statusDiv.textContent = '❌ שגיאה בשמירה. אנא נסו שוב';
            statusDiv.style.color = '#dc3545';
        }
    });

    // === Image Uploads ===

</script>
</body>
</html>