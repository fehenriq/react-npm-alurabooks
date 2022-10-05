import React from 'react';
import { AbCard } from '../src/components/AbCard';
import { ComponentMeta } from '@storybook/react';

export default {
  title: 'components/AbCard',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

export const CardComponent = () => {
  return (
    <AbCard>
      <h1>Olá, eu sou um card</h1>
    </AbCard>
  )
}