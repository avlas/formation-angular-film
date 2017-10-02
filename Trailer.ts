// export default Trailer;
// c'est ca qu'on recupere par default quand on ne donne rien
// default = 1 seul export default par fichier

export default class Trailer {                                      // import Trailer
    constructor(public postdate: string,                            // echivalent avec  this.postdate = postdate
                public url: string,
                public type: string='Trailer',
                public exclusive: boolean,
                public hd: boolean){}

    toString () {
        return `${this.postdate} | ${this.url}  | ${this.type} | ${this.exclusive} | ${this.hd}`
    }

    print () {
        console.log( this.toString() );
    }
}

// exports d'autres valeurs (qui ne sont PAS default) => import { name }
export const name='ali';

