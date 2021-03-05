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
}


  return (
    <>
    <div style={styles.sideBarCSS}>
    SIDE BAR
    <Button
    label="Search"
    onClick={onClickSearch}
    />
    </div>
    </>
  )
}
