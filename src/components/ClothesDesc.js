import '../style/desc.css'

export function ClothesDesc({card}) {
    return (
        <div className='desc'>
            <span>{card.title}</span>
            <br />
            <span>Тут должно быть какое-то описание товара, но мы его не заполучили((</span>
        </div>
    )
}