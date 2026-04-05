export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string or plain text
  category: "Patient Stories" | "Advocacy" | "Health Systems" | "Livelihoods" | "Research" | "News";
  date: string;
  author: string;
  imageUrl: string;
}

export const mockArticles: Article[] = [
  {
    slug: "empowering-caregivers-in-kisumu",
    title: "Empowering Caregivers: New Training Initiative in Kisumu County",
    excerpt: "Last week, Center for Sickle Cell Warriors launched a rigorous 5-day training program for 50 community healthcare workers, focusing on the acute management of sickle cell crises in rural settings.",
    content: "<p>Last week, Center for Sickle Cell Warriors launched a rigorous 5-day training program for 50 community healthcare workers, focusing on the acute management of sickle cell crises in rural settings. The lack of specialized knowledge in rural clinics has historically been a major barrier to the survival of patients experiencing sickle cell pain crises.</p><p>Through our Health Systems pillar, we brought together leading hematologists from the national hospital to conduct hands-on training. This ensures that a patient arriving at a local dispensary receives the same standard of emergency care as they would in the capital.</p>",
    category: "Health Systems",
    date: "2024-03-15",
    author: "Jane M.",
    imageUrl: "/img/photo_2026-04-05_17-05-33.jpg"
  },
  {
    slug: "patient-story-emmanuel",
    title: "From Weekly Hospital Visits to Thriving in School: Emmanuel's Story",
    excerpt: "Emmanuel, a 12-year-old from Kakamega, used to miss weeks of school due to severe pain crises. Today, thanks to the Livelihood Fund and proper care, he's at the top of his class.",
    content: "<p>Emmanuel, a 12-year-old from Kakamega, used to miss weeks of school due to severe pain crises. The recurrent hospitalizations drained his family's meager resources. Through the Sickle Cell Livelihood Fund, Center for Sickle Cell Warriors enrolled Emmanuel's family in the NHIF (National Hospital Insurance Fund).</p><p>With a reliable supply of hydroxyurea and folic acid, Emmanuel's crises have reduced dramatically. Today, he is back in school, leading his class in mathematics and dreaming of becoming a doctor.</p>",
    category: "Patient Stories",
    date: "2024-02-28",
    author: "Peter K.",
    imageUrl: "/img/photo_2026-04-05_17-06-19.jpg"
  },
  {
    slug: "advocacy-win-essential-medicines",
    title: "Major Advocacy Win: Essential Medicines Now Available in Tertiary Hospitals",
    excerpt: "After months of engagement with county health departments, we are thrilled to announce that two major referral hospitals will now stock essential SCD medications.",
    content: "<p>After months of rigorous engagement with county health departments, we are thrilled to announce that two major referral hospitals will now stock essential SCD medications.</p><p>This marks a turning point in our Advocacy and Policy reform efforts. Patients will no longer have to travel hundreds of kilometers to Nairobi to access life-saving drugs.</p>",
    category: "Advocacy",
    date: "2024-01-10",
    author: "Lea D.",
    imageUrl: "/img/photo_2026-04-05_17-06-27.jpg"
  },
  {
    slug: "understanding-livelihoods-scd",
    title: "The Intersection of Poverty and Sickle Cell Disease",
    excerpt: "SCD is not just a health crisis; it's an economic burden. Our latest field report highlights how income-generating activities transform patient outcomes.",
    content: "<p>Poverty exacerbates the impact of Sickle Cell Disease. Families often must choose between food and medicine.</p><p>Our new report demonstrates that providing seed capital for small businesses reduces mortality in SCD households by allowing consistent access to nutrition and transport to clinics.</p>",
    category: "Livelihoods",
    date: "2023-11-05",
    author: "Dr. Samuel O.",
    imageUrl: "/img/photo_2026-04-05_17-06-30.jpg"
  }
];

export async function getArticles(): Promise<Article[]> {
  // Simulate delay for headless CMS fetch
  return new Promise((resolve) => setTimeout(() => resolve(mockArticles), 200));
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return mockArticles.find(article => article.slug === slug);
}
