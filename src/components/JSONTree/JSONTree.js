import React from 'react';
import { connect } from 'react-redux';
import Node from '../Node';
import styles from './JSONTree.module.scss';

function JSONTree(props) {
  const { jsonData, error, isLoading } = props;

  if (isLoading) {
    return (
      <div className={styles.center}>
        <div className={styles.loaderWrapper}>
          <div className={styles.loaderSlider} />
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.center}>
        <p className={styles.errorMessage}>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <Node data={jsonData} isLastItem />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    jsonData: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(JSONTree);
