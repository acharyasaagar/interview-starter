import { api } from "./api"

export default function HealthCheck() {
  const { data: healthCheck } = api.useHealthCheckQuery()

  return (
    <>
      <h1>React app</h1>
      <p>Healthcheck is {healthCheck}</p>
    </>
  )
}
