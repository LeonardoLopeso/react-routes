import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutLeonardo } from './pages/AboutLeonardo';
import { AboutPedro } from './pages/AboutPedro';
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
          <Route path="/sobre/leonardo" element={<AboutLeonardo />} />
          <Route path="/sobre/pedro" element={<AboutPedro />} />
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