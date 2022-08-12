import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '@store/index'

import App from './routes/App'

import '@styles/global.scss'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Suspense>
                <App />
            </Suspense>
        </Provider>
    </BrowserRouter>
)
