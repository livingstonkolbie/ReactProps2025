import ArrayMap from "./components/ArrayMap"
import PropsInfo from "./components/PropsInfo"


function App() {

  return (
    <div className="container">
      <PropsInfo name="Kolbie" num={11} bool={true}/>
      <ArrayMap />
    </div>
  )
}

export default App
