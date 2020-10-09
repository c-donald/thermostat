$(document).ready(function () {
    var thermostat = new Thermostat();
    $('#temperature').text(thermostat.temperature)
    $('#energy-usage').text(thermostat.energyUsage());
    $('#temperature-up').on('click', function () {
        thermostat.up();
        $('#temperature').text(thermostat.temperature)
        $('#energy-usage').text(thermostat.energyUsage());
    });
    $('#temperature-down').on('click', function () {
        thermostat.down();
        $('#temperature').text(thermostat.temperature)
        $('#energy-usage').text(thermostat.energyUsage());
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


    displayWeather('London');

    $('#select-city').submit(function (event) {
        event.preventDefault();
        var city = $('#current-city').val();
        displayWeather(city);
    })
    function displayWeather(city) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        var token = '&appid=79734182354473bd1378b3db74651f2d';
        var units = '&units=metric';
        $.get(url + token + units, function (data) {
            $('#current-temperature').text(data.main.temp);
        })
    }

});