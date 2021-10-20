import Header from '../Components/Header/Header'
export default function contato(props){
    return(
        <>
        <Header img={props.info.avatar_url} login={props.info.login}/>
        <div style={{display:'flex'}}>
          <div >
            <a href="https://www.linkedin.com/in/emerson-douglas-262118219/">
               <img src='https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png' 
               whidth='50px' height='50px' alt="linkedin" />
            </a>
           </div>
           <div>
            <a href="https://www.getninjas.com.br/anuncios/design-e-tecnologia/design-e-tecnologia-emerson-douglas-sales-dos-santos?ref=internal">
               <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPLVIp9suIAzSLvgN4bMGCXJ0PGSzWRIQKOosW3mSJZYZoTT-eQoADIwOtwUvXsJNVI0&usqp=CAU' 
               whidth='50px' height='50px' alt="linkedin" />
            </a>
           </div>
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
  