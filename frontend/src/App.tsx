import HealthCheck from "./HealthCheck"
import { Route } from "./Route"

function App() {
  return (
    <>
      <Route path="/" element={"Root"} />
      <Route path="/health-check" element={<HealthCheck />} />
    </>
  )
}

export default App
