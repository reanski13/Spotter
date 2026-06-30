import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Bell,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Droplets,
  LayoutGrid,
  Moon,
  Plus,
  Search,
  Sparkles,
  SquareActivity,
  UserCircle2,
  Wind,
  X,
} from 'lucide-react';
import heroMark from '../../assets/hero.png';

const CURRENT_YEAR = 2026;
const CURRENT_MONTH_INDEX = 5;
const TODAY_ISO = '2026-06-30';

const sidebarItems = [
  { label: 'Dashboard', icon: LayoutGrid, to: '/dashboard' },
  { label: 'Workouts', icon: Dumbbell, to: '/workouts' },
  { label: 'Schedule', icon: CalendarDays, to: '/schedule', active: true },
  { label: 'Progress', icon: SquareActivity, to: '/progress' },
  { label: 'AI Coach', icon: Sparkles, to: '/ai-coach' },
  { label: 'Profile', icon: UserCircle2, to: '/profile' },
];

const profileRecord = {
  user_id: 'guest-user',
  full_name: 'Guest Athlete',
  fitness_goal: 'Strength Training',
};

const scheduleEventsTable = [
  { schedule_id: 'sch_6001', date: '2026-06-01', workout_title: 'Full Body Reset', category: 'strength', status: 'completed' },
  { schedule_id: 'sch_6003', date: '2026-06-03', workout_title: 'Cardio Flow', category: 'cardio', status: 'completed' },
  { schedule_id: 'sch_6005', date: '2026-06-08', workout_title: 'Upper Body', category: 'rest', status: 'completed' },
  { schedule_id: 'sch_6010', date: '2026-06-10', workout_title: 'Rest Day', category: 'recovery', status: 'completed' },
  { schedule_id: 'sch_6015', date: '2026-06-15', workout_title: 'Mobility Flow', category: 'recovery', status: 'completed' },
  { schedule_id: 'sch_6018', date: '2026-06-18', workout_title: 'Leg Day', category: 'strength', status: 'completed' },
  { schedule_id: 'sch_6022', date: '2026-06-22', workout_title: 'Leg Hypertrophy', category: 'strength', status: 'completed' },
  { schedule_id: 'sch_6024', date: '2026-06-24', workout_title: 'Heavy Push Day', category: 'strength', status: 'completed' },
  { schedule_id: 'sch_6029', date: '2026-06-29', workout_title: 'Cardio Blast', category: 'cardio', status: 'completed' },
  { schedule_id: 'sch_6030a', date: '2026-06-30', workout_title: 'Heavy Legs', time: '07:00 AM', category: 'strength', status: 'today' },
  { schedule_id: 'sch_6030b', date: '2026-06-30', workout_title: 'Abs Core', time: '06:00 PM', category: 'recovery', status: 'today' },
  { schedule_id: 'sch_7001', date: '2026-07-01', workout_title: 'Pull Day - Strength', time: '07:00 AM', category: 'strength', status: 'planned' },
  { schedule_id: 'sch_7003', date: '2026-07-03', workout_title: 'Active Recovery', time: '06:30 PM', category: 'recovery', status: 'planned' },
  { schedule_id: 'sch_7005', date: '2026-07-05', workout_title: 'Power Sprints', time: '08:00 AM', category: 'cardio', status: 'planned' },
];

const remindersTable = [
  { reminder_id: 'rem_001', title: 'Hydration Check', detail: "Don't forget 500ml pre-workout", icon: Droplets, status: null },
  { reminder_id: 'rem_002', title: 'Sleep Target', detail: '8h needed for leg recovery', icon: Moon, status: 'Active' },
];

const categoryStyles = {
  strength: {
    chip: 'bg-[#241e34] text-[#c6b3ff] border border-[#cdb0ff]/15',
    icon: 'bg-gradient-to-br from-[#8f4aff] to-[#bf86ff] text-white',
  },
  cardio: {
    chip: 'bg-[#15292a] text-[#7fe9d8] border border-[#44ffcf]/15',
    icon: 'bg-gradient-to-br from-[#1f8f7c] to-[#44ffcf] text-[#06231e]',
  },
  recovery: {
    chip: 'bg-[#2b2418] text-[#f7b85b] border border-[#f7b85b]/15',
    icon: 'bg-gradient-to-br from-[#d98a3d] to-[#f7c873] text-[#241405]',
  },
  rest: {
    chip: 'bg-white/[0.05] text-[#aab9b7] border border-white/10',
    icon: 'bg-white/10 text-[#cfd9d7]',
  },
};

const categoryIcons = {
  strength: Dumbbell,
  cardio: Activity,
  recovery: Wind,
  rest: SquareActivity,
};

const weekdayLabels = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

