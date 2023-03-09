


export interface IService<T>{
    getRandomElements(count: number): Promise<T>

    customQuery(query: string): void

}