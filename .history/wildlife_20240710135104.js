/* Task 1: Track Animal Sightings */
// TODO: Write a function with rest parameters to print sightings of different animals within the sanctuary. This function should accept an arbitrary number of animal names.
function sightings(...animals) {
  console.log(`Animal Sightings: ${animals}`);
}
sightings("Tiger", "Snow Leopard", "Elephant", "Giraffe", "Zebra");
/* Task 2: Merge Habitat Areas */
const forestHabitats = ["Forest A", "Forest B"];
const savannahHabitats = ["Savannah C", "Savannah D"];
// TODO: You are given two arrays of habitat names. Use the spread operator to combine them into a comprehensive list of protected areas within the sanctuary.
const protectedAreas = [...forestHabitats, ...savannahHabitats];
console.log(`Protected areas: ${protectedAreas}`);
/* Task 3: Update Conservation Status */
// TODO: You are given an object representing an animal's conservation status. Use the spread operator to update this status with new information, such as an increase in population or a change in habitat.
const rhinoStatus = {
  population: 500,
  status: "Endangered",
};
const newConservationStatus = {
  ...rhinoStatus,
  population: 550,
  status: "Threatened",
};
console.log(`Updated Rhino Conservation Status: ${newConservationStatus}`);

/* Task 4: Catalog Genetic Diversity */
const lionProfile = {
  name: "Leo",
  age: 5,
  species: "Lion",
};
// TODO: Duplicate an animal profile object using a shallow copy. Add genetic diversity information using the `genetics` property to this copy. Observe and explain how changes to nested properties affect both the original and the copied object.
const copyLionProfile = { ...lionProfile };
console.log(copyLionProfile);
/*
 * Observations:
 * TODO: Explain here.
 */

/* Task 5: Analyze Ecosystem Health */
const ecosystemHealth = {
  waterQuality: "Good",
  foodSupply: {
    herbivores: "Abundant",
    carnivores: "Sufficient",
  },
};
// TODO: You are given an object with a nested structure detailing the ecosystem's health, including water quality and food supply. Perform a shallow copy and modify a nested property. Observe and explain how changes to nested properties affect both the original and the copied object.
/*
 * Observations:
 * TODO: Explain here.
 */