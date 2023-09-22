import { FC } from 'react';

import './style.css';

const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g;
const quotes = 'single';

import icons from './icons';

function encodeSVG(data) {
  data = data.replace(/'/g, `"`);
  data = data.replace(/>\s{1,}</g, `><`);
  data = data.replace(/\s{2,}/g, ` `);
  // Using encodeURIComponent() as replacement function
  // allows to keep result code readable
  return data.replace(symbols, encodeURIComponent);
}

const getIconWithColor = (icon, color) => {
  return `url('data:image/svg+xml;utf8,${encodeSVG(
    icon.replaceAll('#E2E2E2', color)
  )}')`;
};

export const Icon: FC<{
  name: string;
  color: {
    main: string;
  };
}> = ({ name, color }) => {
  const result = getIconWithColor(icons[name], color.main);
  console.log(`background: ${result}`);
  return (
    <div
      onMouseEnter={() => {}}
      onMouseLeave={() => {}}
      style={{
        background: result,
        backgroundRepeat: 'no-repeat',
        width: 16,
        height: 16,
      }}
    />
  );
};
