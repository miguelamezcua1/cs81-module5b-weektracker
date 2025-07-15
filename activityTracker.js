// GitHub Repo: https://github.com/miguelamezcua1/cs81-module5b-weektracker

// Weekly activity log (one per day)
const myWeek = [
  { day: "Monday", activity: "cycling", category: "physical", hoursSpent: 1.5, enjoyment: 7, timeOfDay: "morning" },
  { day: "Tuesday", activity: "watching documentaries", category: "learning", hoursSpent: 2, enjoyment: 8, timeOfDay: "evening" },
  { day: "Wednesday", activity: "journaling", category: "creative", hoursSpent: 1, enjoyment: 9, timeOfDay: "afternoon" },
  { day: "Thursday", activity: "catching up with friends", category: "social", hoursSpent: 2.5, enjoyment: 6, timeOfDay: "evening" },
  { day: "Friday", activity: "reading", category: "learning", hoursSpent: 1.5, enjoyment: 8, timeOfDay: "evening" },
  { day: "Saturday", activity: "cycling", category: "physical", hoursSpent: 2, enjoyment: 7, timeOfDay: "morning" },
  { day: "Sunday", activity: "drawing", category: "creative", hoursSpent: 1.2, enjoyment: 9, timeOfDay: "afternoon" }
];

//  PREDICTIONS 
// I think journaling or drawing will have the highest enjoyment.
// The "learning" category might show up the most.
// Evenings might have higher enjoyment because I usually relax then.

//  ANALYSIS FUNCTIONS 

// 1. Total hours spent on physical activities
function totalPhysicalHours(data) {
  const physical = data.filter(entry => entry.category === "physical");
  const total = physical.reduce((sum, act) => sum + act.hoursSpent, 0);
  return total;
}

// 2. Average enjoyment for evening activities
function averageEveningEnjoyment(data) {
  const evenings = data.filter(entry => entry.timeOfDay === "evening");
  const totalEnjoyment = evenings.reduce((sum, act) => sum + act.enjoyment, 0);
  const avg = totalEnjoyment / evenings.length;
  return avg.toFixed(1);
}

//  CUSTOM HIGHER-ORDER FUNCTION 

// This function accepts a test function and filters the week using it
function filterByCondition(testFn) {
  return myWeek.filter(testFn);
}

// Example: activities with low hours but high enjoyment
const lowEffortHighEnjoyment = filterByCondition(entry => entry.hoursSpent < 2 && entry.enjoyment >= 8);

//  OUTPUT 

console.log("Analyzing My Weekly Activities...\n");
console.log("Total hours spent on physical activity:", totalPhysicalHours(myWeek));
console.log("Average enjoyment in the evening:", averageEveningEnjoyment(myWeek));
console.log("Low-effort, high-enjoyment activities:", lowEffortHighEnjoyment.map(entry => entry.activity));
