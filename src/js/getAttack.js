export default function getAttack(obj, propName){
    const result = [];

    if(propName in obj) {
        for(const propObj of obj[propName]) {
            const {id, name, icon, description='Описание недоступно'} = propObj;

            result.push({id, name, icon, description});
        }
    }
    
    return result;
}