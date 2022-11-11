import * as React from 'react';
import { danger, primaryText, secondaryText, white } from './Colors';

function resolveSize(size: 'small' | 'medium' | 'large') {
  switch (size) {
    case 'small':
      return '14px';
    case 'medium':
      return '16px';
    case 'large':
      return '20px';
    default:
      return '14px';
  }
}

function resolveTypeColor(
  color: 'primary' | 'secondary' | 'danger' | 'white' | string,
) {
  switch (color) {
    case 'primary':
      return primaryText;
    case 'secondary':
      return secondaryText;
    case 'danger':
      return danger;
    case 'white':
      return white;
    default:
      return color;
  }
}

export interface TitleProps {
  level: number;
  children: React.ReactNode;
}

export const Title = ({ level, children }: TitleProps) => {
  switch (level) {
    case 1:
      return <h1>{children}</h1>;
    case 2:
      return <h2>{children}</h2>;
    case 3:
      return <h3>{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      return <h1>{children}</h1>;
  }
};

export interface ParagraphProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'danger' | 'white';
}

export const Paragraph = ({
  children,
  size = 'medium',
  type = 'primary',
}: ParagraphProps) => {
  return (
    <p
      style={{
        color: resolveTypeColor(type),
        lineHeight: '1.2',
        fontWeight: 'lighter',
        fontSize: resolveSize(size),
      }}
    >
      {children}
    </p>
  );
};

export interface TextProps {
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'secondary' | 'danger' | 'white' | string;
  bold?: boolean;
}

export const Text = ({
  children,
  size = 'medium',
  type = 'primary',
  bold = false,
}: TextProps) => {
  return (
    <span
      style={{
        color: resolveTypeColor(type),
        fontSize: resolveSize(size),
        fontWeight: bold ? 'bold' : 'lighter',
      }}
    >
      {children}
    </span>
  );
};
