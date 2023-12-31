import Particles from "react-particles";
import {loadFireworksPreset} from "tsparticles-preset-fireworks"
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";


function App() {
  const [newYearsMessage, setNewYearsMessage] = useState(["Thank You 2023...!"])
  // init particels
  const particelIntilialization = async(engine) =>{
    await loadFireworksPreset(engine)
  }

  // logic time
  function timeLeft(){
    const newYearDate = new Date("January 1, 2024 00:00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remainingTime = newYearDate - nowDate
    return remainingTime
  }
  return (
    <>
      <Particles 
        init={particelIntilialization}
        options={{ preset: "fireworks" }}
      />
      {/* react typewriter */}
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
         {/* z-50 for item up screens */}
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter 
            words={newYearsMessage}
            loop={false}
            cursorStyle={"_"}
            cursor
            typeSpeed={30}
            deleteSpeed={20}
         />
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown 
            date={Date.now() + timeLeft()} 
            onComplete={() => setNewYearsMessage([
              "Selamat", "Tahun", "Baru", "HNY2024"
            ])}
            />
        </div>
      </div>
    </>
  );
}

export default App;
