import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

const LOGO_SRC = "/logo.png";
const VIDEO_SRC = "/camelback-video.mp4";

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
    text: "A flexible partner warehouse network designed to position inventory strategically across domestic and international markets, including access to bonded and FTZ (Foreign Trade Zone) facilities, as well as light assembly, kitting, and value-added services."
  },
  {
    icon: "04",
    title: "Transportation Management",
    text: "Reliable over-the-road transportation solutions using an expansive tractor trailer network across key lanes."
  },
  {
    icon: "05",
    title: "SEA & LATAM Sourcing",
    text: "Supplier identification, qualification, pricing support, production coordination, and export logistics across key sourcing regions."
  },
  {
    icon: "06",
    title: "Hazmat & Food Logistics",
    text: "Specialized handling for hazardous materials and food-grade products, including fresh, refrigerated, and frozen storage solutions."
  }
];

const stats = [
  { value: "150+", label: "Partner Warehouses" },
  { value: "Global", label: "Domestic & International Reach" },
  { value: "End-to-End", label: "Procurement to Final Mile" },
  { value: "Multi-Modal", label: "Truck, Rail & More" }
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
    allServicesHaveTitles: services.every((service) => Boolean(service.title) && service.title.length > 3),
    allServicesHaveCopy: services.every((service) => Boolean(service.text) && service.text.length > 20),
    allServicesHaveTextIcons: services.every((service) => /^\d{2}$/.test(service.icon)),
    logoPathIsSet: LOGO_SRC === "/logo.png",
    videoPathIsSet: VIDEO_SRC === "/camelback-video.mp4",
    hasTestimonials: testimonials.length >= 3,
    testimonialsHaveQuotes: testimonials.every((t) => Boolean(t.quote) && t.quote.length > 20)
  };
}

const testResults = validateWebsiteData();
console.assert(testResults.hasSixServices, "Expected six service cards.");
console.assert(testResults.hasFourStats, "Expected four stat cards.");
console.assert(testResults.allServicesHaveTitles, "Expected every service to have a title.");
console.assert(testResults.allServicesHaveCopy, "Expected every service to have descriptive copy.");
console.assert(testResults.allServicesHaveTextIcons, "Expected every service to use a local text icon badge.");
console.assert(testResults.logoPathIsSet, "Expected production logo path.");
console.assert(testResults.videoPathIsSet, "Expected production video path.");
console.assert(testResults.hasTestimonials, "Expected at least 3 testimonials.");
console.assert(testResults.testimonialsHaveQuotes, "Expected all testimonials to have meaningful quotes.");

