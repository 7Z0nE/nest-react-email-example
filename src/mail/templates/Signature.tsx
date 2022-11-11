import * as React from 'react';
import { TFunction } from './common/props.interface';
import { Paragraph } from './common/Typography';

interface SignatureProps {
  name: string;
  t: TFunction;
}

export const SentWithLove = ({ t, name }: SignatureProps) => {
  return (
    <>
      <Paragraph>{t('Signature.SentWithLove')}</Paragraph>
      <Paragraph>{name}</Paragraph>
    </>
  );
};
