import { Header } from './components/Header/Header'
import { SideBar } from './components/SideBar/SideBar'

import styles from './App.module.css'

import './global.css'

function App() {
    return (
      <>
        <Header/>

        <div className={styles.wrapper}>
          <SideBar/>
          <main>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</main>
        </div>
      </>
    )
}
export default App
