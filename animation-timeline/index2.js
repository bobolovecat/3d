import { trackProgress } from 'https://esm.sh/@bramus/sda-utilities';

const model = document.querySelector('model-viewer');
trackProgress(model.getAnimations()[0], (progress) => {
	model.orientation = `0deg 0deg ${progress * -360}deg`;
});