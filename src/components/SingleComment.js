import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import ActionButton from "./ActionButton"

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  padding: .25rem;
  width: 100%;
  border: 1px solid #A1A1AA;
  border-radius: .25rem;
`

const TextArea = styled.textarea`
  font-family: inherit;
  font-size: inherit;
  min-width: 100%;
  max-width: 100%;
  resize: vertical;
  padding: .25rem;
  border: 1px solid #A1A1AA;
  border-radius: .25rem;
  min-height: 10rem;
`

const ErrorMessage = styled.p`
  color: #EF4444;
  font-weight: bold;
`

const SingleComment = (props) => {
  const {postId, id, name, email, body} = props.commentData
  const [editMode, setEditMode] = useState(false)
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false)
  const [showErrorMessage, setShowErrorMessage] = useState(false)
  const [editModeData, setEditModeData] = useState({})
  const dispatch = useDispatch()
  useEffect(() => {
    setEditModeData({
      postId,
      id,
      name,
      email,
      body
    })
  }, [postId, id, name, email, body])
  const saveEditedData = () => {
    setShowErrorMessage(false)
    setSaveButtonDisabled(true)
    fetch(`https://jsonplaceholder.typicode.com/comments/${editModeData.id}`, {
      method: 'PUT',
      body: JSON.stringify(editModeData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          dispatch({ type: "comments/updated", payload: editModeData })
          setSaveButtonDisabled(false)
          setEditMode(false)
        }
      })
      .catch(() => {setShowErrorMessage(true)})
  }
  if (editMode) return (
    <tr>
      <td>{id}</td>
      <td>
        <Input
          type="number"
          value={editModeData.postId}
          onChange={(e) =>
            setEditModeData({ ...editModeData, postId: Number(e.target.value) })
          }
          min="0"
        />
      </td>
      <td>
        <Input
          type="text"
          value={editModeData.name}
          onChange={(e) =>
            setEditModeData({ ...editModeData, name: e.target.value })
          }
        />
      </td>
      <td>
        <Input
          type="text"
          value={editModeData.email}
          onChange={(e) =>
            setEditModeData({ ...editModeData, email: e.target.value })
          }
        />
      </td>
      <td>
        <TextArea
          type="text"
          value={editModeData.body}
          onChange={(e) =>
            setEditModeData({ ...editModeData, body: e.target.value })
          }
        />
        {showErrorMessage && <ErrorMessage>Błąd zapisu.</ErrorMessage>}
      </td>
      <td>
        <ActionButton
          onClick={() => saveEditedData()}
          disabled={saveButtonDisabled}
          className="comment-tr"
        >
          Zapisz
        </ActionButton>
        <ActionButton onClick={() => setEditMode(false)} className="comment-tr">
          Zamknij edycję
        </ActionButton>
      </td>
    </tr>
  );
  else return (
    <tr>
      <td>{id}</td>
      <td>{postId}</td>
      <td>{name}</td>
      <td><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a></td>
      <td>{body}</td>
      <td>
        <ActionButton onClick={() => setEditMode(true)} className="comment-tr">Edytuj</ActionButton>
      </td>
    </tr>
  )
}

export default SingleComment