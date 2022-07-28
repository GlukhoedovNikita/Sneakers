import { useDispatch } from 'react-redux'
import { AppDispatch } from '@store/index'

const useTypedDispatch = () => useDispatch<AppDispatch>()

export default useTypedDispatch
