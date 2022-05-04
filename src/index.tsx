import React from 'react';

interface Props {
  name: string;
}

export const HelloWord = ({ name }: Props) => {
  return <h1>Hello Word {name}</h1>;
};
