class Card{
    get user() {
        return this._user;
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
    constructor(img, date, title, description, category, user) {
        this._img = img;
        this._date = date;
        this._title = title;
        this._description = description;
        this._category = category;
        this._user = user
    }
}