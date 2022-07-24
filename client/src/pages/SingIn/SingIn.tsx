import { FC } from 'react'

import CenterLayout from '@components/layouts/CenterLayout/CenterLayout'
import SingInForm from '@components/containers/SingIn/SingInForm/SingInForm'

const SingInPage: FC = () => {
    return (
        <CenterLayout>
            <SingInForm />
        </CenterLayout>
    )
}

export default SingInPage
