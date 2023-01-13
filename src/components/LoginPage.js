import React from "react";
import * as Realm from "realm-web";

const app = new Realm.App({ id: "application-0-pcidj" });

const LoginPage = () => {
    
  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default LoginPage;
