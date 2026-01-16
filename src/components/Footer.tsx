import { Sparkles } from "lucide-react"; // החלפתי את ה-import

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 px-6 py-12 text-white" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-center gap-2">
          {/* שימוש באייקון Sparkles במקום Scale */}
          <Sparkles className="h-8 w-8 text-[#b7748d]" aria-hidden="true" />
          <span className="text-xl font-bold">קליניקת ד&quot;ר דניאל</span>
        </div>

        <div className="mb-6 text-center text-gray-400">
          <p className="mb-2 font-medium">
            רפואה אסתטית | רופאה מוסמכת באסתטיקה רפואית
          </p>
          <p className="text-sm">
            טיפולי בוטוקס, חומרי מילוי, פיסול פנים ואסתטיקה רפואית מתקדמת בבאר
            שבע.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} קליניקת ד&quot;ר דניאל. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
