import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header'
import CommentList from './components/CommentList'
import InfoMessage from './components/InfoMessage'
import { useDispatch, useSelector } from "react-redux";
import CommentCount from './components/CommentCount';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.comments.isLoading);
  const [error, setError] = useState(false)
  useEffect(()=> {
    setError(false)
    dispatch({ type: "comments/startedLoading" })
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "comments/added", payload: data })
        dispatch({ type: "comments/initialized" })
      })
      .catch((err) => {
        if (err) {
          setError(true)
          dispatch({ type: "comments/finishedLoading" })
        }
      })
  }, [dispatch])
  return (
    <div className="app">
      <div className="app-container">
        <Header />
        {isLoading && <InfoMessage status="loading" />}
        {error && <InfoMessage status="error" />}
        <CommentCount />
        {!error && !isLoading && <CommentList />}
      </div>
    </div>
  );
}

export default App;
