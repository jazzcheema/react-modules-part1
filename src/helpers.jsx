import { sample as _sample } from 'lodash';


/**
 * Randomly selects an item from an array
 * Input: array
 */
function choice(items) {

    let randomItem = _sample(items);

    return randomItem;
}




/**
 *  Removes first element found in list that matches.
 * Input: array,
 */
function remove(items, item) {

    let foundItem = items.findIndex(i => i === item);
    items.splice(foundItem, 1)
    return items
}


export {choice, remove}