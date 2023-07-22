import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 300px;
  padding: 40px 40px;
  background-color: #cdffd7;
  border-radius: 15px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
`;
export const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  font-size: 20px;
  font-weight: 700;
  color: #9f9fba;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  outline: 1px solid #9f9fba;
`;
export const StatList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding: 0;

`;
export const StatItem = styled.li`
  display: flex;
  width: 60px;
  flex-direction: column;
  padding-top: 14px;
  padding-bottom: 14px;

  &:first-of-type {
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border: none;
    border-bottom-right-radius: 5px;
  }
`;
export const Label = styled.span`
  margin-bottom: 10px;
  text-align: center;
  color: white;
  font-weight:500;

`;
export const Percentage = styled.span`
  text-align: center;
  color: white;
  font-weight: 500;
  font-size:18px;

`;
