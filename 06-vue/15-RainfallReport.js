const RainfallReport = {
  props: {
    rainfall: Number,
    tomorrowRainfall: Number,
    dayAfterTomorrowRainfall: Number,
  },
  computed: {
    averageNextTwoDaysRainfall() {
      return (this.tomorrowRainfall + this.dayAfterTomorrowRainfall) / 2;
    },
  },
  template: `
      <div>
          Rainfall: {{rainfall}} mm
          <br />
          Average rainfall predicted over next 2 days = {{averageNextTwoDaysRainfall}} mm
      </div>
  `,
};

export default RainfallReport;
