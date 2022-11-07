import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Gauge from "./Gauge";
import "./result.css";
import { words } from "../../utils/data";
import ResultFooter from "./ResultFooter";

const Result = () => {
	const [percentage, setPercentage] = useState(0);
	const RandomNum = () => {
		let min = 1;
		let max = 100;
		let random = min + Math.round(Math.random() * (max - min));
		setPercentage(random);
	};

	return (
		<>
			<main className="result__page">
				<section className="result-section">
					<div className="gauge-section">
						<Navbar />
						<div className="gauge-section__content">
							<Gauge percent={percentage} />
							<button onClick={RandomNum} className="play-btn">
								Play Again
							</button>
						</div>
					</div>
					<div className="review-section">
						<div className="review-section__content">
                            <figure className="review-score">
                                <h4>Your Score</h4>
                                <h5 className="title"> {percentage}% </h5>
                            </figure>
                            <div className="review-words">
                                <h4>Sight Word Review</h4>
                                <div className="word-box">
                                    {words.map((word) => {
                                        return (
                                            <span
                                                key={word.id}
                                                style={{
                                                    color: word.themeColor.font,
                                                    background: word.themeColor.bg,
                                                }}
                                            >
                                                {word.word}
                                            </span>
                                        );
                                    })}
                                </div>
                        </div>
						</div>
					</div>
				</section>
				<ResultFooter />
			</main>
		</>
	);
};

export default Result;
