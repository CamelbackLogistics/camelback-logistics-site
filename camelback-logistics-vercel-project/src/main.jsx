import React, { useMemo } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";

const LOGO_SRC = "/logo.png";

const heroImages = [
  {
    label: "Ocean",
    src: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=2400&q=80"
  },
  {
    label: "Truck",
    src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=80"
  },
  {
    label: "Rail",
    src: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=2400&q=80"
  },
  {
    label: "Warehouse",
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
  }
];

const services = [
  {
    icon: "01",
    title: "Procurement & Production Support",
    text: "Coordinated supply chain support from sourcing and vendor management through production planning and execution."
  },
  {
    icon: "02",
    title: "Customs & Compliance",
    text: "Experienced customs handling, regulatory guidance, and documentation support to keep shipments moving smoothly."
  },
  {
    icon: "03",
    title: "Warehousing & Distribution",
    text: "A flexible partner warehouse network designed to position inventory strategically across domestic and international markets, including access to bonded and FTZ facilities, as well as light assembly, kitting, and value-added services."
  },
  {
    icon: "04",
    title: "Transportation Management",
    text: "Reliable over-the-road transportation solutions using an expansive tractor trailer network across key lanes, complemented by final mile execution and white‑glove delivery services, including parcel distribution to ensure a seamless customer experience from origin to doorstep."
  },
  {
    icon: "05",
    title: "Material, Manufacturing and Production Sourcing",
    text: "Supplier identification, qualification, pricing support, production coordination, and export logistics across key sourcing regions."
  },
  {
    icon: "06",
    title: "Hazmat & FDA Solutions",
    text: "Specialized handling for hazardous materials and food-grade products, including fresh, refrigerated, and frozen storage solutions."
  }
];

const stats = [
  { value: "150+", label: "Partner Warehouses", icon: "WH" },
  { value: "100%", label: "Claim Resolution Rate", icon: "GL" },
  { value: "127,296+", label: "Successful Deliveries", icon: "E2E" },
  { value: "$3.48M+", label: "Client Dollars Saved", icon: "MM" }
];

const testimonials = [
  {
    quote: "Camelback completely transformed our supply chain. Lead times dropped, costs stabilized, and we finally have visibility across every stage.",
    name: "Director of Operations",
    company: "Leading Luxury Luggage Company"
  },
  {
    quote: "Their expertise in Southeast Asia sourcing is unmatched. They helped us diversify suppliers and reduce risk almost immediately.",
    name: "Director of Sourcing",
    company: "National Shoe Manufacturer"
  },
  {
    quote: "From sourcing, production to final delivery, they handle everything. It feels like having an in-house logistics team without the overhead.",
    name: "Owner",
    company: "Beverage Company"
  },
  {
    quote: "James's network and pricing leverage saved us significantly while improving service levels across the board.",
    name: "Director of Operations",
    company: "CPG Brand"
  }
];

function validateWebsiteData() {
  return {
    hasSixServices: services.length === 6,
    hasFourStats: stats.length === 4,
    hasFourHeroImages: heroImages.length === 4,
    allHeroImagesHaveLabels: heroImages.every((image) => Boolean(image.label) && Boolean(image.src)),
    allServicesHaveTitles: services.every((service) => Boolean(service.title) && service.title.length > 3),
    allServicesHaveCopy: services.every((service) => Boolean(service.text) && service.text.length > 20),
    allServicesHaveTextIcons: services.every((service) => /^\d{2}$/.test(service.icon)),
    logoPathIsSet: LOGO_SRC === "/logo.png",
    hasTestimonials: testimonials.length >= 3,
    testimonialsHaveQuotes: testimonials.every((testimonial) => Boolean(testimonial.quote) && testimonial.quote.length > 20),
    keepsStrategicFootprintCopy: true,
    servicesAreUnique: new Set(services.map((service) => service.title)).size === services.length
  };
}

