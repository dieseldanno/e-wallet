import { Link } from "react-router-dom"
import Card from "../components/Card"




const Home = ({ cards, deleteCard }) => {
  return (
    <div className="p-4">
        <h1 className="mb-12 text-3xl font-bold underline">E-WALLET</h1>
        {cards.length === 0 ? (
            <p>Your wallet is empty, click the button below to add new card</p>
        ) : (
            <div className="grid grid-cols-1 gap-4">
                {cards.map((card) => (
                    <Card key={card.id} card={card} onDelete={() => deleteCard(card.id)}  />
                ))}
            </div>
        )}
        <Link to="/addcard" className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 hover:text-white">
            Add new card
        </Link>
    </div>
  )
}

export default Home