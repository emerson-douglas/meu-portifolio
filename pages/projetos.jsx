import styles from '../styles/Home.module.css'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer'
export default function (props) {
  //https://emerson-douglas.github.io/app-lista_React/
  const repo = props.repos
  const displayrepo = repo.map(res =>
  <>

      <div className={styles.ContentProjects}>
        <a href={res.link} target="_blank" rel="noopener noreferrer">
        <div className={styles.HeaderCellProject}>
          <p style={{backgroundColor: res.languageColor, maxHeight:'35px'}}>{res.language}</p>
          <h2>{res.repo}</h2>
        </div>
       <div className={styles.ContentCellProject}>
        <p>{res.description}</p>
        {//<img src={res.image} />
        }
        
        </div>
      </a>
      </div>

      <div className={styles.Line}/>
    </>
  )
  return (
    <>
      <Header img={props.info.avatar_url} login={props.info.login}></Header>
      <div className={styles.container}>

        {displayrepo}
      </div>
      <Footer/>
      
    </>


  )
}
export async function getStaticProps() {


  const inforesponse = await fetch('https://api.github.com/users/emerson-douglas').then(res => res.json())
  const response = await fetch('https://gh-pinned-repos.egoist.sh/?username=emerson-douglas').then(res => res.json())

  return {
    props: {
      repos: response,
      info: inforesponse,
    }
  }
}