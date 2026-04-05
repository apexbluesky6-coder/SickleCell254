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
    excerpt: "Last week, ASCO launched a rigorous 5-day training program for 50 community healthcare workers, focusing on the acute management of sickle cell crises in rural settings.",
    content: "<p>Last week, ASCO launched a rigorous 5-day training program for 50 community healthcare workers, focusing on the acute management of sickle cell crises in rural settings. The lack of specialized knowledge in rural clinics has historically been a major barrier to the survival of patients experiencing sickle cell pain crises.</p><p>Through our Health Systems pillar, we brought together leading hematologists from the national hospital to conduct hands-on training. This ensures that a patient arriving at a local dispensary receives the same standard of emergency care as they would in the capital.</p>",
    category: "Health Systems",
    date: "2024-03-15",
    author: "Jane M.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    slug: "patient-story-emmanuel",
    title: "From Weekly Hospital Visits to Thriving in School: Emmanuel's Story",
    excerpt: "Emmanuel, a 12-year-old from Kakamega, used to miss weeks of school due to severe pain crises. Today, thanks to the Livelihood Fund and proper care, he's at the top of his class.",
    content: "<p>Emmanuel, a 12-year-old from Kakamega, used to miss weeks of school due to severe pain crises. The recurrent hospitalizations drained his family's meager resources. Through the Sickle Cell Livelihood Fund, ASCO enrolled Emmanuel's family in the NHIF (National Hospital Insurance Fund).</p><p>With a reliable supply of hydroxyurea and folic acid, Emmanuel's crises have reduced dramatically. Today, he is back in school, leading his class in mathematics and dreaming of becoming a doctor.</p>",
    category: "Patient Stories",
    date: "2024-02-28",
    author: "Peter K.",
    imageUrl: "https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=1974&auto=format&fit=crop"
  },
  {
    slug: "advocacy-win-essential-medicines",
    title: "Major Advocacy Win: Essential Medicines Now Available in Tertiary Hospitals",
    excerpt: "After months of engagement with county health departments, we are thrilled to announce that two major referral hospitals will now stock essential SCD medications.",
    content: "<p>After months of rigorous engagement with county health departments, we are thrilled to announce that two major referral hospitals will now stock essential SCD medications.</p><p>This marks a turning point in our Advocacy and Policy reform efforts. Patients will no longer have to travel hundreds of kilometers to Nairobi to access life-saving drugs.</p>",
    category: "Advocacy",
    date: "2024-01-10",
    author: "Lea D.",
    imageUrl: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop"
  },
  {
    slug: "understanding-livelihoods-scd",
    title: "The Intersection of Poverty and Sickle Cell Disease",
    excerpt: "SCD is not just a health crisis; it's an economic burden. Our latest field report highlights how income-generating activities transform patient outcomes.",
    content: "<p>Poverty exacerbates the impact of Sickle Cell Disease. Families often must choose between food and medicine.</p><p>Our new report demonstrates that providing seed capital for small businesses reduces mortality in SCD households by allowing consistent access to nutrition and transport to clinics.</p>",
    category: "Livelihoods",
    date: "2023-11-05",
    author: "Dr. Samuel O.",
    imageUrl: "https://images.unsplash.com/photo-1593113630400-ea4288922497?q=80&w=2070&auto=format&fit=crop"
  }
];

export async function getArticles(): Promise<Article[]> {
  // Simulate delay for headless CMS fetch
  return new Promise((resolve) => setTimeout(() => resolve(mockArticles), 200));
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return mockArticles.find(article => article.slug === slug);
}
