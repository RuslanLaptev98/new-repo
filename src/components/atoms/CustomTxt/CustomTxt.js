import React from 'react';
import './CustomTxt.css'

// Порядок элементов в массиве зависит напрямую
// В зависимости от позиции
// Массив txtArr имеет следующую структуру
// состоит из объектов вида
// если элемент блочный
// { blockable: [
//     {
//         text: '',
//         color: '',
//         styles: {}
//     },
//     .
//     .
//     .
// ] }
// если элемент не блочный 
// {
//     text: '',
//     color: '',
//     styles: {}
// }
// customCss это стили применяемые к блоку (обертке)

const CustomTxt = ({ txtArr=[], customCss={} }) => {

    const txtCreator = () => txtArr.map((item, i) => item?.blockable ? 
        (<div style={{ marginLeft: '-4px' }}>
            {item.blockable.map(item => 
                (<span key={i} style={{ 
                    color: item.color, 
                    paddingRight: '4px', 
                    ...item?.styles }}>{ item.text }</span>))
            }
        </div>
        ) : (
        <span key={i} style={{ 
            color: item.color, 
            paddingRight: '4px', 
            ...item?.styles }}>{ item.text }</span>
        )
    )
    
    const textComposition = txtCreator()

    return (
        <div className='CustomTxt' style={ customCss }>
            { textComposition }
        </div>
    )
}

export default CustomTxt;
