import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Bell,
  CalendarDays,
  ChevronDown,
  Dumbbell,
  Flame,
  LayoutGrid,
  ListChecks,
  Plus,
  Save,
  Search,
  Share2,
  Sparkles,
  SquareActivity,
  TimerReset,
  UserCircle2,
  X,
} from 'lucide-react';
import heroMark from '../../assets/hero.png';

const profileRecord = {
  user_id: 'guest-user',
  full_name: 'Guest Athlete',
  email: 'guest@spotter.dev',
  fitness_goal: 'Strength Training',
  experience_level: 'Intermediate',
  height_cm: 178,
  weight_kg: 82,
  created_at: '2026-06-30T08:00:00Z',
};

const workoutsTable = [
  {
    workout_id: 'wrk_1001',
    user_id: profileRecord.user_id,
    workout_date: '2026-06-30',
    workout_title: 'Push Day Session',
    notes: 'Focus on controlled eccentric tempo and chest engagement.',
    created_at: '2026-06-30T09:00:00Z',
  },
  {
    workout_id: 'wrk_1002',
    user_id: profileRecord.user_id,
    workout_date: '2026-06-24',
    workout_title: 'Heavy Push Day',
    notes: 'Bench strength emphasis with AI review.',
    created_at: '2026-06-24T09:00:00Z',
  },
  {
    workout_id: 'wrk_1003',
    user_id: profileRecord.user_id,
    workout_date: '2026-06-22',
    workout_title: 'Leg Hypertrophy',
    notes: 'Volume work and recovery tracking.',
    created_at: '2026-06-22T09:00:00Z',
  },
];

