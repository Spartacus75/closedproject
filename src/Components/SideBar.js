import Button from '../Assets/Button'
import Select from '../Assets/Select'
import {data}  from '../data.js'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'


export default function SideBar(){

const styles = {
  sideBarCSS: {
    backgroundColor: 'red',
    //height: '100%'
    minWidth: '350px'
  },
  resultCSS:{
    backgroundColor: 'white',
    margin: '5px'
  },
  subMenuBar:{
    display: 'flex',
    backgroundColor: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    border: 'solid 1px',
    borderRadius: '10px',
    margin: '5px',
    padding: '5px',
    justifyContent: 'space-around'
  }
}


const [byName, setByName] =useState('')


const onClickSearch = () =>{
  console.log('on récupère les données sur le serveur...')
}

const onChangeName = (event) => {
  setByName(event.target.value)

}

console.log(byName)

  return (
    <>
    <div style={styles.sideBarCSS}>

    {/*PROJECT DESCRIPTION*/}
    <p>Project Information</p>
    <div style={styles.subMenuBar}>




              <Select
                value={byName}
                onChange={onChangeName}
                //label={byName}
                donnee={data}
                filterType="projectName"
                label="Project Name"
              />

              <Select
                value={byName}
                onChange={onChangeName}
                //label={byName}
                donnee={data}
                filterType="qtty"
                label="Project Size"
              />

              <Select
                value={byName}
                onChange={onChangeName}
                //label={byName}
                donnee={data}
                filterType="projectScope"
                label="Scope"
              />

    </div>

    {/*WTG DESCRIPTION*/}

  <p>WTG Information</p>
  <div style={styles.subMenuBar}>


    <Select
      value={byName}
      onChange={onChangeName}
      //label={byName}
      donnee={data}
      filterType="generation"
      label="generation"
    />

    <Select
      value={byName}
      onChange={onChangeName}
      //label={byName}
      donnee={data}
      filterType="hubHeight"
      label="Hub Height"
    />

    <Select
      value={byName}
      onChange={onChangeName}
      //label={byName}
      donnee={data}
      filterType="blade"
      label="blade"
    />
  </div>


    {/*SOURCING DESCRIPTION*/}

    <p>Sourcing Information</p>
    <div style={styles.subMenuBar}>  
    <Select
      value={byName}
      onChange={onChangeName}
      //label={byName}
      donnee={data}
      filterType="bladeCountry"
      label="Blade from"
    />

    <Select
      value={byName}
      onChange={onChangeName}
      //label={byName}
      donnee={data}
      filterType="towerCountry"
      label="Tower from"
    />

    <Select
      value={byName}
      onChange={onChangeName}
      //label={byName}
      donnee={data}
      filterType="nacelleCountry"
      label="Nacelle from"
    />

  </div>
    {/*SOURCING DESCRIPTION*/}


    Filter by: <br/>
    Budget PM & LOG on target (or better)<br/>
    Budget PM on target (or better)<br/>
    Budget LOG on target (or better)<br/>
    Budget PM & LOG on below<br/>
    Budget PM on target below<br/>
    Budget LOG on target below<br/>
    <br/>
    Faire même chose avec CM
    <br/>


    <br/>
    <br/>
    <Button
    label="Filter"
    onClick={onClickSearch}
    />

    <div style={styles.resultCSS}>
    {data
      .map(item => (<p>{item.projectName}</p>))}
    </div>


    </div>
    </>
  )
}
