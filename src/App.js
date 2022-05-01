import Header from "./Components/Header";
import feedBackData from "./Data/data";
import { useState } from "react";
import FeedBackList from "./Components/FeedBackList";
import Stats from './Components/Stats'
import FeedBackForm from "./Components/FeedBackForm";
function App() {
  const [feedBack, setFeedBack] = useState(feedBackData)
  const [darkmode, setDarkmode] = useState(true)

  const handleDelete = (id) => {
    if(window.confirm("Do you want to delete?")){
      const filteredItems = feedBack.filter( item => item.id !== id )
      setFeedBack(filteredItems)
    }
  }
  const handleThemeMode = () => {
    (darkmode)? setDarkmode(false): setDarkmode(true)
  }
  return (
    <>
      <Header text="FeedBack UI" darkmode={darkmode} handleThemeMode={handleThemeMode}/>
      <FeedBackForm darkmode={darkmode}/>
      <Stats feedBack={feedBack}/>
      <FeedBackList feedBack={feedBack} handleDelete={handleDelete} darkmode={darkmode}/>
    </>
  );
}

export default App;
