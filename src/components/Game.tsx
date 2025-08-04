import {useState} from "react";
import GameBoard from "./GameBoard.tsx";
import {topics} from "../data/questions.ts";
import QuestionModal from "./QuestionModal.tsx";

const Game = () => {
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
};

export default Game;