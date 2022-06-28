import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

const VALIDATOR = {
  email: {
    required: { value: true, message: '이메일을 입력해 주세요' },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: '옳바른 이메일형식을 입력해주세요',
    },
  },
  password: {
    required: { value: true, message: '비밀번호를 입력해 주세요' },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i,
      message:
        '비밀번호는 문자 숫자 특수문자의 조합으로 8자 이상으로 입력해주세요',
    },
  },
};

export default function LoginInputValidator({
  register,
  name,
  placeholder,
  type,
  isError,
}) {
  return (
    <Input
      type={type}
      isError={isError}
      {...register(name, VALIDATOR[name])}
      placeholder={placeholder}
    />
  );
}

const Input = styled.input.attrs((p) => ({ placeholder: p.placeholder }))`
  background-color: transparent;
  padding: 10px;
  border: 1px solid ${colors.darkGray};
  border-color: ${(p) => (p.isError ? colors.darkOrange : colors.darkGray)};
  border-width: ${(p) => (p.isError ? '2px' : '1px')};
  border-radius: 3px;
  transition: all 0.2s;
  font-size: 12px;
  width: 270px;
  height: 38px;
  &:focus {
    border: 2px solid ${colors.blue};
    outline: none;
  }
`;
