import axios from 'axios'
import {BASE_URL, API_KEY} from '../config'
import { PopularShow } from './fake-data'

export class TvShowApi {
    static async fetchPopulars() {
      const response = await axios.get(`${BASE_URL}/tv/popular${API_KEY}`)
      return response.data.results
    // return PopularShow
}  

    static async fetchRecommendation(tvShowId) {
        const response = await axios.get(`${BASE_URL}/tv/${tvShowId}/recommendations${API_KEY}`)
        return response.data.results;
    }

    static async fetchByTitle(title) {
        const response = await axios.get(`${BASE_URL}/search/tv${API_KEY}&query=${title}`)
        return response.data.results;
    }

    static async fetchByVideo(tv_id) {
        const response = await axios.get(`${BASE_URL}/tv/${tv_id}/videos${API_KEY}`)
        return response.data.results;
    }
}

// {"id":119051,"results":[{"iso_639_1":"en","iso_3166_1":"US","name":"Wednesday Addams | Dance Scene | Netflix","key":"NakTu_VZxJ0","site":"YouTube","size":1080,"type":"Clip","official":true,"published_at":"2022-11-25T14:00:00.000Z","id":"6380e364a410c800848205a0"},{"iso_639_1":"en","iso_3166_1":"US","name":"Welcome to Nevermore","key":"N1OKeHFX0PQ","site":"YouTube","size":1080,"type":"Featurette","official":true,"published_at":"2022-11-09T18:00:00.000Z","id":"636c5c0b81383100772f2d14"},{"iso_639_1":"en","iso_3166_1":"US","name":"Title Sequence","key":"2LaCvjjNgR4","site":"YouTube","size":1080,"type":"Opening Credits","official":true,"published_at":"2022-11-08T20:00:00.000Z","id":"636abdc8d363e50090a91716"},{"iso_639_1":"en","iso_3166_1":"US","name":"From the Mind of Tim Burton","key":"XszaIFktCVw","site":"YouTube","size":1080,"type":"Featurette","official":true,"published_at":"2022-10-19T16:30:00.000Z","id":"635101ffc99826007ddc0dd4"},{"iso_639_1":"en","iso_3166_1":"US","name":"Exclusive \"Tim Burton\" Behind the Scenes Clip","key":"EZAXiWPWcG0","site":"YouTube","size":1080,"type":"Behind the Scenes","official":false,"published_at":"2022-10-19T16:00:08.000Z","id":"6350e3a4c99826008297367d"},{"iso_639_1":"en","iso_3166_1":"US","name":"Official Trailer","key":"Q73UhUTs6y0","site":"YouTube","size":1080,"type":"Trailer","official":true,"published_at":"2022-10-09T00:05:01.000Z","id":"63423b29cf62cd007eacda7e"},{"iso_639_1":"en","iso_3166_1":"US","name":"Wednesday Addams vs. Thing","key":"RCL_dp8YRtA","site":"YouTube","size":1080,"type":"Clip","official":true,"published_at":"2022-09-24T17:29:00.000Z","id":"632f44c7dd4716008e41cf0a"},{"iso_639_1":"en","iso_3166_1":"US","name":"Inside the Character","key":"6AWlVOMWt10","site":"YouTube","size":1080,"type":"Behind the Scenes","official":true,"published_at":"2022-08-24T19:00:00.000Z","id":"630694f918864b007b185f3b"},{"iso_639_1":"en","iso_3166_1":"US","name":"Official Teaser","key":"Di310WS8zLk","site":"YouTube","size":1080,"type":"Teaser","official":true,"published_at":"2022-08-17T15:00:00.000Z","id":"62fd0336435abd0091571d26"},{"iso_639_1":"en","iso_3166_1":"US","name":"Wednesday Addams Revealed","key":"G4QHrAcZalc","site":"YouTube","size":1080,"type":"Teaser","official":true,"published_at":"2022-06-06T16:03:02.000Z","id":"629e29a912197e1689f1c62a"}]}