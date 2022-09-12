import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Time from './components/time';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Time />} />
            </Routes>
        </Router>
    )
}