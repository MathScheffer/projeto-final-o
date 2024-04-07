import React from 'react'
import styles from './Input.module.css'
const Input = ({ label, type, name, value, changeValue, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        onChange={changeValue}
        onBlur={onBlur}
        value={value}
        type={type}
        id={name}
        className={styles.input}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}

export default Input
