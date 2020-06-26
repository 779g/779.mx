import * as React from 'react'

export default [

  /*
  {
    id              :'mnt-1',
    source          :'/a00.jpg',
    alt             :'',
    caption         :'France, 2010',
    wrapperClassName:'x-red'
  },
  */
  {
    id              :'pasha',
    source          :'/a01.jpg',
    alt             :'mnt',
    caption         :'Karelia, 2018',
    wrapperClassName:'x-black b-x'
        
  },
  {
    id              :'karelia',
    source          :'/a02.jpg',
    alt             :'mnt',
    caption         :'Karelia, 2018',
    wrapperClassName:'x-green b-x'
        
  },
  {
    id              :'azadi',
    source          :'/a03.jpg',
    alt             :'mnt',
    caption         :'Teheran, 2016',
    wrapperClassName:'x-background b-x'
        
  },
  {
    id              :'hershey',
    source          :'/a04.jpg',
    alt             :'',
    caption         :'Cuba, 2016',
    wrapperClassName:'x-olive b-x'
        
  },
  {
    id              :'vfc',
    source          :'/a05.jpg',
    alt             :'',
    caption         :'France, 2017',
    wrapperClassName:'x-white b-x'
        
  },
  {
    id              :'mty',
    source          :'/a06.jpg',
    alt             :'',
    caption         :'Mexico, 2016',
    wrapperClassName:'x-white b-x'
        
  },
  {
    id              :'mazunte',
    source          :'/a07.jpg',
    alt             :'',
    caption         :'Oaxaca, 2016',
    wrapperClassName:'x-grey b-x'
        
  },
  {
    id              :'seine',
    source          :'/a08.jpg',
    alt             :'',
    caption         :'Paris, 2009',
    wrapperClassName:'x-white b-x'
        
  },
  {
    id              :'tree',
    source          :'/a09.jpg',
    alt             :'',
    caption         :'Oaxaca, 2016',
    wrapperClassName:'x-olive b-x'
        
  },
  {
    id              :'cannes',
    source          :'/a10.jpg',
    alt             :'',
    caption         :'France, 2013',
    wrapperClassName:'x-black b-x'
        
  },
  {
    id :'explanation',
    jsx:<>
      <p><strong>Hello. I have taken these pictures over the years.</strong></p>
      <p>These pictures are all raw scans of Polaroid film prints and haven't been digitally edited. Particular colors or effects come from analog manipulation and the uniqueness of every film pack.</p>
    </>,
    wrapperClassName:'x-white'
        
  },
  {
    id :'contact',
    jsx:<>
      <p>
        <strong>
        Contact :
          <a
            href="mailto:alexis.zorba@779.mx"
            className="c-on-x yi"
            onClick={e => e.stopPropagation()}
          >
          alexis.zorba@779.mx
          </a>
        </strong>
      </p>
      <p>&nbsp;</p>
      <p>
        <strong>
          Source code :
          <a
            href="https://github.com/779g/779.mx"
            className="c-on-x yi"
            target="_blank"
            onClick={e => e.stopPropagation()}
          >
            github.com/779g/779.mx
          </a>
        </strong>
      </p>
      <p>&nbsp;</p>
      <p>
Not interested, I just want
        {' '}
        <strike>more wine</strike>
        {' '}
to see more pictures
      </p>
    </>,
    wrapperClassName:'x-white'
        
  }
]
