import React from 'react';
import styled from 'styled-components';
import { dateList, classList } from '@/constant/timetable';

export default function TimetableSheet() {
  return (
    <Container>
      <DateWrapper>
        {dateList.map((item) => (
          <DateItem key={item}>{item}</DateItem>
        ))}
      </DateWrapper>
      <ContentsWrapper>
        <ClassWrapper width='calc(100% / 11)'>
          {Array.from({ length: 7 }, (_, i) => i + 1).map((item) => (
            <ItemBox key={item}>{item}</ItemBox>
          ))}
        </ClassWrapper>
        {classList.map((classes, i) => (
          <ClassWrapper key={classes[0] + i} width='20%'>
            {classes.map((classItem, index) => (
              <ItemBox key={classItem + index}>{classItem}</ItemBox>
            ))}
          </ClassWrapper>
        ))}
      </ContentsWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  min-width: 540px;
  height: calc(100% - 60px);
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding-left: calc(100% / 11);
  background-color: ${({ theme }) => theme.colors.Main};
  border-radius: 20px 20px 0 0;
`;

const DateItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 100%;
  color: white;
  font: ${({ theme }) => theme.fonts.Regular28};
`;

const ContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 70px);
  z-index: 100;
  border-radius: 0 0 20px 20px;
`;

const ClassWrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 100%;
  border-right: 1px solid #ebebeb;
`;

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% / 7);
  font: ${({ theme }) => theme.fonts.Regular32};
`;
