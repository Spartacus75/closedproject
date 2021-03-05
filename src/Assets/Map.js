import { ComposableMap, Geographies, Geography, Marker} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



export default function MainScreen(props){

  const {tipContent} = props

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


  const markers = [
    {
      markerOffset: -15,
      name: "Rome",
      coordinates: [12.511079718348785, 41.87954002113861]
    }


  ];



  return (
    <>
    <div style={styles.MainScreenCSS}>
    MAIN SCREEN !!!

    <ComposableMap style={styles.mapCSS} projectionConfig={styles.projectionConfig}>

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

      {markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}

    </ComposableMap>



    </div>
    </>
  )
}
