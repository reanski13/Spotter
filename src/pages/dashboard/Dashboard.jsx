import { Link } from 'react-router-dom';
import {
  Bell,
  CalendarDays,
  ChevronDown,
  CheckCircle2,
  Dumbbell,
  Flame,
  LayoutGrid,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  SquareActivity,
  UserCircle2,
} from 'lucide-react';
import heroMark from '../../assets/hero.png';

const sidebarItems = [
  { label: 'Dashboard', icon: LayoutGrid, active: true, to: '/dashboard' },
  { label: 'Workouts', icon: Dumbbell, to: '/workouts' },
  { label: 'Schedule', icon: CalendarDays, to: '/schedule' },
  { label: 'Progress', icon: SquareActivity, to: '/progress' },
  { label: 'AI Coach', icon: Sparkles, to: '/ai-coach' },
  { label: 'Profile', icon: UserCircle2, to: '/profile' },
];

const progressRows = [
  { label: 'Strength Training', value: '4/5 sessions', percent: 82, accent: 'bg-[#d8c4ff]' },
  { label: 'Cardio Baseline', value: '120/150 min', percent: 73, accent: 'bg-[#b8a6ff]' },
  { label: 'Mobility Drills', value: '2/3 sessions', percent: 68, accent: 'bg-[#ffb867]' },
];

const scheduleItems = [
  { day: 'OCT 24', title: 'Push Day - Hypertrophy', time: 'Today, 06:00 PM', highlight: true },
  { day: 'OCT 25', title: 'Active Recovery Walk', time: 'Tomorrow, 08:00 AM' },
  { day: 'OCT 26', title: 'Pull Day - Strength', time: 'Friday, 07:00 AM' },
];

const activityItems = [
  { icon: CheckCircle2, title: 'Leg Day - Power', subtitle: 'Completed yesterday + 72 mins', meta: '482 kcal', note: 'PERSONAL RECORD' },
  { icon: RefreshCw, title: 'Apple Health Sync', subtitle: 'Updated 2 hours ago', meta: 'Successfully imported 8.2k steps' },
];

const chartPoints = [
  [0, 192],
  [48, 188],
  [96, 190],
  [144, 166],
  [192, 126],
  [240, 136],
  [288, 102],
  [336, 78],
  [384, 92],
];

const chartLine = chartPoints.map(([x, y]) => `${x},${y}`).join(' ');
const chartArea = `${chartLine} 384,220 0,220`;

const guestProfile = {
  name: 'Guest Athlete',
  modeLabel: 'Demo Mode',
};

