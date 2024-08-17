class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    removeItem(item: T): void {
        this.data = this.data.filter(storedItem => storedItem !== item);
    }

    getItems(): T[] {
        return [...this.data];  // 배열 복사본 반환
    }
}

// 숫자 저장소 인스턴스 생성
const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.removeItem(10);
console.log(numberStorage.getItems());  // [20]

// 문자열 저장소 인스턴스 생성
const stringStorage = new DataStorage<string>();
stringStorage.addItem('Hello');
stringStorage.addItem('World');
stringStorage.removeItem('Hello');
console.log(stringStorage.getItems());  // ['World']