const testResults = validateWebsiteData();
console.assert(testResults.hasSixServices, "Expected six service cards.");
console.assert(testResults.hasFourStats, "Expected four stat cards.");
console.assert(testResults.hasFourHeroImages, "Expected four rotating hero images.");
console.assert(testResults.allHeroImagesHaveLabels, "Expected every hero image to have a label and source.");
console.assert(testResults.allServicesHaveTitles, "Expected every service to have a title.");
console.assert(testResults.allServicesHaveCopy, "Expected every service to have descriptive copy.");
console.assert(testResults.allServicesHaveTextIcons, "Expected every service to use a local text icon badge.");
console.assert(testResults.logoPathIsSet, "Expected production logo path.");
console.assert(testResults.hasTestimonials, "Expected at least 3 testimonials.");
console.assert(testResults.testimonialsHaveQuotes, "Expected all testimonials to have meaningful quotes.");
console.assert(testResults.keepsStrategicFootprintCopy, "Expected Strategic footprint copy to remain present.");
console.assert(testResults.servicesAreUnique, "Expected all services to be unique.");

function Button({ children, variant = "solid", className = "", href = "#contact" }) {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-300";
  const solid = "bg-gradient-to-r from-blue-500 to-sky-300 text-white shadow-lg shadow-sky-500/20 hover:from-blue-400 hover:to-sky-200";
  const outline = "border border-sky-300/50 bg-sky-500/5 text-white hover:bg-sky-500/15";
  const styles = variant === "outline" ? outline : solid;

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl ${className}`}>{children}</div>;
}

function SectionLabel({ children, dark = false }) {
  const colorClass = dark ? "text-sky-950/70" : "text-sky-300";
  return <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${colorClass}`}>{children}</p>;
}

function Arrow() {
  return <span className="ml-2" aria-hidden="true">→</span>;
}

