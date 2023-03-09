


export class ArrayHelper{

    public static getRandElementInArray(array: any[]){
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }
}