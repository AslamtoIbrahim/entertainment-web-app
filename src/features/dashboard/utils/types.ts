 export type Film = {
     name: string
     first_air_date: string
     poster_path: string
     original_language: string
     media_type: string
 }

 export type MoviesDB = {
    page: number
    results: Film[]
 }


// api key :  ad5a071b9678eb7768bdc204670822bb