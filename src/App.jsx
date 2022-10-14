// react
import { Routes, Route } from 'react-router-dom';
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
        <Route path='/*' element={<Footer />}>
          <Route index element={<Overview />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes >
    </>
  );
}

export default App;
