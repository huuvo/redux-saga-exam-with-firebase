import fire from "../config/firebase";

export function* fetchListToDo(){
    try{
        var data = [];
        const listRef = yield fire.database().ref('List').orderByKey();
        yield listRef.once('value', snapshot => {
            snapshot.forEach(child => { 
                var value = {
                    key : child.key,
                    name : child.val().name
                }
                data.push(value);
            })
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}
export function* postItem(value){
    try{
        yield fire.database().ref('List').push({
            name: value
        });
    } catch (error) {
        console.log(error);
    }
}
export function* deleteItem(key){
    try{
        yield fire.database().ref('List/'+key).remove();
    } catch (error) {
        console.log(error);
    }
}
export function* putItem(key, value){
    try{
        yield fire.database().ref('List/'+key).update({
            name: value
        });
    } catch (error) {
        console.log(error);
    }
}