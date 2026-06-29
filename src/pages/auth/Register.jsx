import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/authService';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    fitnessGoal: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage('');

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    try {
      await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        fitnessGoal: formData.fitnessGoal,
      });

      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#021312] text-[#e2eceb] flex items-center justify-center px-4 py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(115,59,255,0.16),_transparent_36%),radial-gradient(circle_at_82%_10%,_rgba(68,255,207,0.08),_transparent_26%),linear-gradient(180deg,#021312_0%,#041815_50%,#021312_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(153,230,207,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(153,230,207,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,white,transparent_92%)]" />
      <div className="pointer-events-none absolute left-[-6rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[#b36bff]/18 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-8rem] bottom-[6rem] h-[22rem] w-[22rem] rounded-full bg-[#42ffd2]/10 blur-[140px]" />

      <div className="relative z-10 w-full max-w-md bg-[linear-gradient(180deg,#121816_0%,#101715_100%)] border border-white/7 rounded-2xl p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_32px_rgba(181,140,255,0.06)]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-[#dce9e7]">Create Account</h1>
          <p className="text-[#97aaa8] mt-2">
            Start your fitness journey with Spotter.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 text-sm">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full rounded-lg bg-[#0b1715] border border-white/10 px-4 py-3 text-[#deece9] placeholder-[#6f8381] focus:outline-none focus:border-[#b89bff]/40 focus:ring-2 focus:ring-[#b89bff]/15"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full rounded-lg bg-[#0b1715] border border-white/10 px-4 py-3 text-[#deece9] placeholder-[#6f8381] focus:outline-none focus:border-[#b89bff]/40 focus:ring-2 focus:ring-[#b89bff]/15"
            />
          </div>

          <div>
            <label htmlFor="fitnessGoal" className="block text-sm font-medium mb-2">
              Fitness Goal
            </label>
            <select
              id="fitnessGoal"
              name="fitnessGoal"
              value={formData.fitnessGoal}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-[#0b1715] border border-white/10 px-4 py-3 text-[#deece9] focus:outline-none focus:border-[#b89bff]/40 focus:ring-2 focus:ring-[#b89bff]/15"
            >
              <option value="">Select your goal</option>
              <option value="Weight Loss">Weight Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="Strength Training">Strength Training</option>
              <option value="Endurance">Endurance</option>
              <option value="General Fitness">General Fitness</option>
            </select>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create a password"
              className="w-full rounded-lg bg-[#0b1715] border border-white/10 px-4 py-3 text-[#deece9] placeholder-[#6f8381] focus:outline-none focus:border-[#b89bff]/40 focus:ring-2 focus:ring-[#b89bff]/15"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
              className="w-full rounded-lg bg-[#0b1715] border border-white/10 px-4 py-3 text-[#deece9] placeholder-[#6f8381] focus:outline-none focus:border-[#b89bff]/40 focus:ring-2 focus:ring-[#b89bff]/15"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gradient-to-r from-[#8c4dff] via-[#995bff] to-[#b487ff] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-3 font-semibold text-white shadow-[0_14px_34px_rgba(140,77,255,0.28)] transition"
          >
            {loading ? 'Creating account...' : 'Create Account'}
          </button>
        </form>

        <p className="text-center text-sm text-[#97aaa8] mt-6">
          Already have an account?{' '}
          <Link to="/login" className="text-[#cdb7ff] hover:text-[#dcc8ff]">
            Sign in
          </Link>
        </p>

        <p className="text-center text-sm text-[#869693] mt-4">
          <Link to="/" className="hover:text-[#d8e4e1]">
            Back to landing page
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;