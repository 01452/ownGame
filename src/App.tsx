import './App.css'
import GameBoard from "./components/GameBoard.tsx";
import {topics} from "./data/questions.ts";
import {useState} from "react";
import QuestionModal from "./components/QuestionModal.tsx";

function App() {
    const [selected, setSelected] = useState<{
        title: string, 
        price: number, 
        question: string, 
        answer: string
    } | null>(null);

    const handleCloseModal = () => {
        setSelected(null);
    };

    return (
        <>
            {!selected && (
                <GameBoard 
                    topics={topics} 
                    onQuestionClick={setSelected}
                />
            )}
            {selected && (
                <QuestionModal 
                    title={selected.title} 
                    price={selected.price}
                    question={selected.question} 
                    answer={selected.answer}
                    onClose={handleCloseModal}
                />
            )}
        </>
    )
}

export default App
