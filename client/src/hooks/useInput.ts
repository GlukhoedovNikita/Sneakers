import { ChangeEvent, useState } from 'react'

import useValidation from './useValidation'

export interface ValidationsType {
    isEmpty: boolean,
    minLength?: number,
    isEmail?: boolean,
}

const useInput = (initialState: string, validations: ValidationsType) => {
    const [value, setValue] = useState<string>(initialState)
    const [isDirty, setDirty] = useState<boolean>(false)
    const valid = useValidation(value, validations)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onBlur = () => {
        setDirty(true)
    }

    return {
        value,
        setValue,
        onChange,
        onBlur,
        isDirty,
        setDirty,
        ...valid,
    }
}

export default useInput
