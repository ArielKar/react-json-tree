import React from 'react';
import styles from './Node.module.scss';
import { v4 as uuidv4 } from 'uuid';
import NodeWrapper from './NodeWrapper';

const DATA_TYPES = {
  boolean: 'boolean',
  string: 'string',
  number: 'number',
  object: 'object',
};

Object.freeze(DATA_TYPES);

function Node(props) {
  const { data, isLastItem } = props;

  const trailingCommaCheck = isLastItem ? '' : ',';

  const enhanceByType = data => {
    const dataType = typeof data;
    switch (dataType) {
      case DATA_TYPES.boolean:
        return (
          <>
            <span className={styles.boolean}>{`${data}`}</span>
            {trailingCommaCheck}
          </>
        );
      case DATA_TYPES.number:
        return (
          <>
            <span className={styles.number}>{data}</span>
            {trailingCommaCheck}
          </>
        );
      case DATA_TYPES.string:
        return (
          <>
            <span className={styles.string}>"{data}"</span>
            {trailingCommaCheck}
          </>
        );
      default: {
        return `${data}${trailingCommaCheck}`;
      }
    }
  };

  const nodeRenderer = () => {
    //  using == in this case to check for null and undefined
    // but 0 or false are falsy in this condition
    if (data == null) return null;
    if (Array.isArray(data)) {
      return (
        <NodeWrapper openBrace="[" closeBrace="]" withComma={!isLastItem}>
          {data.map((nData, idx) => {
            return (
              <li key={uuidv4()}>
                <span className={`${styles.key} ${styles.lightBold}`}>{idx}:</span>
                <Node data={nData} isLastItem={idx === data.length - 1} />
              </li>
            );
          })}
        </NodeWrapper>
      );
    }
    if (typeof data === DATA_TYPES.object) {
      const dataKeysArr = Object.keys(data);
      return (
        <NodeWrapper openBrace="{" closeBrace="}" withComma={!isLastItem}>
          {dataKeysArr.map((key, idx) => {
            return (
              <li key={uuidv4()}>
                <span className={`${styles.key} ${styles.lightBold}`}>{key}:</span>

                <Node data={data[key]} isLastItem={idx === dataKeysArr.length - 1} />
              </li>
            );
          })}
        </NodeWrapper>
      );
    }

    return enhanceByType(data);
  };

  return nodeRenderer();
}

export default Node;
