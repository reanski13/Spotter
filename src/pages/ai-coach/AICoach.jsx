import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  CalendarDays,
  Dumbbell,
  LayoutGrid,
  Mic,
  Paperclip,
  Send,
  Settings,
  Sparkles,
  SquareActivity,
  ThumbsDown,
  ThumbsUp,
  UserCircle2,
} from 'lucide-react';
import heroMark from '../../assets/hero.png';

const sidebarItems = [
  { label: 'Dashboard', icon: LayoutGrid, to: '/dashboard' },
  { label: 'Workouts', icon: Dumbbell, to: '/workouts' },
  { label: 'Schedule', icon: CalendarDays, to: '/schedule' },
  { label: 'Progress', icon: SquareActivity, to: '/progress' },
  { label: 'AI Coach', icon: Sparkles, active: true, to: '/ai-coach' },
  { label: 'Profile', icon: UserCircle2, to: '/profile' },
];

const quickPrompts = [
  "How's my recovery trending?",
  'Should I increase my volume this week?',
  "What's my weakest lift?",
  'Plan my deload week',
  'Explain my fatigue score',
];

function TypingIndicator() {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#1b1f2e] text-[#cdb7ff]">
        <Sparkles size={14} />
      </div>
      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm border border-white/7 bg-[#111917] px-4 py-3">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="h-1.5 w-1.5 rounded-full bg-[#8a7aaa] animate-bounce"
            style={{ animationDelay: `${delay}ms`, animationDuration: '1.2s' }}
          />
        ))}
      </div>
    </div>
  );
}

function CoachMessage({ msg }) {
  return (
    <div className="flex items-end gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#1b1f2e] text-[#cdb7ff]">
        <Sparkles size={14} />
      </div>
      <div className="max-w-[78%]">
        <div className="rounded-2xl rounded-bl-sm border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.015)]">
          {msg.text && (
            <p className="text-[0.9rem] leading-6 text-[#c8dbd8]">{msg.text}</p>
          )}
          {msg.chips?.map((chip) => {
            const Icon = chip.icon;
            return (
              <div key={chip.label} className="mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-[#6e58ff]/30 bg-[#14162a]/80 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-[#d8d2ff]">
                <Icon size={11} />
                {chip.label}
              </div>
            );
          })}
          {msg.warmup && (
            <div className="mt-1">
              <p className="mb-3 text-[0.9rem] leading-6 text-[#c8dbd8]">For a Bench PR attempt, I'd recommend this ramp:</p>
              <div className="space-y-2">
                {msg.warmup.map((w) => (
                  <div key={w.step} className="flex items-center gap-3 rounded-lg bg-white/[0.03] px-3 py-2">
                    <span className="w-5 text-[0.85rem] text-[#cdb7ff]">{w.step}</span>
                    <span className="w-10 text-[0.78rem] font-semibold text-[#e2d8ff]">{w.pct}</span>
                    <span className="w-14 text-[0.78rem] text-[#a8b8b6]">{w.reps}</span>
                    <span className="text-[0.72rem] text-[#7a8f8d]">{w.note}</span>
                  </div>
                ))}
              </div>
              {msg.footer && (
                <p className="mt-3 text-[0.78rem] leading-5 text-[#7a8f8d]">{msg.footer}</p>
              )}
            </div>
          )}
        </div>
        <div className="mt-1.5 flex items-center gap-2 px-1">
          <span className="text-[0.65rem] text-[#4a5a58]">{msg.ts}</span>
          <button className="text-[#4a5a58] hover:text-[#cdb7ff] transition"><ThumbsUp size={11} /></button>
          <button className="text-[#4a5a58] hover:text-[#ff9d9d] transition"><ThumbsDown size={11} /></button>
        </div>
      </div>
    </div>
  );
}

