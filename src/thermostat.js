class Thermostat {
    constructor() {
        this.temperature = 20;
        this.DEFAULT_TEMPERATURE = 20;
        this.MINIMUM_TEMPERATURE = 10;
        this.MAXIMUM_TEMPERATURE_POWER_ON = 25;
        this.MAXIMUM_TEMPERATURE_POWER_OFF = 32;
        this.powerSaveMode = true
        this.MEDIUM_USAGE_LIMIT = 18
        this.HIGH_USAGE_LIMIT = 25
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if (this.atMaximumTemp()) {
            return
        }
        this.temperature += 1;
    }

    atMaximumTemp() {
        if (this.isPowerSaveModeOn() === false) {
            return this.temperature === this.MAXIMUM_TEMPERATURE_POWER_OFF
        }
        return this.temperature === this.MAXIMUM_TEMPERATURE_POWER_ON
    }

    down() {
        if (this.atMinimumTemp()) {
            return;
        }
        this.temperature -= 1;
    }

    atMinimumTemp() {
        return this.temperature === this.MINIMUM_TEMPERATURE;
    }

    isPowerSaveModeOn() {
        return this.powerSaveMode === true;
    }

    turnOffPowerSaveMode() {
        this.powerSaveMode = false;
    }

    turnOnPowerSaveMode() {
        this.powerSaveMode = true;
    }

    resetTemperature() {
        this.temperature = this.DEFAULT_TEMPERATURE
    }

    energyUsage() {
        if (this.temperature < this.MEDIUM_USAGE_LIMIT) {
            return 'Low-Usage';
        }
        if (this.temperature < this.HIGH_USAGE_LIMIT) {
            return 'Medium-Usage';
        }
        if (this.temperature > this.HIGH_USAGE_LIMIT) {
            return 'High-Usage';
        }

    }

}