"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccessibilityWidget } from "@/components/AccessibilityWidget";
import { FloatingActions } from "@/components/FloatingActions";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useLanguage } from "@/context/LanguageContext";

export default function AccessibilityPage() {
  const { language, dir } = useLanguage();
  const { accessibility_page } = language.site_content;

  // Wait for hydration or content availability if needed, but since language is loaded in context, it should be fine.
  // Standard keys
  const {
    heading,
    intro_section,
    commitment_section,
    website_adaptations_section,
    known_limitations_section,
    physical_accessibility_section,
    accessibility_coordinator_section,
    alternative_contact_section,
    ongoing_commitment_section,
    legal_notes_section,
  } = accessibility_page;

  return (
    <div className="min-h-screen bg-white dark:bg-black" dir={dir}>
      <ScrollProgress />
      <Header />
      <main className="container mx-auto max-w-4xl px-6 pt-40 pb-12 md:pt-32 md:pb-12">
        <h1 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
          {heading}
        </h1>

        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <section
            className={`rounded-lg bg-[#b7748d]/10 p-6 ${dir === "rtl" ? "border-r-4" : "border-l-4"} border-[#b7748d] dark:bg-[#b7748d]/20`}
          >
            <p className="font-semibold text-[#8b5669] dark:text-[#f0aabf]">
              {intro_section.updated_date_prefix}{" "}
              {new Date().toLocaleDateString(dir === "rtl" ? "he-IL" : "en-US")}
            </p>
            <p className="mt-2 text-gray-800 dark:text-gray-200">
              {intro_section.paragraph1}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              {commitment_section.heading}
            </h2>
            <p className="mb-2">{commitment_section.paragraph1}</p>
            <p className="mb-2">{commitment_section.paragraph2}</p>
            <p>{commitment_section.paragraph3}</p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              {website_adaptations_section.heading}
            </h2>
            <p className="mb-2 font-medium">
              {website_adaptations_section.paragraph1}
            </p>
            <p className="mb-4">{website_adaptations_section.paragraph2}</p>

            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              {website_adaptations_section.subheading}
            </h3>
            <ul className="list-inside list-disc space-y-2 mb-4">
              {website_adaptations_section.list_items.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>

            <div className="rounded-lg bg-[#b7748d]/5 p-4 border border-[#b7748d]/30 dark:bg-[#b7748d]/10">
              <h3 className="mb-2 font-semibold text-[#8b5669] dark:text-[#f0aabf]">
                {website_adaptations_section.technologies_used_title}
              </h3>
              <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {website_adaptations_section.technologies_list.map(
                  (tech, index) => (
                    <li key={index}>{tech}</li>
                  )
                )}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              {known_limitations_section.heading}
            </h2>
            <p className="mb-2">{known_limitations_section.paragraph1}</p>
            <p className="font-medium text-gray-900 dark:text-gray-100">
              {known_limitations_section.paragraph2}
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              {physical_accessibility_section.heading}
            </h2>
            <p className="mb-4">
              <strong>{physical_accessibility_section.address}</strong>
            </p>

            <div
              className={`mb-6 rounded-lg bg-yellow-50 p-6 ${dir === "rtl" ? "border-r-4" : "border-l-4"} border-yellow-600 dark:bg-yellow-900/20 dark:border-yellow-700`}
            >
              <h3 className="font-semibold text-yellow-900 mb-2 dark:text-yellow-100">
                {physical_accessibility_section.important_note.title}
              </h3>
              <p className="text-yellow-800 mb-3 dark:text-yellow-200">
                <strong>
                  {physical_accessibility_section.important_note.bold_text}
                </strong>
              </p>
              <p className="text-sm text-yellow-800 mb-2 dark:text-yellow-200">
                {physical_accessibility_section.important_note.paragraph1}
              </p>
              <p className="text-sm text-yellow-800 font-medium dark:text-yellow-200">
                {physical_accessibility_section.important_note.paragraph2}
              </p>
            </div>

            <h3 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
              {physical_accessibility_section.adaptations_solutions_heading}
            </h3>

            <div className="space-y-4 mb-6">
              <div
                className={`rounded-lg bg-[#b7748d]/10 p-4 ${dir === "rtl" ? "border-r-4" : "border-l-4"} border-[#b7748d] dark:bg-[#b7748d]/20`}
              >
                <h4 className="font-semibold text-[#8b5669] mb-2 dark:text-[#f0aabf]">
                  {physical_accessibility_section.home_treatment.title}
                </h4>
                <p className="text-sm text-gray-700 mb-2 dark:text-gray-300">
                  <strong>
                    {physical_accessibility_section.home_treatment.paragraph1}
                  </strong>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {physical_accessibility_section.home_treatment.paragraph2}
                  <strong className="block mt-1">
                    {
                      physical_accessibility_section.home_treatment
                        .contact_phone
                    }
                  </strong>
                </p>
              </div>

              <div
                className={`rounded-lg bg-[#b7748d]/10 p-4 ${dir === "rtl" ? "border-r-4" : "border-l-4"} border-[#b7748d] dark:bg-[#b7748d]/20`}
              >
                <h4 className="font-semibold text-[#8b5669] mb-2 dark:text-[#f0aabf]">
                  {physical_accessibility_section.personal_assistance.title}
                </h4>
                <p className="text-sm text-gray-700 mb-2 dark:text-gray-300">
                  {
                    physical_accessibility_section.personal_assistance
                      .paragraph1
                  }
                </p>
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  {physical_accessibility_section.personal_assistance.list_items.map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
                <p className="text-sm text-gray-700 mt-2 font-medium dark:text-gray-300">
                  <strong>
                    {
                      physical_accessibility_section.personal_assistance
                        .important_note
                    }
                  </strong>
                </p>
              </div>

              <div
                className={`rounded-lg bg-[#b7748d]/10 p-4 ${dir === "rtl" ? "border-r-4" : "border-l-4"} border-[#b7748d] dark:bg-[#b7748d]/20`}
              >
                <h4 className="font-semibold text-[#8b5669] mb-2 dark:text-[#f0aabf]">
                  {
                    physical_accessibility_section.phone_video_consultation
                      .title
                  }
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {
                    physical_accessibility_section.phone_video_consultation
                      .paragraph
                  }
                </p>
              </div>
            </div>

            <h3 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
              {physical_accessibility_section.existing_arrangements_heading}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {physical_accessibility_section.existing_arrangements_list.map(
                (item, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-green-50 p-4 border border-green-200 dark:bg-green-900/20 dark:border-green-800"
                  >
                    <h4 className="font-semibold text-green-900 mb-2 dark:text-green-100">
                      {item.title}
                    </h4>
                    <p className="text-sm text-green-800 dark:text-green-200">
                      {item.description}
                    </p>
                  </div>
                )
              )}
            </div>

            <div
              className={`mt-6 rounded-lg bg-[#b7748d]/10 p-6 ${dir === "rtl" ? "border-r-4" : "border-l-4"} border-[#b7748d] dark:bg-[#b7748d]/20`}
            >
              <h4 className="font-semibold text-[#8b5669] mb-3 dark:text-[#f0aabf]">
                {physical_accessibility_section.pre_booking_heading}
              </h4>
              <p className="text-sm text-gray-800 mb-3 dark:text-gray-200">
                <strong>
                  {physical_accessibility_section.pre_booking_paragraph}
                </strong>
              </p>
              <div className="bg-white p-4 rounded border border-[#b7748d] dark:bg-gray-900 dark:border-[#b7748d]/50">
                <p className="font-semibold text-gray-900 mb-2 dark:text-gray-100">
                  {physical_accessibility_section.contact_details_title}
                </p>
                <p className="text-sm">
                  📞{" "}
                  <a
                    href={`tel:${physical_accessibility_section.contact_phone}`}
                    className="text-[#b7748d] hover:underline font-medium dark:text-[#f0aabf]"
                  >
                    {physical_accessibility_section.contact_phone}
                  </a>
                </p>
                <p className="text-sm">
                  📧{" "}
                  <a
                    href={`mailto:${physical_accessibility_section.contact_email}`}
                    className="text-[#b7748d] hover:underline font-medium dark:text-[#f0aabf]"
                  >
                    {physical_accessibility_section.contact_email}
                  </a>
                </p>
                <p className="text-sm">
                  💬 WhatsApp:{" "}
                  <a
                    href="https://wa.me/972548185506"
                    className="text-[#b7748d] hover:underline font-medium dark:text-[#f0aabf]"
                  >
                    {physical_accessibility_section.contact_whatsapp}
                  </a>
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-gray-50 p-4 border border-gray-300 dark:bg-gray-900 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 mb-2 dark:text-gray-100">
                {physical_accessibility_section.non_discrimination_policy_title}
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {
                  physical_accessibility_section.non_discrimination_policy_paragraph
                }
              </p>
            </div>

            <p className="mt-4 text-sm font-medium text-gray-900 dark:text-gray-100">
              <strong>
                {
                  physical_accessibility_section.important_note_future_improvements
                }
              </strong>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              {accessibility_coordinator_section.heading}
            </h2>
            <p className="mb-2">
              {accessibility_coordinator_section.paragraph1}
            </p>
            <p className="mb-4">
              {accessibility_coordinator_section.paragraph2}
            </p>

            <div
              className={`rounded-lg bg-[#b7748d]/10 p-6 ${dir === "rtl" ? "border-r-4" : "border-l-4"} border-[#b7748d] dark:bg-[#b7748d]/20`}
            >
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {accessibility_coordinator_section.coordinator_details_title}
              </h3>
              <div className="space-y-2">
                <p>
                  <strong>{accessibility_coordinator_section.name}</strong>
                </p>
                <p>
                  <strong>{accessibility_coordinator_section.role}</strong>
                </p>
                <p>
                  <strong>{accessibility_coordinator_section.phone}</strong>
                </p>
                <p>
                  <strong>{accessibility_coordinator_section.email}</strong>
                </p>
                <p>
                  <strong>{accessibility_coordinator_section.address}</strong>
                </p>
                <p>
                  <strong>{accessibility_coordinator_section.hours}</strong>
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-[#b7748d]/10 p-4 border border-[#b7748d]/30 dark:bg-[#b7748d]/20">
              <h3 className="mb-2 font-semibold text-[#8b5669] dark:text-[#f0aabf]">
                {accessibility_coordinator_section.commitment_title}
              </h3>
              <ul className="list-inside list-disc space-y-1 text-gray-800 text-sm dark:text-gray-200">
                {accessibility_coordinator_section.commitment_list.map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-100">
              {alternative_contact_section.heading}
            </h2>
            <p className="mb-2">{alternative_contact_section.paragraph}</p>
            <ul className="list-inside list-disc space-y-1">
              {alternative_contact_section.list_items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section
            className={`rounded-lg bg-[#b7748d]/10 p-6 ${dir === "rtl" ? "border-r-4" : "border-l-4"} border-[#b7748d] dark:bg-[#b7748d]/20`}
          >
            <h2 className="mb-3 text-xl font-semibold text-[#8b5669] dark:text-[#f0aabf]">
              {ongoing_commitment_section.heading}
            </h2>
            <p className="mb-2">{ongoing_commitment_section.paragraph1}</p>
            <p className="mb-2">{ongoing_commitment_section.paragraph2}</p>
            <p className="font-medium">
              {ongoing_commitment_section.paragraph3}
            </p>
          </section>

          <section className="text-sm text-gray-600 border-t pt-6 dark:text-gray-400 dark:border-gray-800">
            <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">
              {legal_notes_section.heading}
            </h3>
            <p className="mb-2">{legal_notes_section.paragraph1}</p>
            <p className="mb-2">{legal_notes_section.paragraph2}</p>
            <p className="font-medium">
              {legal_notes_section.updated_date_prefix}{" "}
              {new Date().toLocaleDateString(dir === "rtl" ? "he-IL" : "en-US")}
            </p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
              {legal_notes_section.footnote}
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
