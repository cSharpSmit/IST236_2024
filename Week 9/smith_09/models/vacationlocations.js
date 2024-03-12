// Defines a class to represent a vacation location with relevant details
class VacationLocation {
  // Constructor initializes a new instance with properties for each vacation location
  constructor(id, countryId, name, avgCost, foundedYear, rating, imageUrl, description) {
    this.id = id; // Unique identifier for the vacation location
    this.countryId = countryId; // Identifier linking to a country
    this.name = name; // Name of the vacation location
    this.avgCost = avgCost; // Average cost for visiting
    this.foundedYear = foundedYear;  // Year the location was founded/established
    this.rating = rating; // User rating for the location
    this.imageUrl = imageUrl; // URL for an image of the location
    this.description = description; // Description of the vacation location
  }

  // Method to return a string representation of the vacation location
  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Average Cost to Visit: ${this.avgCost}, Rating: ${this.rating}`;
  }
}

// Exports the class for use elsewhere in the application
export default VacationLocation;
