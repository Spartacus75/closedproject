import MainScreen from './Components/MainScreen'
import SideBar from './Components/SideBar'

const styles = {
  mainCSS:{
      display: 'flex',
      flexDirection:'row',
      height: '100vh',
      width: '100%'
  }
}




function App() {
  return (
    <>

    <div style={styles.mainCSS}>
    <SideBar/>
    <MainScreen/>
    </div>

    </>
  );
}

export default App;
