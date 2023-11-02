import Color from "../core/Color";

export default class MeshPhongMaterial {

    constructor(ambient, diffuse, specular, shininess, opacity) {
        
        this.ambient = new Color( ( opacity >= 0 ? ( opacity * 0xff ) << 24 : 0xff000000 ) | ambient );
        this.diffuse = new Color( ( opacity >= 0 ? ( opacity * 0xff ) << 24 : 0xff000000 ) | diffuse );
        this.specular = new Color( ( opacity >= 0 ? ( opacity * 0xff ) << 24 : 0xff000000 ) | specular );
        this.shininess = shininess;
        this.opacity = opacity;

    }

    toString() {
		return 'THREE.MeshPhongMaterial ( <br/>ambient: ' + this.ambient 
                + ', <br/>diffuse: ' + this.diffuse 
                + ', <br/>specular: ' + this.specular 
                + ', <br/>shininess: ' + this.shininess 
                + ', <br/>opacity: ' + this.opacity + ')';
    }

}