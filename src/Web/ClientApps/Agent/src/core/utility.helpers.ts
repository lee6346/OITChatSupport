
/*
export function removeFromPendingList<>

export function removeFromList<Array<T>>(property: any, list: Array<T>): Array<T> {
    let index = list.indexOf(list.property);
    if (index !== -1)
        list.splice(index, 1);
    return list;
}

export function appendToList(prop: any) {
    if(prop instanceof Object){}
}


export function isObject(val: any): boolean {
    if (val === null)
        return false;


}

export function isType<T>(val: any): boolean {
    return typeof val === T;
}

*/

// singlton
export class Singleton {
    private static instance: Singleton;
    constructor() { }

    static get SharedInstance() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        return new Singleton();
    }
}

//abstract factory:
abstract class AbstractProductA {
    abstract methodA(): void;
    abstract methodB(): void; 
}

abstract class AbstractProductB {
    abstract methodA(): void;
    abstract methodB(): void;
}

class ProductA extends AbstractProductA {
    constructor(value: string) {
        super();

    }
    methodA(): void { }
    methodB(): void { }
}

class ProductB extends AbstractProductB {
    constructor(value: string) {
        super();
    }
    methodA(): void { }
    methodB(): void { }
}

abstract class AbstractFactory {
    abstract createProductA(): AbstractProductA;
    abstract createProductB(): AbstractProductB;
}

class MyFactory extends AbstractFactory {
    createProductA(): ProductA {
        return new ProductA('Hello');
    }
    createProductB(): ProductB {
        return new ProductB('yo');
    }
}


// iterator pattern
interface Iterator<T> {
    next(): T;
    hasNext(): boolean;
}

interface Collection {
    createIterator(): Iterator<Number>;
}

class ConcreteIterator implements Iterator<Number>{
    private _collection: Number[];
    private _index: number = 0;
    constructor(newCollection: Number[]) {
        this._collection = newCollection;
    }
    next(): any {
        const result = this._collection[this._index];
        this._index += 1;
        return result;
    }

    hasNext(): boolean {
        return this._index < this._collection.length;
    }

    private log(): void {
        console.log('log it');
    }
}
//https://github.com/gztchan/design-patterns-in-typescript
class ConcreteCollection implements Collection {
    private _collection: Number[] = [];

    constructor(collection: Number[]) {
        this._collection = collection;
    }

    createIterator(): Iterator<Number> {
        return new ConcreteIterator(this._collection);
    }
}