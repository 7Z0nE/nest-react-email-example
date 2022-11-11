import * as React from 'react';
import { BaseProps } from './props.interface';
import { Box, Item, A } from 'react-html-email';
import { Paragraph, Title } from './Typography';

export const Footer = ({ to, t }: BaseProps) => {
  return (
    <Box style={{ marginTop: '50px' }}>
      <Item>
        <Paragraph type="secondary" size="medium">
          Yourcompany Ltd
        </Paragraph>
        <Paragraph type="secondary" size="small">
          Hauptstrasse. 123, 12345, Berlin, Germany
        </Paragraph>
        <Paragraph type="secondary" size="small">
          Management: Max Mustermann, Erika Musterfrau
        </Paragraph>
        <Paragraph type="secondary" size="small">
          Register: Amtsgericht Potsdam HRB 36677P
        </Paragraph>
        <Paragraph type="secondary" size="small">
          <a>https://yourcompany.com</a>
        </Paragraph>
        <Paragraph type="secondary" size="small">
          {t('Footer.SentTo', { args: { to } })}
        </Paragraph>
      </Item>
    </Box>
  );
};
