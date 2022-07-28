/*eslint-disable */

import { useState, useEffect } from 'react'

import { ValidationsType } from './useInput'

const useValidation = (value: string, validations: ValidationsType) => {
    const [isEmpty, setEmpty] = useState<boolean>(true)
    const [minLengthError, setMinLenthError] = useState<boolean>(false)
    const [isEmail, setEmail] = useState<boolean>(false)
    const [isValidInput, setValidInput] = useState<boolean>(false)


    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break
                case 'minLength':
                    if (validations.minLength) {
                        value.length < validations.minLength ? setMinLenthError(true) : setMinLenthError(false)
                    }
                    break
                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

                    re.test(value.toLowerCase()) ? setEmail(false) : setEmail(true)
                    break
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || isEmail || minLengthError) setValidInput(false)
        else setValidInput(true)
    }, [isEmpty, isEmail, minLengthError])

    return {
        isValidInput,
        isEmpty,
        minLengthError,
        isEmail,
    }
}

export default useValidation