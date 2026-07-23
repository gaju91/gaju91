interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  sameAs: string[];
  jobTitle: string;
  knowsAbout: string[];
}

interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
}

interface ArticleSchema {
  "@context": "https://schema.org";
  "@type": "Article";
  headline: string;
  description: string;
  datePublished: string;
  author: {
    "@type": "Person";
    name: string;
    url: string;
  };
}

interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

interface BreadcrumbListSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
}

export function personSchema(): PersonSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gajanand Sharma",
    url: "https://gajanand.info",
    sameAs: ["https://github.com/gaju91", "https://gajuhere.medium.com"],
    jobTitle: "Software Engineer",
    knowsAbout: [
      "AI Engineering",
      "Backend Architecture",
      "Automation",
      "SaaS Development",
    ],
  };
}

export function webSiteSchema(): WebSiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gajanand Sharma",
    url: "https://gajanand.info",
  };
}

export function articleSchema(
  title: string,
  description: string,
  date: string
): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    author: {
      "@type": "Person",
      name: "Gajanand Sharma",
      url: "https://gajanand.info",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
): BreadcrumbListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://gajanand.info${item.href}`,
    })),
  };
}
