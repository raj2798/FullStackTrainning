import RainfallReport from "./15-RainfallReport";

const WeatherReport = {
  components: {
    RainfallReport: RainfallReport,
  },
  props: {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "India",
    },
    rainfall: Number,
    tomorrowRainfall: Number,
    dayAfterTomorrowRainfall: Number,
    date: String,
    temperature: {
      type: Object,
      // 1. Vue runs the validator function and passes the value of the temperature prop
      // 2. Vue throws an error in the console if the validator returns false
      validator(tObj) {
        return typeof tObj.min === "number" && typeof tObj.max === "number";
      },
    },
  },
  template: `
        <div class="weather">
            <h2>{{city}}, {{country}}</h2>
            <hr />
            <p>
                Weather on {{date}}
                <br />
                Min Temperature is {{temperature.min}}
                <br />
                Max Temperature is {{temperature.max}}
                <br />
                <rainfall-report
                    :rainfall="rainfall"
                    :tomorrowRainfall="tomorrowRainfall"
                    :dayAfterTomorrowRainfall="dayAfterTomorrowRainfall"
                />
            </p>
        </div>
    `,
};

export default WeatherReport;
