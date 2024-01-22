function odds(number) {
    try {
        const odd_numbers = [];

        if (typeof number != 'number') {
            throw new Error("Invalid number");
        }

        for (let i = 0; i < (number + 1); i++) {
            if (i % 2 === 1) odd_numbers.push(i)
        }

        return odd_numbers;
    } catch (error) {
        console.log(error);
    }

}


console.log(odds(9));

