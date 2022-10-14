// react
import { Routes, Route, Navigate } from 'react-router-dom';
// routes
import Overview from './routes/overview/overview.route';
import Footer from './routes/footer/footer.route';
import NotFound from './components/not-found/not-found.component';
// styles
import './App.css';
import NavigationBar from './routes/navigation-bar/navigation-bar.route'

function App() {

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Footer />}>
          <Route path='overview' element={<Overview />} />
          <Route exact path='/' element={<Navigate to='/overview' replace />} /> {/* redirect from main domain to overview route */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
