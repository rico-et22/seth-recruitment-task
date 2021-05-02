import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header'
import CommentList from './components/CommentList'
import InfoMessage from './components/InfoMessage'
import { useDispatch } from "react-redux";
import CommentCount from './components/CommentCount';

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  useEffect(()=> {
    setError(false)
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "comments/added", payload: data })
        setIsLoading(false)
      })
      .catch((err) => {if (err) setError(true)})
    setIsLoading(false)
  }, [dispatch])
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        {isLoading && <InfoMessage status="loading" />}
        {error && <InfoMessage status="error" />}
        <CommentCount />
        {!error && <CommentList />}
      </div>
    </div>
  );
}

export default App;
