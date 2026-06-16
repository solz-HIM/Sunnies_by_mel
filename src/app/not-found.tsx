import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Glasses } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 border border-primary/20">
        <Glasses className="h-10 w-10 text-primary" />
      </div>

      <p className="text-7xl font-black text-primary mb-4 tracking-tight">404</p>

      <h1 className="text-3xl font-bold text-foreground mb-3">
        Page not found
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        Looks like this page wandered off. Let&apos;s get you back to the collection.
      </p>

      <Link href="/">
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
