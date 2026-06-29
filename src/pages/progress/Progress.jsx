import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  CalendarDays,
  Dumbbell,
  Flag,
  Footprints,
  Gem,
  LayoutGrid,
  Sparkles,
  SquareActivity,
  TrendingUp,
  UserCircle2,
  ArrowUpToLine,
  Layers,
} from 'lucide-react';
import heroMark from '../../assets/hero.png';

const sidebarItems = [
  { label: 'Dashboard', icon: LayoutGrid, to: '/dashboard' },
  { label: 'Workouts', icon: Dumbbell, to: '/workouts' },
  { label: 'Schedule', icon: CalendarDays, to: '/schedule' },
  { label: 'Progress', icon: SquareActivity, active: true, to: '/progress' },
  { label: 'AI Coach', icon: Sparkles, to: '/ai-coach' },
  { label: 'Profile', icon: UserCircle2, to: '/profile' },
];

const weightChartPoints = [
  [0, 70],
  [48, 64],
  [96, 78],
  [144, 73],
  [192, 90],
  [240, 96],
  [288, 112],
  [336, 132],
  [384, 150],
];

const weightChartLine = weightChartPoints.map(([x, y]) => `${x},${y}`).join(' ');
const weightChartArea = `${weightChartLine} 384,220 0,220`;

const frequencyData = [
  { day: 'MON', sessions: 3 },
  { day: 'TUE', sessions: 5 },
  { day: 'WED', sessions: 4 },
  { day: 'THU', sessions: 6 },
  { day: 'FRI', sessions: 3 },
  { day: 'SAT', sessions: 5 },
  { day: 'SUN', sessions: 2 },
];

const maxSessions = Math.max(...frequencyData.map((entry) => entry.sessions));

const personalRecords = [
  {
    label: 'Bench Press',
    value: '125',
    unit: 'kg',
    achieved: 'Achieved 2 days ago',
    badge: '+12%',
    tone: 'text-[#7be7a8]',
    icon: Dumbbell,
  },
  {
    label: 'Deadlift',
    value: '180',
    unit: 'kg',
    achieved: 'Achieved today',
    badge: 'NEW',
    tone: 'text-[#9cc6ff]',
    icon: ArrowUpToLine,
  },
  {
    label: '5k Run',
    value: '21:45',
    unit: '',
    achieved: 'Achieved 2 weeks ago',
    badge: 'STABLE',
    tone: 'text-[#9caead]',
    icon: Footprints,
  },
  {
    label: 'Squat',
    value: '145',
    unit: 'kg',
    achieved: 'Achieved 1 month ago',
    badge: '+5%',
    tone: 'text-[#7be7a8]',
    icon: Layers,
  },
];

