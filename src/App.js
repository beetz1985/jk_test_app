 import Jokes from './Jokes'
 import jokesData from './jokesData'


 function App() {

    const elementsJokes = jokesData.map(v=> <Jokes setup={v.setup} punch={v.punch} />);

    return (
        <article>
           {elementsJokes}
        </article>
    )
 }

 export default App