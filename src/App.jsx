import NavBar from './components/header/NavBar'
import AboutMe from './components/aboutMe/AboutMe'
import Hobbies from './components/hobbies/Hobbies'
import Projects from './components/projects/Projects'
import Resume from './components/resume/Resume'

function App() {

  return (
    <div className="App" id='inicio'>
      <NavBar/>
      <AboutMe/>
      <Resume/>
      <Projects/>
      <Hobbies/>
    </div>
  )
}

export default App
