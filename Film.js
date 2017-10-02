"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Film = (function () {
    function Film(title, releasedate, studio, poster, location, rating, genre, directors, actors, trailers) {
        this.title = title;
        this.releasedate = releasedate;
        this.studio = studio;
        this.poster = poster;
        this.location = location;
        this.rating = rating;
        this.genre = genre;
        this.directors = directors;
        this.actors = actors;
        this.trailers = trailers;
    }
    Film.prototype.toString = function () {
        return this.title + " | " + this.releasedate + "  | " + this.studio + " | " + this.poster + " | " + this.location + " | " + this.rating + "  | " + this.genre + " | " + this.directors + "  | " + this.actors + " | " + this.trailers;
    };
    Film.prototype.print = function () {
        console.log(this.toString());
    };
    return Film;
}());
exports.default = Film;
//# sourceMappingURL=film.js.map