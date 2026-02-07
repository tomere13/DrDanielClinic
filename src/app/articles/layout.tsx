import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/articles",
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