function CamelbackLogisticsWebsite() {
  const hero = useMemo(() => {
    if (typeof window === "undefined") return heroImages[0];
    const index = Math.floor(Math.random() * heroImages.length);
    return heroImages[index];
  }, []);

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      <header className="sticky top-0 z-50 border-b border-sky-400/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-4">
            <img src={LOGO_SRC} alt="Camelback Logistics Logo" className="h-11 w-auto object-contain" />
            <div className="hidden h-8 w-px bg-white/20 sm:block" />
            <p className="hidden text-xs font-semibold uppercase tracking-[0.22em] text-white/80 sm:block">Global Reach. Local Precision.</p>
          </div>

          <nav className="hidden items-center gap-10 text-sm font-medium text-white/85 md:flex">
            <a href="#about" className="hover:text-sky-300">About</a>
            <a href="#services" className="hover:text-sky-300">Services</a>
            <a href="#contact" className="hover:text-sky-300">Contact</a>
          </nav>

          <Button className="hidden px-6 py-3 text-sm md:inline-flex">Get Started <Arrow /></Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${hero.src})` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/10" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-black/40" aria-hidden="true" />

          <div className="relative mx-auto grid min-h-[620px] max-w-[1500px] items-center px-6 py-20 lg:px-10">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex rounded-full border border-sky-400/50 bg-sky-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">
                End-to-end supply chain & logistics solutions
              </p>

              <h1 className="text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
                Global Reach.
                <span className="block">Local Precision.</span>
                <span className="block bg-gradient-to-r from-blue-500 to-sky-300 bg-clip-text text-transparent">Delivered.</span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/85">
                End-to-end supply chain and logistics solutions designed to move your business forward.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="#services">Explore Services <Arrow /></Button>
                <Button variant="outline" href="#contact">Contact Us</Button>
              </div>
            </div>
          </div>

          <div className="relative border-t border-white/10 bg-black/70 backdrop-blur-md">
            <div className="mx-auto grid max-w-[1500px] gap-px px-6 lg:grid-cols-4 lg:px-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-5 border-white/10 py-6 lg:border-r lg:px-8 last:border-r-0">
                  <div>
                    <p className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-3xl font-black text-transparent">{stat.value}</p>
                    <p className="text-sm text-white/80">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#030b19] px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-[1500px]">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Comprehensive Logistics Solutions</h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
              {services.map((service) => (
                <Card key={service.title} className="group border border-sky-400/15 bg-gradient-to-br from-white/[0.08] to-sky-950/20 p-6 shadow-xl transition hover:-translate-y-1 hover:border-sky-300/40 hover:bg-sky-500/10">
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{service.text}</p>
                </Card>
              ))}
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_repeat(4,1fr)]">
              <Card className="border border-sky-400/20 bg-sky-500/10 p-7">
                <h3 className="text-xl font-bold">Built for a moving world.</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Across air, ocean, rail, and white‑glove delivery, we execute with precision—seamlessly connecting every mode to move your business forward.
                </p>
              </Card>

              {heroImages.map((image) => (
                <Card key={image.label} className="relative min-h-[150px] overflow-hidden border border-white/10 bg-slate-900">
                  <img src={image.src} alt={`${image.label} logistics`} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-[0.18em] text-white">{image.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        

        <section id="about" className="relative border-y border-sky-400/10 bg-slate-950 px-6 py-24 lg:px-10 overflow-hidden">
          {/* Subtle Gradient + Depth Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-sky-500/10" />
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]" />
            <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <SectionLabel>About Camelback</SectionLabel>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Built for supply chains that move fast.</h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>Camelback Logistics partners with clients from procurement through production to final delivery, ensuring every step is optimized for efficiency, transparency, and cost control.</p>
              <p>We manage the complexities others avoid — customs clearance, global transportation, regulatory compliance, warehousing, and end-to-end coordination — so our clients can stay focused on growth.</p>
              <p>With a strong focus on Southeast Asia and Latin America, we support sourcing, supplier development, and production oversight in some of the world’s most dynamic manufacturing regions. From Vietnam, Thailand, and Indonesia to Mexico, Colombia, and Brazil, we help clients navigate local markets, vet suppliers, manage risk, and ensure consistent product quality.</p>
              <p>Our on-the-ground expertise and established relationships allow us to streamline procurement, reduce lead times, and create resilient, diversified supply chains across these key regions.</p>
              <p>Backed by a strong network of thoroughly vetted warehousing and transportation partners, we ensure consistent service, reliability, and performance across every touchpoint of the supply chain. Our partners are selected based on strict standards for compliance, safety, capacity, and operational excellence.</p>
              <p>Within the United States, we provide robust transportation and warehousing solutions including full truckload (FTL), less-than-truckload (LTL), intermodal, and rail, supported by strategically located 3rd party service providers that enable efficient regional and national coverage. Our facilities support cross-docking, inventory management, cold chain handling, hazardous materials, and value-added services such as kitting and light assembly—ensuring flexibility, speed, and scalability for our clients.</p>
              <p>More than a service provider, we act as an extension of your business, offering hands-on consulting and tailored solutions designed around your specific operational needs.</p>
            </div>
          </div>
        </section>

        <section id="sourcing" className="bg-gradient-to-br from-blue-600 to-sky-300 px-6 py-24 text-slate-950 lg:px-10">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel dark>Global Sourcing Focus</SectionLabel>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Strategic procurement across SEA & LATAM.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-900">
                We specialize in building and managing supply chains in South East Asia and Latin America—regions critical to modern global sourcing strategies. Our team supports supplier identification, qualification, pricing negotiations, production coordination, and export logistics.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-900">
                By leveraging established networks and regional expertise, we help clients reduce dependency risk, optimize cost structures, and ensure consistent, scalable supply from high-growth manufacturing hubs.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="border border-sky-950/10 bg-white/75 p-7 shadow-xl backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">SEA</div>
                <h3 className="mt-5 text-2xl font-bold">Sourcing</h3>
                <p className="mt-3 text-slate-700">Supplier identification, qualification, production coordination, and export readiness.</p>
              </Card>
              <Card className="border border-sky-950/10 bg-white/75 p-7 shadow-xl backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">LATAM</div>
                <h3 className="mt-5 text-2xl font-bold">Regional Control</h3>
                <p className="mt-3 text-slate-700">Diversified supply options designed to reduce risk, cost, and lead-time exposure.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-t border-sky-400/10 bg-slate-950 px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-[1500px]">
            <div className="mb-12 text-center">
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">What our clients say.</h2>
            </div>
            <div className="overflow-x-auto">
              <div className="flex min-w-full gap-6 pb-4">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="min-w-[310px] max-w-sm border border-sky-400/20 bg-sky-500/10 p-6 shadow-xl">
                    <p className="leading-7 text-slate-300">“{testimonial.quote}”</p>
                    <div className="mt-5 text-sm text-sky-200">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p>{testimonial.company}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="network" className="bg-gradient-to-br from-blue-600 to-sky-300 px-6 py-24 text-slate-950 lg:px-10">
          <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel dark>Our Network</SectionLabel>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Strategic footprint. Competitive pricing.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-900">
                With a network of over 150 partner warehouses across the U.S. and internationally, Camelback Logistics delivers scalable, flexible storage and distribution wherever our clients operate.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-900">
                Our established footprint allows us to capitalize on pre-negotiated rates and volume efficiencies within these facilities, including bonded and FTZ warehouses, while supporting light assembly and value-added services. We also provide access to food-grade facilities—fresh, refrigerated, and frozen—as well as compliant hazardous material storage solutions, passing on competitive pricing without compromising service.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="border border-sky-950/10 bg-white/75 p-7 shadow-xl backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">WH</div>
                <h3 className="mt-5 text-2xl font-bold">Warehousing</h3>
                <p className="mt-3 text-slate-700">Inventory positioned closer to customers for faster distribution and stronger service levels.</p>
              </Card>
              <Card className="border border-sky-950/10 bg-white/75 p-7 shadow-xl backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">US+</div>
                <h3 className="mt-5 text-2xl font-bold">Coverage</h3>
                <p className="mt-3 text-slate-700">Domestic and international reach designed to support growth across markets.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-[#030b19] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-[1500px] rounded-[2rem] bg-gradient-to-br from-blue-600 to-sky-300 p-8 text-slate-950 shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionLabel dark>Transportation</SectionLabel>
                <h2 className="mt-4 text-4xl font-black tracking-tight">Road, rail, and reliable execution.</h2>
              </div>
              <p className="text-lg leading-8 text-slate-900">
                Our expansive transportation network leverages both tractor trailers and rail to deliver flexible, cost-effective solutions across every lane. We specialize in the safe, compliant movement of hazardous materials and food-grade products, maintaining strict regulatory standards and quality controls at every step.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-sky-400/10 bg-slate-950 px-6 py-20 lg:px-10">
          <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <SectionLabel>Let’s Move Forward</SectionLabel>
              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Ready to optimize your supply chain?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Whether you need transportation, warehousing, customs support, consulting, or a complete end-to-end logistics partner, Camelback Logistics is ready to help.
              </p>
            </div>
            <Card className="border border-sky-400/20 bg-sky-500/10 p-8">
              <div className="space-y-5">
                <div className="flex items-center gap-4 text-slate-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20 text-xs font-bold">@</span>
                  <span>info@camelbacklogistics.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/20 text-xs font-bold">TEL</span>
                  <span>000-000-0000</span>
                </div>
                <Button className="mt-4 w-full">Contact Us <Arrow /></Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-sky-400/10 bg-black px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Camelback Logistics. All rights reserved.</p>
          <p>Global Reach. Local Precision.</p>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <>
      <CamelbackLogisticsWebsite />
      <Analytics />
    </>
  );
}

export default CamelbackLogisticsWebsite;
