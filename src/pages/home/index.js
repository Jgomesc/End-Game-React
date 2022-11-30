import { Link } from "react-router-dom";




export default function Index() {
    return (
        <main> 
            <h1>Home</h1>
            
            <ul>
                <li> 
                    <Link to='/Jogadores'>Jogadores</Link>
                 </li>
            </ul>
            
        </main>
    )

}