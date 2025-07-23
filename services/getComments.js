export default async function getComments(){
    const result=await fetch('https://dummyjson.com/comments')

    return result.json()
}