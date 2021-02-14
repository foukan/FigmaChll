anime({
    targets:'div.box',
    translateY: 250,
    rotate: '1turn',
    easing: 'spring(1, 30, 20, 0)',
    scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    
});