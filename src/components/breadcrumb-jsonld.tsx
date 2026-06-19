const BASE = "https://masmarketingagency.com";

export function BreadcrumbJsonLd({
  pageName,
  pageUrl,
}: {
  pageName: string;
  pageUrl: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Inicio",
              item: BASE,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: pageName,
              item: `${BASE}${pageUrl}`,
            },
          ],
        }),
      }}
    />
  );
}
