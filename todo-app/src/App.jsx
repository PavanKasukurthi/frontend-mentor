import './App.css'
import { Heading, Input, Todo } from './components'
import lightBackgroundImage from './images/bg-desktop-light.jpg'
import darkBackgroundImage from './images/bg-desktop-dark.jpg'
import { useGlobalContext } from './context'

function App() {
  const { colorMode } = useGlobalContext()

  return (
    <>
      <div
        className=" h-80 w-screen bg-cover bg-no-repeat flex justify-center transition-all duration-500"
        style={{
          backgroundImage:
            colorMode === true
              ? `url(${lightBackgroundImage})`
              : `url(${darkBackgroundImage})`,
        }}
      >
        <div id="container" className="w-[40%] flex flex-col justify-center">
          <Heading />
          <Input />
          <Todo />
        </div>
      </div>
    </>
  )
}

export default App
