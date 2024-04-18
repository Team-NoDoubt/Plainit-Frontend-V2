import { InputType } from "@/hooks/useInput";
import { InputHTMLAttributes, useState } from "react";
import styled from "styled-components";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    onChange: (e: InputType) => void;
}

interface AgeLabelProps {
    isFocused: boolean;
    isTop: boolean
}

const AuthInput = ({ label, onChange, value, ...props }: AuthInputProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <InputWrapper>
            <AgeLabel isFocused={isFocused} isTop={isFocused || !!value}>{label}</AgeLabel>
            <Input onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} value={value} onChange={onChange} {...props} />
        </InputWrapper>
    )
}

const InputWrapper = styled.label`
    position: relative;
    p {
        position: absolute;
        right: 0;
        bottom: 10px;
        font: ${({ theme }) => theme.fonts.TextMd};
        float: right;
        margin-top: 60px;
    }
`;

const Input = styled.input`
    width: 360px;
    margin-top: 60px;
    padding-bottom: 8px;
    border-bottom: 2px solid gray;
    background-color: transparent;
    &::placeholder {
        float: right;
        font: ${({ theme }) => theme.fonts.Medium16};
        color: black;
    }
    &:focus {
        border-bottom: 2px solid ${({ theme }) => theme.colors.Main};
    }
    font: ${({ theme }) => theme.fonts.Medium16};
    &::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
`;

const AgeLabel = styled.label<AgeLabelProps>`
    position: absolute;
    top: ${({ isTop }) => (isTop ? '2rem' : '3.75rem')};
    font: ${({ theme, isTop }) => (isTop ? theme.fonts.Regular12 : theme.fonts.Medium16)};
    color: ${({ theme, isFocused }) => (isFocused ? theme.colors.Main : 'gray')};
    transition: all 0.25s ease-in-out;
`;

export default AuthInput