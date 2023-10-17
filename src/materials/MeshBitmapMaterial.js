
const MeshBitmapMaterialCounter = { value: 0 };

const MeshBitmapMaterialMode = { UVMAPPING: 0 };

export default class MeshBitmapMaterial {

    constructor(bitmap, mode) {
        this.bitmap = bitmap;
        this.mode = mode || MeshBitmapMaterialMode.UVMAPPING;
        
        this.id = MeshBitmapMaterialCounter.value++;
    }

    toString() {

        // return `MeshBitmapMaterial ( bitmap: ${this.bitmap}, mode: ${this.mode}`

        return `MeshBitmapMaterial ( bitmap: ${this.bitmap}, mode: ${this.mode}, id: ${this.id})`
    }

}