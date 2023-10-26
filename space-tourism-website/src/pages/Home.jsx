import backgroundDesktop from '../assets/home/background-home-desktop.jpg'
import backgroundTablet from '../assets/home/background-home-tablet.jpg'
import backgroundMobile from '../assets/home/background-home-mobile.jpg'

const Home = () => {
  return (
    <>
      {/* BACKGROUND */}
      <section>
        <div
          className="bg-cover bg-no-repeat h-screen w-screen z-50 bg-white hidden lg:flex"
          style={{
            backgroundImage: `url(${backgroundDesktop})`,
          }}
        ></div>
        <div
          className="bg-cover bg-no-repeat h-screen w-screen z-50 bg-white hidden md:flex lg:hidden"
          style={{
            backgroundImage: `url(${backgroundTablet})`,
          }}
        ></div>
        <div
          className="bg-cover bg-no-repeat h-screen w-screen z-50 bg-white sm:flex md:hidden"
          style={{
            backgroundImage: `url(${backgroundMobile})`,
          }}
        ></div>
      </section>
    </>
  )
}
export default Home
