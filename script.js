// 1. Create an empty class called Media.
class Media {
  // 2. Inside the Media class, create an empty constructor()...
  constructor(title) {
    //     3. Inside the constructor, set the values for Media...
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  // 4. Create getters for the title...
  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }
  // 5. Create a setter for the isCheckedOut property.
  set isCheckedOut(newIsCheckedOut) {
    this._isCheckedOut = newIsCheckedOut;
  }
  // 6. Under your getters, create a method named toggleCheckOutStatus...
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  // 7. Under .toggleCheckOutStatus(), create...
  getAverageRating() {
    return (
      this._ratings.reduce(
        (accumlator, currentValue) => accumlator + currentValue,
        0
      ) / this._ratings.length
    );
  }
  // 8. Let’s add a method named addRating that accepts one argument and...
  addRating(addedValue) {
    addedValue >= 1 && addedValue <= 5
      ? this._ratings.push(addedValue)
      : console.log("The value should be between 1 and 5");
  }
}

// 9. Next, we’ll build a Book class that extends Media...

class Book extends Media {
  //10. Inside the Book class, create a constructor...
  constructor(author, title, pages) {
    //11.Call super on the first line of the Books‘s constructor method...
    super(title);
    //12.Use the remaining arguments to set the author and pages properties in Book.
    this._author = author;
    this._pages = pages;
  }
  //13.Since our Book class inherits Media‘s properties and getter...
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

//14. Let’s see if you can create an entire Movie class using only the property, getter, and method specifications below...

class Movie extends Media {
  constructor(title, director, runTime, movieCast) {
    super(title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
  get movieCast() {
    return this._movieCast;
  }
}
//25. Create a CD class that extends Media.
class CD extends Media {
  constructor(title, songs) {
    super(title);
    this._songs = songs;
  }
  get songs() {
    return this._songs;
  }

  shuffle() {
    for (let i = this._songs.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [this._songs[i], this._songs[randomIndex]] = [this._songs[randomIndex], this._songs[i],];
    }
    return this._songs;
  }
}

//15.Create a Book instance with...
const historyOfEverything = new Book(
  "A Short History of Nearly Everything",
  "Bill Bryson",
  544
);

//16. Call .toggleCheckOutStatus() on the historyOfEverything instance.
historyOfEverything.toggleCheckOutStatus();

//17. Log the value saved to the isCheckedOut property in the historyOfEverything instance.
console.log(historyOfEverything.isCheckedOut);

//18. Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5.
[4, 5, 5].forEach((rating) => historyOfEverything.addRating(rating));

//19.Call .getAverageRating() on historyOfEverything. Log the result to the console.
console.log(historyOfEverything.getAverageRating());

//  20.Create a Movie instance with the following properties: Director: 'Jan de Bont' Title: 'Speed' Runtime: 116 Save the instance to a constant variable named speed.
const speed = new Movie("Speed", "Jan de Bont", 116);

//21.Call .toggleCheckOutStatus() on the speed instance.
speed.toggleCheckOutStatus();
// 22.Log the value saved to the isCheckedOut property in the speed instance.
console.log(speed.isCheckedOut);
//23.Call .addRating() three times on speed with inputs of 1, 1, and 5.
[1, 4, 5].forEach((rating) => speed.addRating(rating));
//24. Call .getAverageRating() on speed. Log the result to the console.
console.log(speed.getAverageRating());
