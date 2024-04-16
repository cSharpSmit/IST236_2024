class PlantCategories {
  constructor(id, name, type, apiParam, imageUrl) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.apiParam = apiParam;
    this.imageUrl = imageUrl;
  }

  // Method to return a string representation of the plant category
  toString() {
    return `${this.name}: ${this.type} - ${this.apiParam} - Image URL: ${this.imageUrl}`;
  }
}

// Export the PlantCategory model
export default PlantCategories;
