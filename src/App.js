import './App.css';
import { Helmet } from "react-helmet";
import TodoApp from './TodoApp';



function App() {
  return (
      <>
        <Helmet>
          <title>TodoApp</title>
        </Helmet>
        <TodoApp/>
      </>
    );
}

export default App;
