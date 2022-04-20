import Header from "./Components/Header";
import feedBackData from "./Data/data";
import { useState } from "react";
import FeedBackList from "./Components/FeedBackList";
import Stats from './Components/Stats'
import FeedBackForm from "./Components/FeedBackForm";
function App() {
  const [feedBack, setFeedBack] = useState(feedBackData)

  const handleDelete = (id) => {
    if(window.confirm("Do you want to delete?")){
      const filteredItems = feedBack.filter( item => item.id !== id )
      setFeedBack(filteredItems)
    }
  }
  return (
    <>
      <Header text="FeedBack UI"/>
      <FeedBackForm/>
      <Stats feedBack={feedBack}/>
      <FeedBackList 
        feedBack={feedBack}
        handleDelete={handleDelete}
        />
    </>
  );
}

export default App;
