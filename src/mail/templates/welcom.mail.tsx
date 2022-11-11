import * as React from 'react';
import { Layout } from './common/Layout';
import { BaseProps } from './common/props.interface';
import { GreetingHi } from './common/Greeting';
import { Box, Item } from 'react-html-email';
import { Paragraph, Title } from './common/Typography';
import { SentWithLove } from './Signature';
import { Button } from './common/Button';

export interface WelcomeMailProps extends BaseProps {
  name: string;
}

export const Template = ({ name, t, to }: WelcomeMailProps) => {
  return (
    <Layout
      t={t}
      to={to}
      title={t('Welcome.Title')}
      preview={t('Welcome.Preview')}
    >
      <Item>
        <Title level={2}>{t('Welcome.Title')}</Title>
      </Item>
      <Item>
        <GreetingHi name={name} t={t} />
      </Item>
      <Item>
        <Paragraph>{t('Welcome.Body')}</Paragraph>
      </Item>
      <Item style={{ textAlign: 'center' }}>
        <Button link={t('Welcome.Button.Link')}>
          {t('Welcome.Button.Text')}
        </Button>
      </Item>
      <Item style={{ paddingTop: '16px' }}>
        <SentWithLove name={t('Welcome.Signature.Name')} t={t} />
      </Item>
    </Layout>
  );
};
