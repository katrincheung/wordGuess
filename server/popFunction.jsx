export default function pop(array) {
    let msg = array[0];
    array.shift();
    return msg;
}