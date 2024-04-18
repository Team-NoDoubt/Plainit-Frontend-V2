'use client'
import AuthInput from "@/components/authInput/index";
import { useInput } from "@/hooks/useInput";
import styled from "styled-components"

interface LoginFormType {
  id: string;
  password: string;
}

export default function Home() {
  const { form, onChange } = useInput<LoginFormType>({
    id: "",
    password: ""
  })
  const { id, password } = form
  return (
    <LoginArea>
      <IconLeft src="/LoginLeft.svg" />
      <IconRight src="/LoginRight.svg" />
      <Logo src="/PlanitLogo.svg" />
      <form>
        <InputWrapper>
          <AuthInput label="아이디" value={id} onChange={onChange} name="id" />
          <AuthInput label="비밀번호" value={password} onChange={onChange} name="password" type="password" />
        </InputWrapper>
        <LoginBtn disabled={!id || !password}>로그인</LoginBtn>
      </form>
    </LoginArea>
  )
}

const LoginArea = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  gap: 60px;
  min-width: 500px;
`;

const Logo = styled.img`
  width: 245px;
  height: 50px;
`;

const IconLeft = styled.img`
  position: absolute;
  left: 0;
  height: 450px;
  margin-top: 14vh;
`;

const IconRight = styled.img`
  position: absolute;
  right: 0;
  margin-bottom: 20vh;
  height: 450px;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
`

const LoginBtn = styled.button`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 360px;
    height: 52px;
    margin-top: 60px;
    border-radius: 12px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.White};
    background-color: ${({ theme }) => theme.colors.Main};
    font: ${({ theme }) => theme.fonts.Regular20};
    border: none;
    &:disabled {
    background-color: #dfdfde;
    cursor: default;
  }
`;
