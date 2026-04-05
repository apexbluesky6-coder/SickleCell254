"use client";

import { useState } from "react";
import { FileText, Download, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

const DOCUMENTS = [
  { id: 1, title: "Kenya National Guidelines for the Management of Sickle Cell Disease", org: "Ministry of Health Kenya", year: "2021", type: "National Policy", size: "2.4 MB" },
  { id: 2, title: "County Level Integration of SCD Care: A Framework", org: "Center of Sickle Cell Warriors", year: "2023", type: "Framework", size: "1.1 MB" },
  { id: 3, title: "Essential Medicines List Update for Hemoglobinopathies", org: "Ministry of Health Kenya", year: "2022", type: "Guidelines", size: "850 KB" },
  { id: 4, title: "Economic Impact of SCD on Rural Households in Kisumu", org: "Center of Sickle Cell Warriors Research", year: "2023", type: "Research Paper", size: "3.2 MB" },
  { id: 5, title: "Newborn Screening Protocols for County Hospitals", org: "World Health Organization", year: "2020", type: "Protocol", size: "1.8 MB" },
  { id: 6, title: "SCD Patient Triage Standards", org: "Center of Sickle Cell Warriors", year: "2024", type: "Protocol", size: "600 KB" },
];

export default function PoliciesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const types = ["All", ...Array.from(new Set(DOCUMENTS.map(d => d.type)))];

  const filteredDocs = DOCUMENTS.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || doc.org.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || doc.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="bg-muted min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-primary pt-32 pb-20 text-white border-b-8 border-accent">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6 max-w-4xl mx-auto leading-tight"
          >
            Policies & Guidelines
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
          >
            Access critical protocols, national guidelines, research papers, and frameworks that guide the management of Sickle Cell Disease in Kenya.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-5xl -mt-8 relative z-10">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-card p-6 flex flex-col md:flex-row gap-4 mb-12 border border-gray-light">
           <div className="flex-grow relative">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-mid" size={20} />
             <input 
               type="text" 
               placeholder="Search by title or organisation..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full pl-12 pr-4 py-3 bg-gray-light/50 border border-transparent rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-foreground"
             />
           </div>
           <div className="flex items-center gap-3 md:w-1/3 shrink-0">
             <Filter className="text-gray-mid shrink-0" size={20} />
             <select 
               value={filterType}
               onChange={(e) => setFilterType(e.target.value)}
               className="w-full py-3 px-4 bg-gray-light/50 border border-transparent rounded-xl focus:outline-none focus:border-primary focus:bg-white transition-all text-foreground appearance-none"
             >
               {types.map(t => (
                 <option key={t} value={t}>{t}</option>
               ))}
             </select>
           </div>
        </div>

        {/* Results Info */}
        <div className="mb-6 flex justify-between items-center text-gray-dark font-medium px-2">
          <p>Showing {filteredDocs.length} document{filteredDocs.length !== 1 && 's'}</p>
        </div>

        {/* Document Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDocs.length > 0 ? (
            filteredDocs.map((doc, idx) => (
              <motion.div 
                key={doc.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-gray-light shadow-sm hover:shadow-card hover:border-primary/30 transition-all flex flex-col group"
              >
                 <div className="flex items-start gap-4 mb-6 relative">
                   <div className="bg-primary/10 p-3 rounded-xl shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                     <FileText size={24} />
                   </div>
                   <div>
                     <span className="text-xs font-bold text-gray-mid uppercase tracking-widest block mb-1">{doc.type}</span>
                     <h3 className="font-bold text-foreground text-lg leading-snug line-clamp-2">{doc.title}</h3>
                   </div>
                 </div>
                 <div className="mt-auto border-t border-gray-light/50 pt-4 flex items-center justify-between">
                   <div className="flex flex-col text-sm text-gray-dark">
                     <span className="font-semibold">{doc.org}</span>
                     <span>{doc.year} &bull; {doc.size}</span>
                   </div>
                   <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-light text-foreground hover:bg-primary hover:text-white transition-colors">
                     <Download size={18} />
                   </button>
                 </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center text-gray-dark flex flex-col items-center">
              <FileText size={48} className="mb-4 text-gray-mid/50" />
              <p className="text-lg">No documents found matching your criteria.</p>
              <button 
                onClick={() => { setSearchTerm(""); setFilterType("All"); }}
                className="mt-4 text-primary font-bold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
