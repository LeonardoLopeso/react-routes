import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutItem } from './pages/AboutItem';
import styles from './App.module.css';
import { NotFound } from './pages/NotFound';

const App = () => {
  return (
    <div>
      <header>
        <h1>Título do site</h1>
      </header>
      <hr />
      <div className={styles.container}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/sobre/:slug" element={<AboutItem />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>  
      <hr />
      <footer>
        Todos os direitos reservados.
      </footer>
    </div>
  )
}

export default App;