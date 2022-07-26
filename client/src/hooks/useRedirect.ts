import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

const useRedirect = (path: string) => {
    const navigate = useNavigate()
    const redirectHandler = useCallback(() => navigate(path), [path])
    return redirectHandler
}

export default useRedirect
