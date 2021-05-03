import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, {css} from "styled-components";
import ActionButton from "./ActionButton";
import validateEmail from "../helpers/validateEmail"

const FormWrapper = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: 1rem;
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  margin-bottom: 1.5rem;
`
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`
const H2 = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  @media (max-width: 767.98px) {
    font-size: 1.25rem;
  }
`
const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: auto;
  display: flex;
  align-items: center;
`
const FormItem = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
  @media (max-width: 767.98px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
const Label = styled.p`
  margin: 0;
  width: 10rem;
  @media (max-width: 767.98px) {
    margin-bottom: .25rem;
    margin-left: 0;
  }
  ${(props) =>
    props.error &&
    css`
      color: #DC2626;
      font-weight: bold;
      margin-left: 1rem;
      width: auto;
      @media (max-width: 767.98px) {
        margin-top: .25rem;
      }
    `
  }
  ${(props) =>
    props.success &&
    css`
      color: #15803D;
      font-weight: bold;
      margin-left: 1rem;
      width: auto;
      @media (max-width: 767.98px) {
        margin-top: .25rem;
      }
    `
  }
`
const Input = styled.input`
  font-family: inherit;
  font-size: 1rem;
  border: 1px solid #A1A1AA;
  border-radius: .25rem;
  padding: .25rem;
`
const TextArea = styled.textarea`
  font-family: inherit;
  font-size: 1rem;
  width: 100%;
  max-width: 40rem;
  resize: vertical;
  min-height: 10rem;
  padding: .25rem;
  border: 1px solid #A1A1AA;
  border-radius: .25rem;
`

const NewCommentForm = () => {
  const [newCommentData, setNewCommentData] = useState({
    postId: 0,
    name: '',
    email: '',
    body: ''
  })
  const [newCommentErrors, setNewCommentErrors] = useState({})
  const [sendError, setSendError] = useState(false)
  const [sendSuccess, setSendSuccess] = useState(false)
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(false)
  const dispatch = useDispatch()
  const lastCommentId = useSelector((state) => state.comments.data[state.comments.data.length - 1]?.id)
  const isOpen = useSelector((state) => state.newCommentForm.showForm)

  const addComment = () => {
    setNewCommentErrors({
      name: false,
      email: '',
      body: false
    })
    setSendError(false)
    setSaveButtonDisabled(true)
    setSendSuccess(false)
    let emptyName, emptyEmail, invalidEmail, emptyBody
    if (!newCommentData.name) emptyName = true
    if (!newCommentData.email) emptyEmail = true
    if (!validateEmail(newCommentData.email)) invalidEmail = true
    if (!newCommentData.body) emptyBody = true
    if (!emptyName && !emptyEmail && !invalidEmail && !emptyBody) {
      fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(newCommentData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "comments/added", payload: {
          ...json,
          id: lastCommentId + 1
        } })
        setSendSuccess(true)
        setNewCommentData({
          postId: 0,
          name: '',
          email: '',
          body: ''
        })
        setTimeout(() => {
          setSendSuccess(false)
        }, 3000);
        setSaveButtonDisabled(false)
      })
      .catch(() => {
        setSendError(true)
        setSaveButtonDisabled(false)
      })
    } else {
      setSaveButtonDisabled(false)
      setNewCommentErrors({
        name: emptyName,
        email: emptyEmail ? 'empty' : invalidEmail ? 'invalid' : '',
        body: emptyBody
      })
    }
  }
  if (isOpen) return (
    <div>
      <FormWrapper>
        <HeaderWrapper>
          <H2>Dodawanie komentarza</H2>
          <CloseButton onClick={() => dispatch({ type: "newCommentForm/hide"})}>
            <svg style={{"width":"24px", "height":"24px"}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </CloseButton>
        </HeaderWrapper>
        <FormItem>
          <Label>ID artykułu</Label>
          <Input type="number" min="0" value={newCommentData.postId}
          onChange={(e) =>
            setNewCommentData({ ...newCommentData, postId: Number(e.target.value) })
          }/>
        </FormItem>
        <FormItem>
          <Label>Nazwa użytkownika</Label>
          <Input type="text" value={newCommentData.name}
          onChange={(e) =>
            setNewCommentData({ ...newCommentData, name: e.target.value })
          }/>
          {newCommentErrors.name && <Label error>Pole nie może być puste.</Label>}
        </FormItem>
        <FormItem>
          <Label>E-mail użytkownika</Label>
          <Input type="text" value={newCommentData.email}
          onChange={(e) =>
            setNewCommentData({ ...newCommentData, email: e.target.value })
          }/>
          {newCommentErrors.email === "empty" && <Label error>Pole nie może być puste.</Label>}
          {newCommentErrors.email === "invalid" && <Label error>Niepoprawny e-mail.</Label>}
        </FormItem>
        <FormItem>
          <Label>Treść</Label>
          <TextArea value={newCommentData.body}
          onChange={(e) =>
            setNewCommentData({ ...newCommentData, body: e.target.value })
          }/>
          {newCommentErrors.body && <Label error>Pole nie może być puste.</Label>}
        </FormItem>
        <FormItem>
          <ActionButton className="green" onClick={() => addComment()} disabled={saveButtonDisabled}>
            Dodaj komentarz
          </ActionButton>
          {sendError && <Label error>Błąd zapisu.</Label>}
          {sendSuccess && <Label success>Pomyślnie dodano komentarz.</Label>}
        </FormItem>
      </FormWrapper>
    </div>
  )
  else return null
}

export default NewCommentForm