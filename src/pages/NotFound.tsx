import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-6 text-center">
      <div className="border border-subtle-app bg-surface-app p-12 max-w-lg w-full">
        <span className="editorial-tag text-accent-app block mb-4">404 / ERROR</span>
        <h1 className="text-3xl font-bold font-heading text-primary-app mb-4">
          Coordinate not found.
        </h1>
        <p className="text-secondary-app text-sm leading-relaxed mb-8">
          The requested coordinate or project case study does not exist in Ahmed Shaker's portfolio archive.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary-app text-sm font-semibold text-primary-app hover:bg-primary-app hover:text-bg-primary transition-colors"
        >
          <ArrowLeft size={15} />
          <span>Return to Index</span>
        </Link>
      </div>
    </div>
  );
}
