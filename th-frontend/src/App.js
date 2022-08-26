import { useEffect } from 'react';
import jwt_decode from "jwt-decode"
import './App.css';

function App() {

  const handleCallbackResponse = (response) => {
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
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
    </div>
  );
}

export default App;
