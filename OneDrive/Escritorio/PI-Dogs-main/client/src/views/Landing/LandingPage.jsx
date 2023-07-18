import {Link} from 'react-router-dom';
import styles from './landing.module.css'

const LandinPage = () => {
    return(
   
        <div className= {styles.landing}>
            <h1>PerriPedia</h1>
            <Link to="/home">
                <button>Ingresar</button>
            </Link>  
        </div>
    

    )
}

export default LandinPage;