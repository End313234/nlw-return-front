import Image from "next/image";
import type { Dispatch, FormEventHandler, SetStateAction } from "react";
import { useState } from "react";
import { CloseButton } from "web/components/close-button";

import { ReturnButton } from "../return-button";
import { ScreenshotButton } from "../screenshot-button";

import type { Feedback } from "../types/feedback";

interface FeedbackContentReceiverProps {
	feedbackType: Feedback;
	onFeedbackRestart: Dispatch<SetStateAction<Feedback | null>>;
	onFeedbackSent: () => void;
}

export const FeedbackContentReceiver = ({
	feedbackType,
	onFeedbackRestart,
	onFeedbackSent,
}: FeedbackContentReceiverProps) => {
	const MINIMUM_FEEDBACK_LENGTH = 1;

	const [screenshot, setScreenshot] = useState<string | null>(null);
	const [feedbackContent, setFeedbackContent] = useState("");

	const { title, image } = feedbackType;

	const handleFeedbackSubmit: FormEventHandler<HTMLFormElement> = event => {
		event.preventDefault();

		// eslint-disable-next-line no-console
		console.log({
			screenshot,
			feedbackContent,
		});

		onFeedbackSent();
	};

	return (
		<>
			<header>
				<ReturnButton onClick={onFeedbackRestart as () => void} />

				<span className="text-xl leading-6 flex items-center gap-2">
					<Image {...image} width="30px" height="30px" />
					{title}
				</span>

				<CloseButton />
			</header>

			<form className="my-4 w-full" onSubmit={handleFeedbackSubmit}>
				<textarea
					className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700  scrollbar-track-transparent scrollbar-thin"
					placeholder="Conte com detalhes o que está acontecendo..."
					onChange={({ target }) => setFeedbackContent(target.value)}
				/>

				<footer className="flex gap-2 mt-2">
					<ScreenshotButton
						screenshot={screenshot}
						onScreenshot={setScreenshot as (image: string | null) => void}
					/>
					<button
						type="submit"
						className="bg-brand-500 p-2 rounded-md border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
						disabled={feedbackContent.length < MINIMUM_FEEDBACK_LENGTH}
					>
						Enviar feedback
					</button>
				</footer>
			</form>
		</>
	);
};
