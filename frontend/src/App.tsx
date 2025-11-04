import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignInPage } from "./features/Auth/pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="text-3xl font-bold underline ">Hello world!</h1>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
