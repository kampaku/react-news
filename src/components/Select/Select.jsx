import React from 'react'
import styles from './Select.module.css'

function Select({ label, options, onChange, defaultVal }) {
  return (
    <label className={styles.select}>
      {label}
      <select className={styles.selectInput} value={defaultVal} onChange={event => onChange(event.target.value)}>
        {options.map(({value, label}) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </label>
  )
}

export default Select
