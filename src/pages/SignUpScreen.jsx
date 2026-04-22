import React, { useState } from 'react';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import Toggle from '../components/Toggle';
import './SignUpScreen.css';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isClient, setIsClient] = useState(false);

  return (
    <div className="wrapscr signup">
      <div className="scrl hide-scrollbar">
        <div className="scrlcon" style={{ justifyContent: 'center', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div className="logoarea">
            <h1 className="t-h1">Fontts.</h1>
            <p className="t-p">Join the premier design platform.</p>
          </div>

          <div className="formbox">
            <AppInput placeholder="Full Name" value={name} onChangeText={setName} icon="person-outline" />
            <div style={{ height: 16 }} />
            <AppInput placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" icon="mail-outline" />
            <div style={{ height: 16 }} />
            <AppInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry icon="lock-closed-outline" />
            
            <div className="rolerow">
              <span className="t-p">I am a Client</span>
              <Toggle value={isClient} onToggle={() => setIsClient(!isClient)} />
            </div>

            <div style={{ height: 24 }} />
            <AppButton label="Sign Up" variant="fill" fullWidth
              onPress={() => navigation.replace(isClient ? 'ClientTabs' : 'DesignerTabs')} />
            
            <div className="altrow">
              <span className="alttxt">Already have an account?</span>
              <button className="altbtn" onClick={() => navigation.navigate('Login')}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
