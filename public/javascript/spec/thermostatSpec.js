describe("Thermostat", function () {
    var thermostat;
    beforeEach(function () {
        thermostat = new Thermostat();
    });

    it('has a degree of 20', function () {
        expect(thermostat.getTemperature()).toEqual(20);

    });

    describe('Up function', function () {
        it('increases the temperature', function () {
            thermostat.up()
            expect(thermostat.getTemperature()).toEqual(21);
        });
    });

    describe('Down function', function () {
        it('decreases the temperature', function () {
            thermostat.down()
            expect(thermostat.getTemperature()).toEqual(19);
        });

    });

    describe('Minimum Temperature', function () {
        it('Minimum temperature is always 10 degrees', function () {
            for (var i = 0; i < 11; i++) {
                thermostat.down();
            }
            expect(thermostat.getTemperature()).toEqual(10)
        });

    });

    describe('Reset function', function () {
        it('it reset the temperature to 20 degrees', function () {
            for (var i = 0; i < 6; i++) {
                thermostat.up();
            }
            thermostat.resetTemperature()
            expect(thermostat.getTemperature()).toEqual(20)
        });

    });

    describe('Power Save Mode', function () {
        it('it expects power save mode to be On', function () {
            expect(thermostat.isPowerSaveModeOn()).toBe(true);
        });
        it('it expects power save mode to be turned OFF', function () {
            thermostat.turnOffPowerSaveMode()
            expect(thermostat.powerSaveMode).toBe(false);
        });
        it('it expects power save mode to be turned On when it was OFF', function () {
            thermostat.turnOffPowerSaveMode()
            expect(thermostat.isPowerSaveModeOn()).toBe(false);
            thermostat.turnOnPowerSaveMode()
            expect(thermostat.isPowerSaveModeOn()).toBe(true);
        });
        it('When power save Mode is On the Maximum Temp is 25 degrees', function () {
            for (var i = 0; i < 6; i++) {
                thermostat.up();
            }
            expect(thermostat.getTemperature()).toEqual(25)
        });
        it('When power save Mode is off the Maximum Temp is 32 degrees', function () {
            thermostat.turnOffPowerSaveMode()
            expect(thermostat.isPowerSaveModeOn()).toBe(false);
            for (var i = 0; i < 13; i++) {
                thermostat.up();
            }
            expect(thermostat.getTemperature()).toEqual(32)
        });

    });

    describe('Energy Usage', function () {
        it('when the Temp is < 18 degrees its at a Low-Usage', function () {
            for (var i = 0; i < 3; i++) {
                thermostat.down()
            }
            expect(thermostat.energyUsage()).toEqual('Low-Usage')
        });

        it('when the Temp between 18 - 25 degrees its at a Medium-Usage', function () {
            expect(thermostat.energyUsage()).toEqual('Medium-Usage')
        });

        it('when the Temp is > 25 degrees its at a High-Usage', function () {
            thermostat.turnOffPowerSaveMode()
            for (var i = 0; i < 13; i++) {
                thermostat.up();
            }
            expect(thermostat.energyUsage()).toEqual('High-Usage')
        });


    });

});