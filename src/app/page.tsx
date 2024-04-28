'use client';

import React from 'react';
import styled from 'styled-components';
import Header from '@/components/header';
import Timetable from '@/components/timetable';
import ChangedCard from '@/components/changedCard';

export default function page() {
  return (
    <>
      <Header />
      <Container>
        <Timetable />
        <ChangedCardList>
          <ChangedCardListTitle>변경된 시간표</ChangedCardListTitle>
          <ChangedCard />
          <ChangedCard />
          <ChangedCard />
          <ChangedCard />
          <ChangedCard />
        </ChangedCardList>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100vw;
  min-width: 1100px;
  height: 100vh;
  background-color: #f3f7fd;
`;

const ChangedCardList = styled.div`
  min-width: 340px;
  width: 30%;
  height: 70%;
  padding: 26px 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: scroll;
  scrollbar-width: auto;
  scrollbar-color: ${({ theme }) => theme.colors.Main} white;
`;

const ChangedCardListTitle = styled.div`
  text-align: center;
  font: ${({ theme }) => theme.fonts.Medium32};
`;
