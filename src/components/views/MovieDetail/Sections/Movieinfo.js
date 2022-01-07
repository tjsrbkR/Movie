import React from 'react'
import { Descriptions, Badge} from 'antd';
function Movieinfo({Movie}) {
    return ( 
      <Descriptions bordered>
          <Descriptions.item label="title">{Movie.original_title}</Descriptions.item>
          <Descriptions.item label="개봉일">{Movie.release_date}</Descriptions.item>
          <Descriptions.item label="상영시간">{Movie.runtime}</Descriptions.item>
          <Descriptions.item label="평점"span={2}>
              {Movie.vote_average}
          </Descriptions.item>
          <Descriptions.item label="추천수">{Movie.vote_count}</Descriptions.item>
          <Descriptions.item label="상태">{Movie.status}</Descriptions.item>
          <Descriptions.item label="누적 관객수">{Movie.popularity}</Descriptions.item>
      </Descriptions>
    )
}

export default Movieinfo
