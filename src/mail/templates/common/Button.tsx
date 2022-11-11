import * as React from 'react';
import { buttonText, primary, white } from './Colors';
import { Text } from './Typography';

interface ButtonProps {
  link: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ link, children, size = 'medium' }: ButtonProps) => {
  return (
    <a
      href={link}
      font-size={20}
      style={{
        display: 'inline-block',
        padding: 16,
        borderRadius: 16,
        backgroundColor: primary,
        color: buttonText,
        textDecoration: 'none',
      }}
    >
      <Text bold size={size} type={buttonText}>
        {children}
      </Text>
    </a>
  );
};
