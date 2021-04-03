import './App.css';
import Header from './components/Header'
import TeachSign from './components/TeachSign';
import StdSign from './components/StdSign'
import StdForm from './components/StdForm'
import TeachForm from './components/TeachForm'
import StdSelect from './components/StdSelect'
import TeachPage from './components/TeachPage'
import StudentPage from './components/StudentPage'
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Route exact path="/" component={Header} />
      <Route path="/teachSign" component={TeachSign}/>
      <Route path="/StdSign" component={StdSign}/>
      <Route path ="/StdForm" component={StdForm}/>
      <Route path="/teachForm" component={TeachForm}/>
      <Route path="/StdSelect" component={StdSelect}/>
      <Route path="/TeachPage" component={TeachPage}/>
      <Route path="/StudentPage" component={StudentPage}/>
    </Router>
  );
}

export default App;
