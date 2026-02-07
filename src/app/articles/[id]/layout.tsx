import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    alternates: {
      canonical: `/articles/${id}`,
    },
  };
}

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
