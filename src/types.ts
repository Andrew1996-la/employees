export interface DataTypeElement {
    name: string
    salary: number
    increase: boolean
    id: number
}

export interface AppProps {
    data: DataTypeElement[]
    deletedData: (id: number) => void

}