function Dashboard() {
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
            <div className="relative hidden flex-1 items-center xl:flex">
              <Search size={17} className="absolute left-4 text-[#728784]" />
              <input
                type="text"
                placeholder="Search exercises, insights..."
                className="h-11 w-full max-w-[920px] rounded-full border border-white/5 bg-[#0b1715] pl-11 pr-4 text-[0.92rem] text-[#deece9] placeholder:text-[#6f8381] outline-none transition focus:border-[#b89bff]/35 focus:ring-2 focus:ring-[#b89bff]/10"
              />
            </div>

            <div className="ml-auto flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/[0.04] text-[#dbe8e5] transition hover:border-white/15 hover:bg-white/[0.06] xl:hidden" aria-label="Search">
                <Search size={16} />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/[0.04] text-[#dbe8e5] transition hover:border-white/15 hover:bg-white/[0.06]" aria-label="Notifications">
                <Bell size={16} />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/[0.04] text-[#dbe8e5] transition hover:border-white/15 hover:bg-white/[0.06]" aria-label="Settings">
                <Settings size={16} />
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
              <section className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6e58ff]/30 bg-[#14162a]/80 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d8d2ff] shadow-[0_0_20px_rgba(126,92,255,0.18)] backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#d8d2ff] shadow-[0_0_10px_rgba(216,210,255,0.8)]" />
                  Demo Mode
                </div>
                <h2 className="mt-4 text-[clamp(1.8rem,2vw,2.35rem)] font-semibold tracking-[-0.05em] text-[#dce9e7]">
                  Good morning, {guestProfile.name}
                </h2>
                <p className="mt-2 max-w-[820px] text-[0.95rem] leading-7 text-[#97aaa8]">
                  {guestProfile.modeLabel} is active because authentication is not connected yet. The dashboard is using placeholder user data until the backend is wired in.
                </p>
              </section>

              <section className="grid gap-3 xl:grid-cols-[minmax(0,1.4fr)_minmax(240px,0.42fr)] 2xl:grid-cols-[minmax(0,1.55fr)_minmax(260px,0.38fr)]">
                <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_minmax(210px,0.34fr)]">
                  <article className="relative overflow-hidden rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#121816_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_32px_rgba(181,140,255,0.06)] xl:row-span-2">
                    <div className="pointer-events-none absolute left-[-5rem] top-[-4rem] h-44 w-44 rounded-full bg-[#b36bff]/12 blur-[100px]" />
                    <div className="pointer-events-none absolute right-[-2rem] bottom-[-3rem] h-36 w-36 rounded-full bg-[#42ffd2]/8 blur-[100px]" />
                    <div className="inline-flex rounded-full border border-white/10 bg-[#151d1b] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#c6b3ff] shadow-[0_0_20px_rgba(181,140,255,0.08)]">
                      AI Insight
                    </div>
                    <h3 className="mt-4 max-w-[16ch] text-[clamp(2rem,2.3vw,3rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-[#dce9e7]">
                      "Your recovery is optimal. Ready to push for a new Bench Press PR?"
                    </h3>
                    <p className="mt-5 flex items-center gap-2 text-[0.82rem] text-[#9caead]">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/8 bg-[#121b1a] text-[#cdb7ff]">
                        <Sparkles size={14} />
                      </span>
                      AI is analyzing your sleep and load data...
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        to="/ai-coach"
                        className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#b98cff] to-[#d8c2ff] px-5 text-[0.95rem] font-semibold text-[#301956] shadow-[0_12px_30px_rgba(145,76,255,0.28)] transition hover:translate-y-[-1px]"
                      >
                        Ask AI Coach
                      </Link>
                      <Link
                        to="/progress"
                        className="inline-flex h-11 items-center justify-center rounded-full border border-white/6 bg-white/[0.04] px-5 text-[0.92rem] font-semibold text-[#d8e4e1] transition hover:border-white/12 hover:bg-white/[0.07]"
                      >
                        View Recovery Stats
                      </Link>
                    </div>
                  </article>

                  <article className="rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#121815_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_28px_rgba(103,255,215,0.05)]">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[#b7bdc0]">Workouts</p>
                        <p className="mt-2 text-[2rem] font-semibold leading-none text-[#dce9e7]">24</p>
                        <p className="mt-1 text-[0.72rem] text-[#aab9b7]">+12% from last month</p>
                      </div>
                      <Dumbbell size={15} className="text-[#cdb7ff]" />
                    </div>
                  </article>

                  <article className="rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#121815_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_28px_rgba(255,183,103,0.05)]">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-[#b7bdc0]">Streak</p>
                        <p className="mt-2 text-[2rem] font-semibold leading-none text-[#dce9e7]">14 Days</p>
                        <p className="mt-1 text-[0.72rem] text-[#aab9b7]">Personal best is 21</p>
                      </div>
                      <Flame size={15} className="text-[#f3b257]" />
                    </div>
                  </article>
                </div>
              </section>

              <section className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] 2xl:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
                <article className="rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_28px_rgba(181,140,255,0.04)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Weight Trend</h3>
                      <p className="mt-1 text-[0.78rem] text-[#96a8a6]">Last 30 days active monitoring</p>
                    </div>
                    <button className="inline-flex items-center gap-2 rounded-lg bg-white/[0.04] px-3 py-2 text-[0.78rem] text-[#d5e1df]">
                      Monthly <ChevronDown size={13} className="text-[#9ba9a7]" />
                    </button>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <span className="rounded-md border border-[#cbb7ff]/20 bg-[#1a1628] px-2.5 py-1 text-[0.68rem] text-[#bda6ff]">
                      Current: 182.4 lbs
                    </span>
                  </div>

                  <div className="mt-3 h-[210px] rounded-[10px] bg-[linear-gradient(180deg,#0f1615_0%,#121a19_100%)] p-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                    <svg viewBox="0 0 384 220" className="h-full w-full overflow-visible">
                      <defs>
                        <linearGradient id="trendGlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#e1cbff" stopOpacity="0.95" />
                          <stop offset="100%" stopColor="#b998ff" stopOpacity="0.85" />
                        </linearGradient>
                        <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#d9c7ff" stopOpacity="0.24" />
                          <stop offset="100%" stopColor="#d9c7ff" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <polyline fill="url(#trendFill)" points={chartArea} />
                      <polyline
                        fill="none"
                        stroke="url(#trendGlow)"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        points={chartLine}
                        className="drop-shadow-[0_0_10px_rgba(195,169,255,0.6)]"
                      />
                    </svg>
                  </div>
                </article>

                <article className="rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_28px_rgba(255,255,255,0.03)]">
                  <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Weekly Progress</h3>
                  <p className="mt-1 text-[0.78rem] text-[#96a8a6]">Strength Training</p>

                  <div className="mt-5 space-y-5">
                    {progressRows.map((row) => (
                      <div key={row.label}>
                        <div className="flex items-center justify-between gap-4 text-[0.8rem]">
                          <span className="text-[#aebdbb]">{row.label}</span>
                          <span className={row.label === 'Mobility Drills' ? 'text-[#f7b85b]' : 'text-[#cdb7ff]'}>{row.value}</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-white/[0.06]">
                          <div className={`h-full rounded-full ${row.accent}`} style={{ width: `${row.percent}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="mt-3 grid gap-3 xl:grid-cols-[minmax(300px,0.52fr)_minmax(0,1fr)] 2xl:grid-cols-[minmax(320px,0.5fr)_minmax(0,1fr)]">
                <article className="rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_28px_rgba(181,140,255,0.04)]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Schedule</h3>
                    <button className="text-[#aebdbb]">...</button>
                  </div>

                  <div className="mt-4 space-y-4">
                    {scheduleItems.map((item) => (
                      <div key={item.title} className="flex gap-3">
                        <div className="flex h-11 w-11 shrink-0 flex-col items-center justify-center rounded-[8px] border border-white/8 bg-[#0f1716] text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#8f9f9d]">
                          <span>{item.day.split(' ')[0]}</span>
                          <span>{item.day.split(' ')[1]}</span>
                        </div>
                        <div className="min-w-0">
                          <p className={`text-[0.9rem] font-medium ${item.highlight ? 'text-[#edf3f2]' : 'text-[#a8b8b6]'}`}>{item.title}</p>
                          <p className="mt-1 text-[0.72rem] text-[#869693]">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_28px_rgba(68,255,207,0.04)]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Recent Activity</h3>
                    <Link to="/history" className="text-[0.8rem] text-[#cdb7ff]">View All</Link>
                  </div>

                  <div className="mt-5 space-y-6">
                    {activityItems.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div key={item.title} className="flex items-start justify-between gap-4">
                          <div className="flex min-w-0 items-start gap-3">
                            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/8 bg-[#171f22] text-[#cdb7ff]">
                              <Icon size={15} />
                            </span>
                            <div className="min-w-0">
                              <p className="text-[0.92rem] font-medium text-[#dce9e7]">{item.title}</p>
                              <p className="mt-1 text-[0.75rem] text-[#869693]">{item.subtitle}</p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-[0.8rem] font-semibold text-[#dbe9e6]">{item.meta}</p>
                            {item.note ? <p className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-[#f3bb56]">{item.note}</p> : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </article>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;