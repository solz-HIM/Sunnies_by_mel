import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Sunnies by Mel",
  description: "How Sunnies by Mel collects and uses your information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Who we are</h2>
            <p>
              <strong className="text-foreground">Sunnies by Mel</strong> is a boutique eyewear
              and accessories store based in Harare, Zimbabwe. We sell premium sunglasses,
              blue-light glasses, watches, and fashion accessories.
            </p>
            <address className="not-italic mt-3 text-sm border border-border/50 rounded-lg p-4 bg-card/50">
              78 East Road, Belgravia<br />
              Harare, Zimbabwe<br />
              WhatsApp: <a href="https://wa.me/263783180745" className="text-primary hover:underline">+263 78 318 0745</a><br />
              Email: <a href="mailto:brendlync@gmail.com" className="text-primary hover:underline">brendlync@gmail.com</a>
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Information we collect</h2>
            <p>
              We do not operate user accounts or a payment gateway on this website. When you
              place an order via WhatsApp, you voluntarily share:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Your name (as provided on WhatsApp)</li>
              <li>Your WhatsApp phone number</li>
              <li>Your delivery address (if delivery is requested)</li>
              <li>Product preferences and order details</li>
            </ul>
            <p className="mt-3">
              This website does not use cookies for tracking, does not collect email addresses
              automatically, and does not run analytics beyond what is provided by the hosting
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. How we use your information</h2>
            <p>Information you share with us is used solely to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Process and fulfil your order</li>
              <li>Communicate order status and confirm payment</li>
              <li>Arrange delivery or collection</li>
              <li>Respond to enquiries or complaints</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Data retention</h2>
            <p>
              Order records shared via WhatsApp are retained within the WhatsApp conversation
              thread. We do not maintain a separate customer database. You may request deletion
              of any personal information we hold by contacting us directly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Third-party links</h2>
            <p>
              This site contains links to external platforms (Instagram, Facebook, WhatsApp).
              We are not responsible for the privacy practices of those platforms. Please review
              their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Your rights</h2>
            <p>
              You have the right to access, correct, or request deletion of personal information
              you have shared with us. To exercise any of these rights, contact us via WhatsApp
              at{" "}
              <a href="https://wa.me/263783180745" className="text-primary hover:underline">
                +263 78 318 0745
              </a>{" "}
              or email{" "}
              <a href="mailto:brendlync@gmail.com" className="text-primary hover:underline">
                brendlync@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. The &ldquo;Last updated&rdquo; date
              at the top of this page reflects the most recent revision.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <Link href="/" className="text-sm text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
