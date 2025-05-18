function bakeCake() {
    console.log("[BAKER] Starting to bake a cake... Wait for moment!");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bakedSuccessfully = Math.random() > 0.3;

            if (bakedSuccessfully) {
                resolve("[BAKER] Cake will now be decorated!");
            } else {
                reject("[BAKER] Cake is burnt!");
            }
        }, 3000);
    });
}

function decorateCake() {
    console.log("[DECORATOR] Decorating the cake... Wait for moment!");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const decoratedSuccessfully = Math.random() > 0.1;

            if (decoratedSuccessfully) {
                resolve("[DECORATOR] Cake is decorated!");
            } else {
                reject("[DECORATOR] Cake was messed up! Restarting!");
            }
        }, 2000);
    });
}

bakeCake()
    .then((bakedCake) => {
        console.log("[BAKER] Done Baking!", bakedCake);
        return decorateCake(bakedCake);
    })
    .then(finishedCake => {
        console.log("[DECORATOR] Done Decorating!", finishedCake);
    })
    .catch(error => {
        console.log("UH OH!:", error);
    });

console.log("[CUSTOMER] I'm waiting for the cake to be ready...");
