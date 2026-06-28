import { supabase } from '../lib/supabase';

export async function registerUser({ fullName, email, password, fitnessGoal }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        fitness_goal: fitnessGoal,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  const user = data.user;

  if (!user) {
    throw new Error('Registration failed. Please try again.');
  }

  const { error: profileError } = await supabase.from('profiles').insert({
    user_id: user.id,
    full_name: fullName,
    email,
    fitness_goal: fitnessGoal,
    experience_level: null,
    height_cm: null,
    weight_kg: null,
  });

  if (profileError) {
    throw new Error(profileError.message);
  }

  return data;
}

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  return true;
}

export async function getCurrentUser() {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return data.user;
}

export async function getCurrentSession() {
  const { data, error } = await supabase.auth.getSession();

  if (error) {
    throw new Error(error.message);
  }

  return data.session;
}