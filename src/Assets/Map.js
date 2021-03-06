import { ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import Dialog from './Dialog'
import React, {useState} from 'react'
import {data}  from '../data.js'
import SelectMarker from './SelectMarker'
import {useSelector, useDispatch} from 'react-redux'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


export default function MainScreen(props){

  const isPortShown = useSelector(state => state.isPortShown)
  const isProjectShown = useSelector(state => state.isProjectShown)
  const filterProject = useSelector(state => state.filterProject)
  const [isShown, setIsShown] = useState(false)
  const [project, setProject] = useState([])

  const styles = {
    MainScreenCSS: {
      backgroundColor: '#006994',
      width:'100%',
      position: 'relative'
    },
    mapCSS:{
      width: '100%',
      height: '100%'
    },
    projectionConfig:{
      rotate: [-10, -45, 0],
      scale: 1800
    },
    projection:{
      projection: "geoAzimuthalEqualArea"
    }

  }

/*const markersWF = [
    {
      markerOffset: -15,
      name: "Paudy",
      coordinates: [1.906770653006216, 47.01941509577086],
      wtg: "5 N117 / R91 - Delta"
    }
  ];*/


  const markersWF = data.map(item => {

  return {
    'markerOffset': -15,
    'name': item.projectName,
    'coordinates': [item.y, item.x],
    'wtg': item.wtgFullName,
    'qtty': item.qtty,
    'scope': item.projectScope,
    'generation': item.generation,
    'blade': item.blade,
    'hubHeight': item.hubHeight,
    'section': item.section,
    'fromBlade': item.bladeCountry,
    'fromNacelle': item.nacelleCountry,
    'fromTower': item.towerCountry,
    'pm_bud_G4': item.pm_bud_G4,
    'log_bud_G4': item.log_bud_G4,
    'pm_bud_built': item.pm_bud_built,
    'log_bud_built': item.log_bud_built,
    'cm_bud_built': item.cm_bud_built,
    'cm_bud_built': item.cm_bud_builts
  }
  })

  const markersPort = [
    {
      markerOffset: -15,
      name: "Dieppe",
      coordinates: [1.082888588509024, 49.91739645450003]
    },
    {
      marketOffet:-15,
      name: "Thessaloniki",
      coordinates:[22.946740, 40.645282]
    },
    {
      marketOffet:-15,
      name: "Stylida",
      coordinates:[22.61625126449164,38.969153928441244]
    },
    {
      marketOffet:-15,
      name: "Volos",
      coordinates:[22.939764885594794,39.367042438905735]
    },
    {
      marketOffet:-15,
      name: "Lavrio",
      coordinates:[24.060450266032916,37.71052643532564]
    },
    {
      marketOffet:-15,
      name: "Preveza",
      coordinates:[20.730666687538953,38.9418244385158]
    },
    {
      marketOffet:-15,
      name: "Igoumenista",
      coordinates:[20.265437581790483,39.512584890968625]
    },
    {
      marketOffet:-15,
      name: "Constanza",
      coordinates:[28.646453411864215,44.20531644695254]
    },
    {
      marketOffet:-15,
      name: "Manfredonia",
      coordinates:[15.923987983498543,41.628489940558325]
    },
    {
      marketOffet:-15,
      name: "La Rochelle",
      coordinates:[-1.1383582472078397,46.21376776813491]
    },
    {
      marketOffet:-15,
      name: "Anvers",
      coordinates:[4.41254425708743,51.234977604030874]
    }

  ];


  const onClickMarkerWF = (name, wtg, pm_bud_G4) => {
    console.log('valeur ?? v??rifier: ', name, wtg, pm_bud_G4)
    setProject({
      name: name,
      wtg: wtg,
      pm_bud_G4: pm_bud_G4
    })
    //setProject(name)
    setIsShown(true)

    //console.log("status: ", isShown)

  }

  const handleClose = () => {
    setIsShown(false)
  }

console.log('fdfdsfds',filterProject.filterProject.projectName)

  return (
    <>
    <div style={styles.MainScreenCSS}>

    <SelectMarker/>

    <ComposableMap
          style={styles.mapCSS}
          projectionConfig={styles.projectionConfig}
          projection={styles.projection.projection}
          >

      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => <Geography
            key={geo.rsmKey}
            geography={geo}
            fill="#EAEAEC"
            stroke="black"

            />)
        }
      </Geographies>


      {isProjectShown.value &&  markersWF
        //filtre project
        .filter(item => {
          if (filterProject.filterProject.projectName ==''){
            return item
          } else
          return item.name == filterProject.filterProject.projectName
        })
        //filtre size
        .filter(item => {
          if (filterProject.filterProject.projectSize ==''){
            return item
          } else
          return item.qtty == filterProject.filterProject.projectSize
        })
        //filtre scope
        .filter(item => {
          if (filterProject.filterProject.projectScope ==''){
            return item
          } else
          return item.scope == filterProject.filterProject.projectScope
        })
        //filtre generation
        .filter(item => {
          if (filterProject.filterProject.generation ==''){
            return item
          } else
          return item.generation == filterProject.filterProject.generation
        })
        //filtre height
        .filter(item => {
          if (filterProject.filterProject.hubHeight ==''){
            return item
          } else
          return item.hubHeight == filterProject.filterProject.hubHeight
        })
        //filterType
        .filter(item => {
          if (filterProject.filterProject.blade ==''){
            return item
          } else
          return item.blade == filterProject.filterProject.blade
        })
        //filter fromBlade
        .filter(item => {
          if (filterProject.filterProject.fromBlade ==''){
            return item
          } else
          return item.fromBlade == filterProject.filterProject.fromBlade
        })
        //filter fromNacelle
        .filter(item => {
          if (filterProject.filterProject.fromNacelle ==''){
            return item
          } else
          return item.fromNacelle == filterProject.filterProject.fromNacelle
        })
        //filter fromTower
        .filter(item => {
          if (filterProject.filterProject.fromTower ==''){
            return item
          } else
          return item.fromTower == filterProject.filterProject.fromTower
        })


        .map(({ name, coordinates, markerOffset, wtg, pm_bud_G4}) => (
        <Marker
          key={name}
          coordinates={coordinates}
          onMouseEnter={() => {
                              //const { NAME, POP_EST } = geo.properties;
                              //console.log('on rentre');
                            }}
          onMouseLeave={() => {
                              //console.log('on sort');
                            }}
          data-tip={`${name} - ${wtg}`}
          onClick={()=> onClickMarkerWF(name, wtg, pm_bud_G4)}
        >
          <circle r={5} fill="black" stroke="#fff" strokeWidth={2} />
        </Marker>
      ))}


      {isPortShown.value && markersPort.map(({ name, coordinates, markerOffset }) => (
        <Marker
          key={name}
          coordinates={coordinates}
          onMouseEnter={() => {
                              //const { NAME, POP_EST } = geo.properties;
                              //console.log('on rentre');
                            }}
          onMouseLeave={() => {
                              //console.log('on sort');
                            }}
          data-tip={`${name} port`}
        >
          <circle r={5} fill="orange" stroke="#fff" strokeWidth={2} />

        </Marker>
      ))}



    </ComposableMap>

    <ReactTooltip />

    <Dialog
              open={isShown}
              handleClose={handleClose}
              data={{name: project.name, wtg: project.wtg, pm_bud_G4: project.pm_bud_G4}}
  />




    </div>
    </>
  )
}
