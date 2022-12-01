const RandomColor = (mainColor, opacity) => {
    const randomValue = () => { return Math.floor(Math.random() * 255) }

    if (mainColor === 'blue') {
        return `rgb(${randomValue()}, 0, 255, ${opacity})`;
    }

    if (mainColor === 'red') {
        return `rgb(255, 0, ${randomValue()}, ${opacity})`;
    }
    
}

export default RandomColor;