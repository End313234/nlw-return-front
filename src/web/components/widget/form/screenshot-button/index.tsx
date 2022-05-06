import html2canvas from "html2canvas";
import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import { LoadingButton } from "web/components/loading-button";

interface ScreenshotButtonProps {
	onScreenshot: (image: string | null) => void;
	screenshot: string | null;
}

export const ScreenshotButton = ({
	screenshot,
	onScreenshot,
}: ScreenshotButtonProps) => {
	const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

	const toggleIsTakingScreenshot = () => {
		setIsTakingScreenshot(!isTakingScreenshot);
	};

	const handleTakeScreenshot = async () => {
		toggleIsTakingScreenshot();

		const canvas = await html2canvas(
			document.querySelector("html") as HTMLElement,
		);
		const base64Image = canvas.toDataURL("image/png");

		onScreenshot(base64Image);
		toggleIsTakingScreenshot();
	};

	if (screenshot) {
		return (
			<button
				type="button"
				className="p-1 w-10 h-10 rounded-md background-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
				style={{
					backgroundImage: `url(${screenshot})`,
					backgroundPosition: "right bottom",
					backgroundSize: 180,
				}}
				onClick={() => onScreenshot(null)}
			>
				<Trash weight="fill" />
			</button>
		);
	}

	return (
		<button
			type="button"
			className="p-2 w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
			onClick={handleTakeScreenshot}
		>
			{isTakingScreenshot ? <LoadingButton /> : <Camera className="w-4 h-4" />}
		</button>
	);
};
