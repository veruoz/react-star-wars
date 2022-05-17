
import cn from 'classnames'
import styles from './App.module.css';
import PeoplePage from "@containers/PeoplePage";


function App() {
  return (
    <div className="App">
        {/*<h1 className={cn(styles.header, styles.text)}>Hi</h1>*/}
        {/*<h1 className={styles.header}>Hi</h1>*/}
        <PeoplePage/>
    </div>
  );
}

export default App;
