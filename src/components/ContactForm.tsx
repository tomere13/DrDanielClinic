"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import { useState } from "react";

// סכימת אימות בעברית
const contactSchema = z.object({
  name: z.string().min(2, "השם חייב להכיל לפחות 2 תווים"),
  phone: z
    .string()
    .min(9, "נא להזין מספר טלפון תקין")
    .regex(/^[0-9\s\-+()]+$/, "נא להזין מספר טלפון תקין (ספרות בלבד)"),
  email: z.string().email("נא להזין כתובת אימייל תקינה"),
  message: z.string().min(10, "ההודעה חייבת להכיל לפחות 10 תווים"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [honeypot, setHoneypot] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // אבטחה: בדיקת מלכודת דבש לבוטים
      if (honeypot) {
        console.warn("Bot detected via honeypot");
        setSubmitStatus("success");
        reset();
        return;
      }

      // אבטחה: ניקוי קלט
      const sanitizedData = {
        name: data.name.trim().slice(0, 100),
        email: data.email.trim().toLowerCase().slice(0, 100),
        phone: data.phone.trim().slice(0, 20),
        message: data.message.trim().slice(0, 2000),
      };

      // שליחה ל-Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY!,
          subject: `פנייה חדשה מהאתר - ${sanitizedData.name}`,
          from_name: "Dr. Daniel Clinic Website",
          name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          message: sanitizedData.message,
          botcheck: false,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Failed to send message");
      }

      setSubmitStatus("success");
      reset();
      setHoneypot("");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="bg-white px-6 py-20"
      aria-labelledby="contact-heading"
      dir="rtl" // הוספת כיוון מימין לשמאל לכל הסקשן
    >
      <div className="container mx-auto max-w-4xl">
        <h2
          id="contact-heading"
          className="mb-4 text-center text-4xl font-bold text-gray-900"
        >
          צרו קשר
        </h2>
        <p className="mb-12 text-center text-lg text-gray-600">
          מוזמנים לקבוע פגישת ייעוץ ולשוחח על המטרות האסתטיות שלכם. אנחנו כאן
          כדי לעזור לכם להיראות ולהרגיש הכי טוב שאפשר.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {/* פרטי התקשרות */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                דרכי התקשרות
              </h3>
              <p className="mb-6 text-gray-600">
                ניתן לפנות אלינו בטלפון, בוואטסאפ או באמצעות הטופס. אנו משתדלים
                לענות לכל הפניות בהקדם האפשרי.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Phone
                className="mt-1 h-5 w-5 text-blue-600 ml-3" // הוספתי מרווח מותאם ל-RTL אם צריך, או להסתמך על gap
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-gray-900">טלפון</p>
                <a
                  href="tel:+972548185506"
                  className={cn(
                    "text-blue-600 hover:underline",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  )}
                  dir="ltr" // המספר עצמו ישאר משמאל לימין לקריאות
                >
                  +972-54-818-5506
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <svg
                className="mt-1 h-5 w-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <div>
                <p className="font-medium text-gray-900">WhatsApp</p>
                <a
                  href="https://wa.me/972548185506"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center gap-1 text-green-600 hover:underline",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  )}
                  dir="ltr"
                >
                  +972-54-818-5506
                </a>
                <p className="mt-1 text-sm text-gray-500">
                  מענה מהיר לקביעת תורים
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="mt-1 h-5 w-5 text-blue-600" aria-hidden="true" />
              <div>
                <p className="font-medium text-gray-900">אימייל</p>
                <a
                  href="mailto:danielvershkov8@gmail.com"
                  className={cn(
                    "text-blue-600 hover:underline",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  )}
                >
                  danielvershkov8@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MessageSquare
                className="mt-1 h-5 w-5 text-blue-600"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-gray-900">שעות פעילות</p>
                <p className="text-gray-600">ראשון - חמישי: 9:00 - 19:00</p>
                <p className="text-gray-600">שישי: 9:00 - 14:00</p>
                <p className="mt-2 text-sm text-blue-600">
                  הגעה בתיאום מראש בלבד
                </p>
              </div>
            </div>
          </div>

          {/* טופס יצירת קשר */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            {/* שדה דבש מוסתר לבוטים */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                שם מלא{" "}
                <span className="text-red-600" aria-label="חובה">
                  *
                </span>
              </label>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={cn(
                  "w-full rounded-md border px-4 py-2",
                  errors.name
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                  "focus:outline-none focus:ring-2"
                )}
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p
                  id="name-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                מספר טלפון{" "}
                <span className="text-red-600" aria-label="חובה">
                  *
                </span>
              </label>
              <input
                id="phone"
                type="tel"
                {...register("phone")}
                className={cn(
                  "w-full rounded-md border px-4 py-2 text-right", // text-right כדי שהמספר ייכתב נכון
                  errors.phone
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                  "focus:outline-none focus:ring-2"
                )}
                dir="ltr" // שדה הטלפון עצמו LTR כדי שהספרות לא יתהפכו
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p
                  id="phone-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                כתובת אימייל{" "}
                <span className="text-red-600" aria-label="חובה">
                  *
                </span>
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className={cn(
                  "w-full rounded-md border px-4 py-2",
                  errors.email
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                  "focus:outline-none focus:ring-2"
                )}
                dir="ltr" // אימייל תמיד LTR
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p
                  id="email-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                הודעה{" "}
                <span className="text-red-600" aria-label="חובה">
                  *
                </span>
              </label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className={cn(
                  "w-full rounded-md border px-4 py-2",
                  errors.message
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
                  "focus:outline-none focus:ring-2"
                )}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p
                  id="message-error"
                  className="mt-1 text-sm text-red-600"
                  role="alert"
                >
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full rounded-md bg-blue-600 px-6 py-3 font-semibold text-white",
                "transition-colors hover:bg-blue-700",
                "focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                "disabled:cursor-not-allowed disabled:opacity-50"
              )}
            >
              {isSubmitting ? "שולח..." : "שלח הודעה"}
            </button>

            {submitStatus === "success" && (
              <p className="text-center text-sm text-green-600" role="status">
                ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-center text-sm text-red-600" role="alert">
                אירעה שגיאה בשליחת ההודעה. אנא נסו שנית.
              </p>
            )}
          </form>
        </div>

        {/* מיקום הקליניקה */}
        <div className="mt-16">
          <h3 className="mb-6 text-center text-2xl font-semibold text-gray-900">
            מיקום הקליניקה
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {/* פרטי כתובת */}
            <div className="flex flex-col justify-center space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-6 w-6 text-blue-600"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-medium text-gray-900">כתובת</p>
                  <address
                    className="mt-2 not-italic text-gray-700"
                    dir="rtl"
                    lang="he"
                  >
                    ז׳קלין כהנוב 7<br />
                    באר שבע
                  </address>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=ז׳קלין+כהנוב+7+באר+שבע" // שים לב: זה הלינק המקורי שנתת, לוודא שהוא תקין
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-3 inline-block text-blue-600 hover:underline",
                      "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    )}
                  >
                    פתח במפות Google →
                  </a>
                </div>
              </div>

              <div className="rounded-lg bg-blue-50 p-4">
                <p className="text-sm font-medium text-blue-900">
                  מידע על חניה
                </p>
                <p className="mt-1 text-sm text-blue-700">
                  חניה חינם זמינה במקום
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm font-medium text-gray-900">
                  תחבורה ציבורית
                </p>
                <p className="mt-1 text-sm text-gray-700">
                  נגיש באמצעות קווי אוטובוס למרכז באר שבע
                </p>
              </div>
            </div>

            {/* מפה מוטמעת */}
            <div className="h-[400px] overflow-hidden rounded-lg border border-gray-200 shadow-sm">
              <iframe
                src="https://www.google.com/maps?q=ז׳קלין+כהנוב+7+באר+שבע&output=embed" // שים לב: זה הלינק המקורי, יש להחליף במידת הצורך
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מיקום הקליניקה: ז׳קלין כהנוב 7, באר שבע"
                aria-label="מפה המציגה את מיקום הקליניקה בז׳קלין כהנוב 7, באר שבע"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
