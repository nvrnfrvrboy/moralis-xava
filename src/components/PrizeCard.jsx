import prize from './../images/prize.svg'

const PrizeCard = props => {
  return (
    <div
      className='border border-white h-24 w-25 rounded-3xl mx-2 my-2 shadow-2xl grid grid-cols-12'
      style={{ backgroundColor: 'rgba(64,64,64, 0.4)' }}
    >
      <div className='rounded-full w-20 h-20 my-auto col-span-2 ml-1 -mt-1'>
        <img className='w-24' src={prize} alt='prize' />
      </div>
      <div className='ml-1 col-span-10 mt-2 text-gray-800 flex flex-col'>
        <span className='flex text-white'>
          <div className='border border-white rounded-xl px-1 flex mr-2'>
            <p className='my-auto font-medium mr-1' style={{}}>
              Prize
            </p>
            <span className='border border-gray-800 rounded-xl px-1 text-xs text-gray-900 bg-white my-auto font-bold'>
              {props.prize}
            </span>
          </div>
          <div className='border border-white rounded-xl px-1 flex mr-2'>
            <p className='my-auto font-medium mr-1' style={{}}>
              Recipients
            </p>
            <span className='border border-gray-800 rounded-xl px-1 text-xs text-gray-900 bg-white my-auto font-bold'>
              {props.recipients}
            </span>
          </div>
          <div className='border border-white rounded-xl px-1 flex mr-2'>
            <p className='my-auto font-medium mr-1' style={{}}>
              Draw Date
            </p>
            <span className='border border-gray-800 rounded-xl px-1 text-xs text-gray-900 bg-white my-auto font-bold'>
              {props.draw}
            </span>
          </div>
          <span className='ml-auto mr-1 h-7 w-7' data-tip={props.tip}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 -2 20 20'>
              <g fill='white'>
                <path d='M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z' />
              </g>
            </svg>
          </span>
        </span>
        <span>
          <p className='text-white mt-1' style={{ fontSize: '0.95rem' }}>
            {props.desc} <a href={props.link}>[Read more...]</a>
          </p>
        </span>
      </div>
    </div>
  )
}

export default PrizeCard
