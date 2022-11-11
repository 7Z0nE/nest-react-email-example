import * as React from 'react';
import { MjmlColumn, MjmlSection, MjmlText } from 'mjml-react';
import { TFunction } from './props.interface';
import { Paragraph } from './Typography';

export interface GreetingProps {
  name: string;
  t: TFunction;
}

export const GreetingHi = ({ name, t }: GreetingProps) => {
  return <Paragraph>{t('Greeting.Hi', { args: { name } })}</Paragraph>;
};
