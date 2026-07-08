import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { About } from '@/pages/About'
import { CaseStudyPage } from '@/pages/work/CaseStudyPage'
import { PaneBrowser } from '@/pages/PaneBrowser'

function App() {
  return (
    <Routes>
      <Route path="/panes" element={<PaneBrowser />} />
      <Route
        path="/*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work/:slug" element={<CaseStudyPage />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
