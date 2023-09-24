import '../App.css'
import HomeNav from '../layout/HomeNav'
import HomeHeader from '../components/Header'
import Catalog from '../offer-section/Catalog'
import TopProducts from '../top-section/TopProducts'
import ParfumBackground from '../components/ParfumBackground'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import Footer from '../layout/Footer'

function Home() {
  return (
    <>
      <div className='relative'>
        <HomeNav></HomeNav>
        <div className='max-w-[1240px] px-8 mx-auto'>
          <HomeHeader></HomeHeader>
          <Catalog></Catalog>
          <TopProducts></TopProducts>
        </div>
        <ParfumBackground></ParfumBackground>
        <ContactForm></ContactForm>
        <Map></Map>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Home
