
import { faChartLine } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DashboardContainer } from "../components/dashboard.container"
import { DashboardLayout } from "../components/dashboard.layout"



export const TestContainer = () => {
  return (
    <DashboardLayout>
      <header className='dashboardHeader'>
        <div>
          <FontAwesomeIcon icon={faChartLine} />
        </div>
        <main>
          <span>Estadisticas globales</span>
          <p>Lista de todas tus estadisticas del sitio globales.</p>
        </main>
      </header>
      <main className='dashboardContainers'>
        <DashboardContainer title='Ganacias del dia'>
          <h5>$5040 de ganancias del dia.</h5>
        </DashboardContainer>
        <DashboardContainer title='Ganacias del mes'>
          <h5>$5040 de ganancias del dia.</h5>
        </DashboardContainer>
        <DashboardContainer title='Ganacias del año'>
          <h5>$5040 de ganancias del dia.</h5>
        </DashboardContainer>
      </main>
      <main className='dashboardContainers'>
        <DashboardContainer title='Ganacias del dia'>
          <h5>$5040 de ganancias del dia.</h5>
        </DashboardContainer>
      </main>
    </DashboardLayout>
  )
}