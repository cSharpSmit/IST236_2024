// Defines a Country class to model country-related data
class Country {
  constructor(id, name, color, flagUrl) {
    this.id = id; // Unique identifier for the country
    this.name = name; // Name of the country
    this.color = color; // Color associated with the country, for UI purposes
    this.flagUrl = flagUrl  // URL to the country's flag image
  }
}

// Exports the Country class for use elsewhere in the app
export default Country;
