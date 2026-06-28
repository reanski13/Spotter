import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bell,
  Brain,
  CalendarDays,
  CircleDot,
  Globe2,
  Menu,
  Monitor,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from 'lucide-react';
import heroMark from '../../assets/hero.png';

const navLinks = ['Home', 'Workouts', 'Progress', 'Coach'];

const features = [
  {
    title: 'AI Personal Trainer',
    text: 'Computer vision posture analysis, rep quality scoring, and real-time coaching cues built into every session.',
    icon: Brain,
    wide: true,
  },
  {
    title: 'Progress Tracking',
    text: 'Volume, PRs, and recovery trends are organized into a clear performance timeline.',
    icon: TrendingUp,
  },
  {
    title: 'Personalized Schedules',
    text: 'Training plans adapt to your recovery, routine, and weekly availability.',
    icon: CalendarDays,
  },
  {
    title: 'Bio-Data Sync',
    text: 'Connect health and wearable signals to bridge the gap between gym performance and daily recovery.',
    icon: Globe2,
    wide: true,
  },
];

const coachBullets = [
  {
    title: 'Real-time Correction',
    text: 'Audio and visual guidance keep you locked in without checking your phone.',
  },
  {
    title: 'Dynamic Adjustments',
    text: 'The plan updates itself based on the last set, fatigue, and target intensity.',
  },
  {
    title: 'Injury Prevention',
    text: 'Risk signals highlight when workload patterns suggest recovery is slipping.',
  },
];

const testimonials = [
  {
    name: 'Elena Vance',
    role: 'Powerlifter',
    quote: 'Spotter made my training feel coached instead of guessed. The form feedback is precise and immediate.',
    initials: 'EV',
  },
  {
    name: 'Marcus Thorne',
    role: 'Bodybuilder',
    quote: 'The training data, recovery notes, and AI recommendations all fit together cleanly. It feels intentional.',
    initials: 'MT',
  },
  {
    name: 'Jordan Reed',
    role: 'Hybrid Athlete',
    quote: 'Best fitness tool I have used. It combines coaching, planning, and analytics without feeling cluttered.',
    initials: 'JR',
  },
];

const previewBars = [18, 54, 36, 72, 44, 82, 34, 64, 40, 76, 30, 58];

