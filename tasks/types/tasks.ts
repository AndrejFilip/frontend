export interface Tasks {
    id: string,
    name: string,
    completed: boolean
}

export interface Search {
    search: string,
    setSearch(e: string): void
}
