// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation/Navigation";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </>
  );
}

export default App;
