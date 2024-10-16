import { Link } from "react-router-dom";
import Card from "../components/Card";

const Home = ({ cards, deleteCard }) => {
  let activeCard = cards[cards.length - 1]; // most recent card
  let inactiveCards = cards.slice(0, cards.length - 1); // rest inactive

  return (
    <>
      <div className="p-4">
        <h1 className="mb-12 text-3xl font-bold underline">E-WALLET</h1>
        {cards.length === 0 ? (
          <p>Your wallet is empty, click the button below to add new card</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            <p>Active card</p>
            {/* render active card without delete btn */}
            {activeCard && (
              <Card
                key={activeCard.id}
                card={activeCard}
                onDelete={null} // no delete function
              />
            )}
            {/* conditional render for showing p-tag only if there's no inactive cards */}
            {inactiveCards.length > 0 && <p>Inactive cards</p>}
            {/* render inactive cards with delete btn */}
            {inactiveCards.map((card) => (
              <Card
                key={card.id}
                card={card}
                onDelete={() => deleteCard(card.id)}
              />
            ))}
          </div>
        )}
      </div>
      <div className="mt-4 text-center">
        {/* only show add btn if cards are < 4 */}
        {cards.length < 4 ? (
          <Link
            to="/addcard"
            className="inline-block mb-4 p-2 border w-48 bg-blue-500 text-white rounded hover:bg-blue-600 hover:text-white"
          >
            Add new card
          </Link>
        ) : (
          <p className="text-base max-w-xs mx-auto">
            E-wallet is full, please delete a card to add more
          </p>
        )}
      </div>
    </>
  );
};

export default Home;
