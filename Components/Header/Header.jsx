import { getStaticProps } from "../../pages";
import Hstyles from '../../styles/Header.module.css'
import Link from 'next/link'


export default function Header(props){
return(
    <header>
        <div className={Hstyles.myheader }>
            <img src={props.img} alt={props.login} className={Hstyles.rounded} />


        <div className={Hstyles.LinkContent}>
            <div className={Hstyles.link }>
                <Link href="/"><a href="">home</a>
                </Link>
            </div>|
            <div className={Hstyles.link }>
                <Link href="/projetos"><a href="">Projetos</a>
                </Link>
            </div>|
            </div>
            

    </div>
    </header>
 
    
)
}