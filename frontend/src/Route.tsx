import React from "react"

type RouteProps = {
  path: string
  element: React.ReactNode
}

const matchPath = (routePath: string) => {
  const pathname = window.location.pathname
  return pathname === routePath
}

export function Route({ path, element }: RouteProps) {
  if (matchPath(path)) {
    return <>{element}</>
  }
  return null
}