function toIsoDate(year, monthIndex, day) {
  const monthString = String(monthIndex + 1).padStart(2, '0');
  const dayString = String(day).padStart(2, '0');
  return `${year}-${monthString}-${dayString}`;
}

function buildCalendarCells(year, monthIndex) {
  const firstOfMonth = new Date(year, monthIndex, 1);
  const startOffset = (firstOfMonth.getDay() + 6) % 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, monthIndex, 0).getDate();

  const cells = [];

  for (let index = 0; index < startOffset; index += 1) {
    const day = daysInPrevMonth - startOffset + 1 + index;
    cells.push({ day, inMonth: false, iso: null });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({ day, inMonth: true, iso: toIsoDate(year, monthIndex, day) });
  }

  let overflowDay = 1;
  while (cells.length % 7 !== 0) {
    cells.push({ day: overflowDay, inMonth: false, iso: null });
    overflowDay += 1;
  }

  const weeks = [];
  for (let index = 0; index < cells.length; index += 7) {
    weeks.push(cells.slice(index, index + 7));
  }

  return weeks;
}

function groupEventsByDate(events) {
  const grouped = {};

  for (let index = 0; index < events.length; index += 1) {
    const event = events[index];
    grouped[event.date] = grouped[event.date] ? [...grouped[event.date], event] : [event];
  }

  return grouped;
}

function getUpcomingEvents(events, todayIso) {
  const upcoming = [];

  for (let index = 0; index < events.length; index += 1) {
    const event = events[index];
    if (event.date > todayIso) {
      upcoming.push(event);
    }
  }

  upcoming.sort((a, b) => a.date.localeCompare(b.date));
  return upcoming.slice(0, 3);
}

function formatRelativeLabel(iso, todayIso) {
  const dayAfterToday = new Date(todayIso);
  dayAfterToday.setDate(dayAfterToday.getDate() + 1);
  const tomorrowIso = toIsoDate(dayAfterToday.getFullYear(), dayAfterToday.getMonth(), dayAfterToday.getDate());

  if (iso === tomorrowIso) {
    return 'Tomorrow';
  }

  const date = new Date(iso);
  return date.toLocaleDateString('en-US', { weekday: 'long' });
}

const monthLabel = new Date(CURRENT_YEAR, CURRENT_MONTH_INDEX, 1).toLocaleDateString('en-US', {
  month: 'long',
  year: 'numeric',
});

