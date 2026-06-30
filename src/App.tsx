import { useState, type FormEvent } from 'react'

const features = [
  {
    title: 'Real-time Dashboards',
    desc: 'Monitor KPIs with live data streams and customizable widgets.',
    icon: '📊',
  },
  {
    title: 'AI-Powered Insights',
    desc: 'Surface trends and anomalies before they impact your business.',
    icon: '✨',
  },
  {
    title: 'Team Collaboration',
    desc: 'Share reports, annotate charts, and align on decisions faster.',
    icon: '👥',
  },
  {
    title: 'Enterprise Security',
    desc: 'SOC 2 compliant with SSO, audit logs, and role-based access.',
    icon: '🔒',
  },
]

const stats = [
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '2.4M+', label: 'Events / day' },
  { value: '150+', label: 'Integrations' },
  { value: '4.9★', label: 'G2 Rating' },
]

const plans = [
  {
    name: 'Starter',
    price: '$29',
    desc: 'For small teams getting started',
    features: ['5 dashboards', '10K events/mo', 'Email support'],
  },
  {
    name: 'Growth',
    price: '$79',
    desc: 'For scaling product teams',
    features: ['Unlimited dashboards', '500K events/mo', 'AI insights', 'Priority support'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For large organizations',
    features: ['Dedicated infra', 'SSO & SAML', 'Custom SLA', 'Dedicated CSM'],
  },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function App() {
  const [toast, setToast] = useState<string | null>(null)
  const [email, setEmail] = useState('')

  const showToast = (message: string) => {
    setToast(message)
    window.setTimeout(() => setToast(null), 3200)
  }

  const handleTrialClick = (source: string) => {
    showToast(`Thanks for your interest! (${source}) — This is a portfolio demo.`)
    scrollTo('contact')
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) {
      showToast('Please enter your email address.')
      return
    }
    showToast(`Got it! We'll reach out at ${email.trim()} — demo form only.`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-slate-200">
      {/* Toast */}
      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-[100] max-w-sm -translate-x-1/2 rounded-xl border border-cyan-500/30 bg-[#111827] px-5 py-3 text-sm text-white shadow-xl shadow-cyan-500/10"
        >
          {toast}
        </div>
      )}

      {/* Nav */}
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0a0e17]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-lg font-bold text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 text-sm">
              N
            </span>
            Nexus
          </button>
          <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <button type="button" onClick={() => scrollTo('features')} className="transition hover:text-white">
              Features
            </button>
            <button type="button" onClick={() => scrollTo('pricing')} className="transition hover:text-white">
              Pricing
            </button>
            <button type="button" onClick={() => scrollTo('contact')} className="transition hover:text-white">
              Contact
            </button>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => showToast('Login is not available in this portfolio demo.')}
              className="hidden text-sm text-slate-400 transition hover:text-white sm:block"
            >
              Log in
            </button>
            <button
              type="button"
              onClick={() => handleTrialClick('Nav')}
              className="rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition hover:opacity-90"
            >
              Start free trial
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-[300px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-6xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-medium text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            Now with AI-powered forecasting
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
            Turn data chaos into{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              clear decisions
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Nexus gives product and growth teams a single source of truth — real-time analytics,
            automated reports, and actionable insights in one beautiful platform.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => handleTrialClick('Hero')}
              className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl shadow-cyan-500/20 transition hover:opacity-90 sm:w-auto"
            >
              Start 14-day free trial
            </button>
            <button
              type="button"
              onClick={() => scrollTo('features')}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:w-auto"
            >
              Watch demo →
            </button>
          </div>
          <p className="mt-4 text-sm text-slate-500">No credit card required · Setup in 5 minutes</p>

          {/* Dashboard mockup */}
          <div className="relative mx-auto mt-16 max-w-4xl">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs text-slate-500">app.nexus.io/dashboard</span>
              </div>
              <div className="grid gap-4 p-6 sm:grid-cols-3">
                <div className="rounded-xl bg-gradient-to-br from-cyan-500/20 to-transparent p-5 text-left sm:col-span-1">
                  <p className="text-xs text-slate-400">Revenue</p>
                  <p className="mt-1 text-2xl font-bold text-white">$284,590</p>
                  <p className="mt-1 text-xs text-emerald-400">↑ 12.4% vs last month</p>
                </div>
                <div className="rounded-xl bg-white/5 p-5 text-left">
                  <p className="text-xs text-slate-400">Active Users</p>
                  <p className="mt-1 text-2xl font-bold text-white">48,291</p>
                  <p className="mt-1 text-xs text-emerald-400">↑ 8.1%</p>
                </div>
                <div className="rounded-xl bg-white/5 p-5 text-left">
                  <p className="text-xs text-slate-400">Conversion</p>
                  <p className="mt-1 text-2xl font-bold text-white">3.42%</p>
                  <p className="mt-1 text-xs text-cyan-400">↑ 0.3pp</p>
                </div>
                <div className="h-32 rounded-xl bg-white/5 sm:col-span-2" />
                <div className="h-32 rounded-xl bg-white/5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-white/[0.02] px-6 py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything you need to scale</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Built for modern data teams who need speed, clarity, and collaboration without the complexity.
            </p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <button
                key={f.title}
                type="button"
                onClick={() => showToast(`${f.title} — explore this feature in the full product.`)}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-left transition hover:border-cyan-500/30 hover:bg-white/[0.05]"
              >
                <span className="text-3xl">{f.icon}</span>
                <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple, transparent pricing</h2>
            <p className="mt-4 text-slate-400">Start free. Scale as you grow.</p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-8 ${
                  plan.highlight
                    ? 'border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-xl shadow-cyan-500/10'
                    : 'border-white/5 bg-white/[0.03]'
                }`}
              >
                {plan.highlight && (
                  <span className="mb-4 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{plan.desc}</p>
                <p className="mt-6 text-4xl font-bold text-white">
                  {plan.price}
                  {plan.price !== 'Custom' && <span className="text-base font-normal text-slate-500">/mo</span>}
                </p>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="text-cyan-400">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={() => handleTrialClick(plan.name)}
                  className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition hover:opacity-90 ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="scroll-mt-24 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to unlock your data?</h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-400">
            Join 2,000+ teams already using Nexus to make smarter, faster decisions.
          </p>
          <form
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            onSubmit={handleFormSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-cyan-500/50"
            />
            <button
              type="submit"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0a0e17] transition hover:bg-slate-100"
            >
              Get early access
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">© 2026 Nexus Analytics. Portfolio demo project.</p>
          <div className="flex gap-6 text-sm text-slate-500">
            <button type="button" onClick={() => showToast('Privacy policy — portfolio demo only.')} className="hover:text-white">
              Privacy
            </button>
            <button type="button" onClick={() => showToast('Terms of service — portfolio demo only.')} className="hover:text-white">
              Terms
            </button>
            <button type="button" onClick={() => showToast('Follow @nexus_demo on social — fictional brand.')} className="hover:text-white">
              Twitter
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
