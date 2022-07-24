import { FC } from 'react'

import CenterLayout from '@components/layouts/CenterLayout/CenterLayout'
import SingUpForm from '@components/containers/SingUp/SingUpForm/SingUpForm'

const SingUpPage: FC = () => {
    return (
        <CenterLayout>
            <SingUpForm />
        </CenterLayout>
    )
}

export default SingUpPage
