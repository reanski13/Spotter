import { useState } from 'react';
import { Mail, Lock, Circle } from 'lucide-react';
import { COLORS } from "../../constants/colors";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [page, setPage] = useState('login'); // 'login' or 'register'

  if (page === 'login') {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-6"
        style={{ backgroundColor: COLORS.bg.primary }}
      >
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: COLORS.text.lightPurple }}
            >
              Spotter
            </h1>
            <p style={{ color: COLORS.text.secondary }}>Your AI Digital Spotter</p>
          </div>

          <div
            className="rounded-lg p-8 border"
            style={{
              backgroundColor: COLORS.bg.secondary,
              borderColor: COLORS.border.dark,
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log('Login:', { email, password });
              }}
              className="space-y-6"
            >
              <div className="flex flex-col gap-2">
                <label
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: COLORS.text.secondary }}
                >
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail
                    size={18}
                    className="absolute left-3"
                    style={{ color: COLORS.text.tertiary }}
                  />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 pl-10 rounded-lg border"
                    style={{
                      backgroundColor: COLORS.bg.tertiary,
                      borderColor: COLORS.border.input,
                      color: COLORS.text.primary,
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label
                    className="text-xs font-semibold uppercase tracking-wide"
                    style={{ color: COLORS.text.secondary }}
                  >
                    Password
                  </label>
                  <a href="#" style={{ color: COLORS.text.secondary, fontSize: '12px' }}>
                    Forgot Password?
                  </a>
                </div>
                <div className="relative flex items-center">
                  <Lock
                    size={18}
                    className="absolute left-3"
                    style={{ color: COLORS.text.tertiary }}
                  />
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2.5 pl-10 rounded-lg border"
                    style={{
                      backgroundColor: COLORS.bg.tertiary,
                      borderColor: COLORS.border.input,
                      color: COLORS.text.primary,
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-full font-semibold text-white"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.accent.purple} 0%, ${COLORS.accent.purpleLight} 100%)`,
                }}
              >
                Login
              </button>
            </form>

            
              

            <p className="text-center mt-6" style={{ color: COLORS.text.secondary, fontSize: '14px' }}>
              Don&apos;t have an account?{' '}
              <button
                onClick={() => setPage('register')}
                style={{ color: COLORS.text.primary, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Register
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Register page
  return (
    <div
      className="min-h-screen flex"
      style={{ backgroundColor: COLORS.bg.primary }}
    >
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
        <div
          className="rounded-lg p-8 max-w-md border"
          style={{
            backgroundColor: COLORS.bg.secondary,
            borderColor: COLORS.border.dark,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: COLORS.accent.purple,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ⚡
            </div>
            <h2 className="text-2xl font-bold" style={{ color: COLORS.text.primary }}>
              Spotter
            </h2>
          </div>

          <h3 className="text-xl font-semibold mb-3" style={{ color: COLORS.text.primary }}>
            Your AI Digital Spotter.
          </h3>
          <p style={{ color: COLORS.text.secondary, lineHeight: '1.6' }}>
            Experience precision-driven performance. Spotter tracks your form, optimizes your sets, and builds your legacy with neural intelligence.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2" style={{ color: COLORS.text.primary }}>
              Create your account
            </h1>
            <p style={{ color: COLORS.text.secondary }}>
              Step into the next evolution of fitness.
            </p>
          </div>

          <div
            className="rounded-lg p-8 border"
            style={{
              backgroundColor: COLORS.bg.secondary,
              borderColor: COLORS.border.dark,
            }}
          >
            <form className="space-y-5">
              <div className="flex flex-col gap-2">
                <label style={{ color: COLORS.text.secondary, fontSize: '12px', fontWeight: '600' }}>
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-3 py-2.5 pl-10 rounded-lg border"
                    style={{
                      backgroundColor: COLORS.bg.tertiary,
                      borderColor: COLORS.border.input,
                      color: COLORS.text.primary,
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label style={{ color: COLORS.text.secondary, fontSize: '12px', fontWeight: '600' }}>
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-3 py-2.5 pl-10 rounded-lg border"
                    style={{
                      backgroundColor: COLORS.bg.tertiary,
                      borderColor: COLORS.border.input,
                      color: COLORS.text.primary,
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label style={{ color: COLORS.text.secondary, fontSize: '12px', fontWeight: '600' }}>
                  Fitness Goal
                </label>
                <select
                  className="w-full px-3 py-2.5 rounded-lg border"
                  style={{
                    backgroundColor: COLORS.bg.tertiary,
                    borderColor: COLORS.border.input,
                    color: COLORS.text.primary,
                  }}
                >
                  <option>Select your focus</option>
                  <option>Strength Training</option>
                  <option>Cardio</option>
                  <option>Flexibility</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label style={{ color: COLORS.text.secondary, fontSize: '12px', fontWeight: '600' }}>
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2.5 rounded-lg border"
                    style={{
                      backgroundColor: COLORS.bg.tertiary,
                      borderColor: COLORS.border.input,
                      color: COLORS.text.primary,
                      fontSize: '14px',
                    }}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label style={{ color: COLORS.text.secondary, fontSize: '12px', fontWeight: '600' }}>
                    Confirm
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2.5 rounded-lg border"
                    style={{
                      backgroundColor: COLORS.bg.tertiary,
                      borderColor: COLORS.border.input,
                      color: COLORS.text.primary,
                      fontSize: '14px',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-full font-semibold text-white mt-6"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.accent.purple} 0%, ${COLORS.accent.purpleLight} 100%)`,
                }}
              >
                CREATE ACCOUNT
              </button>
            </form>

            <p className="text-center mt-6" style={{ color: COLORS.text.secondary, fontSize: '14px' }}>
              Already using Spotter?{' '}
              <button
                onClick={() => setPage('login')}
                style={{ color: COLORS.text.primary, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Sign In
              </button>
            </p>

            <p
              className="text-xs text-center mt-4"
              style={{ color: COLORS.text.tertiary, lineHeight: '1.5' }}
            >
              By creating an account you agree to Spotter&apos;s Terms and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
