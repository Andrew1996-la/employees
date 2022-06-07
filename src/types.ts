export interface DataTypeElement {
    name: string
    salary: number
    increase: boolean
    rise: boolean
    id: number
}

export interface AppProps {
    data: DataTypeElement[]
    increaseWorker: (id: number) => void
    deletedData: (id: number) => void
    riseWorker: (id: number) => void
}

