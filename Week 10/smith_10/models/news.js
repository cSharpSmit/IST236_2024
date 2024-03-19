/**
 * Represents a news article with all relevant details.
 * The constructor initializes with the article's metadata and content.
 * 
 * Properties:
 * - id: Unique identifier for the news article.
 * - type: Category or type of news (e.g., World News, Sports).
 * - headline: Title of the news article.
 * - date: Publication date.
 * - author: Name of the person who wrote the article.
 * - agency: News agency that published the article.
 * - imageUrl: URL of the accompanying image.
 * - description: Summary or full text of the news article.
 * 
 * Methods:
 * - toString(): Returns a string representation of the news article for logging or debugging
 */

class News {
    // Constructor and methods inside the class
    constructor(
      id,
      type,
      headline,
      date,
      author,
      agency,
      imageUrl,
      description
    ) {
      this.id = id;
      this.type = type;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    toString() {
      return `${this.type} ${this.headline}, ${this.date}, ${this.author} ${this.agency} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  // Exports the component for use
  export default News;
  