const exercisesTable = [
  { exercise_id: 'ex_0001', exercise_name: 'Barbell Bench Press', muscle_group: 'Chest', equipment_needed: 'Barbell', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0002', exercise_name: 'Incline Dumbbell Press', muscle_group: 'Chest', equipment_needed: 'Dumbbells', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0003', exercise_name: 'Flat Machine Press', muscle_group: 'Chest', equipment_needed: 'Machine', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0004', exercise_name: 'Cable Crossovers', muscle_group: 'Chest', equipment_needed: 'Cable', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0005', exercise_name: 'Pec Deck Flyes', muscle_group: 'Chest', equipment_needed: 'Machine', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0006', exercise_name: 'Dumbbell Pullovers', muscle_group: 'Chest', equipment_needed: 'Dumbbells', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0007', exercise_name: 'Barbell Rows', muscle_group: 'Back', equipment_needed: 'Barbell', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0008', exercise_name: 'Lat Pulldowns', muscle_group: 'Back', equipment_needed: 'Cable', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0009', exercise_name: 'Pull-ups / Chin-ups', muscle_group: 'Back', equipment_needed: 'Bodyweight', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0010', exercise_name: 'Seated Cable Rows', muscle_group: 'Back', equipment_needed: 'Cable', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0011', exercise_name: 'Single-Arm Dumbbell Rows', muscle_group: 'Back', equipment_needed: 'Dumbbells', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0012', exercise_name: 'Straight-Arm Lat Pulldowns', muscle_group: 'Back', equipment_needed: 'Cable', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0013', exercise_name: 'Barbell Back Squats', muscle_group: 'Legs', equipment_needed: 'Barbell', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0014', exercise_name: 'Barbell Front Squats', muscle_group: 'Legs', equipment_needed: 'Barbell', difficulty_level: 'Advanced', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0015', exercise_name: 'Leg Press', muscle_group: 'Legs', equipment_needed: 'Machine', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0016', exercise_name: 'Leg Extensions', muscle_group: 'Legs', equipment_needed: 'Machine', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0017', exercise_name: 'Seated Leg Curls', muscle_group: 'Legs', equipment_needed: 'Machine', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0018', exercise_name: 'Lying Leg Curls', muscle_group: 'Legs', equipment_needed: 'Machine', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0019', exercise_name: 'Bulgarian Split Squats', muscle_group: 'Legs', equipment_needed: 'Dumbbells', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0020', exercise_name: 'Standing Calf Raises', muscle_group: 'Legs', equipment_needed: 'Machine', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0021', exercise_name: 'Seated Calf Raises', muscle_group: 'Legs', equipment_needed: 'Machine', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0022', exercise_name: 'Overhead Press', muscle_group: 'Shoulders', equipment_needed: 'Barbell or Dumbbells', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0023', exercise_name: 'Lateral Raises', muscle_group: 'Shoulders', equipment_needed: 'Dumbbells or Cable', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0024', exercise_name: 'Front Raises', muscle_group: 'Shoulders', equipment_needed: 'Dumbbells', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0025', exercise_name: 'Reverse Pec Deck', muscle_group: 'Shoulders', equipment_needed: 'Machine', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0026', exercise_name: 'Face Pulls', muscle_group: 'Shoulders', equipment_needed: 'Cable', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0027', exercise_name: 'Barbell Bicep Curls', muscle_group: 'Arms', equipment_needed: 'Barbell', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0028', exercise_name: 'Dumbbell Hammer Curls', muscle_group: 'Arms', equipment_needed: 'Dumbbells', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0029', exercise_name: 'Preacher Curls', muscle_group: 'Arms', equipment_needed: 'Machine or EZ Bar', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0030', exercise_name: 'Tricep Rope Pushdowns', muscle_group: 'Arms', equipment_needed: 'Cable', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0031', exercise_name: 'Skull Crushers', muscle_group: 'Arms', equipment_needed: 'EZ Bar', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0032', exercise_name: 'Overhead Tricep Extensions', muscle_group: 'Arms', equipment_needed: 'Dumbbells or Cable', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0033', exercise_name: 'Tricep Dips', muscle_group: 'Arms', equipment_needed: 'Bodyweight', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0034', exercise_name: 'Cable Crunches', muscle_group: 'Core', equipment_needed: 'Cable', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0035', exercise_name: 'Hanging Leg Raises', muscle_group: 'Core', equipment_needed: 'Bodyweight', difficulty_level: 'Intermediate', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0036', exercise_name: 'Planks', muscle_group: 'Core', equipment_needed: 'Bodyweight', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
  { exercise_id: 'ex_0037', exercise_name: 'Russian Twists', muscle_group: 'Core', equipment_needed: 'Bodyweight or Dumbbell', difficulty_level: 'Beginner', created_at: '2026-01-15T09:00:00Z' },
];

const workoutExercisesTable = [
  {
    workout_exercise_id: 'wex_9001',
    workout_id: 'wrk_1001',
    exercise_id: 'ex_0002',
    sets: 4,
    reps: '10-12',
    weight_used: 85,
    created_at: '2026-06-30T09:05:00Z',
  },
  {
    workout_exercise_id: 'wex_9002',
    workout_id: 'wrk_1001',
    exercise_id: 'ex_0003',
    sets: 3,
    reps: '15',
    weight_used: 50,
    created_at: '2026-06-30T09:10:00Z',
  },
  {
    workout_exercise_id: 'wex_9003',
    workout_id: 'wrk_1002',
    exercise_id: 'ex_0001',
    sets: 5,
    reps: '5',
    weight_used: 225,
    created_at: '2026-06-24T09:05:00Z',
  },
];

const progressRecordsTable = [
  {
    progress_id: 'prg_3001',
    user_id: profileRecord.user_id,
    record_date: '2026-06-30',
    body_weight: 182.4,
    bmi_value: 25.9,
    notes: 'Strength is up; recovery is stable.',
    created_at: '2026-06-30T08:30:00Z',
  },
  {
    progress_id: 'prg_3002',
    user_id: profileRecord.user_id,
    record_date: '2026-06-24',
    body_weight: 183.1,
    bmi_value: 26.0,
    notes: 'Small weight fluctuation after deload.',
    created_at: '2026-06-24T08:30:00Z',
  },
];

const workoutSchedulesTable = [
  {
    schedule_id: 'sch_7001',
    user_id: profileRecord.user_id,
    scheduled_date: '2026-07-01',
    workout_title: 'Pull Day - Strength',
    status: 'planned',
    created_at: '2026-06-30T09:45:00Z',
  },
  {
    schedule_id: 'sch_7002',
    user_id: profileRecord.user_id,
    scheduled_date: '2026-07-03',
    workout_title: 'Active Recovery',
    status: 'planned',
    created_at: '2026-06-30T09:45:00Z',
  },
];

const aiLogsTable = [
  {
    log_id: 'log_4001',
    user_id: profileRecord.user_id,
    request_type: 'workout-coach',
    prompt_summary: 'Ask about push day readiness and bench PR',
    response_status: 'success',
    created_at: '2026-06-30T09:20:00Z',
  },
];

const sidebarItems = [
  { label: 'Dashboard', icon: LayoutGrid, to: '/dashboard' },
  { label: 'Workouts', icon: Dumbbell, to: '/workouts', active: true },
  { label: 'Schedule', icon: CalendarDays, to: '/schedule' },
  { label: 'Progress', icon: SquareActivity, to: '/progress' },
  { label: 'AI Coach', icon: Sparkles, to: '/ai-coach' },
  { label: 'Profile', icon: UserCircle2, to: '/profile' },
];

const personalRecords = [
  { label: 'Bench Press', value: '225 lbs', meta: '+15% from last month', icon: TimerReset },
  { label: 'Workout Streak', value: '14 Days', meta: 'Top 5% of users', icon: Flame },
  { label: 'Total Volume', value: '18,400 lbs', meta: 'High intensity session', icon: Sparkles },
];

const workoutRows = workoutsTable;

const defaultGeneratorConfig = {
  goal: 'Muscle Gain',
  experience: 'Intermediate',
  equipment: ['Full Gym', 'Dumbbells'],
};

const exerciseLibrary = exercisesTable;

function buildGeneratedPlan(config) {
  const planExercises = {
    'Muscle Gain': ['Barbell Back Squats', 'Incline Dumbbell Press', 'Lateral Raises', 'Cable Crunches'],
    'Weight Loss': ['Goblet Squats', 'Walking Lunges', 'Face Pulls', 'Planks'],
    Endurance: ['Front Squats', 'Pull-ups / Chin-ups', 'Rowing Sprints', 'Russian Twists'],
  };

  const planByGoal = {
    'Muscle Gain': {
      name: 'Viper Protocol',
      subtitle: 'High-output lower body focus for strength and size.',
      main: {
        title: 'Barbell Back Squats',
        target: 'Quadriceps, Glutes',
        sets: '4',
        reps: '8-12',
        rest: '90s',
        note: 'Keep chest up and drive through your heels.',
      },
      secondary: planExercises['Muscle Gain'].map((title, index) => ({ title, meta: index === 0 ? '4 Sets x 10 Reps' : index === 1 ? '3 Sets x 12 Reps' : index === 2 ? '3 Sets x 15 Reps' : '3 Sets x 20 Reps', rest: index === 0 ? '90s' : index === 1 ? '60s' : index === 2 ? '45s' : '30s' })),
      forecast: { percent: '85%', label: 'Intensity', summary: 'This session totals 4,200kg of volume. Predicted recovery time is 48 hours.' },
    },
    'Weight Loss': {
      name: 'Lean Circuit Flow',
      subtitle: 'Higher tempo conditioning with controlled strength work.',
      main: {
        title: 'Goblet Squats',
        target: 'Quads, Core',
        sets: '4',
        reps: '12-15',
        rest: '60s',
        note: 'Stay tall and keep tension through each rep.',
      },
      secondary: planExercises['Weight Loss'].map((title, index) => ({ title, meta: index === 0 ? '4 Sets x 12 Reps' : index === 1 ? '3 Sets x 16 Reps' : index === 2 ? '3 Sets x 15 Reps' : '3 Sets x 45s', rest: index === 0 ? '60s' : index === 1 ? '45s' : index === 2 ? '45s' : '30s' })),
      forecast: { percent: '78%', label: 'Intensity', summary: 'This session totals 3,100kg of volume. Predicted recovery time is 36 hours.' },
    },
    Endurance: {
      name: 'Velocity Engine',
      subtitle: 'Endurance-biased hybrid plan with movement quality emphasis.',
      main: {
        title: 'Front Squats',
        target: 'Quads, Upper Back',
        sets: '5',
        reps: '6-8',
        rest: '75s',
        note: 'Smooth tempo with crisp rack position.',
      },
      secondary: planExercises.Endurance.map((title, index) => ({ title, meta: index === 0 ? '5 Sets x 6 Reps' : index === 1 ? '4 Sets x 8 Reps' : index === 2 ? '5 Rounds' : '3 Sets x 20 Reps', rest: index === 0 ? '75s' : index === 1 ? '60s' : index === 2 ? '40s' : '30s' })),
      forecast: { percent: '81%', label: 'Intensity', summary: 'This session totals 3,650kg of volume. Predicted recovery time is 42 hours.' },
    },
  };

  const selectedPlan = planByGoal[config.goal] ?? planByGoal['Muscle Gain'];
  return { ...selectedPlan, config, exerciseCount: selectedPlan.secondary.length };
}

function filterExercises(query) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) {
    return exerciseLibrary;
  }

  const matches = [];

  for (let index = 0; index < exerciseLibrary.length; index += 1) {
    const exercise = exerciseLibrary[index];
    let matched = false;
    const fields = [exercise.exercise_name, exercise.muscle_group, exercise.equipment_needed, exercise.difficulty_level];

    for (let fieldIndex = 0; fieldIndex < fields.length; fieldIndex += 1) {
      const field = fields[fieldIndex];
      matched = field.toLowerCase().includes(normalizedQuery) ? true : matched;
    }

    matched ? matches.push(exercise) : null;
  }

  return matches;
}

