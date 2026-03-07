import { Link } from "react-router-dom";

const howItWorksSteps = [
  "User reports an incident from the mobile app.",
  "User location is validated using geofencing to confirm they are inside the event boundary.",
  "The backend analyzes incidents using clustering algorithms.",
  "Admins monitor incident clusters and risk heatmaps on a real-time dashboard map.",
];

const features = [
  "Real-time incident reporting",
  "Geo-fencing based event monitoring",
  "AI-based hotspot detection",
  "Live dashboard monitoring",
  "Heatmap visualization of risk zones",
];

function Home() {
  return (
    <div id="home" className="space-y-12">

      {/* NAVBAR */}
      <nav className="rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xl font-bold tracking-tight text-slate-900">GeoWatch</p>

          <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-600">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#mobile-app">Mobile App</a>
          </div>

          <Link
            to="/admin/login"
            className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900"
          >
            Admin Access
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-10 text-white shadow-lg">
        <h1 className="text-3xl font-bold md:text-5xl">
          GeoWatch - AI Powered Crowd Safety Monitoring
        </h1>

        <p className="mt-4 text-slate-200 max-w-2xl">
          GeoWatch is a geofence-enabled crowd risk intelligence system designed
          for large public events. It helps organizers detect safety risks,
          monitor crowd incidents, and respond quickly using AI-powered analysis.
        </p>

        <a
          href="#mobile-app"
          className="mt-6 inline-block rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-black"
        >
          Download Mobile App
        </a>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="rounded-2xl border p-8 bg-white">
        <h2 className="text-2xl font-bold">How It Works</h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-xl">
              <p className="font-semibold">Step {index + 1}</p>
              <p className="text-slate-600">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="rounded-2xl border p-8 bg-white">
        <h2 className="text-2xl font-bold">Features</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div key={feature} className="p-6 bg-slate-50 rounded-xl">
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE APP DOWNLOAD */}
      <section id="mobile-app" className="rounded-2xl border p-8 bg-white">
        <h2 className="text-2xl font-bold">Mobile App</h2>

        <p className="mt-3 text-slate-600">
          Download the Android app to report incidents instantly from the event location.
        </p>

        <a
          href="https://drive.google.com/uc?export=download&id=160CrJbeX09iTOVN7z4MFoXjuZu9dAv4m"
          className="mt-6 inline-block rounded-lg bg-emerald-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-emerald-500"
        >
          Download APK
        </a>
      </section>

      {/* FOOTER */}
      <footer className="rounded-2xl bg-slate-900 p-8 text-white text-center">
        © 2026 GeoWatch
      </footer>

    </div>
  );
}

export default Home;
