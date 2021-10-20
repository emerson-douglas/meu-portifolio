import styles from '../styles/Home.module.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'

export default function Home(Props) {
  return (
    <>
    <title>{Props.info.login}</title>
      <Header img={Props.info.avatar_url} login={Props.info.login}></Header>
      <div className={styles.container}>
        <div className={styles.HeaderHome}>
          <img src={Props.info.avatar_url} alt={Props.info.login} className='rounded' />
          <h1>{Props.info.login}</h1>
          <p>{Props.info.bio}</p>
        </div>
        <div className={styles.ContentHome}>
          <div className={styles.cardHome}>
          <h1>HABILIDADES</h1>
          <div className={styles.CardContentHome}>
           
              <ul>
                <h4>soft Skills</h4>
                <li>ingles instrumental</li>
                <li>trabalho em equipe</li>
                <li>proativo</li>
                <li>organização</li>
                <li>comunicativo</li>
                <li>pontualidade</li>
              </ul>
           

           
              <ul>
                <h4>Skills</h4>
                <li>Javascript</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>PHP</li>
                <li>React/ Nextjs</li>
                <li>Vuejs</li>
                <li>API</li>
              </ul>
            </div>
          
          </div>

          <div className={styles.cardHome}>
          <h1>FORMAÇÕES ACADEMICAS</h1>
          <div className={styles.CardContentHome}>
            <ul>
              <li>Ciencia da computação - UNINOVE 2021</li>
              <li>Formação React - ALURA 2021</li>
            </ul>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>

    </>
  )
}
export async function getStaticProps() {

  const response = await fetch('https://api.github.com/users/emerson-douglas').then(res => res.json())

  return {
    props: {
      info: response,
    }
  }
}
