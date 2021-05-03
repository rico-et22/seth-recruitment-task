import styled from "styled-components";

const Button = styled.button`
  background: #d8d8d8;
  border: 2px solid #bfbfbf;
  border-radius: 0.125rem;
  font-family: inherit;
  color: inherit;
  &:active {
    background: #eee;
  }
  &:disabled {
    opacity: 0.5;
  }
  &.green {
    background: #4ade80;
    padding: 0.5rem 1rem;
    border-color: #86efac;
    font-size: 1rem;
    border-radius: 0.25rem;
    &:active {
      background: #bbf7d0;
    }
  }
  &.comment-tr:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }
`;

const ActionButton = (props) => {
  const { children, onClick, disabled, className } = props;

  return (
    <Button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </Button>
  );
};

export default ActionButton;
