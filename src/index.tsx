import React from 'react';

interface HelloWordProps {
  name: string;
}

export const HelloWord: React.FC<HelloWordProps> = ({ name }) => {
  return <h1>Hello Word {name}</h1>;
};
