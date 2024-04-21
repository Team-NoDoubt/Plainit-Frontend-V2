import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { PlanitLogo, Profile } from '@/assets';

export default function Header() {
  return (
    <Container>
      <Image src={PlanitLogo} alt='PlanitLogo' />
      <NavItemWrapper>
        <NavItem>시간표 관리</NavItem>
        <UserProfile>
          <Image src={Profile} alt='profileIcon' />
          동욱T
        </UserProfile>
      </NavItemWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 800px;
  height: 80px;
  padding: 0 10%;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  z-index: 100;
`;

const NavItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 100px;
`;

const NavItem = styled.div`
  font: ${({ theme }) => theme.fonts.Regular20};
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font: ${({ theme }) => theme.fonts.Semibold20};
  color: #24305e;
`;
