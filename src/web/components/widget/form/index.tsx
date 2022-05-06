import { useState } from "react";

import { FeedbackContentReceiver } from "./steps/feedbackContentReceiver";
import { FeedbackTypesPresenter } from "./steps/feedbackTypesPresenter";
import { SuccessfulSentFeedback } from "./steps/successfulSentFeedback";

import type { Feedback } from "./types/feedback";

export const WidgetForm = () => {
	const [feedbackType, setFeedbackType] = useState<Feedback | null>(null);
	const [isFeedbackSent, setIsFeedbackSent] = useState(false);

	const handleFeedbackRestart = () => {
		setIsFeedbackSent(false);
		setFeedbackType(null);
	};

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{isFeedbackSent ? ( // eslint-disable-line multiline-ternary
				<SuccessfulSentFeedback onFeedbackRestart={handleFeedbackRestart} />
			) : (
				<>
					{feedbackType ? ( // eslint-disable-line multiline-ternary
						<FeedbackContentReceiver
							feedbackType={feedbackType}
							onFeedbackRestart={handleFeedbackRestart}
							onFeedbackSent={() => setIsFeedbackSent(true)}
						/>
					) : (
						<FeedbackTypesPresenter onFeedbackTypeChange={setFeedbackType} />
					)}
				</>
			)}

			<footer className="text-xs text-neutral-400 flex gap-1">
				Feito com ♥ pela
				<a
					className="underline underline-offset-2 text-neutral-400"
					href="https://rocketseat.com.br"
				>
					Rocketseat
				</a>
			</footer>
		</div>
	);
};