function WorkoutTracker({ mode = 'active' }) {
  const isHistoryView = mode === 'history';
  const [searchQuery, setSearchQuery] = useState('');
  const [showCustomExerciseModal, setShowCustomExerciseModal] = useState(false);
  const [showGeneratorModal, setShowGeneratorModal] = useState(false);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedHistoryWorkout, setSelectedHistoryWorkout] = useState(workoutsTable[0]);
  const [customExercise, setCustomExercise] = useState({
    name: '',
    muscle_group: '',
    equipment_needed: '',
    difficulty_level: '',
  });
  const [generatorConfig, setGeneratorConfig] = useState(defaultGeneratorConfig);
  const [generatedPlan, setGeneratedPlan] = useState(() => buildGeneratedPlan(defaultGeneratorConfig));

  const filteredExercises = useMemo(() => filterExercises(searchQuery), [searchQuery]);

  const activeWorkoutExercises = [];
  for (let index = 0; index < workoutExercisesTable.length; index += 1) {
    const entry = workoutExercisesTable[index];
    if (entry.workout_id !== workoutsTable[0].workout_id) {
      continue;
    }

    const exercise = exercisesTable.find((item) => item.exercise_id === entry.exercise_id);
    activeWorkoutExercises.push({
      ...entry,
      exercise_name: exercise?.exercise_name ?? 'Unknown Exercise',
      muscle_group: exercise?.muscle_group ?? 'General',
    });
  }

  function handleGeneratePlan() {
    setGeneratedPlan(buildGeneratedPlan(generatorConfig));
    setShowGeneratorModal(true);
  }

  function handleSavePlan() {
    setShowGeneratorModal(false);
  }

  function handleWorkoutRowClick(workout) {
    setSelectedHistoryWorkout(workout);
    setShowHistoryModal(true);
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
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search exercises, workouts, or muscles..."
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
            <div className="mx-auto max-w-[1720px]">
              <section className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#6e58ff]/30 bg-[#14162a]/80 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d8d2ff] shadow-[0_0_20px_rgba(126,92,255,0.18)] backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#d8d2ff] shadow-[0_0_10px_rgba(216,210,255,0.8)]" />
                  {isHistoryView ? 'Workout History Mode' : 'Training Session'}
                </div>
                <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="text-[clamp(1.8rem,2vw,2.35rem)] font-semibold tracking-[-0.05em] text-[#dce9e7]">
                      {isHistoryView ? 'Workout History' : 'Push Day Session'}
                    </h2>
                    <p className="mt-2 max-w-[820px] text-[0.95rem] leading-7 text-[#97aaa8]">
                      {isHistoryView
                        ? 'Historical workout logs are available below. AI Coach Live is hidden in this view.'
                        : 'Guest demo workspace based on the schema, with placeholder user data until backend auth is connected.'}
                    </p>
                  </div>

                  {!isHistoryView && (
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setShowCustomExerciseModal(true)}
                        className="inline-flex h-11 items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 text-[0.9rem] font-medium text-[#deece9] transition hover:border-[#c29aff]/30 hover:bg-white/[0.07]"
                      >
                        <Plus size={16} /> Add Custom Exercise
                      </button>
                      <button
                        type="button"
                        onClick={handleGeneratePlan}
                        className="inline-flex h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#8f4aff] via-[#9b58ff] to-[#bf86ff] px-5 text-[0.9rem] font-semibold text-white shadow-[0_12px_34px_rgba(145,76,255,0.28)] transition hover:translate-y-[-1px]"
                      >
                        <Sparkles size={16} /> Generate Plan
                      </button>
                    </div>
                  )}
                </div>
              </section>

              <section className="grid gap-4 md:grid-cols-3">
                {personalRecords.map((record, index) => {
                  const Icon = record.icon;
                  const cardGlow = index === 0 ? 'shadow-[0_0_28px_rgba(185,140,255,0.08)]' : index === 1 ? 'shadow-[0_0_28px_rgba(68,255,207,0.08)]' : 'shadow-[0_0_28px_rgba(255,183,103,0.08)]';

                  return (
                    <article key={record.label} className={`rounded-[16px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 ${cardGlow}`}>
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="inline-flex rounded-full border border-white/10 bg-[#151d1b] px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#c6b3ff]">
                            {index === 0 ? 'New Record' : index === 1 ? 'Consistency Badge' : 'Volume Peak'}
                          </div>
                          <h3 className="mt-3 text-[1.2rem] font-semibold tracking-[-0.03em] text-[#dce9e7]">{record.label}</h3>
                          <p className="mt-2 text-[2.1rem] font-semibold leading-none text-[#e8f1ef]">{record.value}</p>
                          <p className="mt-2 text-[0.72rem] text-[#aab9b7]">{record.meta}</p>
                        </div>
                        <Icon size={18} className="text-[#cdb7ff]" />
                      </div>
                    </article>
                  );
                })}
              </section>

              <section className="mt-4">
                <article className="rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-[1.05rem] font-medium text-[#dbe8e6]">Push Day Session</h3>
                      <p className="mt-1 text-[0.78rem] text-[#96a8a6]">Today’s suggested working set based on demo profile data</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-[#cdb0ff]/18 bg-[#1a1628] px-3 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-[#d9c8ff]">AI Suggested</span>
                      <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-[#dbe8e5]">Set 2 of 4</span>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3">
                    {activeWorkoutExercises.map((exercise, index) => (
                      <div
                        key={exercise.workout_exercise_id}
                        className="rounded-[16px] border border-white/7 bg-[#0f1615]/90 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.01)] transition hover:border-[#cdb0ff]/20"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-20 w-24 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-white/6 bg-[radial-gradient(circle_at_top,_rgba(183,109,255,0.16),_transparent_60%),linear-gradient(180deg,#12151e_0%,#0d1216_100%)]">
                            <Dumbbell size={28} className="text-[#cdb7ff]" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <h4 className="text-[1rem] font-medium text-[#e3eeec]">{exercise.exercise_name}</h4>
                                <p className="mt-1 text-[0.8rem] text-[#93a5a3]">{exercise.muscle_group} • Demo intensity set</p>
                              </div>
                              <button className="text-[#8a9997]" aria-label={`exercise options ${index + 1}`}>
                                <ChevronDown size={16} />
                              </button>
                            </div>

                            <div className="mt-3 grid grid-cols-3 gap-2">
                              <MetricPill label="Sets" value={exercise.sets} />
                              <MetricPill label="Reps" value={exercise.reps} />
                              <MetricPill label="Weight" value={`${exercise.weight_used} lbs`} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] xl:items-stretch">
                <article className="flex h-full min-h-0 flex-col rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Workout History</h3>
                    <div className="flex items-center gap-2 text-[0.72rem] text-[#95a6a4]">
                      <ListChecks size={14} /> Click row to open logs
                    </div>
                  </div>

                  <div className="mt-4 flex min-h-0 flex-1 flex-col overflow-hidden rounded-[14px] border border-white/6">
                    <div className="grid grid-cols-[1.1fr_1.1fr_0.7fr_0.7fr_0.3fr] gap-3 border-b border-white/6 bg-white/[0.03] px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#8f9f9d]">
                      <span>Date</span>
                      <span>Workout Name</span>
                      <span>Duration</span>
                      <span>Volume</span>
                      <span>AI</span>
                    </div>

                    <div className="flex min-h-0 flex-1 flex-col divide-y divide-white/6 overflow-y-auto bg-[#0f1615]/90">
                      {workoutRows.map((workout, index) => (
                        <button
                          key={workout.workout_id}
                          type="button"
                          onClick={() => handleWorkoutRowClick(workout)}
                          className="grid w-full grid-cols-[1.1fr_1.1fr_0.7fr_0.7fr_0.3fr] gap-3 px-4 py-4 text-left transition hover:bg-white/[0.04]"
                        >
                          <div>
                            <p className="text-[0.9rem] text-[#e2eceb]">{workout.workout_date}</p>
                            <p className="mt-1 text-[0.7rem] text-[#849693]">{workout.created_at}</p>
                          </div>
                          <div>
                            <p className="text-[0.92rem] font-medium text-[#dbe8e6]">{workout.workout_title}</p>
                            <p className="mt-1 text-[0.72rem] text-[#8ea09d]">{workout.notes}</p>
                          </div>
                          <span className="text-[0.9rem] text-[#dce9e7]">{index === 0 ? '1h 12m' : index === 1 ? '1h 45m' : '58m'}</span>
                          <span className="text-[0.9rem] text-[#dce9e7]">{index === 0 ? '22,450 lbs' : index === 1 ? '31,200 lbs' : '18,900 lbs'}</span>
                          <span className="inline-flex justify-end">
                            <span className={`rounded-full px-2 py-1 text-[0.7rem] font-semibold ${index === 0 ? 'bg-[#241e34] text-[#bda6ff]' : index === 1 ? 'bg-[#201f31] text-[#c7b7ff]' : 'bg-[#2b2418] text-[#f7b85b]'}`}>
                              {index === 0 ? '9.2' : index === 1 ? '8.8' : '9.5'}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                </article>

                <aside className="flex h-full min-h-0 flex-col rounded-[18px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[1rem] font-medium text-[#dbe8e6]">Session Builder</h3>
                    <div className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-[#dbe8e5]">
                      {filteredExercises.length} exercises
                    </div>
                  </div>

                  <p className="mt-2 text-[0.82rem] leading-6 text-[#95a6a4]">
                    Search the exercise library, then generate a plan or add a custom movement when the default database does not cover it.
                  </p>

                  <div className="mt-4 rounded-[14px] border border-white/6 bg-[#0f1615] p-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">Profile</p>
                    <div className="mt-3 space-y-2 text-[0.88rem] text-[#dbe8e6]">
                      <p><span className="text-[#8ea09d]">Name:</span> {profileRecord.full_name}</p>
                      <p><span className="text-[#8ea09d]">Goal:</span> {profileRecord.fitness_goal}</p>
                      <p><span className="text-[#8ea09d]">Level:</span> {profileRecord.experience_level}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[14px] border border-white/6 bg-[#0f1615] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">Exercise Library</p>
                      <Search size={14} className="text-[#8ea09d]" />
                    </div>

                    <div className="mt-3 space-y-2">
                      {filteredExercises.slice(0, 5).map((exercise) => (
                        <button
                          key={exercise.exercise_id}
                          type="button"
                          className="flex w-full items-center justify-between rounded-[12px] border border-white/7 bg-white/[0.03] px-3 py-3 text-left transition hover:border-[#cdb0ff]/25 hover:bg-white/[0.06]"
                        >
                          <div>
                            <p className="text-[0.9rem] font-medium text-[#e2eceb]">{exercise.exercise_name}</p>
                            <p className="mt-1 text-[0.72rem] text-[#8d9f9d]">{exercise.muscle_group} • {exercise.equipment_needed}</p>
                          </div>
                          <ArrowRight size={14} className="text-[#bca7ff]" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {!isHistoryView && (
                    <div className="mt-4 grid gap-3">
                      <button
                        type="button"
                        onClick={() => setShowCustomExerciseModal(true)}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 text-[0.9rem] font-medium text-[#deece9] transition hover:border-[#c29aff]/30 hover:bg-white/[0.07]"
                      >
                        <Plus size={16} /> Add Custom Exercise
                      </button>
                      <button
                        type="button"
                        onClick={handleGeneratePlan}
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8f4aff] via-[#9b58ff] to-[#bf86ff] px-5 text-[0.9rem] font-semibold text-white shadow-[0_12px_34px_rgba(145,76,255,0.28)] transition hover:translate-y-[-1px]"
                      >
                        <Sparkles size={16} /> Generate Plan
                      </button>
                    </div>
                  )}

                  <div className="mt-4 rounded-[14px] border border-white/6 bg-[#0f1615] p-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">Schema Snapshot</p>
                    <div className="mt-3 space-y-2 text-[0.82rem] text-[#9caead]">
                      <p><span className="text-[#dbe8e6]">profiles.user_id:</span> {profileRecord.user_id}</p>
                      <p><span className="text-[#dbe8e6]">workouts:</span> {workoutsTable.length}</p>
                      <p><span className="text-[#dbe8e6]">progress_records:</span> {progressRecordsTable.length}</p>
                      <p><span className="text-[#dbe8e6]">ai_logs:</span> {aiLogsTable.length}</p>
                    </div>
                  </div>
                </aside>
              </section>
            </div>
          </main>
        </div>
      </div>

      {showCustomExerciseModal && !isHistoryView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="w-full max-w-lg rounded-[18px] border border-white/8 bg-[#071714] p-5 shadow-[0_0_60px_rgba(181,140,255,0.16)]">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[1.15rem] font-semibold text-[#e2eceb]">Add Custom Exercise</h3>
                <p className="mt-1 text-[0.8rem] text-[#95a6a4]">Use this when the exercise is not listed in the default database.</p>
              </div>
              <button type="button" onClick={() => setShowCustomExerciseModal(false)} className="text-[#97a7a5]">
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 grid gap-3">
              <input
                type="text"
                value={customExercise.name}
                onChange={(event) => setCustomExercise((current) => ({ ...current, name: event.target.value }))}
                placeholder="Exercise name"
                className="h-11 rounded-[12px] border border-white/8 bg-white/[0.03] px-4 text-[#e2eceb] outline-none placeholder:text-[#758684]"
              />
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  value={customExercise.muscle_group}
                  onChange={(event) => setCustomExercise((current) => ({ ...current, muscle_group: event.target.value }))}
                  placeholder="Muscle group"
                  className="h-11 rounded-[12px] border border-white/8 bg-white/[0.03] px-4 text-[#e2eceb] outline-none placeholder:text-[#758684]"
                />
                <input
                  type="text"
                  value={customExercise.equipment_needed}
                  onChange={(event) => setCustomExercise((current) => ({ ...current, equipment_needed: event.target.value }))}
                  placeholder="Equipment needed"
                  className="h-11 rounded-[12px] border border-white/8 bg-white/[0.03] px-4 text-[#e2eceb] outline-none placeholder:text-[#758684]"
                />
              </div>
              <textarea
                value={customExercise.difficulty_level}
                onChange={(event) => setCustomExercise((current) => ({ ...current, difficulty_level: event.target.value }))}
                placeholder="Difficulty / notes"
                className="min-h-24 rounded-[12px] border border-white/8 bg-white/[0.03] px-4 py-3 text-[#e2eceb] outline-none placeholder:text-[#758684]"
              />

              <div className="flex items-center justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowCustomExerciseModal(false)} className="h-11 rounded-full border border-white/8 px-4 text-[0.9rem] text-[#dbe8e6]">
                  Cancel
                </button>
                <button type="button" className="h-11 rounded-full bg-gradient-to-r from-[#8f4aff] to-[#bf86ff] px-5 text-[0.9rem] font-semibold text-white">
                  Save Custom Exercise
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showGeneratorModal && !isHistoryView && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-[1120px] rounded-[24px] border border-white/8 bg-[#071714] p-5 shadow-[0_0_80px_rgba(68,255,207,0.12)]">
            <button
              type="button"
              onClick={() => setShowGeneratorModal(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#dbe8e5] transition hover:bg-white/[0.08]"
              aria-label="Close generator"
            >
              <X size={18} />
            </button>

            <div className="inline-flex rounded-full border border-[#6e58ff]/30 bg-[#14162a]/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d8d2ff]">
              AI Powered Generator
            </div>
            <h2 className="mt-4 text-[clamp(2rem,3vw,3rem)] font-semibold tracking-[-0.05em] text-[#e2eceb]">Generate Your Plan</h2>
            <p className="mt-2 max-w-[780px] text-[0.92rem] leading-7 text-[#97aaa8]">
              Tell Spotter your goals and equipment. Our AI will curate a personalized high-performance routine tailored to your physiology.
            </p>

            <div className="mt-6 grid gap-4 xl:grid-cols-[300px_minmax(0,1fr)] xl:items-start">
              <aside className="self-start rounded-[18px] border border-white/7 bg-[#0f1615] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">Select Goal</p>
                <div className="mt-3 grid gap-2">
                  {['Muscle Gain', 'Weight Loss', 'Endurance'].map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setGeneratorConfig((current) => ({ ...current, goal }))}
                      className={`rounded-[12px] border px-4 py-3 text-left text-[0.92rem] transition ${generatorConfig.goal === goal ? 'border-[#bda6ff]/40 bg-white/[0.05] text-[#efe9ff]' : 'border-white/7 bg-white/[0.03] text-[#d9e3e1] hover:border-white/12'}`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">Experience Level</p>
                  <button className="mt-3 flex h-11 w-full items-center justify-between rounded-[12px] border border-white/7 bg-white/[0.03] px-4 text-[0.92rem] text-[#dce5e3]">
                    {generatorConfig.experience}
                    <ChevronDown size={14} className="text-[#8ea09d]" />
                  </button>
                </div>

                <div className="mt-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">Available Equipment</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['Full Gym', 'Dumbbells', 'Bodyweight', 'Resistance Bands'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => {
                          const nextEquipment = generatorConfig.equipment.includes(item)
                            ? generatorConfig.equipment.filter((entry) => entry !== item)
                            : [...generatorConfig.equipment, item];

                          setGeneratorConfig((current) => ({ ...current, equipment: nextEquipment }));
                        }}
                        className={`rounded-full border px-3 py-2 text-[0.78rem] transition ${generatorConfig.equipment.includes(item) ? 'border-[#cdb0ff]/35 bg-[#1b1531] text-[#e6dbff]' : 'border-white/7 bg-white/[0.03] text-[#d7e1de]'}`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setGeneratedPlan(buildGeneratedPlan(generatorConfig))}
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8f4aff] via-[#9b58ff] to-[#bf86ff] px-5 text-[0.92rem] font-semibold text-white shadow-[0_12px_34px_rgba(145,76,255,0.28)] transition hover:translate-y-[-1px]"
                >
                  <Sparkles size={16} /> Generate Workout
                </button>

                <div className="mt-4 rounded-[14px] border border-white/7 bg-[#12201d] p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1a2226] text-[#cdb7ff]">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <p className="text-[0.88rem] font-medium text-[#e2eceb]">Coach Insight</p>
                      <p className="mt-1 text-[0.76rem] leading-6 text-[#9caead]">
                        Your current metabolic data suggests a focus on high-intensity intervals for optimal fat oxidation.
                      </p>
                    </div>
                  </div>
                </div>
              </aside>

              <section className="self-start rounded-[18px] border border-white/7 bg-[#0f1615] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-[1.02rem] font-medium text-[#dbe8e6]">Generated Plan: {generatedPlan.name}</h3>
                  <button
                    type="button"
                    onClick={handleSavePlan}
                    className="inline-flex h-10 items-center gap-2 rounded-full border border-white/8 bg-white/[0.04] px-4 text-[0.9rem] font-medium text-[#e2eceb] transition hover:border-[#c29aff]/30 hover:bg-white/[0.07]"
                  >
                    <Share2 size={14} /> Save Workout
                  </button>
                </div>

                <div className="mt-2 text-[0.85rem] text-[#9caead]">{generatedPlan.subtitle}</div>

                <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)] xl:items-start">
                  <div className="self-start rounded-[16px] border border-white/7 bg-[linear-gradient(180deg,#121a1b_0%,#0d1216_100%)] p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.01)]">
                    <div className="grid gap-4 xl:grid-cols-[220px_minmax(0,1fr)] xl:items-start">
                      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[14px] border border-white/7 bg-[radial-gradient(circle_at_top,_rgba(183,109,255,0.25),_transparent_55%),linear-gradient(180deg,#18121e_0%,#0d1216_100%)]">
                        <Dumbbell size={46} className="text-[#d8c2ff]" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div>
                            <h4 className="text-[1.1rem] font-medium text-[#e7efed]">{generatedPlan.main.title}</h4>
                            <p className="mt-1 text-[0.82rem] text-[#96a8a6]">Target: {generatedPlan.main.target}</p>
                          </div>
                          <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-[0.64rem] uppercase tracking-[0.22em] text-[#d9d2ff]">
                            {generatedPlan.exerciseCount} Exercises
                          </span>
                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-3">
                          <ModalMetric label="Sets" value={generatedPlan.main.sets} />
                          <ModalMetric label="Reps" value={generatedPlan.main.reps} />
                          <ModalMetric label="Rest" value={generatedPlan.main.rest} />
                        </div>

                        <p className="mt-4 rounded-[14px] border border-white/6 bg-white/[0.03] p-4 text-[0.9rem] leading-7 text-[#d8e2e0]">
                          <span className="mr-2">💡</span>{generatedPlan.main.note}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 self-start">
                    <div className="grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
                      {generatedPlan.secondary.map((item) => (
                        <div key={item.title} className="rounded-[16px] border border-white/7 bg-[linear-gradient(180deg,#12161f_0%,#0d1216_100%)] p-3">
                          <div className="h-28 rounded-[12px] border border-white/6 bg-[radial-gradient(circle_at_top,_rgba(255,183,103,0.16),_transparent_55%),linear-gradient(180deg,#17131a_0%,#0f1216_100%)]" />
                          <h5 className="mt-3 text-[0.95rem] font-medium text-[#e7efed]">{item.title}</h5>
                          <p className="mt-1 text-[0.78rem] text-[#9caead]">{item.meta}</p>
                          <div className="mt-3 rounded-[10px] border border-white/6 bg-white/[0.03] px-3 py-2 text-[0.78rem] text-[#dbe8e6]">{item.rest} Rest</div>
                        </div>
                      ))}
                    </div>

                    <div className="self-start rounded-[16px] border border-white/7 bg-[linear-gradient(180deg,#10171a_0%,#0d1216_100%)] p-4">
                      <p className="text-[0.82rem] font-medium text-[#dbe8e6]">Training Volume Forecast</p>
                      <p className="mt-2 text-[0.82rem] leading-6 text-[#97aaa8]">{generatedPlan.forecast.summary}</p>
                      <div className="mt-4 flex items-center justify-between gap-4">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[#cdb7ff]/30 bg-[radial-gradient(circle_at_center,_rgba(181,140,255,0.2),_rgba(15,22,21,0.6))]">
                          <div className="text-center">
                            <p className="text-[1.15rem] font-semibold text-[#efe9ff]">{generatedPlan.forecast.percent}</p>
                            <p className="text-[0.64rem] uppercase tracking-[0.2em] text-[#cdb7ff]">{generatedPlan.forecast.label}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={handleSavePlan}
                          className="inline-flex h-10 items-center gap-2 rounded-full bg-gradient-to-r from-[#8f4aff] to-[#bf86ff] px-4 text-[0.9rem] font-semibold text-white"
                        >
                          <Save size={14} /> Save Workout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}

      {showHistoryModal && selectedHistoryWorkout && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/55 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-[18px] border border-white/8 bg-[#071714] p-5 shadow-[0_0_60px_rgba(181,140,255,0.18)]">
            <button
              type="button"
              onClick={() => setShowHistoryModal(false)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#dbe8e5]"
              aria-label="Close workout log"
            >
              <X size={16} />
            </button>

            <div className="inline-flex rounded-full border border-[#6e58ff]/30 bg-[#14162a]/80 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#d8d2ff]">
              Workout Log
            </div>
            <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.04em] text-[#e2eceb]">{selectedHistoryWorkout.workout_title}</h3>
            <p className="mt-2 text-[0.9rem] leading-7 text-[#97aaa8]">{selectedHistoryWorkout.notes}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <SmallStat label="Workout Date" value={selectedHistoryWorkout.workout_date} />
              <SmallStat label="Created At" value={selectedHistoryWorkout.created_at} />
              <SmallStat label="Duration" value={selectedHistoryWorkout.workout_title === 'Push Day Session' ? '1h 12m' : '1h 45m'} />
              <SmallStat label="Volume" value={selectedHistoryWorkout.workout_title === 'Push Day Session' ? '22,450 lbs' : '31,200 lbs'} />
            </div>

            <div className="mt-5 rounded-[14px] border border-white/6 bg-[#0f1615] p-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">Exercises Logged</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
                {workoutExercisesTable
                  .filter((item) => item.workout_id === selectedHistoryWorkout.workout_id)
                  .map((item) => {
                    const exercise = exercisesTable.find((entry) => entry.exercise_id === item.exercise_id);

                    return (
                      <div key={item.workout_exercise_id} className="rounded-[12px] border border-white/6 bg-white/[0.03] p-3">
                        <p className="text-[0.9rem] font-medium text-[#e2eceb]">{exercise?.exercise_name ?? 'Unknown Exercise'}</p>
                        <p className="mt-1 text-[0.75rem] text-[#8ea09d]">{item.sets} sets • {item.reps} reps • {item.weight_used} lbs</p>
                      </div>
                    );
                  })}
              </div>
            </div>

            <div className="mt-5 rounded-[14px] border border-white/6 bg-[#0f1615] p-4">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#8f9f9d]">Related Metrics</p>
              <div className="mt-3 space-y-2 text-[0.84rem] text-[#dbe8e6]">
                <p><span className="text-[#8ea09d]">User:</span> {profileRecord.full_name}</p>
                <p><span className="text-[#8ea09d]">Goal:</span> {profileRecord.fitness_goal}</p>
                <p><span className="text-[#8ea09d]">Exercises Logged:</span> {workoutExercisesTable.filter((item) => item.workout_id === selectedHistoryWorkout.workout_id).length}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showHistoryModal && !selectedHistoryWorkout && null}
    </div>
  );
}

function MetricPill({ label, value }) {
  return (
    <div className="rounded-[12px] border border-white/6 bg-[#12201d] px-3 py-2">
      <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[#8ea09d]">{label}</p>
      <p className="mt-1 text-[0.92rem] font-medium text-[#e2eceb]">{value}</p>
    </div>
  );
}

function ModalMetric({ label, value }) {
  return (
    <div className="rounded-[12px] border border-white/6 bg-[#12201d] px-3 py-2">
      <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#8ea09d]">{label}</p>
      <p className="mt-1 text-[0.95rem] font-medium text-[#e2eceb]">{value}</p>
    </div>
  );
}

function StatChip({ label, value }) {
  return (
    <div className="rounded-[12px] border border-white/6 bg-white/[0.03] p-3">
      <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[#8ea09d]">{label}</p>
      <p className="mt-1 text-[0.92rem] font-medium text-[#e2eceb]">{value}</p>
    </div>
  );
}

function SmallStat({ label, value }) {
  return (
    <div className="rounded-[12px] border border-white/6 bg-white/[0.03] p-3">
      <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[#8ea09d]">{label}</p>
      <p className="mt-1 text-[0.9rem] font-medium text-[#e2eceb]">{value}</p>
    </div>
  );
}

export default WorkoutTracker;
