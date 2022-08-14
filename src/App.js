 import Jokes from './Jokes'
 
 function App() {
    return (
        <article>
            <Jokes 
                setup="Lame Line" 
                punch="Lame Joke"
                />
            <Jokes 
                setup="what do you call..." 
                punch="Lame Joke Again"
                />
            <Jokes 
                setup="Knock knock" 
                punch="Lame Joke who's there"
                />
            <Jokes 
                setup="This is just a single puncline setup"
                />
            <Jokes 
                setup={10}
                />                
        </article>
    )
 }

 export default App