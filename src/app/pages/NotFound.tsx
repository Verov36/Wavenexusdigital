import { Link } from "react-router";
import { ArrowRight, Shield } from "lucide-react";
import { Button } from "../components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
      <div className="text-center px-4">
        <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6 opacity-40" />
        <h1 className="text-6xl font-black text-slate-200 mb-4">404</h1>
        <h2 className="text-2xl font-black text-slate-900 mb-3">Page Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-md mx-auto">
          This page is AWOL. Let's get you back on mission.
        </p>
        <Link to="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8">
            Back to Home <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
