import { useEffect, useState } from "react"
import withBoundary from "../../core/hoc/withBoundary"
import transformEditorMonthlyEaningsIntoChartJs from "../../core/utils/transformEditorMonthlyEarningsIntoChartJs"
import MetricService from "../../sdk/Services/Metric.service"
import Chart, { ChartProps } from "../components/Chart/Chart"

function UserPerformance () {
  const [editorEarnings, setEditorEarings] = useState<ChartProps['data']>()
  const [error, setError] = useState<Error>()

  useEffect(() => {
    MetricService
      .getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEaningsIntoChartJs)
      .then(setEditorEarings)
      .catch(error => {
        setError(new Error(error.message))
      })
  }, [])

  if (error)
    throw error

  if (!editorEarnings)
    return null

  return <Chart
    title="Média de performance nos últimos 12 meses"
    data={editorEarnings}
  />
}
export default withBoundary(UserPerformance, 'Componente')