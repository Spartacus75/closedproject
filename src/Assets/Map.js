import { ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";
import ReactTooltip from 'react-tooltip';
import Dialog from './Dialog'
import React, {useState} from 'react'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



export default function MainScreen(props){

  //const {setTooltipContent} = props

  const [isShown, setIsShown] = useState(false)
  const [project, setProject] = useState([])

  const styles = {
    MainScreenCSS: {
      backgroundColor: 'cyan',
      width:'100%'
    },
    mapCSS:{
      width: '100%',
      height: '100%'
    },
    projectionConfig:{
      rotate: [-10, -45, 0],
      scale: 1700
    }

  }

  const markersWF = [
    {
      markerOffset: -15,
      name: "Paudy",
      coordinates: [1.906770653006216, 47.01941509577086],
      wtg: "5 N117 / R91 - Delta"
    }
  ];

  const markersPort = [
    {
      markerOffset: -15,
      name: "Dieppe",
      coordinates: [1.082888588509024, 49.91739645450003]
    }
  ];


  const onClickMarkerWF = (name, wtg) => {
    console.log('valeur à vérifier: ', name, wtg )
    setProject({
      name: name,
      wtg: wtg
    })
    //setProject(name)
    setIsShown(true)

    //console.log("status: ", isShown)

  }

  const handleClose = () => {
    setIsShown(false)
  }

console.log("PROJECT", project)

  return (
    <>
    <div style={styles.MainScreenCSS}>

    <ComposableMap
          style={styles.mapCSS}
          projectionConfig={styles.projectionConfig}
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


      {markersWF.map(({ name, coordinates, markerOffset, wtg }) => (
        <Marker
          key={name}
          coordinates={coordinates}
          onMouseEnter={() => {
                              //const { NAME, POP_EST } = geo.properties;
                              console.log('on rentre');
                            }}
          onMouseLeave={() => {
                              console.log('on sort');
                            }}
          data-tip={`${name} - ${wtg}`}
          onClick={()=> onClickMarkerWF(name, wtg)}
        >
          <circle r={5} fill="black" stroke="#fff" strokeWidth={2} />
        </Marker>
      ))}


      {markersPort.map(({ name, coordinates, markerOffset }) => (
        <Marker
          key={name}
          coordinates={coordinates}
          onMouseEnter={() => {
                              //const { NAME, POP_EST } = geo.properties;
                              console.log('on rentre');
                            }}
          onMouseLeave={() => {
                              console.log('on sort');
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
              data={{name: project.name, wtg: project.wtg}}
  />




    </div>
    </>
  )
}
