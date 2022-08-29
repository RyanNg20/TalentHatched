import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"
import './App.css';

function App() {

  const [user, setUser] = useState(null)

  const handleCallbackResponse = (response) => {
    var userObject = jwt_decode(response.credential)
    setUser(userObject)
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "908903504010-elph5ni8j1dhpk1e6kfeioi3g5apknie.apps.googleusercontent.com",
      callback: handleCallbackResponse,

    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large"}
    )

    google.accounts.id.prompt()
  }, [])

  return (
    <div className="App">
      <div id="signInDiv"></div>
      <h1>hi</h1>
      {user && 
      <h1>
        {user.given_name} is logged in
      </h1>}
    </div>
  );
}

export default App;
