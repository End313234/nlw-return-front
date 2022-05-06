import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import { CloseButton } from "web/components/close-button";

import type { Feedback } from "../types/feedback";
import { feedbackTypes } from "../types/feedback";

interface FeedbackTypesPresenterProps {
	onFeedbackTypeChange: Dispatch<SetStateAction<Feedback | null>>;
}

export const FeedbackTypesPresenter = ({
	onFeedbackTypeChange,
}: FeedbackTypesPresenterProps) => {
	return (
		<>
			<header>
				<span className="text-xl leading-6">Deixe seu feedback</span>

				<CloseButton />
			</header>

			<div className="flex py-8 gap-2 w-full">
				{Object.entries(feedbackTypes).map(([key, data]) => {
					const { title, image } = data;

					return (
						<button
							key={key}
							className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col-reverse items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
							type="button"
							onClick={() => onFeedbackTypeChange(data)}
						>
							<span>{title}</span>
							<Image {...image} width="40px" height="40px" />
						</button>
					);
				})}
			</div>
		</>
	);
};
