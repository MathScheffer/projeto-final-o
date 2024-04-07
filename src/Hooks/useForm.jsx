import React, { useState } from 'react'
const types = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
    message: 'Preencha o email corretamente!',
  },
}

const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  function validate(value) {
    //cancela a validação
    if (type === false) return true
    if (value.length === 0) {
      setError('Preencha um valor!')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function changeValue({ target }) {
    if (error) validate(target.value)
    setValue(target.value)
  }

  return {
    value,
    setValue,
    changeValue,
    error,
    //retorna a função validate já ativada, sendo true ou false
    validate: () => validate(value),
    onBlur: () => validate(value),
  }
}

export default useForm
