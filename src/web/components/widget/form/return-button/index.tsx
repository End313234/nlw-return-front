import { ArrowLeft } from "phosphor-react";

interface ReturnButtonProps {
	onClick: () => void;
}

export const ReturnButton = ({ onClick }: ReturnButtonProps) => {
	return (
		<button
			type="button"
			className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
			onClick={onClick}
		>
			<ArrowLeft weight="bold" className="w-4 h-4"></ArrowLeft>
		</button>
	);
};
