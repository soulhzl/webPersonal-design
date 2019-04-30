/* global $ */

const animations = [
    'leaf',
    'shuttle',
];
const $document = $(document);

$document.on('animation', (event, key) => {
    animations.forEach((item) => {
        let action = 'stop';

        if (item === key) {
            action = 'start';
        }

        $document.trigger(`${item}-${action}`);
    });
});
