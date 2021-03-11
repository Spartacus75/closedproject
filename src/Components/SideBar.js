import Button from '../Assets/Button'
import Select from '../Assets/Select'
import {data}  from '../data.js'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

const budgetType = [
  {
  budgetGap:'On target or improved'
},
{
  budgetGap:'Budget deviation from 0% to 5%',
},
{
  budgetGap:'Budget deviation from 5% to 10%'
}
]

export default function SideBar(){

const styles = {
  sideBarCSS: {
    backgroundColor: '#FFE4CC',
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
const [bySize, setBySize] =useState('')
const [byScope, setByScope] =useState('')
const [byGeneration, setByGeneration] =useState('')
const [byHeight, setByHeight] =useState('')
const [byBlade, setByBlade] =useState('')
const [byTower, setByTower] =useState('')
const [byFromBlade, setByFromBlade] =useState('')
const [byFromTower, setByFromTower] =useState('')
const [byFromNacelle, setByFromNacelle] =useState('')
const [byPMLOGBudget, setByPMLOGBudget] =useState('')
const [byPMLBudget, setByPMBudget] =useState('')
const [byLOGBudget, setByLOGBudget] =useState('')



const onClickSearch = () =>{
  console.log('on récupère les données sur le serveur...')
}

const onChangeName = (event) => {
  setByName(event.target.value)
}
const onChangeSize = (event) => {
  setBySize(event.target.value)
}
const onChangeScope = (event) => {
  setByScope(event.target.value)
}
const onChangeGeneration = (event) => {
  setByGeneration(event.target.value)
}
const onChangeHeight = (event) => {
  setByHeight(event.target.value)
}
const onChangeBlade = (event) => {
  setByBlade(event.target.value)
}
const onChangeTower = (event) => {
  setByTower(event.target.value)
}
const onChangeFromBlade = (event) => {
  setByFromBlade(event.target.value)
}
const onChangeFromTower = (event) => {
  setByFromTower(event.target.value)
}
const onChangeFromNacelle = (event) => {
  setByFromNacelle(event.target.value)
}
const onChangePMLOGBudget = (event) => {
  setByPMLOGBudget(event.target.value)
}
const onChangePMBudget = (event) => {
  setByPMBudget(event.target.value)
}
const onChangeLOGBudget = (event) => {
  setByLOGBudget(event.target.value)
}


  return (
    <>
    <div style={styles.sideBarCSS}>

    {/*PROJECT DESCRIPTION*/}
    <p>Filter by Project</p>
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
                value={bySize}
                onChange={onChangeSize}
                //label={byName}
                donnee={data}
                filterType="qtty"
                label="Project Size"
              />

              <Select
                value={byScope}
                onChange={onChangeScope}
                //label={byName}
                donnee={data}
                filterType="projectScope"
                label="Scope"
              />

    </div>

    {/*WTG DESCRIPTION*/}

  <p>Filter by WTG type</p>
  <div style={styles.subMenuBar}>


    <Select
      value={byGeneration}
      onChange={onChangeGeneration}
      //label={byName}
      donnee={data}
      filterType="generation"
      label="generation"
    />

    <Select
      value={byHeight}
      onChange={onChangeHeight}
      //label={byName}
      donnee={data}
      filterType="hubHeight"
      label="Hub Height"
    />

    <Select
      value={byBlade}
      onChange={onChangeBlade}
      //label={byName}
      donnee={data}
      filterType="blade"
      label="blade"
    />
  </div>


    {/*SOURCING DESCRIPTION*/}

    <p>Filter by WTG component origin</p>
    <div style={styles.subMenuBar}>
    <Select
      value={byFromBlade}
      onChange={onChangeFromBlade}
      //label={byName}
      donnee={data}
      filterType="bladeCountry"
      label="Blade from"
    />

    <Select
      value={byFromTower}
      onChange={onChangeFromTower}
      //label={byName}
      donnee={data}
      filterType="towerCountry"
      label="Tower from"
    />

    <Select
      value={byFromNacelle}
      onChange={onChangeFromNacelle}
      //label={byName}
      donnee={data}
      filterType="nacelleCountry"
      label="Nacelle from"
    />

  </div>
    {/*SOURCING DESCRIPTION*/}
    <p>Filter by budget (PM / LOG)</p>
    <div style={styles.subMenuBar}>

    <Select
      value={byPMLOGBudget}
      onChange={onChangePMLOGBudget}
      //label={byName}
      donnee={budgetType}
      filterType="budgetGap"
      label="Overall PM/LOG"
    />
    <Select
      value={byPMLBudget}
      onChange={onChangePMBudget}
      //label={byName}
      donnee={budgetType}
      filterType="budgetGap"
      label="PM only "
    />
    <Select
      value={byLOGBudget}
      onChange={onChangeLOGBudget}
      //label={byName}
      donnee={budgetType}
      filterType="budgetGap"
      label="LOG only "
    />


    </div>




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
