import React, { useState } from 'react';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import './LoginScreen.css';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="wrapscr login">
      <div className="scrl hide-scrollbar">
        <div className="scrlcon" style={{ justifyContent: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="logoarea">
            <h1 className="t-h1">Fontts.</h1>
            <p className="t-p">Welcome back to Fontts.</p>
          </div>

          <div className="formbox">
            <AppInput placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" icon="mail-outline" />
            <div style={{ height: 16 }} />
            <AppInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry icon="lock-closed-outline" />
            
            <button className="forgotbtn">Forgot Password?</button>

            <div style={{ height: 24 }} />
            <AppButton label="Log In" variant="fill" fullWidth
              onPress={() => navigation.replace('DesignerTabs')} />
            
            <div className="altrow">
              <span className="alttxt">Don't have an account?</span>
              <button className="altbtn" onClick={() => navigation.navigate('SignUp')}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
