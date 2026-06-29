import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import logo from '../../assets/hero.png';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    setLoading(true);

    try {
      await loginUser({
        email: formData.email,
        password: formData.password,
      });

      navigate('/dashboard');
    } catch (error) {
      setErrorMessage(error.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#021312] text-[#e2eceb] flex items-center justify-center px-4">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(115,59,255,0.16),_transparent_36%),radial-gradient(circle_at_82%_10%,_rgba(68,255,207,0.08),_transparent_26%),linear-gradient(180deg,#021312_0%,#041815_50%,#021312_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(153,230,207,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(153,230,207,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,white,transparent_92%)]" />
      <div className="pointer-events-none absolute left-[-6rem] top-[8rem] h-[24rem] w-[24rem] rounded-full bg-[#b36bff]/18 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-8rem] bottom-[6rem] h-[22rem] w-[22rem] rounded-full bg-[#42ffd2]/10 blur-[140px]" />

      <div className="relative z-10 w-full max-w-md bg-[linear-gradient(180deg,#121816_0%,#101715_100%)] border border-white/7 rounded-2xl p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.015),0_0_32px_rgba(181,140,255,0.06)]">
        <div className="mb-8 text-center">
           <img src={logo} alt="Spotter logo" className="h-14 w-14 object-contain justify-self-center" />


          <h1 className="text-3xl font-bold text-[#dce9e7]">Welcome Back</h1>
          <p className="text-[#97aaa8] mt-2">
            Sign in to continue using Spotter.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 text-sm">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
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
              placeholder="Enter your password"
              className="w-full rounded-lg bg-[#0b1715] border border-white/10 px-4 py-3 text-[#deece9] placeholder-[#6f8381] focus:outline-none focus:border-[#b89bff]/40 focus:ring-2 focus:ring-[#b89bff]/15"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gradient-to-r from-[#8c4dff] via-[#995bff] to-[#b487ff] hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed px-4 py-3 font-semibold text-white shadow-[0_14px_34px_rgba(140,77,255,0.28)] transition"
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-[#97aaa8] mt-6">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-[#cdb7ff] hover:text-[#dcc8ff]">
            Create one
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

export default Login;