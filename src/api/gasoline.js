const GASOLINE_DATA = {
  resources: [
    {
      name: "Ghana",
      prices: {
        2018: 1.02,
        2019: 0.89,
        2020: 0.56,
        2021: 1.169,
      },
    },
    {
      name: "Zimbabwe",
      prices: {
        2018: 1.46,
        2019: 1.347,
        2020: 0.768,
        2021: 1.526,
      },
    },
    {
      name: "India",
      prices: {
        2018: 0.91,
        2019: 0.89,
        2020: 0.989,
        2021: 1.399,
      },
    },
    {
      name: "Saudi Arabia",
      prices: {
        2018: 0.586,
        2019: 0.512,
        2020: 0.354,
        2021: 0.621,
      },
    },
    {
      name: "USA",
      prices: {
        2018: 0.878,
        2019: 0.746,
        2020: 0.494,
        2021: 0.989,
      },
    },
    {
      name: "UAE",
      prices: {
        2018: 0.687,
        2019: 0.612,
        2020: 0.39,
        2021: 0.732,
      },
    },
    {
      name: "France",
      prices: {
        2018: 1.672,
        2019: 1.52,
        2020: 0.953,
        2021: 1.85,
      },
    },
    {
      name: "Russia",
      prices: {
        2018: 0.612,
        2019: 0.553,
        2020: 0.37,
        2021: 0.681,
      },
    },
  ],
};

const colors = [
  "rgb(255, 99, 132)",
  "rgb(75, 192, 192)",
  "rgb(53, 162, 235)",
  "rgb(73, 142, 135)",
];

// function to fetch data from the constant defined above
const fetchData = (data, year) =>
  data.map((country) => country["prices"][year]);

export const fetchCountriesData = (isSorted) => {
  let originalData = GASOLINE_DATA.resources;
  // Sorting Logic for the data (sorting by country name)
  if (isSorted) {
    originalData = [...originalData];
    originalData.sort((a, b) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  return new Promise((resolve) => {
    const years = Object.keys(originalData[0].prices);
    // Delayed effect as we dont' have any actual API call
    setTimeout(() => {
      resolve({
        labels: originalData.map((item) => item.name),
        datasets: years.map((year, index) => ({
          label: year,
          data: fetchData(originalData, year),
          backgroundColor: colors[index],
          stack: `Stack ${index + 1}`,
        })),
      });
    }, 1000);
  });
};
