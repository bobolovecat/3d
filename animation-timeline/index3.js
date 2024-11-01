import { trackProgress } from 'https://esm.sh/@bramus/sda-utilities';

document.querySelectorAll('.card').forEach($card => {
	const model = $card.querySelector(':scope > model-viewer');

	trackProgress($card.getAnimations()[0], (progress) => {
		model.orientation = `0deg 0deg ${progress * -360 - 180}deg`;
	});
});