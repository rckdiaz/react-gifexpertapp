export const getGifs = async(category) =>{

    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&api_key=ihnpOcCAAj6d7X5vd5JTmeGCO6sbu5Ew&limit=10`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    //console.log(gifs);
    return gifs;
}