import Navbar from "@/scenes/navbar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("Home");

  return (
    <div className="app bg-gray-20">Navbar
      <Navbar 
        selectedPage={selectedPage}
        setSelectPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
