import Image from "next/image";
import { useState } from "react";

import { CloseButton } from "../close-button";

interface FeedbackType {
	title: string;
	image: { src: string; alt: string };
}

interface IFeedbackTypes {
	BUG: FeedbackType;
	IDEA: FeedbackType;
	OTHER: FeedbackType;
}

const feedbackTypes: IFeedbackTypes = {
	BUG: {
		title: "Problema",
		image: {
			src: "/bug.svg",
			alt: "Bug image",
		},
	},
	IDEA: {
		title: "Ideia",
		image: {
			src: "/idea.svg",
			alt: "Lamp image",
		},
	},
	OTHER: {
		title: "Outro",
		image: {
			src: "/thought.svg",
			alt: "Thought bubble image",
		},
	},
};

export const WidgetForm = () => {
	const [feedbackType, setFeedbackType] = useState<string | null>(null);

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			<header>
				<span className="text-xl leading-6">Deixe seu feedback</span>

				<CloseButton />
			</header>

			{feedbackType ? ( // eslint-disable-line multiline-ternary
				<div>Hello World</div>
			) : (
				<div className="flex py-8 gap-2 w-full">
					{Object.entries(feedbackTypes).map(([key, data]) => {
						const { title, image } = data;

						return (
							<button
								key={key}
								className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-col flex-1 items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
								type="button"
								onClick={() => setFeedbackType(title)}
							>
								<span>{title}</span>
								<Image {...image} width="40px" height="40px" />
							</button>
						);
					})}
				</div>
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
