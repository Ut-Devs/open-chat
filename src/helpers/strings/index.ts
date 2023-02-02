export function RemoveDuplicate(text: string[]){
    const newArray = [...new Set(text)]

    return newArray
}