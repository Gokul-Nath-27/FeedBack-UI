import Header from "./Components/Header";
import FeedBackList from "./Components/FeedBackList";
import Stats from './Components/Stats'
import FeedBackForm from "./Components/FeedBackForm";
import { FeedbackProvider } from "./Context/FeedbackContext";

function App() {

  
  return (
      <FeedbackProvider>
        <Header text={"FeedBack UI"}/>
        <FeedBackForm />
        <Stats />
        <FeedBackList />
      </FeedbackProvider>
      );
}

export default App;
