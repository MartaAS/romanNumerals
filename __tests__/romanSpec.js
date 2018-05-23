const startApplication = require("../src/romanNumerals.js");
var app;

describe("RomanNumerals", function () {
  app = startApplication();
  it("converts numbers to Roman numerals", function () {
    var romanNumerals = require("../src/romanNumerals");

    expect(app.translate(1)).toBe("I");
    expect(app.translate(2)).toBe("II");
    expect(app.translate(3)).toBe("III");
    expect(app.translate(4)).toBe("IV");
    expect(app.translate(2648)).toBe("MMDCXLVIII");
  });
});