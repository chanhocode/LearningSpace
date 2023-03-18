// 아래와 같이 선언하면 React.useEffect, React.useCallback와 같은 접근 가능
import * as React from 'react';
import * as ReactDom from 'react-dom';
import GuGuDan from './GuGuDan';

ReactDom.render(<GuGuDan />, document.querySelector('#root'));