function LandingPage() {
  return (
    <div id="home" className="min-h-screen bg-[#021312] text-[#d7e9e7] antialiased selection:bg-[#b56dff]/30 selection:text-white">
      <div className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(115,59,255,0.18),_transparent_36%),radial-gradient(circle_at_80%_10%,_rgba(68,255,207,0.08),_transparent_28%),linear-gradient(180deg,#021312_0%,#041815_52%,#021312_100%)]">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(153,230,207,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(153,230,207,0.08)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,white,transparent_92%)]" />
        <div className="pointer-events-none absolute left-[-8rem] top-[20rem] h-[22rem] w-[22rem] rounded-full bg-[#b36bff]/20 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-7rem] top-[40rem] h-[20rem] w-[20rem] rounded-full bg-[#42ffd2]/10 blur-[120px]" />

        <header className="relative z-10 border-b border-white/5">
          <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-[0_0_24px_rgba(183,109,255,0.28)]">
                <img src={heroMark} alt="Spotter logo" className="h-5 w-5 object-contain" />
              </div>
              <span className="text-[1.1rem] font-semibold tracking-[-0.03em] text-[#dcebea]">Spotter</span>
            </div>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((label, index) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className={`text-[0.95rem] transition-colors ${index === 0 ? 'text-[#cdb6ff] drop-shadow-[0_0_14px_rgba(190,120,255,0.6)]' : 'text-[#c8d9d7] hover:text-white'}`}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/5 text-[#dbe8e5] transition hover:border-white/20 hover:bg-white/8 sm:flex"
                aria-label="Notifications"
              >
                <Bell size={16} />
              </button>
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0d221f] shadow-[0_0_16px_rgba(114,255,221,0.18)]">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#d8c7ff] to-[#8f5dff] text-[0.65rem] font-semibold text-white">
                  ST
                </div>
              </div>
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/5 text-[#dbe8e5] md:hidden"
                aria-label="Open menu"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <section className="mx-auto flex max-w-[1180px] flex-col items-center px-4 pb-20 pt-14 text-center sm:px-6 lg:px-8 lg:pt-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7461ff]/35 bg-[#141933]/80 px-4 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#d8d2ff] shadow-[0_0_24px_rgba(126,92,255,0.2)] backdrop-blur">
              <CircleDot size={10} className="fill-[#d8d2ff] text-[#d8d2ff]" />
              Next-gen AI coaching
            </div>

            <h1 className="mt-6 max-w-[900px] text-[3rem] font-semibold leading-[0.95] tracking-[-0.06em] text-[#d9eceb] sm:text-[4rem] lg:text-[4.8rem]">
              Your AI-Powered <span className="text-[#b98cff]">Fitness Companion</span>
            </h1>

            <p className="mt-6 max-w-[760px] text-[0.95rem] leading-7 text-[#a9bfbd] sm:text-[1rem]">
              Experience precision training with a digital spotter that learns your form, tracks your gains,
              and adapts every workout in real time.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#8f4aff] via-[#9c58ff] to-[#bf86ff] px-7 text-[0.95rem] font-medium text-white shadow-[0_12px_36px_rgba(145,76,255,0.45)] transition duration-200 hover:translate-y-[-1px] hover:shadow-[0_16px_42px_rgba(145,76,255,0.52)]"
              >
                Get Started
              </Link>
              <a
                href="#features"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/14 bg-white/[0.03] px-7 text-[0.95rem] font-medium text-[#dce8e6] transition duration-200 hover:border-[#c29aff]/40 hover:bg-white/[0.06] hover:text-white"
              >
                Learn More
              </a>
            </div>

            <div className="mt-11 w-full max-w-[1040px] rounded-[26px] border border-[#2c514b] bg-[#071714] p-4 shadow-[0_0_0_1px_rgba(143,75,255,0.18),0_0_32px_rgba(77,32,144,0.22)] sm:p-5">
              <div className="rounded-[18px] border border-white/6 bg-[#0a1116] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-5">
                <div className="flex items-center justify-between border-b border-white/6 pb-3 text-[0.7rem] uppercase tracking-[0.24em] text-[#6f8481]">
                  <span>Live Performance Stack</span>
                  <span>Realtime</span>
                </div>

                <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_1.05fr]">
                  <div className="rounded-[18px] border border-white/6 bg-[#0e171b] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#889a98]">Training Load</p>
                        <h2 className="mt-2 text-[1.2rem] font-semibold tracking-[-0.03em] text-[#d8e7e5]">Weekly volume trend</h2>
                      </div>
                      <div className="rounded-full border border-[#a96dff]/25 bg-[#1b1430] px-3 py-1 text-[0.72rem] font-medium text-[#d7c1ff]">
                        +18% this week
                      </div>
                    </div>

                    <div className="mt-5 flex h-44 items-end gap-2 sm:gap-2.5">
                      {previewBars.map((height, index) => (
                        <div key={`${height}-${index}`} className="flex flex-1 items-end">
                          <div
                            className="w-full rounded-t-full bg-gradient-to-t from-[#892ff2] via-[#b451ff] to-[#f06aff] shadow-[0_0_12px_rgba(194,92,255,0.26)]"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[0.74rem] text-[#728684]">
                      <span>Mon</span>
                      <span>Wed</span>
                      <span>Fri</span>
                      <span>Sun</span>
                    </div>
                  </div>

                  <div className="rounded-[18px] border border-white/6 bg-[#0e171b] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <div className="flex items-center justify-between">
                      <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#889a98]">Session Split</p>
                      <Monitor size={16} className="text-[#c38dff]" />
                    </div>

                    <div className="mt-5 grid grid-cols-4 gap-3">
                      {[82, 64, 92, 54].map((height, index) => (
                        <div key={`${height}-${index}`} className="flex h-44 items-end rounded-[16px] border border-white/5 bg-[#0b1216] p-2">
                          <div
                            className="w-full rounded-[14px] bg-gradient-to-t from-[#7e2fff] via-[#b04cff] to-[#f06cff]"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-[0.75rem] text-[#829491]">
                      <div className="rounded-[14px] border border-white/5 bg-[#0b1216] px-3 py-2">
                        <span className="block text-[#d8e7e5]">94%</span>
                        <span>Form score</span>
                      </div>
                      <div className="rounded-[14px] border border-white/5 bg-[#0b1216] px-3 py-2">
                        <span className="block text-[#d8e7e5]">8.5</span>
                        <span>Target RPE</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 md:grid-cols-4">
                  {[
                    ['Reps', '312', '↑ 12%'],
                    ['Calories', '2.1k', 'Today'],
                    ['Recovery', '86%', 'Green'],
                    ['Consistency', '14 days', 'Streak'],
                  ].map(([label, value, meta]) => (
                    <div key={label} className="rounded-[16px] border border-white/6 bg-[#0e171b] px-4 py-3 text-left">
                      <p className="text-[0.72rem] uppercase tracking-[0.2em] text-[#879895]">{label}</p>
                      <div className="mt-2 flex items-end justify-between gap-3">
                        <span className="text-[1.1rem] font-semibold tracking-[-0.03em] text-[#d9e8e6]">{value}</span>
                        <span className="text-[0.75rem] text-[#8ea09d]">{meta}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="mx-auto max-w-[1180px] px-4 pb-16 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2">
              {features.map(({ title, text, icon: Icon, wide }) => (
                <article
                  key={title}
                  className={`rounded-[20px] border border-white/6 bg-[#081816] p-5 text-left shadow-[0_1px_0_rgba(255,255,255,0.02),0_0_28px_rgba(0,0,0,0.22)] ${wide ? 'md:col-span-2' : ''}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] border border-[#b680ff]/20 bg-[#161529] text-[#c9b0ff] shadow-[0_0_18px_rgba(157,78,221,0.18)]">
                      <Icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-[#d9e9e7]">{title}</h3>
                      <p className="mt-2 max-w-[58ch] text-[0.93rem] leading-7 text-[#8fa19e]">{text}</p>
                    </div>
                  </div>

                  {title === 'Bio-Data Sync' && (
                    <div className="mt-5 flex items-center justify-between gap-6 rounded-[18px] border border-white/6 bg-[linear-gradient(90deg,#0b1715_0%,#0c1118_100%)] p-4">
                      <div className="max-w-[30ch] text-[0.9rem] text-[#9ab0ad]">
                        Apple Health, Google Fit, and wearable metrics help keep your recovery and workload aligned.
                      </div>
                      <div className="relative flex h-28 w-28 items-center justify-center rounded-[22px] border border-[#b27dff]/20 bg-[#0f111b] shadow-[0_0_30px_rgba(145,76,255,0.18)]">
                          <img src={heroMark} alt="Spotter logo" className="h-14 w-14 object-contain" />
                        <div className="absolute inset-3 rounded-[18px] border border-white/5" />
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <section id="coach" className="mx-auto max-w-[1180px] px-4 pb-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-[2.2rem] font-semibold tracking-[-0.05em] text-[#d9eae8] sm:text-[2.8rem]">
                Meet Your AI Coach
              </h2>
              <p className="mx-auto mt-3 max-w-[760px] text-[0.95rem] leading-7 text-[#99acab]">
                The core intelligence behind Spotter gives feedback, adjusts your sessions, and keeps training intent clear.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="rounded-[22px] border border-white/6 bg-[#0a1715] p-5 text-left shadow-[0_0_32px_rgba(0,0,0,0.22)]">
                <div className="flex items-center gap-3 rounded-[16px] border border-[#2c4a45] bg-[#0d1b18] px-4 py-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ddb7ff] to-[#8f51ff] text-white shadow-[0_0_20px_rgba(169,94,255,0.35)]">
                    <Brain size={18} />
                  </div>
                  <div>
                    <div className="text-[0.95rem] font-medium text-[#e1eeec]">Spotter AI</div>
                    <div className="text-[0.72rem] uppercase tracking-[0.24em] text-[#839694]">Neural coaching session</div>
                  </div>
                </div>

                <div className="mt-4 rounded-[18px] border border-white/6 bg-[#111a1f] p-4 text-[0.92rem] leading-7 text-[#a7b7b5]">
                  Your form is dipping on the 8th rep of your bench press. Arch your back slightly more and focus on
                  explosive power from the chest.
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[16px] border border-white/6 bg-[#0d1817] p-4">
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#879894]">Form score</p>
                    <p className="mt-2 text-[1.6rem] font-semibold tracking-[-0.05em] text-[#e0ecea]">94%</p>
                  </div>
                  <div className="rounded-[16px] border border-white/6 bg-[#0d1817] p-4">
                    <p className="text-[0.72rem] uppercase tracking-[0.22em] text-[#879894]">Target RPE</p>
                    <p className="mt-2 text-[1.6rem] font-semibold tracking-[-0.05em] text-[#e0ecea]">8.5</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-3">
                {coachBullets.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-[18px] border border-white/6 bg-[#081816] p-4 text-left">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#a87cff]/18 bg-[#171527] text-[#c9b0ff]">
                      <Sparkles size={14} />
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-medium text-[#e1eeec]">{item.title}</h3>
                      <p className="mt-1 text-[0.92rem] leading-7 text-[#8ea09d]">{item.text}</p>
                    </div>
                  </div>
                ))}

                <div className="rounded-[18px] border border-[#314944] bg-[linear-gradient(135deg,#0c1917_0%,#0d1217_100%)] p-4">
                  <div className="flex items-center justify-between text-[#d9e9e7]">
                    <span className="text-[0.85rem] uppercase tracking-[0.24em] text-[#89a09d]">Session readiness</span>
                    <span className="text-[1rem] font-semibold">86%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/6">
                    <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-[#8f4aff] to-[#b78cff] shadow-[0_0_16px_rgba(171,109,255,0.42)]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="progress" className="mx-auto max-w-[1180px] px-4 pb-16 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-[2rem] font-semibold tracking-[-0.05em] text-[#d9eae8] sm:text-[2.4rem]">
                Trusted by Elite Athletes
              </h2>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {testimonials.map((person) => (
                <article key={person.name} className="rounded-[18px] border border-white/6 bg-[#091916] p-5 text-left shadow-[0_1px_0_rgba(255,255,255,0.02)]">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/8 bg-gradient-to-br from-[#d8b5ff] to-[#8c52ff] text-[0.8rem] font-semibold text-white shadow-[0_0_18px_rgba(170,94,255,0.24)]">
                      {person.initials}
                    </div>
                    <div>
                      <h3 className="text-[0.98rem] font-medium text-[#e2eeec]">{person.name}</h3>
                      <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#7f9290]">{person.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-[0.92rem] leading-7 text-[#9badaa]">“{person.quote}”</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-[1180px] px-4 pb-20 sm:px-6 lg:px-8">
            <div className="rounded-[24px] border border-white/6 bg-[linear-gradient(180deg,#0b1917_0%,#071311_100%)] px-5 py-12 text-center shadow-[0_0_36px_rgba(0,0,0,0.24)] sm:px-8">
              <h2 className="text-[2.2rem] font-semibold tracking-[-0.05em] text-[#dbe9e7] sm:text-[3rem]">
                Ready for your best set?
              </h2>
              <p className="mx-auto mt-3 max-w-[680px] text-[0.95rem] leading-7 text-[#97aba8]">
                Join athletes using AI to keep training structured, adaptive, and easy to follow.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  to="/register"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#8f4aff] via-[#9e5eff] to-[#ceb1ff] px-8 text-[0.95rem] font-medium text-white shadow-[0_12px_34px_rgba(145,76,255,0.42)] transition duration-200 hover:translate-y-[-1px]"
                >
                  Start Training
                </Link>
                <Link
                  to="/login"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-8 text-[0.95rem] font-medium text-[#dce8e6] transition hover:border-white/22 hover:bg-white/[0.07]"
                >
                  Sign In
                </Link>
              </div>

              <p className="mt-5 text-[0.72rem] uppercase tracking-[0.3em] text-[#6f8481]">
                Built for strength, recovery, and consistency
              </p>
            </div>
          </section>
        </main>

        <footer id="contact" className="relative z-10 border-t border-white/5 bg-[#03110f]">
          <div className="mx-auto max-w-[1180px] px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-[1.1fr_repeat(3,minmax(0,1fr))]">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <img src={heroMark} alt="Spotter logo" className="h-6 w-6 object-contain" />
                  </div>
                  <span className="text-[1.05rem] font-semibold tracking-[-0.03em] text-[#dcebea]">Spotter</span>
                </div>
                <p className="mt-4 max-w-[24ch] text-[0.9rem] leading-7 text-[#8ea09d]">
                  AI-driven high performance training for the modern athlete.
                </p>
              </div>

              <div>
                <h3 className="text-[0.72rem] uppercase tracking-[0.26em] text-[#7a8d8b]">Product</h3>
                <ul className="mt-4 space-y-3 text-[0.92rem] text-[#d6e4e2]">
                  <li><a href="#features" className="transition hover:text-[#caa5ff]">Features</a></li>
                  <li><a href="#progress" className="transition hover:text-[#caa5ff]">Testimonials</a></li>
                  <li><a href="#coach" className="transition hover:text-[#caa5ff]">AI Coach</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-[0.72rem] uppercase tracking-[0.26em] text-[#7a8d8b]">Company</h3>
                <ul className="mt-4 space-y-3 text-[0.92rem] text-[#d6e4e2]">
                  <li><a href="#contact" className="transition hover:text-[#caa5ff]">About</a></li>
                  <li><a href="#contact" className="transition hover:text-[#caa5ff]">Blog</a></li>
                  <li><a href="#contact" className="transition hover:text-[#caa5ff]">Privacy</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-[0.72rem] uppercase tracking-[0.26em] text-[#7a8d8b]">Social</h3>
                <div className="mt-4 flex items-center gap-4 text-[#d6e4e2]">
                  <a href="#contact" aria-label="Instagram" className="transition hover:text-[#caa5ff]"><Star size={18} /></a>
                  <a href="#contact" aria-label="X" className="transition hover:text-[#caa5ff]"><CircleDot size={18} /></a>
                  <a href="#contact" aria-label="LinkedIn" className="transition hover:text-[#caa5ff]"><ArrowRight size={18} /></a>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-white/5 pt-5 text-center text-[0.72rem] uppercase tracking-[0.28em] text-[#647875]">
              © 2026 Spotter AI Digital Fitness Inc. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;