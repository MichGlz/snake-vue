




export const getInputDirection = (key) => {
    let inputDirection = { x: 0, y: 0, dir: "" };

    if (inputDirection.y !== 1 && key === 'ArrowUp' || inputDirection.y !== 1 && key === 'KeyW') {
        inputDirection.x = 0;
        inputDirection.y = -1;
        inputDirection.dir = "0deg";
    }
    if (inputDirection.y !== -1 && key === 'ArrowDown' || inputDirection.y !== -1 && key === 'KeyS') {
        inputDirection.x = 0;
        inputDirection.y = 1;
        inputDirection.dir = "180deg";
    }
    if (inputDirection.x !== 1 && key === 'ArrowLeft' || inputDirection.x !== 1 && key === 'KeyA') {
        inputDirection.x = -1;
        inputDirection.y = 0;
        inputDirection.dir = "270deg";
    }
    if (inputDirection.x !== -1 && key === 'ArrowRight' || inputDirection.x !== -1 && key === 'KeyD') {
        inputDirection.x = 1;
        inputDirection.y = 0;
        inputDirection.dir = "90deg";
    }
    return inputDirection;
}