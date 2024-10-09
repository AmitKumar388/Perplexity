import React from "react";
import "./App.css";
import DiscoverSection from "./Componets/DiscoverSection";
import Sidebar from "./Componets/Sidebar";
import Card from "./Componets/Card";
import One from "./Componets/One";
import ChatInput from "./Componets/ChatInput";

function App() {
  return (
    <div className="App">

      <div className="Balance">

        <Card />
        <One />
        <DiscoverSection />
        <One />
        <DiscoverSection />
        <One />
        <DiscoverSection />
        <One />
        

        <ChatInput />
        <Sidebar />
        
      </div>
    </div>
  );
}

export default App;
