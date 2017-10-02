"use strict";
//export default Trailer;
// default = 1 seul export default / fichier
// c'est ca qu'on recupere par default quand on ne donne rien
Object.defineProperty(exports, "__esModule", { value: true });
// import Trailer
var Trailer = (function () {
    function Trailer(postdate, // echivalent avec  this.postdate = postdate
        url, type, exclusive, hd) {
        if (type === void 0) { type = 'Trailer'; }
        this.postdate = postdate;
        this.url = url;
        this.type = type;
        this.exclusive = exclusive;
        this.hd = hd;
    }
    Trailer.prototype.toString = function () {
        return this.postdate + " | " + this.url + "  | " + this.type + " | " + this.exclusive + " | " + this.hd;
    };
    Trailer.prototype.print = function () {
        console.log(this.toString());
    };
    return Trailer;
}());
exports.default = Trailer;
// exports d'autres valeurs, qui ne sont PAS default => import { name }
exports.name = 'ali';
//# sourceMappingURL=trailer.js.map