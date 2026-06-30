import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  CreditCard,
  Dumbbell,
  LayoutGrid,
  LogOut,
  Pencil,
  Shield,
  Sparkles,
  SquareActivity,
  UserCircle2,
} from 'lucide-react';
import heroMark from '../../assets/hero.png';

const profileRecord = {
  user_id: 'guest-user',
  full_name: 'Garrison Allen',
  email: 'guest@spotter.dev',
  fitness_goal: 'Strength Training',
  experience_level: 'Intermediate',
  height_cm: 182,
  weight_kg: 78.5,
  age: 28,
  member_since: 'Oct 2023',
  avatar_url: null,
  badges: ['Pro Athlete', 'AI Sync Active'],
  created_at: '2026-06-30T08:00:00Z',
};

const activityLevelsTable = [
  { level_id: 'act_low', label: 'Lightly Active', tdee_kcal: 2150 },
  { level_id: 'act_mod', label: 'Moderately Active', tdee_kcal: 2500 },
  { level_id: 'act_high', label: 'Very Active', tdee_kcal: 2850 },
];

const currentActivityLevel = activityLevelsTable[2];

const fitnessGoalDetail = {
  goal_id: 'goal_001',
  user_id: profileRecord.user_id,
  title: 'Lean Muscle Mass Optimization & Progressive Strength Training.',
  tags: ['Strength', 'Hypertrophy'],
  target_achievement_pct: 72,
};

const aiCoachTip = {
  log_id: 'log_4002',
  user_id: profileRecord.user_id,
  request_type: 'profile-insight',
  message:
    'Your recovery rate is 15% higher this week. Increasing intensity on tomorrow\u2019s leg session is recommended.',
};

const accountSettingsTable = [
  { setting_id: 'set_personal', label: 'Personal Info', icon: UserCircle2 },
  { setting_id: 'set_notifications', label: 'Notifications', icon: Bell },
  { setting_id: 'set_privacy', label: 'Privacy & Security', icon: Shield },
  { setting_id: 'set_subscriptions', label: 'Subscriptions', icon: CreditCard },
];

const sidebarItems = [
  { label: 'Dashboard', icon: LayoutGrid, to: '/dashboard' },
  { label: 'Workouts', icon: Dumbbell, to: '/workouts' },
  { label: 'Schedule', icon: CalendarDays, to: '/schedule' },
  { label: 'Progress', icon: SquareActivity, to: '/progress' },
  { label: 'AI Coach', icon: Sparkles, to: '/ai-coach' },
  { label: 'Profile', icon: UserCircle2, to: '/profile', active: true },
];

