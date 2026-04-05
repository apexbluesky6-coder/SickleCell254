import { getArticleBySlug, getArticles } from "@/lib/cms";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Globe, MessageSquare, Briefcase, Link as LinkIcon, ArrowLeft } from "lucide-react";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} - Center of Sickle Cell Warriors`,
    description: article.excerpt,
  };
}

export default async function SinglePostPage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  // Get related (just use the rest of the articles for demo)
  const allArticles = await getArticles();
  const related = allArticles.filter(a => a.slug !== article.slug).slice(0, 3);

  return (
    <div className="bg-white pb-24">
      {/* Article Header (Hero) */}
      <section className="bg-primary pt-10 pb-20 px-4 text-white">
        <div className="container mx-auto max-w-4xl pt-8">
          <Link href="/news" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 font-medium">
            <ArrowLeft size={16} /> Back to News & Stories
          </Link>
          
          <div className="mb-6">
             <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                {article.category}
             </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-white/80 border-t border-white/20 pt-6">
             <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold text-white">
               {article.author.charAt(0)}
             </div>
             <div>
               <p className="font-bold text-white">{article.author}</p>
               <p className="text-sm">{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Image Overlay */}
      <div className="container mx-auto px-4 max-w-5xl -mt-12 relative z-10 mb-16">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <Image src={article.imageUrl} alt={article.title} fill className="object-cover" />
        </div>
      </div>

      {/* Article Body */}
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 max-w-5xl">
        {/* Left: Share Rail */}
        <div className="hidden lg:block w-16 shrink-0">
          <div className="sticky top-32 flex flex-col gap-4">
            <p className="text-xs font-bold text-gray-mid uppercase tracking-widest mb-2 origin-left -rotate-90 whitespace-nowrap mb-16">Share</p>
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-gray-dark hover:bg-primary-light hover:text-white transition-colors">
              <Globe size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-gray-dark hover:bg-primary-light hover:text-white transition-colors">
              <MessageSquare size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-gray-dark hover:bg-primary-light hover:text-white transition-colors">
              <Briefcase size={18} />
            </button>
            <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-gray-dark hover:bg-primary-light hover:text-white transition-colors">
              <LinkIcon size={18} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow">
          <article 
            className="prose prose-lg max-w-none text-gray-dark prose-p:leading-loose prose-a:text-primary prose-a:font-bold hover:prose-a:text-primary-dark prose-headings:font-heading prose-headings:text-foreground prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Mobile Share inline */}
          <div className="flex lg:hidden items-center gap-4 mt-12 pt-8 border-t border-gray-light">
             <span className="font-bold text-foreground">Share:</span>
             <button className="text-gray-mid hover:text-primary transition-colors"><Globe size={24} /></button>
             <button className="text-gray-mid hover:text-primary transition-colors"><MessageSquare size={24} /></button>
             <button className="text-gray-mid hover:text-primary transition-colors"><Briefcase size={24} /></button>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="container mx-auto px-4 max-w-5xl mt-24 pt-16 border-t border-gray-light">
        <h3 className="font-heading font-bold text-3xl text-foreground mb-10">Read more</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map(rel => (
             <div key={rel.slug} className="group cursor-pointer">
               <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                 <Image src={rel.imageUrl} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-2">{rel.category}</span>
               <h4 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                 <Link href={`/news/${rel.slug}`}>{rel.title}</Link>
               </h4>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
