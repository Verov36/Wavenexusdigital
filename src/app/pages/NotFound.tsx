import { useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { setNotFoundMeta } from "../metadata";

export default function NotFound() {
  useEffect(() => {
    setNotFoundMeta();
  }, []);

  return (
    <div className="min-h-[70vh] bg-zinc-950 flex items-center justify-center">
      <div className="text-center px-4">
        <div className="font-['Barlow_Condensed'] font-900 text-[12rem] leading-none text-zinc-900 select-none mb-2" aria-hidden="true">404</div>
        <div className="w-16 h-[2px] bg-amber-500 mx-auto mb-8" />
        <h1 className="font-['Barlow_Condensed'] font-900 text-4xl uppercase text-white mb-3">Page Not Found</h1>
        <p className="font-['DM_Sans'] text-zinc-500 mb-10 max-w-sm mx-auto">This page is AWOL. Let's get you back on mission.</p>
        <Link to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 text-zinc-950 font-['Barlow_Condensed'] font-800 uppercase tracking-widest hover:bg-amber-400 transition-colors">
          Back to Home <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
