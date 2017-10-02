import { expect } from 'chai';

import Genre from "../Genre";
import Trailer from "../Trailer";
import Film from '../Film';

const jsonFilm  = {
    "title" : "12 Rounds 3: Lockdown",
    "releasedate": "Fri, 11 Sep 2015 00:00:00 -0700",
    "studio" : "Lionsgate",
    "poster" : "http://trailers.apple.com/trailers/lions_gate/12rounds3lockdown/images/poster.jpg",
    "location" : "/trailers/lions_gate/12rounds3lockdown/",
    "rating" : "R",
    "genre" : ["Action and Adventure"],
    "directors" : "Stephen Reynolds",
    "actors" : [
        "Dean Ambrose",
        "Roger Cross",
        "Daniel Cudmore",
        "Lochlyn Munro",
        "Ty Olsson",
        "Sarah Smyth"
    ],
    "trailers": [
        {
            "postdate" : "Mon, 27 Jul 2015 00:00:00 -0700",
            "url" : "/trailers/lions_gate/12rounds3lockdown/",
            "type" : "Trailer",
            "exclusive": false,
            "hd" : true
        }
    ]
}

let film:Film;

describe('filmTest', () => {
    beforeEach(()=> {
        const trailers = jsonFilm.trailers.map(
            jsonFilm => {
                             return new Trailer(jsonFilm.postdate, jsonFilm.url, jsonFilm.type, jsonFilm.exclusive, jsonFilm.hd);
                      }
        );

        film = new Film(jsonFilm.title,
            jsonFilm.releasedate,
            jsonFilm.studio,
            jsonFilm.poster,
            jsonFilm.location,
            jsonFilm.rating,
            Genre.ActionAdveture,
            jsonFilm.directors,
            jsonFilm.actors,
            trailers)
    });

    describe('#Film()', () => {
        it('given_jsonFilm_when_Film()_then_new instanceOf Film', () =>{
            expect(film).to.be.instanceOf(Film);
        });

        it('given_jsonTitle_when_Film()_then_stringValue', () => {
            expect(film.title).to.equal('12 Rounds 3: Lockdown');
        });

        it('given_jsonReleaseDate_when_Film()_then_stringValue', () => {
            expect(film.releasedate).to.equal('Fri, 11 Sep 2015 00:00:00 -0700');
        });

        it('given_jsonStudio_when_Film()_then_stringValue', () => {
            expect(film.studio).to.equal('Lionsgate');
        });

        it('given_jsonPoster_when_Film()_then_stringValue', () => {
            expect(film.poster).to.equal('http://trailers.apple.com/trailers/lions_gate/12rounds3lockdown/images/poster.jpg');
        });

        it('given_jsonLocation_when_Film()_then_stringValue', () => {
            expect(film.location).to.equal('/trailers/lions_gate/12rounds3lockdown/');
        });

        it('given_jsonRating_when_Film()_then_stringValue', () => {
            expect(film.rating).to.equal('R');
        });

        it('given_jsonGenre_when_Film()_then_isSting', () => {
            expect(film.genre).to.be.an('string');
        });

        // it('given_jsonGenre_when_Film()_then_isEnum', () => {
        //     expect(film.genre).to.be.a('object');
        // });

        it('given_jsonGenre_when_Film()_then_enumValue', () => {
            expect(film.genre).to.equal(Genre.ActionAdveture);
        });

        it('given_jsonDirectors_when_Film()_then_stringValue', () => {
            expect(film.directors).to.equal('Stephen Reynolds');
        });

        it('given_jsonActors_when_Film()_then_isArray', () => {
            expect(film.actors).to.be.an('array');
        });

        it('given_jsonActors_when_Film()_then_arrayLength', () => {
            expect(film.actors.length).to.equal(6);
        });

        it('given_jsonActor_when_Film()_then_isString', () => {
            expect(film.actors[0]).to.be.an('string');
        });

        it('given_jsonActor1_when_Film()_then_stringValue', () => {
            expect(film.actors[0]).to.equal('Dean Ambrose');
        });

        it('given_jsonActor2_when_Film()_then_stringValue', () => {
            expect(film.actors[1]).to.equal('Roger Cross');
        });

        it('given_jsonActor3_when_Film()_then_stringValue', () => {
            expect(film.actors[2]).to.equal('Daniel Cudmore');
        });

        it('given_jsonActor4_when_Film()_then_stringValue', () => {
            expect(film.actors[3]).to.equal('Lochlyn Munro');
        });

        it('given_jsonActor5_when_Film()_then_stringValue', () => {
            expect(film.actors[4]).to.equal('Ty Olsson');
        });

        it('given_jsonActor6_when_Film()_then_stringValue', () => {
            expect(film.actors[5]).to.equal('Sarah Smyth');
        });

        it('given_jsonTrailers_when_Film()_then_isArray', () => {
            expect(film.trailers).to.be.an('array');
        });

        it('given_jsonTrailers_when_Film()_then_arrayLength', () => {
            expect(film.trailers.length).to.equal(1);
        });

        it('given_jsonTrailers_when_Film()_then_isTrailer', () => {
            expect(film.trailers[0]).to.be.instanceOf(Trailer);
        });

        it('given_jsonTrailers_postdate_when_Film()_then_postdateValue', () => {
            expect(film.trailers[0].postdate).to.equal('Mon, 27 Jul 2015 00:00:00 -0700');
        });

        it('given_jsonTrailers_url_when_Film()_then_urlValue', () => {
            expect(film.trailers[0].url).to.equal('/trailers/lions_gate/12rounds3lockdown/');
        });

        it('given_jsonTrailers_type_when_Film()_then_typeValue', () => {
            expect(film.trailers[0].type).to.equal('Trailer');
        });

        it('given_jsonTrailers_exclusive_when_Film()_then_isBoolean', () => {
            expect(film.trailers[0].exclusive).to.be.an('boolean');
        });

        it('given_jsonTrailers_exclusive_when_Film()_then_booleanValue', () => {
            expect(film.trailers[0].exclusive).to.equal(false);
        });

        it('given_jsonTrailers_hd_when_Film()_then_isBoolean', () => {
            expect(film.trailers[0].hd).to.be.an('boolean');
        });

        it('given_jsonTrailers_hd_when_Film()_then_booleanValue', () => {
            expect(film.trailers[0].hd).to.equal(true);
        });
    });
});