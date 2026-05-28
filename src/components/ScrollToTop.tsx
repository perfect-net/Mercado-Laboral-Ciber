import { useState, useEffect } from "react";
export function ScrollToTop() {
  const [v, setV] = useState(false);
  useEffect(() => {
    const h = () => {
      const t = document.documentElement.scrollHeight - window.innerHeight;
      const bar = document.getElementById("reading-progress");
      if (bar) bar.style.width = `${t > 0 ? (window.scrollY / t) * 100 : 0}%`;
      setV(window.scrollY > 700);
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <>
      <div id="reading-progress" />
      {v && <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-white/5 backdrop-blur border border-white/10 text-slate-400 shadow-xl flex items-center justify-center hover:text-white hover:border-white/20 transition-all" aria-label="Volver arriba"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="18 15 12 9 6 15" /></svg></button>}
    </>
  );
}
