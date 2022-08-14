
function Jokes({setup, punch}) {
    
    return(
        <section className="joke">
            <p><strong>{setup}</strong></p>
            {punch && <p>{punch}</p>}
        </section>
    )
}

export default Jokes