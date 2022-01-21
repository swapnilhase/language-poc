import {useState, useEffect} from 'react';
import './App.css';
import { langCodes } from './languageCodes';

function App() {
  const [userLanguage, setUserLanguage] = useState('');

  useEffect(()=> {
    setUserLanguage(langCodes[(navigator.language || navigator.userLanguage || 'en').toLowerCase()]);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Browser Language Preference
      </header>
      Your browser language preference is <b><i>{userLanguage}</i></b>
    </div>
  );
}

export default App;
