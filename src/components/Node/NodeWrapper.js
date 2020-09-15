import React, { useState, useCallback } from 'react';
import styles from './Node.module.scss';

function NodeWrapper(props) {
  const { children, openBrace = '{', closeBrace = '}', withComma = false } = props;

  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  return (
    <>
      <button onClick={handleCollapse} className={styles.collaseBtn}>
        {isCollapsed ? '+' : '-'}
      </button>
      <span className={styles.lightBold}>{openBrace}</span>
      {isCollapsed ? ' ... ' : <ul className={styles.listWrapper}>{children}</ul>}
      <span className={styles.lightBold}>{`${closeBrace}${withComma ? ',' : ''}`}</span>
    </>
  );
}

export default NodeWrapper;
