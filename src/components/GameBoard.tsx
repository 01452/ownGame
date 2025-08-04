import type {Topic} from "../data/questions.ts";
import {useContext} from "react";
import {UserNameContext} from "../utils/context.ts";

interface Props {
    topics: Topic[],
    onQuestionClick: React.Dispatch<React.SetStateAction<{
        title: string
        price: number
        question: string
        answer: string
    } | null>>;
}

const GameBoard = ({topics, onQuestionClick}: Props) => {
    const {userName} = useContext(UserNameContext);



    return (
        <div className="game-board">
            <h1>{userName}</h1>
            {topics.map((topic, i) =>
                <div key={i} className="topic-column">
                    <h3 className="topic-title">{topic.title}</h3>
                    {topic.questions.map((q, i) =>
                        <button 
                            key={i} 
                            className="question-cell"
                            onClick={() => onQuestionClick({
                                title: topic.title,
                                price: q.price,
                                question: q.question,
                                answer: q.answer
                            })}
                        >
                            {q.price}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default GameBoard;