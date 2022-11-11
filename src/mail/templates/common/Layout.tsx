import * as React from 'react';
import { Footer } from './Footer';
import { Logo } from './Logo';
import { BaseProps } from './props.interface';
import { Email, Box, Item } from 'react-html-email';

export interface LayoutProps extends BaseProps {
  children: React.ReactNode;
  title: string;
  preview: string;
}

export const Layout = ({ to, t, title, children }: LayoutProps) => {
  return (
    <Email style={{ width: '100%' }} title={title}>
      <Box style={{ fontFamily: 'Arial, "Inter"', width: '100%' }}>
        <Item align="center">
          <div
            style={{ maxWidth: '350px', marginTop: '50px', textAlign: 'left' }}
          >
            <Box>
              <img
                width="150"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Wikiporn.png"
              />
            </Box>
            <Box>{children}</Box>
            <Footer t={t} to={to} />
          </div>
        </Item>
      </Box>
    </Email>
  );
};
