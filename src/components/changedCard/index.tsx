import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { CompareArrows } from '@/assets';

export default function ChangedCard() {
  return (
    <Wrapper>
      <Stack>
        <Text size='Regular16'>8 / 21 (월) 2교시</Text>
        <Text size='Medium24'>한국사</Text>
        <Text size='Medium20'>박서영</Text>
      </Stack>
      <Image src={CompareArrows} alt='CompareArrows' />
      <Stack>
        <Text size='Regular16'>8 / 22 (화) 3교시</Text>
        <Text size='Medium24'>운동과 건강</Text>
        <Text size='Medium20'>김현태</Text>
      </Stack>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 120px;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  margin-top: 30px;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div<{ size: string }>`
  font: ${({ theme, size }) => theme.fonts[size]};
`;
