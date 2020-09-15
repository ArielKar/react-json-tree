import React, { useState } from 'react';
import { fetchData } from '../../store/actions';
import { connect } from 'react-redux';
import styles from './URLInput.module.scss';
import { validateURL } from '../../utils/validations';

function URLInput(props) {
  const [protocolVal, setProtocolVal] = useState('https:');
  const [URIVal, setURIVal] = useState('');
  const [urlError, setUrlError] = useState('');

  const handleprotocolChange = e => {
    setProtocolVal(e.target.value);
  };

  const handleURIChange = e => {
    setUrlError('');
    setURIVal(e.target.value);
  };

  const handleFetch = () => {
    const url = `${protocolVal}//${URIVal}`;
    const isValid = validateURL(url);
    if (!isValid) {
      setUrlError('Must be a valid URL');
      return;
    }
    props.fetchData(url);
  };

  return (
    <div className={styles.container}>
      <select onChange={handleprotocolChange} value={protocolVal} className={styles.selectBox}>
        <option value="https:">https:</option>
        <option value="http:">http:</option>
      </select>
      <span className={styles.slashes}>&#47;&#47;</span>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={URIVal}
          onChange={handleURIChange}
          className={`${styles.urlInput} ${urlError && styles.error}`}
        />
        <p className={styles.errorMessage}>{urlError ? urlError : <span>&nbsp;</span>}</p>
      </div>
      <button onClick={handleFetch} className={styles.fetchBtn}>
        Fetch
      </button>
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(fetchData(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(URLInput);
