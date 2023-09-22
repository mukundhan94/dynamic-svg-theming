import { FC, useState } from 'react';
import { Icon } from './Icon';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [state, setState] = useState({
    main: 'green',
  });

  return (
    <div>
      <div className="icons">
        <Icon name="keys" color={state} />
        <Icon name="schema" color={state} />
        <Icon name="keys" color={state} />
        <Icon name="schema" color={state} />
      </div>
      <input
        value={state.main}
        onChange={(e) => setState({ ...state, main: e.target.value })}
      />
    </div>
  );
};
