export type FeedbackTitle = "Ideia" | "Outro" | "Problema";
export type FeedbackTag = "BUG" | "IDEA" | "OTHER";

export interface Feedback {
	title: FeedbackTitle;
	image: { src: string; alt: string };
}

export interface FeedbackTypes {
	BUG: Feedback;
	IDEA: Feedback;
	OTHER: Feedback;
}

export const feedbackTypes: FeedbackTypes = {
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
