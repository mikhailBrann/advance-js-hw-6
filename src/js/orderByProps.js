export default function orderByProps(obj, sortArr=[]) {
    const result = [];

    //сначала добавляем ключи из массива сортировки
    if(sortArr.length) {
        for(const sortKey of sortArr) {
            if(sortKey in obj) {
                result.push({
                    key: sortKey,
                    value: obj[sortKey]
                });
            }
        } 
    }

    //сортируем весь объект по алфавиту
    const sortedObj = Object.fromEntries(Object.entries(obj).sort());
    
    for(const key in sortedObj) {
        if(!sortArr.includes(key)) {
            result.push({
                key,
                value: sortedObj[key]
            });
        }
    }

    return result;
}