function WorkoutSchedule() {
  const [viewMode, setViewMode] = useState('Month');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: '', date: TODAY_ISO, time: '', category: 'strength' });

  const calendarWeeks = useMemo(() => buildCalendarCells(CURRENT_YEAR, CURRENT_MONTH_INDEX), []);
  const eventsByDate = useMemo(() => groupEventsByDate(scheduleEventsTable), []);
  const upcomingEvents = useMemo(() => getUpcomingEvents(scheduleEventsTable, TODAY_ISO), []);
  const todaysEvents = eventsByDate[TODAY_ISO] ?? [];

  function handleDayClick(cell) {
    if (!cell.inMonth) {
      return;
    }
    setSelectedDay(cell);
  }

  function handleAddSchedule() {
    setShowAddModal(false);
    setNewEvent({ title: '', date: TODAY_ISO, time: '', category: 'strength' });
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#021312] text-[#e4ecea]">
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
                placeholder="Search routines..."
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
                <Sparkles size={16} />
              </button>
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0d221f]">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#d8c7ff] to-[#8f5dff] text-[0.65rem] font-semibold text-white">
                  GA
                </div>
              </div>
            </div>
          </header>

          <main className="relative z-10 flex-1 px-4 py-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="mx-auto grid max-w-[1720px] gap-4 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
              <div className="min-w-0">
                <section className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="text-[clamp(1.8rem,2vw,2.35rem)] font-semibold tracking-[-0.05em] text-[#dce9e7]">{monthLabel}</h2>
                    <p className="mt-2 text-[0.9rem] text-[#97aaa8]">{todaysEvents.length} Workouts scheduled for today</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.04] p-1">
                      {['Month', 'Week'].map((mode) => (
                        <button
                          key={mode}
                          type="button"
                          onClick={() => setViewMode(mode)}
                          className={`rounded-full px-4 py-2 text-[0.82rem] font-medium transition ${viewMode === mode ? 'bg-white/[0.08] text-[#e2eceb] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]' : 'text-[#8ea09d] hover:text-[#dbe8e5]'}`}
                        >
                          {mode}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowAddModal(true)}
                      className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#8f4aff] via-[#9b58ff] to-[#bf86ff] px-5 text-[0.9rem] font-semibold text-white shadow-[0_12px_34px_rgba(145,76,255,0.28)] transition hover:translate-y-[-1px]"
                    >
                      <Plus size={16} /> Add Schedule
                    </button>
                  </div>
                </section>

                <section className="mt-4 overflow-hidden rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                  <div className="grid grid-cols-7 border-b border-white/6 bg-white/[0.03]">
                    {weekdayLabels.map((label) => (
                      <div key={label} className="px-2 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">
                        {label}
                      </div>
                    ))}
                  </div>

                  <div className="divide-y divide-white/6">
                    {calendarWeeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="grid grid-cols-7 divide-x divide-white/6">
                        {week.map((cell, cellIndex) => {
                          const isToday = cell.iso === TODAY_ISO;
                          const dayEvents = cell.iso ? eventsByDate[cell.iso] ?? [] : [];

                          return (
                            <button
                              key={cellIndex}
                              type="button"
                              onClick={() => handleDayClick(cell)}
                              className={`flex min-h-[92px] flex-col gap-1 px-2 py-2 text-left transition ${cell.inMonth ? 'bg-transparent hover:bg-white/[0.03]' : 'bg-black/15 text-[#566663]'} ${isToday ? 'ring-1 ring-inset ring-[#bda6ff]/50' : ''}`}
                            >
                              <div className="flex items-center justify-between">
                                <span className={`text-[0.82rem] ${cell.inMonth ? 'text-[#cfdbd9]' : 'text-[#4b5957]'} ${isToday ? 'font-semibold text-[#efe9ff]' : ''}`}>
                                  {cell.day}
                                </span>
                                {isToday && (
                                  <span className="rounded-full bg-gradient-to-r from-[#8f4aff] to-[#bf86ff] px-2 py-0.5 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-white">
                                    Today
                                  </span>
                                )}
                              </div>

                              <div className="flex flex-col gap-1">
                                {dayEvents.slice(0, 2).map((event) => {
                                  const style = categoryStyles[event.category] ?? categoryStyles.rest;
                                  return (
                                    <span key={event.schedule_id} className={`truncate rounded-full px-2 py-0.5 text-[0.62rem] font-medium ${style.chip}`}>
                                      {event.workout_title}
                                    </span>
                                  );
                                })}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mt-4 rounded-[18px] border border-[#6e58ff]/25 bg-[linear-gradient(135deg,#15102a_0%,#0f1a18_60%)] p-4 shadow-[0_0_40px_rgba(126,92,255,0.1)]">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8f4aff] to-[#bf86ff] text-white shadow-[0_0_24px_rgba(181,140,255,0.4)]">
                      <Sparkles size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[1rem] font-medium text-[#e2eceb]">AI Schedule Optimization</h3>
                        <span className="rounded-full border border-[#6e58ff]/30 bg-[#1a1530] px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-[#d8d2ff]">
                          Active Analysis
                        </span>
                      </div>
                      <p className="mt-2 max-w-[640px] text-[0.85rem] leading-6 text-[#9caead]">
                        Based on your muscle fatigue sensors from yesterday's "Heavy Legs" session, I recommend swapping tomorrow's "Cardio Blast" with "Active Recovery Yoga" to maximize muscle fiber repair.
                      </p>
                      <div className="mt-3 flex flex-wrap items-center gap-4">
                        <button type="button" className="inline-flex h-9 items-center gap-2 rounded-full bg-gradient-to-r from-[#8f4aff] to-[#bf86ff] px-4 text-[0.8rem] font-semibold text-white">
                          <Check size={14} /> Accept Change
                        </button>
                        <button type="button" className="text-[0.8rem] font-medium text-[#9caead] underline-offset-4 hover:text-[#dbe8e5] hover:underline">
                          View Analytics
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              <aside className="grid gap-4">
                <article className="rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                  <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Upcoming</h3>

                  <div className="mt-3 grid gap-2">
                    {upcomingEvents.map((event) => {
                      const Icon = categoryIcons[event.category] ?? Dumbbell;
                      const style = categoryStyles[event.category] ?? categoryStyles.rest;

                      return (
                        <div key={event.schedule_id} className="flex items-center gap-3 rounded-[14px] border border-white/6 bg-white/[0.03] p-3">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${style.icon}`}>
                            <Icon size={16} />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-[0.9rem] font-medium text-[#e2eceb]">{event.workout_title}</p>
                            <p className="mt-0.5 text-[0.74rem] text-[#8ea09d]">
                              {formatRelativeLabel(event.date, TODAY_ISO)} • {event.time}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <Link
                    to="/workouts"
                    className="mt-3 flex h-10 items-center justify-center gap-2 rounded-full border border-white/8 bg-white/[0.04] text-[0.85rem] font-medium text-[#deece9] transition hover:border-[#c29aff]/30 hover:bg-white/[0.07]"
                  >
                    View All Workouts <ArrowRight size={14} />
                  </Link>
                </article>

                <article className="rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                  <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Reminders</h3>

                  <div className="mt-3 grid gap-2">
                    {remindersTable.map((reminder) => {
                      const Icon = reminder.icon;
                      return (
                        <div key={reminder.reminder_id} className="flex items-center gap-3 rounded-[14px] border border-white/6 bg-white/[0.03] p-3">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1a2226] text-[#cdb7ff]">
                            <Icon size={15} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[0.86rem] font-medium text-[#e2eceb]">{reminder.title}</p>
                            <p className="mt-0.5 truncate text-[0.74rem] text-[#8ea09d]">{reminder.detail}</p>
                          </div>
                          {reminder.status && (
                            <span className="shrink-0 rounded-full border border-[#44ffcf]/20 bg-[#0f2620] px-2 py-0.5 text-[0.62rem] font-medium text-[#7fe9d8]">
                              {reminder.status}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-[0.74rem] text-[#8ea09d]">
                      <span>Weekly Goal Progress</span>
                      <span className="text-[#dbe8e6]">4/5 Days</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#8f4aff] to-[#bf86ff]" />
                    </div>
                  </div>
                </article>
              </aside>
            </div>
          </main>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[18px] border border-white/8 bg-[#071714] p-5 shadow-[0_0_60px_rgba(181,140,255,0.16)]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[1.15rem] font-semibold text-[#e2eceb]">Add Schedule</h3>
                <p className="mt-1 text-[0.8rem] text-[#95a6a4]">Plan a workout for an upcoming day.</p>
              </div>
              <button type="button" onClick={() => setShowAddModal(false)} className="text-[#97a7a5]">
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 grid gap-3">
              <input
                type="text"
                value={newEvent.title}
                onChange={(event) => setNewEvent((current) => ({ ...current, title: event.target.value }))}
                placeholder="Workout title"
                className="h-11 rounded-[12px] border border-white/8 bg-white/[0.03] px-4 text-[#e2eceb] outline-none placeholder:text-[#758684]"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(event) => setNewEvent((current) => ({ ...current, date: event.target.value }))}
                  className="h-11 rounded-[12px] border border-white/8 bg-white/[0.03] px-4 text-[#e2eceb] outline-none"
                />
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(event) => setNewEvent((current) => ({ ...current, time: event.target.value }))}
                  className="h-11 rounded-[12px] border border-white/8 bg-white/[0.03] px-4 text-[#e2eceb] outline-none"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.keys(categoryStyles).map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setNewEvent((current) => ({ ...current, category }))}
                    className={`rounded-full border px-3 py-2 text-[0.78rem] capitalize transition ${newEvent.category === category ? 'border-[#cdb0ff]/35 bg-[#1b1531] text-[#e6dbff]' : 'border-white/7 bg-white/[0.03] text-[#d7e1de]'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="h-11 rounded-full border border-white/8 px-4 text-[0.9rem] text-[#dbe8e6]">
                  Cancel
                </button>
                <button type="button" onClick={handleAddSchedule} className="h-11 rounded-full bg-gradient-to-r from-[#8f4aff] to-[#bf86ff] px-5 text-[0.9rem] font-semibold text-white">
                  Save Schedule
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedDay && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-[18px] border border-white/8 bg-[#071714] p-5 shadow-[0_0_60px_rgba(181,140,255,0.18)]">
            <button
              type="button"
              onClick={() => setSelectedDay(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#dbe8e5]"
              aria-label="Close day details"
            >
              <X size={16} />
            </button>

            <div className="inline-flex rounded-full border border-[#6e58ff]/30 bg-[#14162a]/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d8d2ff]">
              Day Detail
            </div>
            <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#e2eceb]">
              {new Date(selectedDay.iso).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </h3>

            <div className="mt-4 grid gap-2">
              {(eventsByDate[selectedDay.iso] ?? []).length === 0 && (
                <p className="text-[0.85rem] text-[#8ea09d]">No workouts scheduled for this day.</p>
              )}
              {(eventsByDate[selectedDay.iso] ?? []).map((event) => {
                const Icon = categoryIcons[event.category] ?? Dumbbell;
                const style = categoryStyles[event.category] ?? categoryStyles.rest;

                return (
                  <div key={event.schedule_id} className="flex items-center gap-3 rounded-[14px] border border-white/6 bg-white/[0.03] p-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] ${style.icon}`}>
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[0.9rem] font-medium text-[#e2eceb]">{event.workout_title}</p>
                      <p className="mt-0.5 text-[0.74rem] text-[#8ea09d]">{event.time ?? 'All day'}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setShowAddModal(true)}
              className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/8 bg-white/[0.04] text-[0.9rem] font-medium text-[#deece9] transition hover:border-[#c29aff]/30 hover:bg-white/[0.07]"
            >
              <Plus size={16} /> Add Workout to This Day
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkoutSchedule;