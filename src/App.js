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
  const [noItems, setNoItems] = useState(false)
  useEffect(()=> {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) setNoItems(true)
        dispatch({ type: "comments/added", payload: data })
        setIsLoading(false)
      })
      .catch((err) => {if (err) setError(true)})
    setIsLoading(false)
  }, [])
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        {isLoading && <InfoMessage status="loading" />}
        {noItems && <InfoMessage status="noItems" />}
        {error && <InfoMessage status="error" />}
        <CommentCount />
        <CommentList />
      </div>
    </div>
  );
}

export default App;
