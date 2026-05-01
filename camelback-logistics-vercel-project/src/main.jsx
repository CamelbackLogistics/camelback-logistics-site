import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

const LOGO_SRC = "/logo.png";
const VIDEO_SRC = "/camelback-video.mp4";

const stats = [
  { value: "150+", label: "Partner Warehouses" },
  { value: "Global", label: "Domestic & International Reach" },
  { value: "End-to-End", label: "Procurement to Final Mile" },
  { value: "Multi-Modal", label: "Truck, Rail & More" }
];

const services = [
  {
    icon: "01",
    title: "Procurement & Production Support",
    text: "Coordinated supply chain support from sourcing and supplier development through production planning and execution."
  },
  {
    icon: "02",
    title: "Customs & Compliance",
    text: "Experienced customs handling, regulatory guidance, and documentation support to keep shipments moving smoothly."
  },
  {
    icon: "03",
    title: "Warehousing & Distribution",
    text: "A flexible partner warehouse network including bonded and FTZ facilities, food-grade storage, hazmat storage, kitting, light assembly, and value-added services."
  },
  {
    icon: "04",
    title: "Transportation Management",
    text: "Reliable domestic and international transportation solutions across FTL, LTL, intermodal, rail, and final mile delivery."
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

function runTests() {
  console.assert(stats.length === 4, "Expected four stat cards.");
  console.assert(services.length === 6, "Expected six service cards.");
  console.assert(testimonials.length >= 3, "Expected at least three testimonials.");
  console.assert(services.every((service) => service.title && service.text), "Expected every service to have title and text.");
  console.assert(testimonials.every((item) => item.quote && item.name && item.company), "Expected every testimonial to have quote, name, and company.");
  console.assert(LOGO_SRC === "/logo.png", "Expected production logo path.");
  console.assert(VIDEO_SRC === "/camelback-video.mp4", "Expected production video path.");
}
runTests();

function Button({ children, variant = "solid", href = "#contact" }) {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-4 font-semibold transition";
  const style =
    variant === "outline"
      ? "border border-red-400/40 bg-red-500/10 text-red-100 hover:bg-red-500/20"
      : "bg-red-600 text-white hover:bg-red-500";

  return (
    <a href={href} className={`${base} ${style}`}>
      {children}
    </a>
  );
}

function SectionLabel({ children, dark = false }) {
  return (
    <p className={`text-sm font-semibold uppercase tracking-[0.3em] ${dark ? "text-red-950/70" : "text-red-200/70"}`}>
      {children}
    </p>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Camelback Logistics" className="h-10 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#sourcing" className="hover:text-white">Sourcing</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#network" className="hover:text-white">Network</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500 md:inline-flex">
            Get Started
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-6 py-24 text-center md:py-32">
          <div className="absolute inset-0 opacity-30" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-red-500 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-8">
            <img src={LOGO_SRC} alt="Camelback Logistics Logo" className="w-full max-w-4xl object-contain" />
            <p className="inline-flex rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 text-sm text-red-100">
              End-to-end supply chain and logistics solutions
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Global Reach. <span className="text-gray-300">Local Precision.</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-gray-300">
              Tailored supply chain solutions that connect procurement to final mile delivery with efficiency, transparency, and expertise.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button>Partner With Us →</Button>
              <Button variant="outline" href="#services">Explore Services</Button>
            </div>

            <div className="mt-8 grid w-full max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-xl">
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-white/10 bg-slate-900/40 px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SectionLabel>About Camelback</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">Built for supply chains that move fast.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-gray-300">
              <p>Camelback Logistics partners with clients from procurement through production to final delivery, ensuring every step is optimized for efficiency, transparency, and cost control.</p>
              <p>We manage the complexities others avoid — customs clearance, global transportation, regulatory compliance, warehousing, and end-to-end coordination — so our clients can stay focused on growth.</p>
              <p>With a strong focus on Southeast Asia and Latin America, we support sourcing, supplier development, and production oversight in some of the world’s most dynamic manufacturing regions. From Vietnam, Thailand, and Indonesia to Mexico, Colombia, and Brazil, we help clients navigate local markets, vet suppliers, manage risk, and ensure consistent product quality.</p>
              <p>Our on-the-ground expertise and established relationships allow us to streamline procurement, reduce lead times, and create resilient, diversified supply chains across these key regions.</p>
              <p>Backed by a strong network of thoroughly vetted warehousing and transportation partners, we ensure consistent service, reliability, and performance across every touchpoint of the supply chain. Our partners are selected based on strict standards for compliance, safety, capacity, and operational excellence.</p>
              <p>Within the United States, we provide robust transportation and warehousing solutions including full truckload (FTL), less-than-truckload (LTL), intermodal, and rail, supported by strategically located 3rd party service providers that enable efficient regional and national coverage. Our facilities support cross-docking, inventory management, cold chain handling, hazardous materials, and value-added services such as kitting and light assembly.</p>
              <p>More than a service provider, we act as an extension of your business, offering hands-on consulting and tailored solutions designed around your specific operational needs.</p>
            </div>
          </div>
        </section>

        <section id="sourcing" className="bg-gradient-to-br from-red-500 to-red-700 px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionLabel dark>Global Sourcing Focus</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Strategic procurement across SEA & LATAM.</h2>
              <p className="mt-6 text-lg leading-8 text-red-50">
                We specialize in building and managing supply chains in South East Asia and Latin America—regions critical to modern global sourcing strategies. Our team supports supplier identification, qualification, pricing negotiations, production coordination, and export logistics.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-7 text-slate-950 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">SEA</div>
                <h3 className="mt-5 text-2xl font-semibold">Sourcing</h3>
                <p className="mt-3 text-slate-700">Supplier identification, qualification, production coordination, and export readiness.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-7 text-slate-950 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">LATAM</div>
                <h3 className="mt-5 text-2xl font-semibold">Regional Control</h3>
                <p className="mt-3 text-slate-700">Diversified supply options designed to reduce risk, cost, and lead-time exposure.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 text-center">
          <div className="mx-auto max-w-7xl">
            <SectionLabel>In Motion</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">See Camelback in action.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
              A glimpse into the movement, scale, and precision behind our global logistics operations.
            </p>
            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
              <video src={VIDEO_SRC} autoPlay loop muted playsInline className="h-auto w-full" />
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-slate-900/40 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">What our clients say.</h2>
            </div>
            <div className="overflow-x-auto pb-4">
              <div className="flex min-w-full gap-6">
                {testimonials.map((item, index) => (
                  <div key={index} className="min-w-[310px] max-w-sm rounded-3xl border border-white/10 bg-slate-950 p-6 shadow-xl">
                    <p className="leading-7 text-gray-300">“{item.quote}”</p>
                    <div className="mt-5 text-sm">
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-gray-500">{item.company}</p>
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
              <p className="mt-5 text-lg leading-8 text-gray-300">
                Integrated support across procurement, production, warehousing, transportation, compliance, consulting, and final mile delivery.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 shadow-xl transition hover:bg-slate-900">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-sm font-black text-white">{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-gray-400">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="network" className="bg-gradient-to-br from-red-500 to-red-700 px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel dark>Our Network</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Strategic footprint. Competitive pricing.</h2>
              <p className="mt-6 text-lg leading-8 text-red-50">
                With a network of over 150 partner warehouses across the U.S. and internationally, Camelback Logistics delivers scalable, flexible storage and distribution wherever our clients operate.
              </p>
              <p className="mt-5 text-lg leading-8 text-red-50">
                Our established footprint allows us to capitalize on pre-negotiated rates and volume efficiencies within these facilities, including bonded and FTZ warehouses, while supporting light assembly and value-added services. We also provide access to food-grade facilities—fresh, refrigerated, and frozen—as well as compliant hazardous material storage solutions, passing on competitive pricing without compromising service.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/90 p-7 text-slate-950 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">WH</div>
                <h3 className="mt-5 text-2xl font-semibold">Warehousing</h3>
                <p className="mt-3 text-slate-700">Bonded, FTZ, food-grade, cold chain, hazmat, kitting, and light assembly support.</p>
              </div>
              <div className="rounded-3xl bg-white/90 p-7 text-slate-950 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-xs font-black text-white">US+</div>
                <h3 className="mt-5 text-2xl font-semibold">Coverage</h3>
                <p className="mt-3 text-slate-700">Domestic and international reach designed to support regional and national growth.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionLabel>Transportation</SectionLabel>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight">Road, rail, and reliable execution.</h2>
              </div>
              <p className="text-lg leading-8 text-gray-300">
                Our expansive transportation network leverages both tractor trailers and rail to deliver flexible, cost-effective solutions across every lane. We specialize in the safe, compliant movement of hazardous materials and food-grade products, maintaining strict regulatory standards and quality controls at every step.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 px-6 py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>Let’s Move Forward</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Ready to optimize your supply chain?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
              Whether you need transportation, warehousing, customs support, consulting, or a complete end-to-end logistics partner, Camelback Logistics is ready to help.
            </p>
            <div className="mt-8">
              <Button>Contact Us →</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Camelback Logistics. All rights reserved.</p>
          <p>Global Reach. Local Precision.</p>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
