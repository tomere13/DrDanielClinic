import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/accessibility",
  },
};

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
