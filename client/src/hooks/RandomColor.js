const RandomColor = () => {
    const randomValue = () => { return Math.floor(Math.random() * 255) }
    const randomColor = `rgb(255, 0, ${randomValue()}, 0.75)`;

    return randomColor;
}

export default RandomColor;