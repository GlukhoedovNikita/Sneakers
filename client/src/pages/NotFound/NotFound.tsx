import { FC } from 'react'

import CenterLayout from '@components/layouts/CenterLayout/CenterLayout'
import NotFoundContainer from '@components/containers/NotFound/NotFoundContainer/NotFoundContainer'

const NotFoundPage: FC = () => {
    return (
        <CenterLayout>
            <NotFoundContainer />
        </CenterLayout>
    )
}

export default NotFoundPage