function getInitials(fullName) {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function Profile() {
  const [activityLevel, setActivityLevel] = useState(currentActivityLevel.level_id);
  const [showActivityMenu, setShowActivityMenu] = useState(false);

  const selectedActivity =
    activityLevelsTable.find((entry) => entry.level_id === activityLevel) ?? currentActivityLevel;

  function handleActivitySelect(levelId) {
    setActivityLevel(levelId);
    setShowActivityMenu(false);
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
            <div className="flex flex-1 items-center">
              <h2 className="text-[1.7rem] font-medium tracking-[-0.05em] text-[#dce9e7]">Profile</h2>
            </div>

            <div className="ml-auto flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/[0.04] text-[#dbe8e5] transition hover:border-white/15 hover:bg-white/[0.06]" aria-label="Notifications">
                <Bell size={16} />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/[0.04] text-[#dbe8e5] transition hover:border-white/15 hover:bg-white/[0.06]" aria-label="Settings">
                <Sparkles size={16} />
              </button>
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0d221f]">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#d8c7ff] to-[#8f5dff] text-[0.65rem] font-semibold text-white">
                  {getInitials(profileRecord.full_name)}
                </div>
              </div>
            </div>
          </header>

          <main className="relative z-10 flex-1 px-4 py-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="mx-auto max-w-[1720px]">
              <section className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6e58ff]/30 bg-[#14162a]/80 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d8d2ff] shadow-[0_0_20px_rgba(126,92,255,0.18)] backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#d8d2ff] shadow-[0_0_10px_rgba(216,210,255,0.8)]" />
                  Profile
                </div>
              </section>

              <section className="rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div className="flex items-center gap-5">
                    <div className="relative h-20 w-20 shrink-0">
                      <div className="h-20 w-20 overflow-hidden rounded-full border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(183,109,255,0.25),_transparent_60%),linear-gradient(180deg,#18121e_0%,#0d1216_100%)]">
                        {profileRecord.avatar_url ? (
                          <img src={profileRecord.avatar_url} alt={profileRecord.full_name} className="h-full w-full object-cover" />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-[1.3rem] font-semibold text-[#d8c2ff]">
                            {getInitials(profileRecord.full_name)}
                          </div>
                        )}
                      </div>
                      <span className="absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border border-[#021312] bg-gradient-to-br from-[#8f4aff] to-[#bf86ff] text-white shadow-[0_0_14px_rgba(145,76,255,0.5)]">
                        <Sparkles size={11} />
                      </span>
                    </div>

                    <div>
                      <h2 className="text-[clamp(1.5rem,2vw,1.9rem)] font-semibold tracking-[-0.04em] text-[#e8f1ef]">
                        {profileRecord.full_name}
                      </h2>
                      <p className="mt-1 text-[0.88rem] text-[#97aaa8]">
                        Premium Member since {profileRecord.member_since}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {profileRecord.badges.map((badge) => (
                          <span
                            key={badge}
                            className="rounded-full border border-[#cdb0ff]/20 bg-[#1a1628] px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#d9c8ff]"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 text-[0.86rem] font-medium text-[#deece9] transition hover:border-[#c29aff]/30 hover:bg-white/[0.07]"
                  >
                    <Pencil size={14} /> Edit Profile
                  </button>
                </div>
              </section>

              <section className="mt-4 grid gap-4 xl:grid-cols-[1fr_1fr_1fr_1.1fr]">
                <StatCard icon={Dumbbell} label="Height" value={profileRecord.height_cm} unit="cm" />
                <StatCard icon={SquareActivity} label="Weight" value={profileRecord.weight_kg} unit="kg" />
                <StatCard icon={CalendarDays} label="Age" value={profileRecord.age} unit="yrs" />

                <article className="rounded-[16px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4">
                  <h3 className="text-[0.95rem] font-medium text-[#dbe8e6]">Activity Level</h3>

                  <div className="relative mt-3">
                    <button
                      type="button"
                      onClick={() => setShowActivityMenu((open) => !open)}
                      className="flex h-11 w-full items-center justify-between rounded-[12px] border border-white/8 bg-[#0f1615] px-4 text-[0.88rem] text-[#e2eceb]"
                    >
                      {selectedActivity.label}
                      <Check size={15} className="text-[#42ffd2]" />
                    </button>

                    {showActivityMenu && (
                      <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-10 overflow-hidden rounded-[12px] border border-white/8 bg-[#0b1310] shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
                        {activityLevelsTable.map((entry) => (
                          <button
                            key={entry.level_id}
                            type="button"
                            onClick={() => handleActivitySelect(entry.level_id)}
                            className={`flex w-full items-center justify-between px-4 py-3 text-left text-[0.86rem] transition hover:bg-white/[0.05] ${entry.level_id === activityLevel ? 'text-[#d9c8ff]' : 'text-[#d2dedc]'}`}
                          >
                            {entry.label}
                            {entry.level_id === activityLevel && <Check size={14} className="text-[#42ffd2]" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <p className="mt-3 text-[0.78rem] leading-6 text-[#97aaa8]">
                    Training 5-6 days per week with high metabolic demand. Your TDEE is approximately{' '}
                    {selectedActivity.tdee_kcal.toLocaleString()} kcal.
                  </p>
                </article>
              </section>

              <section className="mt-4 grid gap-4 xl:grid-cols-[1.4fr_1fr] xl:items-start">
                <article className="rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <Sparkles size={15} className="text-[#cdb7ff]" />
                        <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Fitness Goal</h3>
                      </div>
                      <p className="mt-3 max-w-[560px] text-[0.9rem] leading-7 text-[#cdd9d7]">
                        {fitnessGoalDetail.title}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {fitnessGoalDetail.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#dbe8e5]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="w-full shrink-0 rounded-[14px] border border-white/7 bg-[#0f1615] p-3 sm:w-[220px]">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">
                        Target Achievement
                      </p>
                      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#8f4aff] via-[#9b58ff] to-[#bf86ff]"
                          style={{ width: `${fitnessGoalDetail.target_achievement_pct}%` }}
                        />
                      </div>
                      <p className="mt-2 text-right text-[0.92rem] font-semibold text-[#e8f1ef]">
                        {fitnessGoalDetail.target_achievement_pct}%
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[14px] border border-[#cdb0ff]/15 bg-[#12101c] p-4">
                    <div className="flex items-center gap-2 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#bda6ff]">
                      <Sparkles size={12} /> AI Digital Spotter Tip
                    </div>
                    <p className="mt-2 text-[0.88rem] italic leading-7 text-[#d8e2e0]">
                      &ldquo;{aiCoachTip.message}&rdquo;
                    </p>
                  </div>
                </article>

                <article className="rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                  <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Account Settings</h3>

                  <div className="mt-3 divide-y divide-white/6 overflow-hidden rounded-[14px] border border-white/6">
                    {accountSettingsTable.map(({ setting_id, label, icon: Icon }) => (
                      <button
                        key={setting_id}
                        type="button"
                        className="flex w-full items-center justify-between bg-[#0f1615]/90 px-4 py-3.5 text-left transition hover:bg-white/[0.04]"
                      >
                        <span className="flex items-center gap-3 text-[0.9rem] text-[#dbe8e6]">
                          <Icon size={16} className="text-[#97a7a5]" />
                          {label}
                        </span>
                        <ChevronRight size={15} className="text-[#728784]" />
                      </button>
                    ))}

                    <button
                      type="button"
                      className="flex w-full items-center gap-3 bg-[#0f1615]/90 px-4 py-3.5 text-left text-[0.9rem] font-medium text-[#ff8a7a] transition hover:bg-[#2a1410]"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
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

function StatCard({ icon: Icon, label, value, unit }) {
  return (
    <article className="rounded-[16px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 text-center shadow-[0_0_28px_rgba(185,140,255,0.06)]">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] text-[#cdb7ff]">
        <Icon size={16} />
      </div>
      <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">{label}</p>
      <p className="mt-1 text-[1.6rem] font-semibold leading-none text-[#e8f1ef]">
        {value} <span className="text-[0.85rem] font-medium text-[#97aaa8]">{unit}</span>
      </p>
    </article>
  );
}

export default Profile;