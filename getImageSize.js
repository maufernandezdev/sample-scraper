import {get} from 'https'
import sizeOf from 'image-size'

export const getImageSize = ({url}) =>{
    return new Promise((resolve) =>{

        get(url, (response) => {
            const chunks = []
            response.on('data', function (chunk) {
              chunks.push(chunk)
            }).on('end', function() {
              const buffer = Buffer.concat(chunks)
              const imgSize = sizeOf(buffer)
              resolve(imgSize);
            })
          })
    })
}

