import { useEffect } from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
  width: 100%;
  min-height: 15rem;
  background: #f6f6f6;
  border: 2px solid #bfbfbf;
  border-radius: 1rem;
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    background: #fff;
    height: 2.5rem;
    text-align: left;
    padding: .5rem 1rem;
  }
  th:first-of-type {
    border-radius: 1rem 0 0 0;
  }
  th:last-of-type {
    border-radius: 0 1rem 0 0;
  }
  th:nth-of-type(4) {
    min-width: 15rem;
  }
  tr:nth-of-type(odd) {
    background: #fafafa;
  }
  tr:nth-of-type(even) {
    background: #fff;
  }
  tr:last-of-type {
    border-radius: 1rem;
  }
  tr:last-of-type td:first-of-type {
    border-radius: 0 0 0 1rem;
  }
  tr:last-of-type td:last-of-type {
    border-radius: 0 0 1rem 0;
  }
  td {
    height: 3.5rem;
    padding: .5rem 1rem;
  }
  td:nth-of-type(5) {
    white-space: pre;
  }
`;

const ReusableTable = (props) => {
  const {id} = props;
  useEffect(() => {
    const tableFixHead = (e) => {
      const sT = window.scrollY
      const tableOffset = document.getElementById(id).offsetTop
      document.querySelectorAll(`#${id} thead th`).forEach(th => {
        if (window.scrollY > tableOffset) th.style.transform = `translate3d(0, ${sT - tableOffset}px, 0)`
        else th.style.transform = `translateY(0px)`
      })
    }
    window.addEventListener("scroll", tableFixHead)
  }, [id])
  return (
    <TableWrapper className="tableFixHead">
      <Table id={id}>{props.children}</Table>
    </TableWrapper>
  );
};

export default ReusableTable;
