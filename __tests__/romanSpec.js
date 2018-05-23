const startApplication = require("../src/romanNumerals.js");
var app;

describe("RomanNumerals", function () {
  app = startApplication();
  it("converts numbers to Roman numerals", function () {
    var romanNumerals = require("../src/romanNumerals");

    expect(app.init(1)).toBe("I");
    expect(app.init(2)).toBe("II");
    expect(app.init(3)).toBe("III");
    expect(app.init(4)).toBe("IV");
    expect(app.init(2648)).toBe("MMDCXLVIII");
  });
});