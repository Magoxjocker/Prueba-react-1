import MiApi from './components/MiApi'
import './App.css'
import Section from './components/Section'

function App() {

  return (
    <div>
      <header>
        <img className='img-header' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis ab libero, assumenda eius, omnis sit maxime modi, molestiae harum earum facilis maiores recusandae optio sequi? Natus nulla fugit hic pariatur.</p>
      </header>
      <Section reverse={false}
        img="https://media.cdn.adultswim.com/uploads/20221115/thumbnails/2_2211151249465-RickandMorty_608_FullMetaJackrick.png"
        text={'mytext1'} />
      <br />
      <Section reverse={true}
        img="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/10/rick-morty-temporada-4.jpg?tf=3840x"
        text={'mytext2'}
      />

     <section className='section-buscador'>
     <h2>MiApi</h2>
      <MiApi />
     </section>

      <footer>rickANDmorty&PEPES2023</footer>

    </div>
  )
}

export default App
