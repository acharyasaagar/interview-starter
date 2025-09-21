import HealthCheck from "./HealthCheck"
import { Route } from "./Route"

function App() {
  return (
    <>
      <Route path="/" element={"Root"} />
      <Route path="/hello" element={"Hello"} />
      <Route path="/health-check" element={<HealthCheck />} />
    </>
  )
}

export default App
