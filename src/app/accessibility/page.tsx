import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { FloatingActions } from "@/components/FloatingActions";
import { ScrollProgress } from "@/components/ScrollProgress";

export const metadata: Metadata = {
  title: 'הצהרת נגישות | קליניקת ד"ר דניאל',
  description:
    'הצהרת הנגישות של אתר קליניקת ד"ר דניאל ופרטים על הסדרי הנגישות בקליניקה.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <main
        className="container mx-auto max-w-4xl px-6 pt-40 pb-12 md:pt-32 md:pb-12"
        dir="rtl"
      >
        <h1 className="mb-8 text-3xl font-bold text-gray-900">הצהרת נגישות</h1>

        <div className="space-y-6 text-gray-700">
          <section className="rounded-lg bg-[#b7748d]/10 p-6 border-r-4 border-[#b7748d]">
            <p className="font-semibold text-[#8b5669]">
              הצהרת נגישות זו מעודכנת לתאריך:{" "}
              {new Date().toLocaleDateString("he-IL")}
            </p>
            <p className="mt-2 text-gray-800">
              קליניקת ד&quot;ר דניאל מחויבת לאפשר לאנשים עם מוגבלות להשתמש
              בשירותים שהיא מספקת באופן עצמאי, שוויוני, מכבד ונוח ככל הניתן.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              מחויבות לנגישות
            </h2>
            <p className="mb-2">
              קליניקת ד&quot;ר דניאל רואה חשיבות עליונה בהנגשת השירותים לאנשים
              עם מוגבלות ומשקיעה מאמצים משמעותיים להנגשת האתר והמרפאה.
            </p>
            <p className="mb-2">
              אנו פועלים בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות,
              התשנ&quot;ח-1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות
              נגישות לשירות), התשע&quot;ג-2013.
            </p>
            <p>
              הנגשת האתר בוצעה על ידי צוות מקצועי תוך התחשבות בהנחיות התקן
              הישראלי (ת&quot;י 5568) ברמת AA ובהתאם לכללי WCAG 2.1.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              התאמות נגישות באתר האינטרנט
            </h2>
            <p className="mb-2 font-medium">
              אתר זה עומד בדרישות חוק שוויון זכויות לאנשים עם מוגבלות ובתקנות
              שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
              התשע&quot;ג-2013.
            </p>
            <p className="mb-4">
              האתר עוצב והותאם בהתאם להמלצות התקן הישראלי (ת&quot;י 5568)
              לנגישות תכנים באינטרנט ברמת AA ולמסמך WCAG 2.1 הבינלאומי.
            </p>

            <h3 className="mb-2 font-semibold text-gray-900">
              התאמות נגישות שבוצעו באתר:
            </h3>
            <ul className="list-inside list-disc space-y-2 mb-4">
              <li>
                <strong>ניווט באמצעות מקלדת:</strong> האתר מאפשר ניווט מלא
                באמצעות מקלדת בלבד, ללא צורך בעכבר.
              </li>
              <li>
                <strong>תוכנות קריאת מסך:</strong> האתר תומך בתוכנות קריאת מסך
                נפוצות (NVDA, JAWS, VoiceOver).
              </li>
              <li>
                <strong>סימון תוכן באמצעות HTML סמנטי:</strong> השימוש בתגיות
                HTML תקניות מאפשר הבנה נכונה של המבנה.
              </li>
              <li>
                <strong>טקסט חלופי לתמונות:</strong> כל התמונות והאייקונים
                כוללים תיאור טקסטואלי (Alt Text).
              </li>
              <li>
                <strong>ניגודיות צבעים:</strong> האתר עומד בדרישות ניגודיות
                מינימלית של 4.5:1.
              </li>
              <li>
                <strong>גודל גופן מתכוונן:</strong> ניתן להגדיל ולהקטין את גודל
                הגופן באתר.
              </li>
              <li>
                <strong>מבנה היררכי ברור:</strong> כותרות מסודרות בצורה לוגית
                (H1, H2, H3).
              </li>
              <li>
                <strong>פוקוס ברור:</strong> סימון ברור של האלמנט הפעיל בעת
                ניווט במקלדת.
              </li>
              <li>
                <strong>רכיב נגישות ייעודי:</strong> כפתור נגישות קבוע המאפשר:
                <ul className="list-inside list-circle mr-6 mt-1 space-y-1">
                  <li>הגדלה והקטנה של גודל הגופן</li>
                  <li>מעבר בין מצבי ניגודיות (רגיל, שחור-צהוב, שחור-לבן)</li>
                  <li>הפחתת אנימציות ותנועות באתר</li>
                </ul>
              </li>
              <li>
                <strong>תאימות למכשירים ניידים:</strong> האתר מותאם לשימוש
                בטלפונים חכמים וטאבלטים.
              </li>
              <li>
                <strong>תאימות לדפדפנים:</strong> האתר נבדק ועובד בדפדפנים
                הנפוצים (Chrome, Firefox, Safari, Edge).
              </li>
            </ul>

            <div className="rounded-lg bg-[#b7748d]/5 p-4 border border-[#b7748d]/30">
              <h3 className="mb-2 font-semibold text-[#8b5669]">
                טכנולוגיות נגישות בהן נעשה שימוש:
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                <li>HTML5 סמנטי</li>
                <li>ARIA (Accessible Rich Internet Applications) attributes</li>
                <li>CSS3 לעיצוב רספונסיבי</li>
                <li>JavaScript נגיש</li>
                <li>Next.js 16 - פרימוורק מתקדם לנגישות</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              מגבלות נגישות ידועות
            </h2>
            <p className="mb-2">
              למרות מאמצינו להנגיש את כלל דפי האתר, ייתכן ויתגלו חלקים באתר
              שאינם נגישים במלואם. אנו פועלים באופן שוטף לשיפור נגישות האתר
              ונשמח לקבל כל משוב בנושא.
            </p>
            <p className="font-medium text-gray-900">
              במידה ונתקלתם בבעיית נגישות באתר, אנא פנו אלינו ונפעל לתקן זאת
              בהקדם האפשרי.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              נגישות פיזית במרפאה - גילוי מלא
            </h2>
            <p className="mb-4">
              <strong>כתובת המרפאה:</strong> רחוב ז&apos;קלין כהנוב 7, באר שבע
            </p>

            <div className="mb-6 rounded-lg bg-yellow-50 p-6 border-r-4 border-yellow-600">
              <h3 className="font-semibold text-yellow-900 mb-2">
                ⚠️ הודעה חשובה על מגבלות נגישות פיזית
              </h3>
              <p className="text-yellow-800 mb-3">
                <strong>
                  קליניקת ד&quot;ר דניאל ממוקמת בבניין שאינו מאפשר כרגע גישה
                  מלאה לכיסאות גלגלים.
                </strong>
              </p>
              <p className="text-sm text-yellow-800 mb-2">
                אנו מודעים לכך שמצב זה מהווה מגבלה משמעותית, ולמרות מאמצינו
                להנגיש את המרפאה, קיימים אילוצים מבניים בבניין שאינם בשליטתנו
                המלאה.
              </p>
              <p className="text-sm text-yellow-800 font-medium">
                אנו פועלים באופן שוטף מול בעלי הבניין וגורמים רלוונטיים לשיפור
                הנגישות הפיזית, ומתחייבים לעדכן הצהרה זו כאשר יחולו שינויים.
              </p>
            </div>

            <h3 className="mb-3 font-semibold text-gray-900">
              פתרונות ודרכי התאמה לאנשים עם מוגבלות ניידות:
            </h3>

            <div className="space-y-4 mb-6">
              <div className="rounded-lg bg-[#b7748d]/10 p-4 border-r-4 border-[#b7748d]">
                <h4 className="font-semibold text-[#8b5669] mb-2">
                  🏠 טיפול ביתי / נייד
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>אנו מציעים שירות טיפולים ביתיים</strong> לאנשים עם
                  מוגבלות ניידות שאינם יכולים להגיע למרפאה.
                </p>
                <p className="text-sm text-gray-700">
                  ניתן לתאם ביקור בית לביצוע טיפולי בוטוקס וחומרי מילוי בתנאים
                  סטריליים ומקצועיים.
                  <strong className="block mt-1">
                    לתיאום טיפול ביתי: 054-818-5506
                  </strong>
                </p>
              </div>

              <div className="rounded-lg bg-[#b7748d]/10 p-4 border-r-4 border-[#b7748d]">
                <h4 className="font-semibold text-[#8b5669] mb-2">
                  🤝 סיוע אישי והכנת תנאים
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  למי שמסוגל להגיע למרפאה עם סיוע, אנו מציעים:
                </p>
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                  <li>סיוע אישי בכניסה למרפאה (ליווי של חבר צוות)</li>
                  <li>הכנת התנאים מראש לקראת ההגעה</li>
                  <li>תיאום זמן טיפול שקט ללא ממתינים אחרים</li>
                  <li>אפשרות להיכנס דרך כניסה חלופית (אם קיימת)</li>
                  <li>סיוע בהעברה מהרכב למרפאה</li>
                </ul>
                <p className="text-sm text-gray-700 mt-2 font-medium">
                  <strong>חשוב:</strong> יש ליצור קשר מראש (לפחות 24 שעות)
                  לתיאום הסיוע.
                </p>
              </div>

              <div className="rounded-lg bg-[#b7748d]/10 p-4 border-r-4 border-[#b7748d]">
                <h4 className="font-semibold text-[#8b5669] mb-2">
                  💬 יעוץ טלפוני ווידאו
                </h4>
                <p className="text-sm text-gray-700">
                  ניתן לקבל ייעוץ ראשוני בטלפון או בשיחת וידאו (Zoom/WhatsApp
                  Video) להערכת התאמת הטיפול ותכנון הטיפול המתאים.
                </p>
              </div>
            </div>

            <h3 className="mb-3 font-semibold text-gray-900">
              הסדרי נגישות שכן קיימים במרפאה:
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">
                  ✓ חניה סמוכה
                </h4>
                <p className="text-sm text-green-800">
                  קיימת חניה ציבורית בסמוך לבניין, כולל מקומות עם תו נכה.
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">
                  ✓ שירות אישי ומסור
                </h4>
                <p className="text-sm text-green-800">
                  הצוות מיומן ומחויב לסייע בכל דרך אפשרית להנגשת השירות.
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">
                  ✓ גמישות בתיאום
                </h4>
                <p className="text-sm text-green-800">
                  אנו מתאימים את זמני הטיפול והתנאים לצרכים המיוחדים של כל
                  מטופל.
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-4 border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">
                  ✓ תקשורת נגישה
                </h4>
                <p className="text-sm text-green-800">
                  מידע רפואי זמין במספר פורמטים (טלפוני, מייל, WhatsApp, בכתב).
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-[#b7748d]/10 p-6 border-r-4 border-[#b7748d]">
              <h4 className="font-semibold text-[#8b5669] mb-3">
                📞 תיאום מראש - חובה ומומלץ
              </h4>
              <p className="text-sm text-gray-800 mb-3">
                <strong>לאנשים עם מוגבלות ניידות חובה לתאם מראש</strong> (לפחות
                24 שעות לפני הביקור) על מנת שנוכל להכין את התנאים המתאימים ולתאם
                את דרך המתן הטוב ביותר לשירות.
              </p>
              <div className="bg-white p-4 rounded border border-[#b7748d]">
                <p className="font-semibold text-gray-900 mb-2">
                  יצירת קשר לתיאום נגישות:
                </p>
                <p className="text-sm">
                  📞{" "}
                  <a
                    href="tel:054-818-5506"
                    className="text-[#b7748d] hover:underline font-medium"
                  >
                    054-818-5506
                  </a>
                </p>
                <p className="text-sm">
                  📧{" "}
                  <a
                    href="mailto:danielvershkov8@gmail.com"
                    className="text-[#b7748d] hover:underline font-medium"
                  >
                    danielvershkov8@gmail.com
                  </a>
                </p>
                <p className="text-sm">
                  💬 WhatsApp:{" "}
                  <a
                    href="https://wa.me/972548185506"
                    className="text-[#b7748d] hover:underline font-medium"
                  >
                    054-818-5506
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-gray-50 p-4 border border-gray-300">
              <h4 className="font-semibold text-gray-900 mb-2">
                💡 מדיניות ללא אפליה
              </h4>
              <p className="text-sm text-gray-700">
                קליניקת ד&quot;ר דניאל מתחייבת שלא לסרב למתן שירות לאדם עם
                מוגבלות ולעשות כל מאמץ סביר להנגיש את השירות בדרכים חלופיות. אנו
                רואים בכל מטופל חשיבות שווה ומתחייבים למתן שירות מכבד ומקצועי
                ללא הבדל.
              </p>
            </div>

            <p className="mt-4 text-sm font-medium text-gray-900">
              <strong>הערה חשובה:</strong> אנו פועלים באופן שוטף לשיפור הנגישות
              הפיזית של המרפאה ובוחנים אפשרויות למעבר למיקום נגיש יותר בעתיד.
              עדכונים על שיפורים בנגישות יפורסמו בהצהרה זו.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              פנייה לרכז הנגישות
            </h2>
            <p className="mb-2">
              בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות
              לשירות), התשע&quot;ג-2013, מונה ברשות ד&quot;ר דניאל ורשקוב כרכז
              נגישות.
            </p>
            <p className="mb-4">
              אם נתקלתם בבעיית נגישות באתר או במתן השירות, יש לכם הצעה לשיפור
              הנגישות או שאתם זקוקים לקבלת מידע בפורמט נגיש - אנא פנו אלינו ואנו
              נעשה כמיטב יכולתנו לטפל בפנייתכם בהקדם האפשרי.
            </p>

            <div className="rounded-lg bg-[#b7748d]/10 p-6 border-r-4 border-[#b7748d]">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                פרטי רכז הנגישות:
              </h3>
              <div className="space-y-2">
                <p>
                  <strong>שם:</strong> ד&quot;ר דניאל ורשקוב
                </p>
                <p>
                  <strong>תפקיד:</strong> רכז נגישות ומנהל הקליניקה
                </p>
                <p>
                  <strong>טלפון:</strong>{" "}
                  <a
                    href="tel:054-818-5506"
                    className="text-[#b7748d] hover:underline"
                  >
                    054-818-5506
                  </a>
                </p>
                <p>
                  <strong>אימייל:</strong>{" "}
                  <a
                    href="mailto:danielvershkov8@gmail.com"
                    className="text-[#b7748d] hover:underline"
                  >
                    danielvershkov8@gmail.com
                  </a>
                </p>
                <p>
                  <strong>כתובת:</strong> רחוב ז&apos;קלין כהנוב 7, באר שבע
                </p>
                <p>
                  <strong>שעות פעילות:</strong> ראשון-חמישי 09:00-19:00, שישי
                  09:00-14:00
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-[#b7748d]/10 p-4 border border-[#b7748d]/30">
              <h3 className="mb-2 font-semibold text-[#8b5669]">
                מחויבות לטיפול בפניות:
              </h3>
              <ul className="list-inside list-disc space-y-1 text-gray-800 text-sm">
                <li>כל פנייה בנושא נגישות תטופל ברצינות ובמקצועיות</li>
                <li>אנו מתחייבים להשיב לפניות בנושא נגישות תוך 5 ימי עסקים</li>
                <li>בפניות דחופות נעשה מאמץ להשיב תוך 48 שעות</li>
                <li>במידה ונדרשת התאמה פיזית - נעדכן בזמני הביצוע הצפויים</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              דרכים חלופיות לקבלת שירות
            </h2>
            <p className="mb-2">
              במידה ואינכם יכולים להשתמש באתר מסיבה כלשהי, אנו מציעים דרכים
              חלופיות לקבלת שירות:
            </p>
            <ul className="list-inside list-disc space-y-1">
              <li>
                <strong>שירות טלפוני:</strong> ניתן לקבוע תור ולקבל מידע בטלפון
                054-818-5506
              </li>
              <li>
                <strong>שירות במייל:</strong> ניתן לשלוח שאלות ובקשות למייל
                danielvershkov8@gmail.com
              </li>
              <li>
                <strong>שירות באמצעות WhatsApp:</strong> ניתן לפנות דרך WhatsApp
                למספר 054-818-5506
              </li>
              <li>
                <strong>פגישה אישית:</strong> ניתן להגיע ישירות לקליניקה בתיאום
                מראש
              </li>
            </ul>
          </section>

          <section className="rounded-lg bg-[#b7748d]/10 p-6 border-r-4 border-[#b7748d]">
            <h2 className="mb-3 text-xl font-semibold text-[#8b5669]">
              התחייבות מתמשכת לנגישות
            </h2>
            <p className="mb-2">
              אנו ב-קליניקת ד&quot;ר דניאל רואים בנגישות ערך מרכזי ומתחייבים
              להמשיך ולפעול לשיפור הנגישות בכל ערוצי השירות.
            </p>
            <p className="mb-2">
              הנגישות באתר נבדקת באופן תקופתי, והאתר מתעדכן בהתאם להנחיות
              ולתקנות המעודכנות.
            </p>
            <p className="font-medium">
              עדכון זה הינו מהלך מתמשך, ובמידה ותמצאו אי-התאמה כלשהי - אנו
              מבקשים שתעדכנו אותנו על כך.
            </p>
          </section>

          <section className="text-sm text-gray-600 border-t pt-6">
            <h3 className="mb-2 font-semibold text-gray-900">הערות משפטיות:</h3>
            <p className="mb-2">
              הצהרת נגישות זו הינה חלק ממחויבותנו לעמוד בחוק ובתקנות הנגישות
              בישראל. היא מתייחסת לאתר האינטרנט ולהסדרי הנגישות הפיזיים במרפאה.
            </p>
            <p className="mb-2">
              במידה וקיימת סתירה או אי-בהירות בהצהרה זו, יש לפנות לרכז הנגישות
              לקבלת הבהרה.
            </p>
            <p className="font-medium">
              תאריך עדכון אחרון של הצהרת נגישות זו:{" "}
              {new Date().toLocaleDateString("he-IL")}
            </p>
            <p className="mt-2 text-xs text-gray-500">
              הצהרה זו מבוססת על תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות
              נגישות לשירות), התשע&quot;ג-2013 ועל התקן הישראלי ת&quot;י 5568.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <AccessibilityWidget />
      <FloatingActions />
    </div>
  );
}
