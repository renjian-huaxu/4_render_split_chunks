import Object3D from "./Object3D";

export default class Mesh extends Object3D {

    constructor(geometry, material, normUVs) {
        super(material)

        this.geometry = geometry;
        material && (this.material = material instanceof Array ? material : [material]);

        this.flipSided = false;
        this.doubleSided = false;

        this.overdraw = false;

        this.materialFaceGroup = {};

        this.sortFacesByMaterial();
        if (normUVs) this.normalizeUVs();

        this.geometry.computeBoundingBox();
    }


    materialHash(material) {
		let hash_array = [];

		for ( let i = 0, l = material.length; i < l; i++ ) {

			if ( material[ i ] == undefined ) {

				hash_array.push( "undefined" );

			} else {

				hash_array.push( material[ i ].toString() );

			}

		}

		return hash_array.join("_");
    }

    sortFacesByMaterial() {
        var material;

        this.geometry.faces.forEach((face, index) => {
            material = face.material;

            let hash = this.materialHash( material);

            if ( this.materialFaceGroup[ hash ] == undefined ) {
    
                this.materialFaceGroup[ hash ] = { 'faces': [], 'material': material };
    
            }
    
            this.materialFaceGroup[ hash ].faces.push( index );
        });
       
    }

    normalizeUVs() {
        this.geometry.uvs.forEach(uvArr => {
            uvArr.forEach(uv => {
                if (uv.u != 1.0) uv.u = uv.u - Math.floor(uv.u);
                if (uv.v != 1.0) uv.v = uv.v - Math.floor(uv.v);
            })
        });

    }

}