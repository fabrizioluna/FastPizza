// Si el config.type es igual a true, será igual a una dirección externa
// de lo contrario será un botón con direccionamiento interno(Link).

import Link from 'next/link';
import React, { ReactNode } from 'react';

interface ButtonTypes {
  config: {
    type: boolean;
    color: string;
    link?: string;
  };
  children: ReactNode;
}

interface ParamsTypes {
  params: {
    color: string;
    link?: string;
    repo?: string;
  };
  children: ReactNode;
  type: boolean;
}
export const Button = ({ config, children }: ButtonTypes) => {
  return (
    <div>
      {config.type ? (
        <GenerateButton
          type={true}
          params={{
            color: config.color,
            link: config.link,
          }}
        >
          {children}
        </GenerateButton>
      ) : (
        <GenerateButton
          type={false}
          params={{
            color: config.color,
            link: config.link,
          }}
        >
          {children}
        </GenerateButton>
      )}
    </div>
  );
};

const GenerateButton = ({ type, params, children }: ParamsTypes) => {
  return !type ? (
    <Link href={params.link as string}>
      <button className={GenerateColor(params.color)}>{children}</button>
    </Link>
  ) : (
    <a
      className={GenerateColor(params.color)}
      target='_blank'
      rel='noreferrer'
      href={params.link}
    >
      {children}
    </a>
  );
};

const GenerateColor = (color: string) => {
  const colorsAvailable = [
    {
      color: 'secondary',
    },
    {
      color: 'primary',
    },
    // {
    //   color: 'black',
    // },
  ];

  // El valor inicial será siempre primary
  let colorApply = 'primary';

  colorsAvailable.map((element) => {
    if (element.color === color) {
      return (colorApply = element.color);
    }
  });

  return `${colorApply}Button`;
};
