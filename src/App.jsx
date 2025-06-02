import { GoogleLogin } from '@react-oauth/google';
import { useState } from 'react';

function App() {
  const [userToken, setUserToken] = useState(null);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Google Drive Duplicate Cleaner</h1>

      {!userToken ? (
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log('Login success:', credentialResponse);
            setUserToken(credentialResponse.credential);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      ) : (
        <p>✅ Logged in — ready to access Google Drive!</p>
      )}
    </div>
  );
}

export default App;
