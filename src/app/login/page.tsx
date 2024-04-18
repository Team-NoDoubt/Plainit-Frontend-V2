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
        <AuthInput label="아이디" value={id} onChange={onChange} name="id" />
        <AuthInput label="비밀번호" value={password} onChange={onChange} name="password" type="password" />
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
`;

const Logo = styled.img`
  width: 245px;
  height: 50px;
`;

const IconLeft = styled.img`
  float: left;
  position: absolute;
  left: 0;
  height: 450px;
  margin-top: 14vh;
`;

const IconRight = styled.img`
  float: right;
  position: absolute;
  right: 0;
  margin-bottom: 20vh;
  height: 450px;
`;

const Input = styled.input`
  float: left;
  width: 440px;
  height: 60px;
  border: none;
  outline: none;
  padding-left: 15px;
  font: ${({ theme }) => theme.fonts.Regular16};
  border-bottom: 3px solid ${({ theme }) => theme.colors.LoginInput};
`;

const LoginBtn = styled.button`
  width: 180px;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.Main};
  font: ${({ theme }) => theme.fonts.Regular20};
  color: ${({ theme }) => theme.colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #dfdfde;
    cursor: default;
  }
`;
