// import PropTypes from 'prop-types'
import React, { useState } from 'react'

import ReactTooltip from 'react-tooltip'
import PrizeCard from './PrizeCard'
import Pool from './Pool'

const Mockup = props => {
  const tips = {
    totalTokens:
      'Sale participants now have the chance to improve their total allocation throughout the vesting period! Users now have the opportunity to increase or decrease their "Total Token" amount (the final amount of tokens you will end up with after the vesting period is finished). If you withdraw vesting tokens via the Early Access Pools, your Total Tokens will go down. If you provide liquidity to these pools, or engage in Post-Sale Community Rewards, your Total Tokens will go up.',
    earlyPools:
      'By providing liquidity to Early Access Pools, you will gain vesting token rewards. You can also use these pools to trade for more tokens, or liquidate your vesting position.',
    poolRatio:
      'The pool ratio denotes the amount of HeC currently trading for 1 stXAVA token.',
    yield:
      'This is the yield for providing liquidity to this particular pool. This yield is derived from swap fees, and those who have liquidated their vesting position.',
    boost:
      'Select portions to boost your yield by providing stXAVA for all those portions at once (intended to be an aggregation function, like the "Claim selected portions" button).',
    pool:
      'Access the various vesting (Early Access Pools) here. The "View Pools" button is intended to provide a forward pricing curve for users to examine.'
  }

  const prizes = [
    {
      id: '0',
      prize: 'NFT',
      recipients: '5',
      drawDate: '10-Apr-2022',
      desc:
        'We are rewarding 5 community members with special commemorative NFTs!',
      link: 'https://www.twitter.com',
      tip:
        'These cards represent various initiatives in the post-sale community reward feed.'
    },
    {
      id: '1',
      prize: 'Booster',
      recipients: '30',
      drawDate: '10-Mar-2022',
      desc:
        'Complete our quiz, 30 community members will be given special 200% boosting NFTs for the vesting pools.',
      link: 'https://www.twitter.com',
      tip:
        'These cards represent various initiatives in the post-sale community reward feed.'
    },
    {
      id: '2',
      prize: '300 HeC',
      recipients: '5',
      drawDate: '20-Feb-2022',
      desc: 'Enter our fan art competition for a chance at 5 lots of 300 HeC.',
      link: 'https://www.twitter.com',
      tip:
        'These cards represent various initiatives in the post-sale community reward feed.'
    }
  ]

  let [showPool, setShowPool] = useState(false)
  let [maxAmount, setMaxAmount] = useState(86.37)
  let [poolName, setPoolName] = useState('HeC-XAVA-A')
  let [unlockDate, setUnlockDate] = useState('19-Jan-2022')

  const cancelModal = () => {
    setShowPool(!showPool)
  }

  return (
    <div className='w-full flex mt-10'>
      {showPool && (
        <Pool
          cancelModal={cancelModal}
          maxAmount={maxAmount}
          poolName={poolName}
          unlockDate={unlockDate}
        />
      )}
      <ReactTooltip place='top' className='text-lg w-72' />
      <div
        className='flex flex-col w-full py-2 px-4 bg-white mx-auto'
        style={{
          width: '1300px',
          boxShadow:
            '-60px 0px 100px -90px #000000, 60px 0px 100px -90px #000000'
        }}
      >
        <p className='mb-2 font-bold text-xl ml-8'>Completed Sales</p>
        <span
          className='bg-white rounded-lg flex flex-col mx-auto'
          style={{
            width: '1200px',
            boxShadow: '0 0 20px rgba(250, 160, 160, 0.4)'
          }}
        >
          <span
            className='flex bg-cover bg-center h-32 text-white mx-0 border-4 border-gray-700 rounded-t-xl'
            style={{
              fontSize: '13px',
              backgroundImage:
                'linear-gradient(rgba(112, 128, 144, 0.2), rgba(112, 128, 144, 0.5)), url("https://avalaunch.s3.us-east-2.amazonaws.com/images/sales/heroeschained/background.jpeg")',
              backgroundPosition: '3% 1%'
            }}
          >
            <span className='ml-3 flex'>
              {/* <img className="mt-1" style={{width: '121px', height: '114px'}}src="https://heroeschained.com/assets/images/coin-ani-v2.gif" alt="HeC Logo" /> */}
              <img
                className='-mr-2 mt-1 shadow-xl'
                style={{ width: '110px', height: '110px' }}
                src='https://avalaunch.s3.us-east-2.amazonaws.com/images/sales/heroeschained/logo.png'
                alt='HeC Logo'
              />
              <p
                className='text-white ml-6 mt-7 text-5xl'
                style={{ fontFamily: 'IntegralCF-ExtraBold' }}
              >
                HEROES CHAINED
              </p>
            </span>
            <span className='mt-6 ml-auto mr-4 flex flex-col'>
              {/* <img className="mt-1" style={{width: '121px', height: '114px'}}src="https://heroeschained.com/assets/images/coin-ani-v2.gif" alt="HeC Logo" /> */}
              <span className='flex ml-10'>
                <p className='text-white text-sm'>Total Tokens</p>
                <span className='h-5 w-5' data-tip={tips.totalTokens}>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -1 18 18'>
                    <g fill='#ff0546'>
                      <path d='M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z' />
                    </g>
                  </svg>
                </span>
              </span>
              <p
                className='text-gray-800 rounded-xl px-5 text-xl bg-white border-2 border-gray-900'
                style={{ fontFamily: 'IntegralCF-ExtraBold' }}
              >
                431.86 HeC
              </p>
            </span>
            {/* <span className="h-12 w-12 bg-white border-2 border-white rounded-full my-auto mr-3" style={{backgroundImage: 'linear-gradient(253.34deg, #ff6746 30.3%, #ff0546 106.44%)'}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -4 22 22">
            <g fill="white">
              <path d="M5 11L0 6l1.5-1.5L5 8.25 8.5 4.5 10 6l-5 5z"/>
            </g>
            </svg>
          </span> */}
          </span>
          {/* SALEBOARD */}
          <span
            className='flex border-b border-gray-400 mx-2 mt-5'
            style={{ fontSize: '13px' }}
          >
            <p className='ml-5 font-bold'>Project Name</p>
            <p className='ml-14 mb-3 font-bold'>Round</p>
            <p className='ml-14 mb-3 -mt-2 font-bold w-12 text-center'>
              Allocation &nbsp;&nbsp;Granted
            </p>
            <p className='ml-14 mb-3 -mt-2 font-bold w-12 text-center'>
              Allocation &nbsp;&nbsp;Percent
            </p>
            <p className='ml-14 mb-3 font-bold'>Amount Staked</p>
            <p className='ml-16 mb-3 font-bold'>Amount Participated</p>
            <p className='ml-16 mb-3 font-bold'>Tokens Bought</p>
            <p className='ml-24 mb-3 font-bold'>Round Started</p>
          </span>
          <span className='flex mx-2 mt-5'>
            <span className='flex ml-3'>
              <img
                className='-mr-4'
                style={{ width: '35px', height: '35px' }}
                src='https://avalaunch.s3.us-east-2.amazonaws.com/images/sales/heroeschained/logo.png'
                alt='HeC Logo'
              />
              <span className='flex flex-col'>
                <p className='ml-5 font-bold'>HeC</p>
                <p className='ml-5 mb-4 font-bold text-xs text-gray-500'>
                  $0.35
                </p>
              </span>
            </span>
            <p
              className='my-auto mt-1 font-bold border border-black rounded px-2'
              style={{ backgroundColor: '#9DEAA5', marginLeft: '3.7rem' }}
            >
              Staking
            </p>
            <p className='ml-8 mt-1 mb-4 font-bold'>
              431.86 <b>HeC</b>
            </p>
            <p className='ml-5 mt-1 mb-4 font-bold'>0.01512%</p>
            <p className='ml-7 mt-1 mb-4 font-bold'>
              2,110.63 <b>XAVA</b>
            </p>
            <p className='ml-16 mt-1 mb-4 font-bold'>
              1.856 <b>XAVA</b>
            </p>
            <p className='ml-16 mt-1 mb-4 font-bold'>
              431.86 <b>HeC </b>
              <span className='text-gray-400'>($151.15)</span>
            </p>
            <p className='ml-12 -mt-1 mb-4 font-bold w-28 text-xs'>
              January 17, 2022 &nbsp;&nbsp;&nbsp;3:00 PM UTC
            </p>
          </span>
          {/* Community */}
          <span
            className='flex flex-col bg-cover bg-center h-72 text-white mx-2 border-2 border-gray-700'
            style={{
              boxShadow: '0 0 20px rgba(112, 128, 144, 0.4)',
              backgroundImage:
                'linear-gradient(rgba(112, 128, 144, 0.2), rgba(112, 128, 144, 1.0)), url("https://avalaunch.s3.us-east-2.amazonaws.com/images/sales/heroeschained/background.jpeg")'
            }}
          >
            <span className='grid grid-cols-12'>
              <span className='col-span-6'>
                <span className='ml-6 mt-4 flex flex-col'>
                  {/* <p className="text-3xl" style={{fontFamily: 'IntegralCF-ExtraBold'}}>Heroes Chained</p> */}
                  <p className='text-3xl' style={{ fontFamily: 'Lobster' }}>
                    Post-Sale Community Rewards
                  </p>
                </span>
                <span className='ml-6 mt-4 flex flex-col text-justify'>
                  <p className='text-sm'>
                    Avalaunch now allows sale participants to have early access
                    to the future value of their allocation. By staking your
                    vesting tokens into early access pools, liquidity providers
                    will be rewarded with extra tokens when those portions are
                    unlocked.
                  </p>
                  <p className='text-sm mt-2'>
                    The Heroes Chained project is also providing community
                    rewards to participating Avalaunch users during the vesting
                    period. Remember to check back here periodically to see what
                    rewards might be available so that you can get more HeC
                    tokens!
                  </p>
                </span>
              </span>
              <span className='col-span-6'>
                <span
                  id='community-scrollbar'
                  className='ml-4 mr-2 mt-2 flex flex-col overflow-y-scroll h-full -mb-10 border-t border-l border-b border-gray-500'
                  style={{
                    backgroundColor: 'rgba(64,64,64, 0.4)',
                    height: '270px'
                  }}
                >
                  {prizes.map(prize => (
                    <PrizeCard
                      key={prize.id}
                      prize={prize.prize}
                      recipients={prize.recipients}
                      draw={prize.drawDate}
                      desc={prize.desc}
                      link={prize.link}
                      tip={prize.tip}
                    />
                  ))}
                  {/* <ul>
                    <li>
                      <PrizeCard />
                    </li>
                    <li>
                      <div
                        className='border border-white h-24 w-25 rounded-3xl mx-2 my-2 shadow-2xl grid grid-cols-12'
                        style={{ backgroundColor: 'rgba(64,64,64, 0.4)' }}
                      >
                        <div
                          className='rounded-full w-20 h-20 my-auto col-span-2 ml-1 -mt-1'
                          style={{ backgroundColor: 'rgba(64,64,64, 0.4)' }}
                        >
                          <img className='w-24' src={prize} alt='prize' />
                        </div>
                        <div className='ml-1 col-span-10 mt-2 text-gray-800 flex flex-col'>
                          <span className='flex text-white'>
                            <div className='border border-white rounded-xl px-1 flex mr-2'>
                              <p
                                className='my-auto font-medium mr-1'
                                style={{}}
                              >
                                Prize
                              </p>
                              <span className='border border-gray-800 rounded-xl px-1 text-xs text-gray-900 bg-white my-auto font-bold'>
                                25 AVAX
                              </span>
                            </div>
                            <div className='border border-white rounded-xl px-1 flex mr-2'>
                              <p
                                className='my-auto font-medium mr-1'
                                style={{}}
                              >
                                Recipients
                              </p>
                              <span className='border border-gray-800 rounded-xl px-1 text-xs text-gray-900 bg-white my-auto font-bold'>
                                5
                              </span>
                            </div>
                            <div className='border border-white rounded-xl px-1 flex mr-2'>
                              <p
                                className='my-auto font-medium mr-1'
                                style={{}}
                              >
                                Draw Date
                              </p>
                              <span className='border border-gray-800 rounded-xl px-1 text-xs text-gray-900 bg-white my-auto font-bold'>
                                10-Mar-2022
                              </span>
                            </div>
                          </span>
                          <p className='text-white mt-1'>
                            We are rewarding 5 community members with special
                            commemorative NFTs! [Read more...]
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className='border border-white h-24 w-25 rounded-3xl mx-2 my-2 shadow-2xl grid grid-cols-12'
                        style={{ backgroundColor: 'rgba(64,64,64, 0.4)' }}
                      >
                        <div
                          className='rounded-full w-20 h-20 my-auto col-span-2 ml-1 -mt-1'
                          style={{ backgroundColor: 'rgba(64,64,64, 0.4)' }}
                        >
                          <img className='w-24' src={prize} alt='prize' />
                        </div>
                        <div className='ml-1 col-span-10 mt-2 text-gray-800 flex flex-col'>
                          <span className='flex text-white'>
                            <div className='border border-white rounded-xl px-1 flex mr-2'>
                              <p
                                className='my-auto font-medium mr-1'
                                style={{}}
                              >
                                Prize
                              </p>
                              <span className='border border-gray-800 rounded-xl px-1 text-xs text-gray-900 bg-white my-auto font-bold'>
                                25 AVAX
                              </span>
                            </div>
                            <div className='border border-white rounded-xl px-1 flex mr-2'>
                              <p
                                className='my-auto font-medium mr-1'
                                style={{}}
                              >
                                Recipients
                              </p>
                              <span className='border border-gray-800 rounded-xl px-1 text-xs text-gray-900 bg-white my-auto font-bold'>
                                5
                              </span>
                            </div>
                            <div className='border border-white rounded-xl px-1 flex mr-2'>
                              <p
                                className='my-auto font-medium mr-1'
                                style={{}}
                              >
                                Draw Date
                              </p>
                              <span className='border border-gray-800 rounded-xl px-1 text-xs text-gray-900 bg-white my-auto font-bold'>
                                10-Mar-2022
                              </span>
                            </div>
                          </span>
                          <p className='text-white mt-1'>
                            We are rewarding 5 community members with special
                            commemorative NFTs! [Read more...]
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul> */}
                </span>
              </span>
            </span>
          </span>
          <span
            className='flex flex-col w-full mt-1 mb-3 ml-2 grid grid-cols-12'
            style={{ borderLeft: '0.9rem solid #ff0546' }}
          >
            <span className='col-span-7'>
              <p
                class='text-xl my-2 mx-3 text-black'
                style={{ fontFamily: 'IntegralCF-ExtraBold' }}
              >
                Your Allocations
              </p>
              <span className='flex mx-2 mb-7'>
                <button className='bg-gray-500 text-white px-8 py-2 rounded-lg h-10'>
                  Claim selected portions
                </button>
              </span>
              <table className='ml-2'>
                <thead>
                  <tr className='text-gray-400 text-xs tracking-wider'>
                    <th className='w-16'>Portion Id</th>
                    <th className='w-28'>Vested %</th>
                    <th className='w-40'>Amount</th>
                    <th className='w-40'>Portion Unlock At</th>
                    <th className='w-52'>Claim</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td>0</td>
                    <td>20%</td>
                    <td>
                      86.37 <b>HeC</b> ($30.23)
                    </td>
                    <td className='text-xs'>
                      <p>January 19, 2022</p>
                      <p>2:30 PM UTC</p>
                    </td>
                    <td className='flex tracking-wide'>
                      <span className='ml-5 mt-4'>
                        <input
                          className='mr-1'
                          style={{ marginTop: '3px' }}
                          type='checkbox'
                          id='portion0'
                        />
                        <label className='my-auto text-xs'>
                          {' '}
                          Select Portion 0
                        </label>
                      </span>
                    </td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14'>
                    <td>1</td>
                    <td>13.34%</td>
                    <td>
                      57.61 <b>HeC</b> ($20.16)
                    </td>
                    <td className='text-xs'>
                      <p>February 19, 2022</p>
                      <p>2:00 PM UTC</p>
                    </td>
                    <td className=''>
                      <button className='-ml-2 px-3 rounded-lg bg-red-300 text-white py-1 font-semibold cursor-default'>
                        Unlocks in 30d, 8h, 33m
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
            <span className='col-span-5 flex flex-col mr-4'>
              {/* <span className="w-full">
          <div className="border-t border-l border-r border-black text-black px-8 py-2 rounded-t-lg h-10 mr-4">Claim selected portions</div>
        </span> */}
              <div
                className='flex border-gray-300 bg-blue-300 border-t border-r border-l rounded-t-lg h-12 bg-gradient-to-l from-white to-gray-600 shadow-2xl'
                style={{ marginTop: '75px' }}
              >
                <div
                  className='ml-3 my-auto text-xl text-white'
                  style={{ fontFamily: 'Lobster' }}
                >
                  <span className='flex'>
                    <p className='text-white text-xl my-auto'>
                      Early Access Pools
                    </p>
                    <span className='h-6 w-6' data-tip={tips.earlyPools}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='-3 -4 20 20'
                      >
                        <g fill='white'>
                          <path d='M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z' />
                        </g>
                      </svg>
                    </span>
                  </span>
                </div>
                <button className='px-1 mt-5 ml-10 rounded-lg text-white py-1 font-semibold border border-white text-xs h-6 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-500'>
                  Boost Selected
                </button>
                <button className='px-1 mt-5 ml-14 rounded-lg text-white py-1 px-2 font-semibold border border-white text-xs h-6 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400'>
                  View Pools
                </button>
              </div>
              <table>
                <thead className='border border-black'>
                  <tr
                    className='text-white text-xs tracking-wider'
                    style={{
                      backgroundImage:
                        'linear-gradient(253.34deg, #ff6746 11.3%, #ff0546 106.44%)'
                    }}
                  >
                    <th className='w-28 border border-gray-300'>
                      <span className='flex ml-5'>
                        <p className='text-white text-xs my-auto'>Pool Ratio</p>
                        <span className='h-5 w-5' data-tip={tips.poolRatio}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='-2 -2 20 20'
                          >
                            <g fill='white'>
                              <path d='M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z' />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </th>
                    <th className='w-16 border border-gray-300'>
                      <span className='flex ml-4'>
                        <p className='text-white text-xs my-auto'>Yield</p>
                        <span className='h-5 w-5' data-tip={tips.yield}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='-3 -2 20 20'
                          >
                            <g fill='white'>
                              <path d='M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z' />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </th>
                    <th className='w-32 border border-gray-300'>
                      <span className='flex ml-11'>
                        <p className='text-white text-xs my-auto'>Boost</p>
                        <span className='h-5 w-5' data-tip={tips.boost}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='-2 -2 20 20'
                          >
                            <g fill='white'>
                              <path d='M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z' />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </th>
                    <th className='w-32 border border-gray-300'>
                      <span className='flex ml-12'>
                        <p className='text-white text-xs my-auto'>Pool</p>
                        <span className='h-5 w-5' data-tip={tips.pool}>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='-2 -2 20 20'
                          >
                            <g fill='white'>
                              <path d='M6 10h2v2H6v-2zm4-3.5C10 8.64 8 9 8 9H6c0-.55.45-1 1-1h.5c.28 0 .5-.22.5-.5v-1c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5V7H4c0-1.5 1.5-3 3-3s3 1 3 2.5zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z' />
                            </g>
                          </svg>
                        </span>
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-center text-sm font-bold h-14 border border-gray-200'>
                    <td>
                      <p>
                        4.03 <b>HeC-A /</b>
                      </p>
                      <p>
                        1.0 <b>stXAVA</b>
                      </p>
                    </td>
                    <td>44%</td>
                    <td>
                      <span className='ml-4 flex'>
                        <input
                          className='mr-1'
                          style={{ marginTop: '1px' }}
                          type='checkbox'
                          id='portion0-yield'
                        />
                        <label className='my-auto text-xs'>
                          Select 86.37 HeC
                        </label>
                      </span>
                    </td>
                    <td>
                      <button
                        className='px-2 h-8 mt-1 rounded-lg text-white py-1 font-semibold border border-gray-600 h-8'
                        style={{
                          backgroundImage:
                            'linear-gradient(253.34deg, #ff6746 11.3%, #ff0546 106.44%)'
                        }}
                        onClick={() => {
                          setPoolName('HeC-XAVA-A')
                          setMaxAmount(86.37)
                          setShowPool(!showPool)
                          setUnlockDate('19-Jan-2022')
                        }}
                      >
                        Open HeC-A Pool
                      </button>
                    </td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14 border border-gray-200'>
                    <td>
                      <p>
                        4.11 <b>HeC-B /</b>
                      </p>
                      <p>
                        1.0 <b>stXAVA</b>
                      </p>
                    </td>
                    <td>49%</td>
                    <td>
                      <span className='ml-4 flex'>
                        <input
                          className='mr-1'
                          style={{ marginTop: '1px' }}
                          type='checkbox'
                          id='portion1-yield'
                        />
                        <label className='my-auto text-xs'>
                          Select 57.61 HeC
                        </label>
                      </span>
                    </td>
                    <td>
                      <button
                        className='px-2 h-8 mt-1 rounded-lg text-white py-1 font-semibold border border-gray-600'
                        style={{
                          backgroundImage:
                            'linear-gradient(253.34deg, #ff6746 11.3%, #ff0546 106.44%)'
                        }}
                        onClick={() => {
                          setPoolName('HeC-XAVA-B')
                          setMaxAmount(57.61)
                          setShowPool(!showPool)
                          setUnlockDate('19-Feb-2022')
                        }}
                      >
                        Open HeC-B Pool
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </span>
          </span>
        </span>
      </div>
    </div>
  )
}

// Body.defaultProps = {
//   // title: 'Moralis Hackathon'
// }

// Body.propTypes = {
//   // title: PropTypes.string
//   // title: PropTypes.string.isRequired
// }

export default Mockup
