import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 40px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  margin-right: 25px;
  border-radius: 50%;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
`;

export const Name = styled.p`
  margin-left: 20px;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  color: #181818;
`;
