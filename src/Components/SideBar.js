import Button from '../Assets/Button'

export default function SideBar(){

const styles = {
  sideBarCSS: {
    backgroundColor: 'red',
    //height: '100%'
    minWidth: '200px'
  }
}



const onClickSearch = () =>{
  alert('ça marche')
  console.log('on récupère les données sur le serveur...')
}


  return (
    <>
    <div style={styles.sideBarCSS}>
    SIDE BAR
    <Button
    label="Filter"
    onClick={onClickSearch}
    />
    </div>
    </>
  )
}
