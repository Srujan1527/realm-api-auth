import React from "react";
import * as Realm from "realm-web";
import "./App.css";
const app = new Realm.App({ id: "application-0-pcidj" });

// you can get below tokenId from Authentication 
const clientId =
  "LrqIuhmlfhys4xRUaamh623rdHKLe4mrI8sbVpS1WDrnQewupaqP8h0SIWpK93Ka";

const ApiAuth = ({ setUser }) => {
  const googleAuth = async () => {
    const credentials = Realm.Credentials.apiKey(clientId);
    const apiUser = await app.logIn(credentials);
    setUser(apiUser);
    console.log("Login Successfull");
  };
  return (
    <div>
      <button type="button" onClick={googleAuth}>
        Google Signin{" "}
      </button>
    </div>
  );
};

const App = () => {
  const [user, setUser] = React.useState(null);
  console.log(app.currentUser);
  const logOut = async () => {
    await app.currentUser.logOut();
    setUser(null);
  };
  return (
    <div className="container">
      {user ? (
        <div className="logout">
          <p>You have logged in Successfully</p>
          <button onClick={logOut}>Logout</button>
        </div>
      ) : (
        <ApiAuth setUser={setUser} />
      )}
    </div>
  );
};

export default App;

//user?():(
