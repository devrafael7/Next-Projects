import { alphaNumericArray } from "./AlphaNumericArray";

export const generateRandomSKU = (length: number = 8): string => {
    let sku = "";
    for (let i = 1; i <= length; i++) {
        const randomIndex = Math.floor(Math.random() * alphaNumericArray.length);
        sku += alphaNumericArray[randomIndex];
    }
    return sku;
};
