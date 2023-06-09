export type MyCard = {
    id: number,
    paths_to_images: Array<string>,
    title: string,
    price: number,
    price_currency: string,

    desc: MyCardDesc
}

export type MyCardDesc = {
    composition: string,
    sizes: string,
    print: string
}