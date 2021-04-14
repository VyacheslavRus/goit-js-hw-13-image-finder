const searchQuery = ''
const key = '21148733-fe4ceb41e783008baa1bd0520'
const PER_PAGE = 12

const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal`

function fetchCard(searchQuery, pageNumber){
    return fetch(`${baseUrl}&q=${searchQuery}&page=${pageNumber}&per_page=${PER_PAGE}&key=${key}`)
    .then(response=>response.json())
}
 
export default {fetchCard}