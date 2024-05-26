const weatherData = { "location": { "name": "Milan", "region": "Lombardia", "country": "Italy", "lat": 45.47, "lon": 9.2, "tz_id": "Europe/Rome", "localtime_epoch": 1716696218, "localtime": "2024-05-26 6:03" }, "current": { "last_updated_epoch": 1716696000, "last_updated": "2024-05-26 06:00", "temp_c": 13.0, "temp_f": 55.4, "is_day": 1, "condition": { "text": "Sunny", "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png", "code": 1000 }, "wind_mph": 2.2, "wind_kph": 3.6, "wind_degree": 295, "wind_dir": "WNW", "pressure_mb": 1017.0, "pressure_in": 30.03, "precip_mm": 0.0, "precip_in": 0.0, "humidity": 94, "cloud": 0, "feelslike_c": 13.3, "feelslike_f": 56.0, "vis_km": 10.0, "vis_miles": 6.0, "uv": 4.0, "gust_mph": 4.6, "gust_kph": 7.4 } }

const tempRef = document.querySelector('.temp');
const locationRef = document.querySelector('.location')
const timeLocartionRef = document.querySelector('.time_location');
const imageRef = document.querySelector('.weather_condition p img');
document.querySelector()