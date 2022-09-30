import { Header } from './components/Header/Header'

import styles from './App.module.css'

import './global.css'

function App() {
    return (
      <>
        <Header/>

        <div className={styles.grid}></div>
      </>
    )
}
export default App
