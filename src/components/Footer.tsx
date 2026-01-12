import { Scale } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 px-6 py-12 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-center gap-2">
          <Scale className="h-8 w-8 text-blue-400" aria-hidden="true" />
          <span className="text-xl font-bold">Dr. Daniel Clinic</span>
        </div>

        <div className="mb-6 text-center text-gray-400">
          <p className="mb-2">Licensed Aesthetic Physician | Medical Aesthetics</p>
          <p className="text-sm">
            Professional botox, dermal fillers, and aesthetic treatments in Beer
            Sheva.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} Dr. Daniel Clinic. All rights reserved.
          </p>
          <p className="mt-2">
            This website is fully accessible and compliant with WCAG 2.1 AA
            standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
