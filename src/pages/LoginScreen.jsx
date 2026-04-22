import React, { useState } from 'react';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import InkDrop from '../components/InkDrop';
import './LoginScreen.css';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="wrapscr login">
      <div className="scrl hide-scrollbar">
        <div className="scrlcon">
          <InkDrop size={180} opacity={0.04} style={{ top: -50, left: -50 }} />

          <div className="logowrap">
            <h1 className="logotxt">Create Your Account</h1>
            <p className="logosub">Welcome back</p>
          </div>

          <div className="formgrp">
            <AppInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              icon="mail-outline"
              keyboardType="email-address"
            />
            <AppInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              icon="lock-closed-outline"
              secureTextEntry
            />
          </div>

          <button type="button" className="forgot">
            <span className="forgottxt">Forgot Password?</span>
          </button>

          <AppButton
            label="Log In"
            variant="fill"
            fullWidth
            onPress={() => navigation.replace('DesignerTabs')}
          />

          <div className="divrow">
            <span className="divline" />
            <span className="divtxt">or</span>
            <span className="divline" />
          </div>

          <AppButton label="Continue with Google" variant="out" fullWidth onPress={() => {}} />

          <div className="linkrow">
            <span className="linktxt">Don't have an account? </span>
            <button type="button" className="linkhl" onClick={() => navigation.navigate('SignUp')}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
