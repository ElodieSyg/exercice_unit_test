// Import functions
const isEven = require("./functions/isEven");
const isEvenBonus = require("./functions/isEvenBonus");
const formatDate = require("./functions/formatDate");
const formatDateBonus = require("./functions/formatDateBonus");


// isEven tests
test("if the num is pair return true", () => {
    const result = isEven(3);

    expect(result).toBeTruthy();
});

// isEvenBonus
test("if element contains only string numbers return true", () => {
    const result = "12";

    expect(result).toMatch(/^[0-9]*$/);
});

// formatDate
test("Return a string with this format : DD/MM/YYYY", () => {
    const result = formatDate("2021/09/21");

    expect(result).toMatch(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i);
});

// formatDateBonus
test("if string in parameter is a date return null", () => {
    const result = formatDateBonus("11/11/2021");

    expect(result).not.toBeNull();
});