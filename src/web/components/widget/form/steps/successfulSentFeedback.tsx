import Image from "next/image";
import { CloseButton } from "web/components/close-button";

interface SuccessfulSentFeedbackProps {
	onFeedbackRestart: () => void;
}

export const SuccessfulSentFeedback = ({
	onFeedbackRestart,
}: SuccessfulSentFeedbackProps) => {
	return (
		<>
			<header>
				<CloseButton />
			</header>

			<div className="flex flex-col items-center py-10 w-[304px]">
				<Image src="/success.svg" width="41px" height="40px" />
				<span className="text-xl mt-2">Agradecemos o feedback!</span>

				<button
					type="button"
					className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:ring-brand-500"
					onClick={onFeedbackRestart}
				>
					Quero enviar outro
				</button>
			</div>
		</>
	);
};