function UserMessage({ msg }) {
  return (
    <div className="flex items-end justify-end gap-3">
      <div className="max-w-[70%]">
        <div className="rounded-2xl rounded-br-sm bg-gradient-to-br from-[#3b2068] to-[#2a1752] px-4 py-3 shadow-[0_0_20px_rgba(140,77,255,0.16)]">
          <p className="text-[0.9rem] leading-6 text-[#e2d8ff]">{msg.text}</p>
        </div>
        <p className="mt-1 text-right text-[0.65rem] text-[#4a5a58]">{msg.ts}</p>
      </div>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d8c7ff] to-[#8f5dff] text-[0.6rem] font-semibold text-white">
        GA
      </div>
    </div>
  );
}

function AICoach() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text) return;

    const userMsg = {
      id: Date.now(),
      role: 'user',
      text,
      ts: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: `You are Spotter AI, an elite AI personal trainer and coach inside the Spotter fitness app. The user is "Guest Athlete". 
You have access to their data:
- Current weight: 182.4 lbs
- Streak: 14 days (PB: 21)
- HRV: 68ms (+12% vs 7-day baseline)
- Sleep score: 87/100 (7h 42m)
- Resting HR: 52 bpm
- CNS Fatigue: Low
- Training Load: Medium (340 AU / 7d)
- This week: Strength Training 4/5 sessions, Cardio Baseline 120/150 min, Mobility 2/3 sessions
- PRs: Squat 275 lbs, Bench Press 185 lbs (est. new 1RM 197 lbs), Deadlift 315 lbs
- Last session: Leg Day — Power (482 kcal, yesterday)
- Upcoming: Push Day - Hypertrophy today 6pm, Active Recovery Walk tomorrow 8am, Pull Day - Strength Friday 7am

Be concise, expert, and warm. Use specific numbers from their data. Keep responses under 120 words. Format lists with ① ② ③ etc. Don't use markdown bold/asterisks.`,
          messages: [
            ...messages.map((m) => ({
              role: m.role === 'coach' ? 'assistant' : 'user',
              content: m.text || (m.warmup ? 'Here is the warm-up protocol...' : ''),
            })).filter((m) => m.content),
            { role: 'user', content: text },
          ],
        }),
      });

      const data = await response.json();
      const replyText =
        data.content?.find((b) => b.type === 'text')?.text ||
        'Something went wrong. Please try again.';

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'coach',
          text: replyText,
          ts: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'coach',
          text: 'Connection error — please try again.',
          ts: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickPrompt = (prompt) => {
    setInputValue(prompt);
    textareaRef.current?.focus();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#021312] text-[#e2eceb]">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(115,59,255,0.16),_transparent_36%),radial-gradient(circle_at_82%_10%,_rgba(68,255,207,0.08),_transparent_26%),linear-gradient(180deg,#021312_0%,#041815_50%,#021312_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(153,230,207,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(153,230,207,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,white,transparent_92%)]" />
      <div className="pointer-events-none absolute left-[-6rem] top-[12rem] h-[24rem] w-[24rem] rounded-full bg-[#b36bff]/18 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[34rem] h-[22rem] w-[22rem] rounded-full bg-[#42ffd2]/10 blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1920px]">
        {/* Sidebar */}
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
                className={`flex items-center gap-3 rounded-none border-r-2 px-4 py-3 text-[0.95rem] font-medium transition ${
                  active
                    ? 'border-r-[#c9b0ff] bg-white/[0.05] text-[#dcc8ff] shadow-[inset_0_0_0_1px_rgba(201,176,255,0.12)]'
                    : 'border-r-transparent text-[#b0bfbd] hover:bg-white/[0.03] hover:text-white'
                }`}
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

        {/* Main */}
        <div className="relative flex min-w-0 flex-1 flex-col">
          {/* Topbar */}
          <header className="relative z-10 flex items-center gap-4 border-b border-white/6 bg-white/[0.02] px-4 py-4 backdrop-blur sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="flex flex-1 items-center gap-3">
            
              <h1 className="text-[1.5rem] font-semibold tracking-[-0.03em] text-[#dce9e7]">AI Coach</h1>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/[0.04] text-[#dbe8e5] transition hover:border-white/15 hover:bg-white/[0.06]">
                <Bell size={16} />
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/6 bg-white/[0.04] text-[#dbe8e5] transition hover:border-white/15 hover:bg-white/[0.06]">
                <Settings size={16} />
              </button>
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#0d221f]">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#d8c7ff] to-[#8f5dff] text-[0.65rem] font-semibold text-white">
                  GA
                </div>
              </div>
            </div>
          </header>

          {/* Page content */}
          <main className="relative z-10 flex-1 overflow-hidden px-4 py-5 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
            <div className="mx-auto flex h-full max-w-[1720px] flex-col">
              {/* Full-width chat panel */}
              <article className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-[14px] border border-white/7 bg-[linear-gradient(180deg,#111917_0%,#101715_100%)] shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_32px_rgba(181,140,255,0.06)]">

                {/* Chat header */}
                <div className="flex items-center gap-3 border-b border-white/6 px-5 py-4">
                  <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[#cdb7ff]/20 bg-gradient-to-br from-[#3b2068] to-[#1b1035] shadow-[0_0_20px_rgba(181,140,255,0.2)]">
                    <Sparkles size={15} className="text-[#cdb7ff]" />
                    <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#111917] bg-[#4ade80]" />
                  </div>
                  <div>
                    <p className="text-[1.01rem] font-semibold text-[#dce9e7]">Spotter AI</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {messages.length === 0 && !isTyping && (
                    <div className="flex h-full flex-col items-center justify-center gap-3 py-16 text-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#cdb7ff]/20 bg-gradient-to-br from-[#3b2068] to-[#1b1035] shadow-[0_0_28px_rgba(181,140,255,0.18)]">
                        <Sparkles size={22} className="text-[#cdb7ff]" />
                      </div>
                      <p className="text-[1rem] font-semibold text-[#dce9e7]">How can I help you today?</p>
                      <p className="max-w-xs text-[0.82rem] leading-5 text-[#6a7a78]">
                        Ask me anything about your training, recovery, or performance.
                      </p>
                    </div>
                  )}
                  {messages.map((msg) =>
                    msg.role === 'coach' ? (
                      <CoachMessage key={msg.id} msg={msg} />
                    ) : (
                      <UserMessage key={msg.id} msg={msg} />
                    )
                  )}
                  {isTyping && <TypingIndicator />}
                  <div ref={messagesEndRef} />
                </div>

                {/* Quick prompts */}
                <div className="border-t border-white/5 px-5 pt-3 pb-2">
                  <p className="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#4a5a58]">Suggested</p>
                  <div className="flex flex-wrap gap-2">
                    {quickPrompts.map((p) => (
                      <button
                        key={p}
                        onClick={() => handleQuickPrompt(p)}
                        className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[0.72rem] text-[#96a8a6] transition hover:border-[#cdb7ff]/30 hover:bg-white/[0.05] hover:text-[#cdb7ff]"
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="border-t border-white/6 px-4 py-4">
                  <div className="flex items-end gap-3 rounded-2xl border border-white/8 bg-[#0b1715] px-4 py-3 transition focus-within:border-[#b89bff]/30 focus-within:ring-1 focus-within:ring-[#b89bff]/10">
                    <textarea
                      ref={textareaRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Ask your coach anything…"
                      rows={1}
                      className="flex-1 resize-none bg-transparent text-[0.9rem] text-[#deece9] placeholder:text-[#4a5a58] outline-none leading-6"
                      style={{ maxHeight: '120px' }}
                      onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                      }}
                    />
                    <div className="flex items-center gap-2">
                      <button className="text-[#4a5a58] transition hover:text-[#cdb7ff]">
                        <Paperclip size={16} />
                      </button>
                      <button className="text-[#4a5a58] transition hover:text-[#cdb7ff]">
                        <Mic size={16} />
                      </button>
                      <button
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[#8c4dff] via-[#995bff] to-[#b487ff] text-white shadow-[0_6px_20px_rgba(140,77,255,0.3)] transition hover:translate-y-[-1px] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        <Send size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AICoach;