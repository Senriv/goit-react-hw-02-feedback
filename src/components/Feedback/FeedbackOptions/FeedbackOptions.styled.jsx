import styled from '@emotion/styled';

export const FeedbackBtnList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const FeedbackBtnItem = styled.li`
  margin: 0 10px;
`;

export const FeedbackBtn = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-transform: capitalize;
  
  &:hover {
    background-color: #45a049;
  }
`;
