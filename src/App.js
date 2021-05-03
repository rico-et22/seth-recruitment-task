import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header'
import Container from './components/Container'
import CommentList from './components/CommentList'
import InfoMessage from './components/InfoMessage'
import NewCommentForm from './components/NewCommentForm'
import { useDispatch, useSelector } from "react-redux";
import CommentCount from './components/CommentCount';
import Pagination from './components/Pagination'

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
        dispatch({ type: "comments/added", payload: {data} })
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
      <Header />
      <Container>
        {isLoading && <InfoMessage status="loading" />}
        {error && <InfoMessage status="error" />}
        <CommentCount />
        <NewCommentForm />
        {!error && !isLoading && (
          <>
            <CommentList />
            <Pagination />
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
