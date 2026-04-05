import Link from "next/link";
import Image from "next/image";
import { getArticles } from "@/lib/cms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Stories - Sickle Cell 254 Initiative",
};

export default async function NewsPage() {
  const articles = await getArticles();
  const featuredArticle = articles[0]; // Just use first for demo
  const gridArticles = articles.slice(1);

  return (
    <div className="bg-muted min-h-screen">
      {/* Hero Intro */}
      <section className="bg-primary text-white py-16 px-4 text-center border-b-[8px] border-accent">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">News & Stories</h1>
        <p className="text-xl font-light text-white/90 max-w-2xl mx-auto">
          Updates from our programs, patient stories, advocacy wins, and research from the field.
        </p>
      </section>

      {/* Category Filter Bar */}
      <div className="bg-white border-b border-gray-light py-4 px-4 sticky top-[73px] z-30 shadow-sm overflow-x-auto whitespace-nowrap hidden md:block">
        <div className="container mx-auto flex gap-6 justify-center">
          <button className="text-primary font-bold border-b-2 border-primary pb-1">All</button>
          {["Patient Stories", "Advocacy", "Health Systems", "Livelihoods", "Research", "News"].map(cat => (
            <button key={cat} className="text-gray-dark hover:text-primary transition-colors font-medium pb-1 border-b-2 border-transparent">{cat}</button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Post */}
        {featuredArticle && (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden mb-16 flex flex-col md:flex-row group">
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[400px]">
              <Image src={featuredArticle.imageUrl} alt={featuredArticle.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full md:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
              <span className="inline-block bg-primary/10 text-primary uppercase font-bold text-xs tracking-widest px-3 py-1 rounded-full mb-4 w-max">
                {featuredArticle.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                <Link href={`/news/${featuredArticle.slug}`} className="hover:text-primary transition-colors">
                  {featuredArticle.title}
                </Link>
              </h2>
              <p className="text-gray-dark text-lg mb-8 leading-relaxed">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-mid font-medium">{new Date(featuredArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <Link href={`/news/${featuredArticle.slug}`} className="text-primary font-bold hover:underline">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridArticles.map((article) => (
            <div key={article.slug} className="bg-white rounded-2xl shadow-sm border border-gray-light overflow-hidden flex flex-col group hover:shadow-card transition-shadow">
              <Link href={`/news/${article.slug}`} className="relative h-56 block overflow-hidden">
                <Image src={article.imageUrl} alt={article.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <span className="inline-block bg-gray-light text-foreground font-bold text-xs px-3 py-1 rounded-full mb-4 w-max">
                  {article.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-2">
                  <Link href={`/news/${article.slug}`} className="hover:text-primary transition-colors">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-dark line-clamp-3 mb-6 flex-grow text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-gray-mid font-medium">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <Link href={`/news/${article.slug}`} className="text-primary font-bold text-sm hover:underline">
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="flex justify-center mt-16 gap-2">
           <button className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">1</button>
           <button className="w-10 h-10 rounded-full border border-gray-light bg-white text-gray-dark hover:bg-gray-light transition-colors flex items-center justify-center">2</button>
        </div>
      </div>
    </div>
  );
}
