// import React, { useEffect, useState } from 'react'
// import Axios from 'axios'
// function Favorite(props) {
//     const movieId = props.movieId
//     const userFrom = props.userFrom
//     const movieTitle = props.movieinfo.movieTitle
//     const moviePost = props.movieinfo.backdrop_path
//     const movieRunTime = props.movieinfo.runtime

//     const [FavoriteNumber, setFavoriteNumber] = useState(0)
//     const [Favorited, setFavorited] = useState(false)

//     useEffect(() => {
//         let variables = {
//             userFrom,
//             movieId
//         }

//         Axios.post('/api/favorite/favorite/number', variables)
//             .then(response => {
//                 setFavoriteNumber(response.data.FavoriteNumber)
//                 if (response.data.success) {
//                 } else {
//                     alert('숫자 정보를 가져오는데 실패했습니다.')
//                 }
//             })


//         Axios.post('/api/favorite/favorited', variables)
//             .then(response => {
//                 if (response.data.success) {
//                     console.log('favorited',response.data)
//                     setFavorited(response.data.favorited)
//                 } else {
//                     alert('정보를 가져오는데 실패했습니다.')
//                 }
//             })

//     }, [])


//     return (
//         <div>
//             <button>{Favorited ? "Not Favorite" : "Add to Favorite"} {FavoriteNumber} </button>

//         </div>
//     )
// }

// export default Favorite
