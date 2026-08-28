import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/seo";

/**
 * NAP block + embedded Google Map. Local pack ranking leans heavily on a
 * consistent name/address/phone pairing that matches the Google Business
 * Profile, so the strings here come from the shared SITE config.
 */
export default function StoreLocation({
  heading = "Visit the shop in Belgravia, Harare",
  className = "",
}: {
  heading?: string;
  className?: string;
}) {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className={`border-t border-border/50 bg-background py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Find us
          </p>
          <h2
            id="visit-heading"
            className="mb-6 text-3xl font-bold text-foreground sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            {heading}
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Try frames on before you buy. Our shop sits on East Road in Belgravia,
            a few minutes from Avondale and the Harare CBD, with free parking
            outside. Not in Harare? We deliver countrywide.
          </p>

          <address className="not-italic space-y-5 text-muted-foreground">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-foreground">{SITE.name}</span>
                {SITE.address.street}, {SITE.address.suburb}
                <br />
                {SITE.address.city}, {SITE.address.countryName}
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-foreground">Opening hours</span>
                Monday – Friday: 8:30am – 5:00pm
                <br />
                Saturday: 9:00am – 1:00pm
                <br />
                Sunday &amp; public holidays: closed
              </span>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`tel:${SITE.telephone}`}
                className="min-h-11 py-1.5 transition-colors hover:text-primary"
              >
                {SITE.telephone}
              </a>
            </div>
          </address>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(
                "Hi Sunnies by Mel! I'd like to visit the shop — are you open today?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform duration-300 active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Chat on WhatsApp
            </a>
            <a
              href={SITE.mapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold text-foreground transition-colors duration-300 hover:bg-secondary"
            >
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Get directions
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-lg">
          <iframe
            src={SITE.mapsEmbedSrc}
            title="Map showing Sunnies by Mel at 78 East Road, Belgravia, Harare"
            className="h-[380px] w-full border-0 lg:h-full lg:min-h-[460px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
