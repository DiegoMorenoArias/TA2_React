import Card from './Card.jsx';

function App (){
    return(
        <div className="cards-container">
            <Card>
                <p><strong>Título: </strong>Primer título</p>
                <p><strong>Descripción: </strong>Descripción 1</p>
                <p><strong>Persona asignada: </strong>Diego Moreno</p>
                <p><strong>Fecha inicio: </strong>01/01/2024</p>
                <p><strong>Fecha de fin: </strong>31/12/24</p>
            </Card>
            <Card>
                <p><strong>Título: </strong>Segundo título</p>
                <p><strong>Descripción: </strong>Descripción 2</p>
                <p><strong>Persona asignada: </strong>Diego Morenazo</p>
                <p><strong>Fecha inicio: </strong>07/06/2024</p>
                <p><strong>Fecha de fin: </strong>17/09/24</p>
            </Card>
            <Card>
                <p><strong>Título: </strong>Tercer título</p>
                <p><strong>Descripción: </strong>Descripción 3</p>
                <p><strong>Persona asignada: </strong>Magali Ferreira</p>
                <p><strong>Fecha inicio: </strong>02/11/2004</p>
                <p><strong>Fecha de fin: </strong>18/03/2022</p>
            </Card>
        </div>
    )
}

export default App;