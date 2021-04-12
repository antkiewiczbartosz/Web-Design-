var granimInstance = new Granim({
    element: '#canvas-image',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
        source: 'img/krajobraz.jpg ',
        blendingMode: 'multiply',
    },
    states: {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
});

var granimInstance = new Granim({
    element: '#canvas-images',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
        source: 'img/pustynia.jpg ',
        blendingMode: 'multiply',
    },
    states: {
        "default-state": {
            gradients: [
                ['#736d5e', '#ba9a49'],
                ['#822fbd', '#8a2086'],
                ['#50d4cb', '#38c938'],
                ['#a0a863', '#d12815']
            ],
            transitionSpeed: 7000
        }
    }
});

var granimInstance = new Granim({
    element: '#canvas-image-blending',
    direction: 'top-bottom',
    isPausedWhenNotInView: true,
    image: {
        source: 'img/niebo.jpg ',
        blendingMode: 'multiply',
    },
    states: {
        "default-state": {
            gradients: [
                ['#29323c', '#485563'],
                ['#FF6B6B', '#556270'],
                ['#80d3fe', '#7ea0c4'],
                ['#f0ab51', '#eceba3']
            ],
            transitionSpeed: 7000
        }
    }
});