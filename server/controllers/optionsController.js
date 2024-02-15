// optionsController.js
const optionsController = {}
// Function to generate the option symbol
optionsController.generateOptionSymbol = (ticker, expirationDate, optionType, strikePrice) => {
    // Implement your logic to generate the option symbol
    // Example implementation:
    const formattedExpirationDate = optionsController.formatExpirationDate(expirationDate);
    const formattedStrikePrice = optionsController.formatStrikePrice(strikePrice);
    return `${ticker}${formattedExpirationDate}${optionType}${formattedStrikePrice}`;
};

// Function to format the expiration date
optionsController.formatExpirationDate = (expirationDate) => {
    let occDate = expirationDate.slice(2)
    // 2025-01-17
    // Implement your logic to format the expiration date
    // Example implementation:
    // Assuming expirationDate is in DD/MM/YY format, you may need to convert it to a format suitable for OCC symbology
    return occDate.replace(/-/g, '');
};

// Function to format the strike price
optionsController.formatStrikePrice = (strikePrice) => {
    // Implement your logic to format the strike price
    // Example implementation:
    // Assuming strikePrice is in a standard format, you may need to adjust it to fit OCC symbology
    const product = Number(strikePrice) * 1000;
    return product.toString().replace('.', '').padStart(8, '0');
};

module.exports = optionsController;
