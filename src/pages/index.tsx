import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import { Redirect } from "@docusaurus/router"
import useBaseUrl from "@docusaurus/useBaseUrl"

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return <Redirect to={useBaseUrl("/README")} />
}
