import { MainRoutes } from './routes/MainRoutes';
import styles from './App.module.css';

const App = () => {
  return (
    <div>
      <header>
        <h1>Título do site</h1>
      </header>
      <hr />
      <div className={styles.container}>
        <MainRoutes />
      </div>  
      <hr />
      <footer>
        Todos os direitos reservados.
      </footer>
    </div>
  )
}

export default App;