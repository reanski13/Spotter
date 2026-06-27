import { useState } from 'react';
import { Mail, Lock, Circle, User, Target, Zap, Brain } from 'lucide-react';
import { COLORS } from '../../constants/colors';

export default function Register() {
 

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: COLORS.bg.primary }}>
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '8px', backgroundColor: COLORS.accent.purple, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={28} style={{ color: '#ffffff' }} />
            </div>
            <h2 className="text-3xl font-bold" style={{ color: COLORS.text.primary }}>Spotter</h2>
          </div>

          <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.text.primary }}>Your AI Digital Spotter.</h3>

          <p className="mb-8" style={{ color: COLORS.text.secondary, fontSize: '15px', lineHeight: '1.6' }}>
            Experience precision-driven performance. Spotter tracks your form, optimizes your sets, and builds your legacy with neural intelligence.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg border" style={{ backgroundColor: COLORS.bg.secondary, borderColor: COLORS.border.dark }}>
              <Brain size={18} style={{ color: COLORS.accent.purple }} />
              <span style={{ color: COLORS.text.primary, fontSize: '14px', fontWeight: '500' }}>Adaptive Neural Coaching</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg border" style={{ backgroundColor: COLORS.bg.secondary, borderColor: COLORS.border.dark }}>
              <Zap size={18} style={{ color: COLORS.accent.purple }} />
              <span style={{ color: COLORS.text.primary, fontSize: '14px', fontWeight: '500' }}>Real-time Form Correction</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2" style={{ color: COLORS.text.primary }}>Create your account</h1>
            <p style={{ color: COLORS.text.secondary, fontSize: '14px' }}>Step into the next evolution of fitness.</p>
          </div>

          <div className="rounded-lg p-8 border" style={{ backgroundColor: COLORS.bg.secondary, borderColor: COLORS.border.dark }}>
            <form className="space-y-5">
              <div className="flex flex-col gap-2">
                <label style={{ color: COLORS.text.secondary, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Full Name</label>
                <div className="relative flex items-center">
                  <User size={18} className="absolute left-3" style={{ color: COLORS.text.tertiary }} />
                  <input type="text" placeholder="John Doe" className="w-full px-3 py-2.5 pl-10 rounded-lg border" style={{ backgroundColor: COLORS.bg.tertiary, borderColor: COLORS.border.input, color: COLORS.text.primary }} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label style={{ color: COLORS.text.secondary, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Email Address</label>
                <div className="relative flex items-center">
                  <Mail size={18} className="absolute left-3" style={{ color: COLORS.text.tertiary }} />
                  <input type="email" placeholder="john@example.com" className="w-full px-3 py-2.5 pl-10 rounded-lg border" style={{ backgroundColor: COLORS.bg.tertiary, borderColor: COLORS.border.input, color: COLORS.text.primary }} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label style={{ color: COLORS.text.secondary, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Fitness Goal</label>
                <div className="relative flex items-center">
                  <Target size={18} className="absolute left-3" style={{ color: COLORS.text.tertiary }} />
                  <select className="w-full px-3 py-2.5 pl-10 rounded-lg border appearance-none" style={{ backgroundColor: COLORS.bg.tertiary, borderColor: COLORS.border.input, color: COLORS.text.primary }}>
                    <option>Select your focus</option>
                    <option>Strength Training</option>
                    <option>Cardio & Endurance</option>
                    <option>Flexibility & Mobility</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-2">
                  <label style={{ color: COLORS.text.secondary, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Password</label>
                  <div className="relative flex items-center">
                    <Lock size={18} className="absolute left-3" style={{ color: COLORS.text.tertiary }} />
                    <input type="password" placeholder="••••••••" className="w-full px-3 py-2.5 pl-10 rounded-lg border" style={{ backgroundColor: COLORS.bg.tertiary, borderColor: COLORS.border.input, color: COLORS.text.primary }} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label style={{ color: COLORS.text.secondary, fontSize: '11px', fontWeight: '700', textTransform: 'uppercase' }}>Confirm</label>
                  <div className="relative flex items-center">
                    <Lock size={18} className="absolute left-3" style={{ color: COLORS.text.tertiary }} />
                    <input type="password" placeholder="••••••••" className="w-full px-3 py-2.5 pl-10 rounded-lg border" style={{ backgroundColor: COLORS.bg.tertiary, borderColor: COLORS.border.input, color: COLORS.text.primary }} />
                  </div>
                </div>
              </div>

              <button type="submit" className="w-full py-3 rounded-full font-semibold text-white mt-6" style={{ background: `linear-gradient(135deg, ${COLORS.accent.purple} 0%, ${COLORS.accent.purpleLight} 100%)`, textTransform: 'uppercase', fontSize: '13px' }}>
                Create Account
              </button>
            </form>

            <p className="text-center mt-6" style={{ color: COLORS.text.secondary, fontSize: '14px' }}>
              Already using Spotter?{' '}
              <button onClick={() => setPage('login')} style={{ color: COLORS.text.primary, textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500' }}>
                Sign In
              </button>
            </p>

            <p style={{ color: COLORS.text.tertiary, fontSize: '12px', textAlign: 'center', marginTop: '16px', lineHeight: '1.5' }}>
              By creating an account, you agree to Spotter&apos;s Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
