import Plot3 from './Plot3'
import ReactTooltip from 'react-tooltip'

const Pool = props => {
  return (
    <div
      className='fixed z-10 inset-0 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'
    >
      <ReactTooltip place='top' className='text-lg w-72' />
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
          aria-hidden='true'
        ></div>
        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>
        <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-75 border-4 border-gray-200'>
          <div className='bg-white'>
            <div className='sm:flex sm:items-start'>
              {/* <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
                <svg
                  className='h-6 w-6 text-red-600'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                  />
                </svg>
              </div> */}
            </div>
          </div>
          <div className='grid grid-cols-6'>
            <div
              className='col-span-1 bg-red py-5 px-4 text-white'
              style={{
                backgroundImage:
                  'linear-gradient(253.34deg, #ff6746 11.3%, #ff0546 106.44%)'
              }}
            >
              <div className='mt-3'>
                <div className='flex flex-col'>
                  <h3
                    className='text-3xl font-bold leading-6 font-medium tracking-wide'
                    id='modal-title'
                    style={{ fontFamily: 'IntegralCF-ExtraBold' }}
                  >
                    {props.poolName}
                  </h3>
                  <p className='mt-3 ml-3 text-sm font-mono tracking-wide'>
                    Unlocks: {props.unlockDate}
                  </p>
                </div>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-col mt-6 mb-6'>
                  <div
                    className='w-full flex'
                    style={{ fontFamily: 'IntegralCF-ExtraBold' }}
                  >
                    Boost Yield
                    <span className='h-6 w-6' data-tip='Here is a tooltip'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='-2 -2 20 20'
                      >
                        <g fill='white'>
                          <path d='M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z' />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <input
                    type='number'
                    className='rounded-md h-10 mb-2 border-red-400'
                  ></input>
                  <button className='border-2 py-1 border-white rounded-2xl'>
                    Boost
                  </button>
                </div>
                <div className='flex flex-col mb-6'>
                  <div
                    className='w-full flex tracking-widest'
                    style={{ fontFamily: 'IntegralCF-ExtraBold' }}
                  >
                    Swap
                    <span
                      className='h-6 w-6'
                      data-tip='Here is another tooltip'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='-2 -2 20 20'
                      >
                        <g fill='white'>
                          <path d='M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z' />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <input
                    type='number'
                    className='rounded-md h-10 mb-1 border-red-400'
                  ></input>
                  <input
                    type='number'
                    className='rounded-md h-10 mb-2 border-red-400'
                  ></input>
                  <button className='border-2 py-1 border-white rounded-2xl'>
                    Swap
                  </button>
                </div>
              </div>
            </div>
            <div className='col-span-5 pt-4'>
              <Plot3 />
            </div>
          </div>
          <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-300'>
            <button
              onClick={props.cancelModal}
              type='button'
              className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
            >
              Close Pool
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pool