function GaugeRing({ percent, label }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const gradientId = `gauge-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <article className="flex flex-col items-center justify-center gap-3 rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#121816_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_28px_rgba(181,140,255,0.06)]">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <svg viewBox="0 0 100 100" className="h-24 w-24 -rotate-90">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#cdb7ff" />
              <stop offset="100%" stopColor="#8c4dff" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="drop-shadow-[0_0_10px_rgba(195,169,255,0.45)]"
          />
        </svg>
        <span className="absolute text-[1.05rem] font-semibold text-[#dce9e7]">{percent}%</span>
      </div>
      <p className="text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9caead]">{label}</p>
    </article>
  );
}

function Progress() {
  const [range, setRange] = useState('6M');
  const rangeLabel = range === '1M' ? 'Last month' : 'Last 6 months';

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#021312] text-[#e2eceb]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(115,59,255,0.16),_transparent_36%),radial-gradient(circle_at_82%_10%,_rgba(68,255,207,0.08),_transparent_26%),linear-gradient(180deg,#021312_0%,#041815_50%,#021312_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(153,230,207,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(153,230,207,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,white,transparent_92%)]" />
      <div className="pointer-events-none absolute left-[-6rem] top-[12rem] h-[24rem] w-[24rem] rounded-full bg-[#b36bff]/18 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[34rem] h-[22rem] w-[22rem] rounded-full bg-[#42ffd2]/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1920px]">
        <aside
          className="hidden shrink-0 border-r border-white/6 bg-[#041611]/90 px-4 py-4 backdrop-blur lg:flex lg:flex-col"
          style={{ width: 'clamp(220px, 18vw, 300px)' }}
        >
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_24px_rgba(181,140,255,0.2)]">
              <img src={heroMark} alt="Spotter logo" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h1 className="text-[2rem] font-semibold tracking-[-0.05em] text-[#ceb8ff]">Spotter</h1>
              <p className="text-[0.72rem] uppercase tracking-[0.26em] text-[#7d8f8a]">AI Digital Spotter</p>
            </div>
          </div>

          <nav className="mt-12 flex flex-1 flex-col gap-1">
            {sidebarItems.map(({ label, icon: Icon, active, to }) => (
              <Link
                key={label}
                to={to}
                className={`flex items-center gap-3 rounded-none border-r-2 px-4 py-3 text-[0.95rem] font-medium transition ${active ? 'border-r-[#c9b0ff] bg-white/[0.05] text-[#dcc8ff] shadow-[inset_0_0_0_1px_rgba(201,176,255,0.12)]' : 'border-r-transparent text-[#b0bfbd] hover:bg-white/[0.03] hover:text-white'}`}
              >
                <Icon size={16} className={active ? 'text-[#ceb0ff]' : 'text-[#97a7a5]'} />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto px-2 pb-2">
            <Link
              to="/workouts"
              className="flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#8c4dff] via-[#995bff] to-[#b487ff] text-[0.95rem] font-semibold text-white shadow-[0_14px_34px_rgba(140,77,255,0.38)] transition hover:translate-y-[-1px]"
            >
              Start Workout
            </Link>
          </div>
        </aside>

        <div className="relative flex min-w-0 flex-1 flex-col">
          <header className="relative z-10 flex items-center gap-4 border-b border-white/6 bg-white/[0.02] px-4 py-4 backdrop-blur sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="flex items-center gap-3">
              <h2 className="text-[1.55rem] font-semibold tracking-[-0.04em] text-[#dce9e7]">Progress</h2>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#6e58ff]/30 bg-[#14162a]/80 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#d8d2ff] shadow-[0_0_20px_rgba(126,92,255,0.18)] backdrop-blur">
                <Sparkles size={11} />
                AI Insight: Hypertrophy Optimized
              </span>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/[0.04] text-[#dbe8e5] transition hover:border-white/15 hover:bg-white/[0.06]" aria-label="Notifications">
                <Bell size={16} />
              </button>
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0d221f]">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#d8c7ff] to-[#8f5dff] text-[0.65rem] font-semibold text-white">
                  GA
                </div>
              </div>
            </div>
          </header>

          <main className="relative z-10 flex-1 px-4 py-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="mx-auto max-w-[1720px]">
              <section className="grid gap-3 xl:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.62fr)]">
                <article className="rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#121816_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_32px_rgba(181,140,255,0.06)]">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Weight Progress</h3>
                      <p className="mt-1 text-[0.78rem] text-[#96a8a6]">{rangeLabel} • Average -0.8kg/week</p>
                    </div>
                    <div className="flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.03] p-1">
                      <button
                        onClick={() => setRange('1M')}
                        className={`rounded-full px-3 py-1 text-[0.72rem] font-medium transition ${range === '1M' ? 'bg-[#c9b0ff]/90 text-[#1d1330] font-semibold' : 'text-[#8b9b99] hover:text-[#d8e4e1]'}`}
                      >
                        1M
                      </button>
                      <button
                        onClick={() => setRange('6M')}
                        className={`rounded-full px-3 py-1 text-[0.72rem] font-medium transition ${range === '6M' ? 'bg-[#c9b0ff]/90 text-[#1d1330] font-semibold' : 'text-[#8b9b99] hover:text-[#d8e4e1]'}`}
                      >
                        6M
                      </button>
                    </div>
                  </div>

                  <div className="relative mt-4 h-[230px] rounded-[10px] bg-[linear-gradient(180deg,#0f1615_0%,#121a19_100%)] p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                    <div className="absolute left-[58%] top-[16%] -translate-x-1/2 rounded-lg border border-white/10 bg-[#0d1716]/95 px-3 py-2 text-center shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
                      <p className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-[#8b9b99]">Current</p>
                      <p className="text-[0.85rem] font-semibold text-[#dce9e7]">78.4 kg</p>
                    </div>
                    <svg viewBox="0 0 384 220" className="h-full w-full overflow-visible">
                      <defs>
                        <linearGradient id="weightTrendGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#e1cbff" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#b998ff" stopOpacity="0.85" />
                        </linearGradient>
                        <linearGradient id="weightTrendFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#d9c7ff" stopOpacity="0.24" />
                          <stop offset="100%" stopColor="#d9c7ff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <polyline fill="url(#weightTrendFill)" points={weightChartArea} />
                      <polyline
                        fill="none"
                        stroke="url(#weightTrendGlow)"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={weightChartLine}
                        className="drop-shadow-[0_0_10px_rgba(195,169,255,0.6)]"
                      />
                    </svg>
                  </div>
                </article>

                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <GaugeRing percent={75} label="Weekly Goal" />
                    <GaugeRing percent={28} label="Macro Target" />
                  </div>

                  <article className="flex flex-1 flex-col rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#121816_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_28px_rgba(181,140,255,0.05)]">
                    <div className="flex items-center gap-2 text-[0.8rem] font-semibold text-[#cdb7ff]">
                      <Sparkles size={14} />
                      AI Prediction
                    </div>
                    <p className="mt-3 text-[0.82rem] leading-6 text-[#9caead]">
                      At your current rate, you will reach your target weight of 75kg by September 14th.
                    </p>
                  </article>
                </div>
              </section>

              <section className="mt-3">
                <article className="rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#121816_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_28px_rgba(181,140,255,0.04)]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Workout Frequency</h3>
                    <span className="text-[0.78rem] text-[#96a8a6]">Average: 4.2 sessions/week</span>
                  </div>

                  <div className="mt-6 flex h-[180px] items-end gap-4">
                    {frequencyData.map((entry) => (
                      <div key={entry.day} className="flex flex-1 flex-col items-center gap-2">
                        <div className="flex h-[150px] w-full items-end justify-center">
                          <div
                            className="w-full max-w-[28px] rounded-t-md bg-gradient-to-t from-[#5d3fa8]/30 to-[#cdb7ff]/80"
                            style={{ height: `${(entry.sessions / maxSessions) * 100}%` }}
                          />
                        </div>
                        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#7d8f8a]">{entry.day}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="mt-6">
                <h3 className="text-[1.25rem] font-semibold tracking-[-0.03em] text-[#dce9e7]">Personal Records</h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {personalRecords.map(({ label, value, unit, achieved, badge, tone, icon: Icon }) => (
                    <article
                      key={label}
                      className="rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#121816_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_28px_rgba(181,140,255,0.04)]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/8 bg-[#171f22] text-[#cdb7ff]">
                          <Icon size={15} />
                        </span>
                        <span className={`text-[0.6rem] font-semibold uppercase tracking-[0.16em] ${tone}`}>{badge}</span>
                      </div>
                      <p className="mt-4 text-[0.82rem] text-[#9caead]">{label}</p>
                      <p className="mt-1 text-[1.6rem] font-semibold text-[#dce9e7]">
                        {value}
                        {unit ? <span className="ml-1 text-[0.85rem] font-medium text-[#8b9b99]">{unit}</span> : null}
                      </p>
                      <p className="mt-1 text-[0.7rem] text-[#869693]">{achieved}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Progress;