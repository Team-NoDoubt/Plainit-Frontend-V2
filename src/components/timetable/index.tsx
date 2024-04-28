import React from 'react';
import styled from 'styled-components';
import TimetableSheet from './TimetableSheet.tsx';

export default function Timetable() {
  return (
    <Wrapper>
      <Stack>
        <Select>
          <option>1학년</option>
          <option>2학년</option>
          <option>3학년</option>
        </Select>
        <Select>
          <option>1반</option>
          <option>2반</option>
          <option>3반</option>
          <option>4반</option>
        </Select>
      </Stack>
      <TimetableSheet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  height: 600px;
`;

const Stack = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  width: 100px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.colors.Main};
  border-radius: 10px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
