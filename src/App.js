import Block from './components/organisms/Block/Block'

function App() {
    return (
        <div className="App">
            <Block
                type="withLongCards"
                titleAccent="почему именно мы"
                titleMain="и никто другой"
            />
            <Block
                type="withSquareCards"
                titleAccent="зачем сдавать \ брать"
                titleMain="вещи в аренду"
            />
            <Block
                type="withBiggerText"
                titleAccent="о создании"
                titleMain="сервиса"
            />
        </div>
    )
}

export default App