function Button({ children, variant = "solid", className = "", href = "#contact" }) {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-rose-300";
  const solid = "bg-rose-500 text-white hover:bg-rose-400";
  const outline = "border border-rose-300/40 bg-rose-500/10 text-rose-100 hover:bg-rose-500/20";
  const styles = variant === "outline" ? outline : solid;

  return (
    <a href={href} className={base + " " + styles + " " + className}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={"rounded-3xl " + className}>{children}</div>;
}

function SectionLabel({ children, dark = false }) {
  const colorClass = dark ? "text-rose-950/70" : "text-rose-200/80";
  return <p className={"text-sm uppercase tracking-[0.3em] " + colorClass}>{children}</p>;
}

function Arrow() {
  return <span className="ml-2" aria-hidden="true">→</span>;
}

function CamelbackLogisticsWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-rose-400/20 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Camelback Logistics Logo" className="h-10 w-auto object-contain" />
            <div>
              <p className="text-lg font-semibold tracking-tight">Camelback Logistics</p>
              <p className="text-xs uppercase tracking-[0.28em] text-rose-200/70">Global Reach. Local Precision.</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-rose-200">About</a>
            <a href="#services" className="hover:text-rose-200">Services</a>
            <a href="#network" className="hover:text-rose-200">Network</a>
            <a href="#contact" className="hover:text-rose-200">Contact</a>
          </nav>

          <a href="#contact" className="hidden rounded-full bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-400 md:inline-flex">
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute inset-0 opacity-30" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-rose-500 blur-3xl" />
            <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-rose-300 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 text-center">
            <img src={LOGO_SRC} alt="Camelback Logistics Logo" className="w-full max-w-4xl object-contain" />

            <p className="inline-flex rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-2 text-sm text-rose-100">
              End-to-end supply chain and logistics solutions
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Global Reach. <span className="text-rose-200">Local Precision.</span>
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Tailored supply chain solutions that connect procurement to final mile delivery with efficiency, transparency, and expertise.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button>Partner With Us <Arrow /></Button>
              <Button variant="outline" href="#services">Explore Services</Button>
            </div>

            <Card className="mt-6 w-full max-w-3xl overflow-hidden border border-rose-400/20 bg-rose-500/10 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-px bg-rose-500/10 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-slate-900/80 p-6">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-rose-200/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section id="about" className="border-y border-rose-400/20 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <SectionLabel>About Camelback</SectionLabel>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight">Built for supply chains that move fast.</h2>
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
          </div>
        </section>

        <section className="bg-gradient-to-br from-rose-600 to-rose-400 px-6 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel dark>Global Sourcing Focus</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Strategic procurement across SEA & LATAM.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-800">
                We specialize in building and managing supply chains in South East Asia and Latin America—regions critical to modern global sourcing strategies. Our team supports supplier identification, qualification, pricing negotiations, production coordination, and export logistics.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-800">
                By leveraging established networks and regional expertise, we help clients reduce dependency risk, optimize cost structures, and ensure consistent, scalable supply from high-growth manufacturing hubs.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="border border-rose-900/10 bg-white/70 p-7 shadow-lg backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">SEA</div>
                <h3 className="mt-5 text-2xl font-semibold">Sourcing</h3>
                <p className="mt-3 text-slate-700">Supplier identification, qualification, production coordination, and export readiness.</p>
              </Card>

              <Card className="border border-rose-900/10 bg-white/70 p-7 shadow-lg backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">LATAM</div>
                <h3 className="mt-5 text-2xl font-semibold">Regional Control</h3>
                <p className="mt-3 text-slate-700">Diversified supply options designed to reduce risk, cost, and lead-time exposure.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-t border-rose-400/20 px-6 py-24">
          <div className="mx-auto max-w-7xl text-center">
            <SectionLabel>In Motion</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">See Camelback in action.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              A glimpse into the movement, scale, and precision behind our global logistics operations.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl border border-rose-400/20 shadow-2xl">
              <video src={VIDEO_SRC} autoPlay loop muted playsInline className="h-auto w-full" />
            </div>
          </div>
        </section>

        <section className="border-t border-rose-400/20 px-6 py-24 overflow-hidden">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">What our clients say.</h2>
            </div>

            <div className="overflow-x-auto">
              <div className="flex gap-6 min-w-full pb-4">
                {testimonials.map((t, index) => (
                  <div key={index} className="min-w-[300px] max-w-sm border border-rose-400/20 bg-rose-500/10 p-6 rounded-3xl shadow-xl">
                    <p className="text-slate-300 leading-7">“{t.quote}”</p>
                    <div className="mt-4 text-sm text-rose-200/80">
                      <p className="font-semibold">{t.name}</p>
                      <p>{t.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Comprehensive logistics from start to finish.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Integrated support across procurement, production, warehousing, transportation, compliance, consulting, and final mile delivery.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="border border-rose-400/20 bg-rose-500/10 p-7 shadow-xl transition hover:bg-rose-500/20">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500 text-sm font-black text-white">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="network" className="bg-gradient-to-br from-rose-600 to-rose-400 px-6 py-24 text-slate-950">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel dark>Our Network</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Strategic footprint. Competitive pricing.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-800">
                With a network of over 150 partner warehouses across the U.S. and internationally, Camelback Logistics delivers scalable, flexible storage and distribution wherever our clients operate.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-800">
                Our established footprint allows us to capitalize on pre-negotiated rates and volume efficiencies within these facilities, including bonded and FTZ warehouses, while supporting light assembly and value-added services. We also provide access to food-grade facilities—fresh, refrigerated, and frozen—as well as compliant hazardous material storage solutions, passing on competitive pricing without compromising service.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="border border-rose-900/10 bg-white/70 p-7 shadow-lg backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">WH</div>
                <h3 className="mt-5 text-2xl font-semibold">Warehousing</h3>
                <p className="mt-3 text-slate-700">Inventory positioned closer to customers for faster distribution and stronger service levels.</p>
              </Card>

              <Card className="border border-rose-900/10 bg-white/70 p-7 shadow-lg backdrop-blur">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">US+</div>
                <h3 className="mt-5 text-2xl font-semibold">Coverage</h3>
                <p className="mt-3 text-slate-700">Domestic and international reach designed to support growth across markets.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-br from-rose-600 to-rose-400 p-8 text-slate-950 shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionLabel dark>Transportation</SectionLabel>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight">Road, rail, and reliable execution.</h2>
              </div>
              <p className="text-lg leading-8 text-slate-800">
                Our expansive transportation network leverages both tractor trailers and rail to deliver flexible, cost-effective solutions across every lane. We specialize in the safe, compliant movement of hazardous materials and food-grade products, maintaining strict regulatory standards and quality controls at every step.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-rose-400/20 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <SectionLabel>Let’s Move Forward</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Ready to optimize your supply chain?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Whether you need transportation, warehousing, customs support, consulting, or a complete end-to-end logistics partner, Camelback Logistics is ready to help.
              </p>
            </div>

            <Card className="border border-rose-400/20 bg-rose-500/10 p-8">
              <div className="space-y-5">
                <div className="flex items-center gap-4 text-slate-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/20 text-xs font-bold">@</span>
                  <span>info@camelbacklogistics.com</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/20 text-xs font-bold">TEL</span>
                  <span>000-000-0000</span>
                </div>
                <Button className="mt-4 w-full">Contact Us <Arrow /></Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-rose-400/20 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-rose-200/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Camelback Logistics. All rights reserved.</p>
          <p>Global Reach. Local Precision.</p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<CamelbackLogisticsWebsite />);
