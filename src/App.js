import { useState } from "react";
import './App.css';

function App() {
  const[userName, setUsername] = useState("");
  const[password,setPassword] = useState("");
  const[error,setError] = useState("");
  const[isSubmitted,setIsSubmitted] = useState(false);

  const handleSubmit = (e)=>{
     e.preventDefault();
     if(userName === "user" && password === "password"){
      setError("");
      setIsSubmitted(true);
     }
     else{
      setError("Invalid username or password");
      setIsSubmitted(false);
     }
  };

  return (
    <div>
       <h1>Login Page</h1>
       {isSubmitted ? (
           <div>
            <p>Welcome, {userName}</p>
           </div>
        ):(
             <form onSubmit={handleSubmit}>
              {error && <p>{error}</p>}
              <div>
                <label htmlFor="username">Username:</label>
                <input
                   onChange={(e)=>setUsername(e.target.value)}
                   type="text"
                   value={userName}
                   required
                   placeholder="username"
                   id="username"
                />
              <div>
                <label htmlFor="password">Password:</label>
                <input
                   onChange={(e) => setPassword(e.target.value)}
                   type="password"
                   value={password}
                   required
                   placeholder="password"
                   id="password"
               />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
              </div>
             </form>
        )}
    </div>
  );
}

export default App;
