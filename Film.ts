import Genre from './Genre';
import Trailer, { name } from './Trailer';

export default class Film {
    constructor(public title: string,
                public releasedate:string,
                public studio:string,
                public poster:string,
                public location:string,
                public rating:string,
                public genre:Genre,
                public directors:string,
                public actors:Array<string>,
                public trailers:Array<Trailer>){}

    toString () {
        return `${this.title} | ${this.releasedate}  | ${this.studio} | ${this.poster} | ${this.location} | ${this.rating}  | ${this.genre} | ${this.directors}  | ${this.actors} | ${this.trailers}`
    }

    print () {
        console.log( this.toString() );
    }
}

