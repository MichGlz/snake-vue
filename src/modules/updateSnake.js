

const NUMBER_OF_SEGMENTS = 1;
const gridSize = 21;
let newSegments = 0;
// let snakeBody = [];

export const update = (snakeSegments, snakeDirection, foodPosition) => {
    const snakeBody = [...snakeSegments]

    //add the number of segments
    addSegments(snakeBody);

    //update de position of each segment for the prev segment in the arr 
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i], isHead: false }
    }

    //update the position and direction of the head
    snakeBody[0].x += snakeDirection.x;
    snakeBody[0].y += snakeDirection.y;
    snakeBody[0].dir = snakeDirection.dir;
    snakeBody[0].isHead = true;

    //check for the tail
    if (snakeBody.length > 1) {
        snakeBody[snakeBody.length - 1].isTail = true;
        snakeBody[snakeBody.length - 1].dir = snakeBody[snakeBody.length - 2].dir
    }

    //check if eat 
    if (equalPositions(snakeSegments[0], foodPosition)) {
        console.log("snake")
        newSegments = NUMBER_OF_SEGMENTS;
    }

    return snakeBody;
}

export const onSnake = (position, snakeBody) => {
    const body = [...snakeBody]
    return body.some(segment => {
        return equalPositions(segment, position)
    })
}

export const snakeIntersection = () => {
    const arr = [...snakeBody];
    arr.shift();
    return arr.some(segment => {
        return equalPositions(segment, snakeBody[0])
    })
}

export const equalPositions = (pos1, pos2) => {
    return pos1.x === pos2.x && pos1.y === pos2.y
}

const addSegments = (snakeBody) => {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    }
    newSegments = 0;
}

// const getRandomPosition = () => {
//     let newPosition;
//     while (newPosition == null || onSnake(newPosition)) {
//         newPosition = randomGridPosition();
//     }
//     return newPosition;
// }

// const randomGridPosition = () => {
//     return {
//         x: Math.floor(Math.random() * gridSize) + 1,
//         y: Math.floor(Math.random() * gridSize) + 1,
//     };
// }