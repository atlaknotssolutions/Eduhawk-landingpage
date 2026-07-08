import React from "react";
import Footer from "./Footer";

const stats = [
  { value: "2000+", label: "Students placed" },
  { value: "10+", label: "Countries" },
  { value: "100+", label: "Universities" },
  { value: "100%", label: "NMC focused guidance" },
];

const countries = [
  {
    name: "Russia",
    tagline:
      "Top NMC-approved universities • Affordable fees • Safe & recognized",
    link: "https://eduhawk.in/mbbs-abroad/russia",
  },
  {
    name: "Georgia",
    tagline: "English medium • European standards • Low cost of living",
    link: "https://eduhawk.in/mbbs-abroad/georgia",
  },
  {
    name: "Kazakhstan & Kyrgyzstan",
    tagline: "₹15–32 lakh total • No entrance exam • Direct admission",
    link: "https://eduhawk.in/mbbs-abroad/kazakhstan",
  },
  {
    name: "Uzbekistan",
    tagline:
      "Quality education • Affordable tuition • Smooth admission support",
    link: "https://eduhawk.in/mbbs-abroad/uzbekistan",
  },
];

const features = [
  {
    title: "Personalized Counselling",
    description:
      "Guidance matched to your profile, budget and long-term career goals.",
  },
  {
    title: "NMC Approved Only",
    description:
      "Only recognized universities are recommended for safer career planning.",
  },
  {
    title: "No Hidden Charges",
    description:
      "We believe in transparent, honest guidance with complete clarity.",
  },
  {
    title: "End-to-End Support",
    description:
      "From application to pre-departure and arrival, we stay with you.",
  },
];

const processSteps = [
  {
    title: "Profile Review",
    text: "We understand your NEET score, budget and preferred country before suggesting options.",
  },
  {
    title: "University Shortlisting",
    text: "You receive the right country, university and fee comparison based on merit and goals.",
  },
  {
    title: "Admission Support",
    text: "We help with documents, application forms, invitation letters and visa guidance.",
  },
  {
    title: "Post-Arrival Assistance",
    text: "Our team keeps supporting you even after you reach your new campus.",
  },
];

const services = [
  {
    title: "MBBS Admission Abroad",
    description:
      "Get step-by-step support for eligibility guidance, university shortlisting and application assistance.",
  },
  {
    title: "Medical Education Overseas",
    description:
      "Explore recognized foreign medical universities with strong academic support and clear pathways.",
  },
  {
    title: "Overseas Education for Indian Students",
    description:
      "We simplify country selection, fee comparison and admission planning for Indian students.",
  },
  {
    title: "Affordable Study in Lakhs",
    description:
      "Compare budget-friendly MBBS options and choose the right path for your goals.",
  },
];

const faqs = [
  {
    question: "How can I study MBBS abroad with low fees?",
    answer:
      "Edu-Hawk helps students compare affordable MBBS options in countries like Russia, Georgia, Uzbekistan, Kazakhstan, Kyrgyzstan and Nepal.",
  },
  {
    question: "What guidance do you provide for MBBS admission abroad?",
    answer:
      "We provide counselling for university selection, application support, documentation, visa guidance and pre-departure preparation.",
  },
  {
    question: "Is MBBS abroad a good option for Indian students?",
    answer:
      "Yes, many Indian students choose foreign medical universities for quality education, recognized programs and cost-effective study options.",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <header className="bg-gradient-to-br from-[#071827] via-[#112b45] to-[#1f4d72] px-4 py-8 text-white sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                Free • Expert • Trusted by 2000+ students
              </div>
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                MBBS Abroad Counselling with Transparent Guidance
              </h1>
              <p className="mt-4 text-lg text-slate-200 sm:text-xl">
                Trusted MBBS abroad consultants for Indian students. We help you
                choose the right country, university and pathway with clear
                advice and complete support.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.3em] text-orange-300">
                Get Free Counselling
              </p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a
                  href="https://eduhawk.in/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl bg-orange-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-orange-600"
                >
                  Book Free Counselling
                </a>
                <a
                  href="https://eduhawk.in/allcollege"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-white/30 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Countries
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-slate-900/30 p-4"
              >
                <p className="text-3xl font-bold text-orange-300">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-200">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
                Why students trust us
              </p>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
                Your MBBS Abroad Journey Starts with the Right Guidance
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Edu-Hawk Worldwide is a professional team of experienced
                education advisors specializing in MBBS counselling abroad. We
                guide Indian students toward admission in NMC-approved medical
                universities through transparent and ethical counselling.
              </p>
            </div>
            <div className="rounded-3xl bg-orange-50 p-5 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">What you get</p>
              <ul className="mt-3 space-y-2">
                <li>• Clear guidance on the best country for your budget</li>
                <li>
                  • Verified details on universities and admission criteria
                </li>
                <li>• Support with documentation, visa and travel planning</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
                Popular destinations
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Choose the right MBBS destination
              </h2>
            </div>
            <a
              href="https://eduhawk.in/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-600 transition hover:text-orange-700"
            >
              Get country guidance →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {countries.map((country) => (
              <a
                key={country.name}
                href={country.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {country.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {country.tagline}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              Application process
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              We guide you from the first step to your final admission
            </h2>
            <div className="mt-6 grid gap-4">
              {processSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-5 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              Our services
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Everything you need for a safe MBBS abroad journey
            </h2>
            <div className="mt-6 space-y-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-orange-100 bg-white p-4 shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              Frequently asked questions
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Clear answers for your MBBS abroad planning
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <h3 className="font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-[#0f172a] p-5 text-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.7)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                Talk to our team
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                Have questions about your MBBS journey abroad?
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Our counselling team is ready to help you plan the perfect path
                with honest advice, clear information and complete support.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <p className="font-semibold">Contact us</p>
              <p className="mt-2 text-sm text-slate-300">+91 9630736070</p>
              <p className="text-sm text-slate-300">admin@eduhawk.in</p>
              <a
                href="https://eduhawk.in/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
