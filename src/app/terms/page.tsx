import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Sunnies by Mel",
  description: "Terms and conditions for purchasing from Sunnies by Mel.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: June 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. About us</h2>
            <p>
              These terms govern purchases made from{" "}
              <strong className="text-foreground">Sunnies by Mel</strong>, a boutique eyewear
              and accessories store operating in Harare, Zimbabwe.
            </p>
            <address className="not-italic mt-3 text-sm border border-border/50 rounded-lg p-4 bg-card/50">
              78 East Road, Belgravia<br />
              Harare, Zimbabwe<br />
              WhatsApp: <a href="https://wa.me/263783180745" className="text-primary hover:underline">+263 78 318 0745</a><br />
              Email: <a href="mailto:brendlync@gmail.com" className="text-primary hover:underline">brendlync@gmail.com</a>
            </address>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Placing an order</h2>
            <p>
              Orders are placed via WhatsApp. When you tap &ldquo;Checkout / Inquire&rdquo; on
              our cart page, a pre-filled WhatsApp message containing your order details is sent
              to us. An order is confirmed only once we reply with written confirmation and
              provide payment details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. Pricing and currency</h2>
            <p>
              All prices displayed on this website are in <strong className="text-foreground">US Dollars (USD)</strong>. Prices are subject to change without notice. The price at
              the time of confirmed order is the price you pay.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Payment</h2>
            <p>
              Payment methods and instructions are provided upon order confirmation via WhatsApp.
              We currently accept payment via EcoCash, bank transfer, and cash on collection.
              Full payment is required before dispatch or collection of goods.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Delivery</h2>
            <p>
              We offer local delivery within Harare and can arrange courier services for orders
              outside Harare. Delivery fees, timelines, and arrangements are confirmed at the
              time of order. We are not liable for delays caused by third-party couriers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Returns and refunds</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Items may be exchanged within <strong className="text-foreground">7 days</strong>{" "}
                of receipt, provided they are unused, unworn, and in original condition.
              </li>
              <li>
                Refunds are issued at our discretion. Where a refund is approved, it will be
                processed within 7 business days using the original payment method.
              </li>
              <li>
                We do not accept returns on items that have been worn, damaged after receipt, or
                are missing original packaging.
              </li>
              <li>
                If you receive a defective or incorrect item, contact us within 48 hours of
                receipt via WhatsApp with photos of the issue.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. Product descriptions</h2>
            <p>
              We make every effort to accurately represent our products. Colours may appear
              slightly different on screen due to monitor settings. We reserve the right to
              correct any pricing or description errors.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Limitation of liability</h2>
            <p>
              Sunnies by Mel is not liable for any indirect, incidental, or consequential
              damages arising from the use or inability to use our products. Our liability is
              limited to the purchase price of the item in question.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">9. Governing law</h2>
            <p>
              These terms are governed by the laws of Zimbabwe. Any disputes shall be resolved
              under the jurisdiction of Zimbabwean courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">10. Contact</h2>
            <p>
              For questions about these terms, contact us via WhatsApp at{" "}
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

        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <Link href="/" className="text-sm text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
