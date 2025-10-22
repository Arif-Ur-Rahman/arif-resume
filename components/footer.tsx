import Link from "next/link";
import { GoRepoForked } from "react-icons/go";
import { FaStar } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 py-12 border-t border-border ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground">
            © {currentYear} Developer{" "}
            <span className="text-violet-700">Waliullah</span>. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link
              href="https://github.com/gowaliullah/portfolio"
              className="hover:text-primary flex items-center gap-1.5 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaStar />
              STAR
            </Link>
            <Link
              href="https://github.com/gowaliullah/portfolio/fork"
              className="hover:text-primary flex items-center gap-1.5 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoRepoForked />
              FORK
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
