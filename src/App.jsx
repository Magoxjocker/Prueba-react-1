import MiApi from './components/MiApi'
import './App.css'
import Section from './components/Section'

function App() {

  let text1 = "Rick y Morty (en inglés: Rick and Morty) es una serie de televisión americana de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Dan Harmon, el co-creador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke."
  let text2 = "Morty Smith (interpretado por Justin Roiland): Es un chico de 14 años, nieto de Rick, quien lo usa frecuentemente en sus aventuras. Posee una inteligencia pobre, es de estatura baja para su edad y está enamorado de una compañera de escuela llamada Jessica. Al avanzar la serie, toma más valor a la hora de enfrentar situaciones peligrosas. Con su bajo nivel de inteligencia sirve como contrapunto a la de su abuelo Rick, lo cual hace que sea el compañero de aventuras ideal."
 
  return (
    <div>
      <header>
        <img className='img-header' src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="" />
        <p className='subtitle'>Rick y Morty (en inglés: Rick and Morty) es una serie de televisión americana de animación para adultos creada por Justin Roiland y Dan Harmon en 2013 para Adult Swim, también se emitió en Cartoon Network. La serie sigue las desventuras de un científico, Rick Sanchez, y su fácilmente influenciable nieto, Morty, quienes pasan el tiempo entre la vida doméstica y los viajes espaciales, temporales e intergalácticos. Dan Harmon, el co-creador de la serie y Justin Roiland son los encargados de las voces principales de Morty y Rick, la serie también incluye las voces de Chris Parnell, Spencer Grammer y Sarah Chalke.</p>
      </header>
      <Section reverse={false}
        img="https://media.cdn.adultswim.com/uploads/20221115/thumbnails/2_2211151249465-RickandMorty_608_FullMetaJackrick.png"
        text={text1} />
      <br />
      <Section reverse={true}
        img="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/10/rick-morty-temporada-4.jpg?tf=3840x"
        text={text2}
      />

      <section className='section-buscador'>
        <h2>MiApi</h2>
        <MiApi />
      </section>

      <footer>rickANDmorty 2023</footer>

    </div>
  )
}

export default App
