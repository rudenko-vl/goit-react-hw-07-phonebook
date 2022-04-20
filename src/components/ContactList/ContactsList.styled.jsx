import styled from "styled-components";

export const List = styled.ul`
  margin-top: 30px;
`;

export const Item = styled.li`
  width: 400px;
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 15px;
  }
  ::before {
    content: "🙎‍♂️";
  }
`;
export const Btn = styled.button`
  width: 65px;
  height: 25px;
  color: red;
  font-size: 12px;
  font-weight: 600;
  margin-left: 15px;
  border-radius: 6px;
  cursor: pointer;
  :hover {
    background: pink;
    color: black;
  }
`;
export const Error = styled.h1`
margin-top: 20px;
 color: red;
`;