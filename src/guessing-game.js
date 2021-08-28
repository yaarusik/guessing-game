class GuessingGame {
  constructor() {
    this.max = 0;
    this.min = 0;
    this.number = 0;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.number = Math.round((this.min + this.max) / 2);
    return this.number;
  }

  lower() {
    this.max = this.number;
  }

  greater() {
    this.min = this.number;
  }
}

module.exports = GuessingGame;
