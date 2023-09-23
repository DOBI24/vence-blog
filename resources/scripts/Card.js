class Card{
    get username() {
        return this._username;
    }
    get category() {
        return this._category;
    }
    get description() {
        return this._description;
    }
    get title() {
        return this._title;
    }
    get date() {
        return this._date;
    }
    get img() {
        return this._img;
    }
    constructor(img, date, title, description, category, username) {
        this._img = img;
        this._date = date;
        this._title = title;
        this._description = description;
        this._category = category;
        this._username = username
    }
}