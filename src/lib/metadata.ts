import type { Metadata } from "next";

const BASE_URL = "https://cognaizesys.com";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle =
    title === "Cognaize Systems"
      ? title
      : `${title} | Cognaize Systems`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    openGraph: {
      title: fullTitle,
      description,
      url: `${BASE_URL}${path}`,
      siteName: "Cognaize Systems",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
