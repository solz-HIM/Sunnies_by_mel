import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Visible breadcrumb trail plus matching BreadcrumbList JSON-LD. Gives Google
 * the category context it needs for breadcrumb rich results and adds a second
 * crawl path back to the listing pages from every product URL.
 */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <script {...jsonLd(breadcrumbSchema(crumbs))} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          {crumbs.map((crumb, index) => {
            const isLast = index === crumbs.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1">
                {index > 0 && (
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden="true" />
                )}
                {isLast ? (
                  <span aria-current="page" className="text-foreground">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.path}
                    className="rounded transition-colors hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
