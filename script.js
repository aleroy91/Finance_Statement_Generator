let lastYearsRevenue = document.getElementById(PriorYearRevenue);
let thisYearsRevenue = document.getElementById(CurrentYearRevenue);
let lastYearsProfit = document.getElementById(PriorYearProfit);
let thisYearsProfit = document.getElementById(CurrentYearProfit);

let revenueChange = (lastYearsRevenue, thisYearsRevenue) => {
  return (thisYearsRevenue - lastYearsRevenue) / lastYearsRevenue * 100;
};

let profitChange = (lastYearsProfit, thisYearsProfit) => {
  return (thisYearsProfit - lastYearsProfit) / lastYearsProfit * 100;
};
