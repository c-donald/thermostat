$(document).ready(function () {
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature)
    $('#temperature-up').on('click', function () {
        thermostat.up();
        $('#temperature').text(thermostat.temperature)
    });
    $('#temperature-down').on('click', function () {
        thermostat.down();
        $('#temperature').text(thermostat.temperature)
    });
    $('#temperature-reset').on('click', function () {
        thermostat.resetTemperature();
        $('#temperature').text(thermostat.temperature)
    });
    $('#power-saving-status').text(thermostat.powerSaveMode)
    $('#powersaving-on').on('click', function () {
        thermostat.turnOnPowerSaveMode();
        $('#power-saving-status').text(thermostat.powerSaveMode)
    });
    $('#powersaving-off').on('click', function () {
        thermostat.turnOffPowerSaveMode();
        $('#power-saving-status').text(thermostat.powerSaveMode)
    });
});
