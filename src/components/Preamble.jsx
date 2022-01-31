import usdc_logo from './../images/usd-coin-usdc-logo.png'
import avax_logo from './../images/avalanche-avax-logo.png'
import xava_logo from './../images/xava_logo.png'
import stxava_logo from './../images/stxava_logo.png'
import Plot1 from './Plot1'
import Plot2 from './Plot2'

const Preamble = props => {
  return (
    <div className='w-full flex mt-10'>
      {/* <ReactTooltip place='top' className='text-lg w-72' /> */}
      <div className='mx-auto flex flex-col' style={{ width: '1350px' }}>
        <div class='mx-3 flex flex-col'>
          {/* <input
            type='checkbox'
            className='rounded h-5 w-5 text-pink-500 border-pink-500 focus:ring-0 focus:ring-offset-0 focus:shadow-none shadow-none'
          /> */}
          <div className='mt-16 '>
            <div className='border border-gray-700 rounded-xl w-full px-3 py-1'>
              <p className='text-lg'>
                <b>Preliminary Notes</b>
              </p>
              <span className='flex flex-col ml-8'>
                <ul
                  className='text-sm notes'
                  style={{ listStyleType: 'square' }}
                >
                  <li>
                    This site is not designed for mobile responsiveness, its
                    widest components have a fixed width of approximately
                    1200px. Please view on a desktop or laptop.
                  </li>
                  <li>
                    The ideas herein contain many assumptions, and there are
                    plenty of real world reasons why they may not work - such as
                    the KYC restrictions - lack of sufficient liquidity - etc.
                    In addition, a lot of these concepts were derived before the
                    Avalaunch partnerships with Dexalot and Rocket Joe were
                    announced, so they may possess redundant thinking. I'm not
                    married to any ideas here but present simply to foster
                    discussion.
                  </li>
                  <li>
                    Given the guidelines of this Hackathon, there seemed to be
                    two trajectories a project design could take for the
                    Avalaunch prize. The primary one would be as a standalone
                    project, the second an assessment of current Avalaunch
                    mechanisms and any suggestions for improvement. In an early
                    post to the Moralis / Avalaunch Discord channel, Mark from
                    Avalaunch stated "We are also open to any thinking that
                    provides additional utility, incentives or liquidity to
                    tokens vested on the Avalaunch platform, which are claimed
                    through our UI". This presentation is derived in that spirit
                    - a combination of an analytical white paper and a working
                    mockup that seeks to address those particular ideas.
                  </li>
                </ul>
              </span>
            </div>
            <div className='w-full flex'>
              <h1
                className='mx-auto mt-16 mb-10 text-gray-800 font-bold text-3xl tracking-wider'
                style={{ fontFamily: 'IntegralCF-ExtraBold' }}
              >
                Utility & P2P OTC for Tokens Vested on Avalaunch
              </h1>
            </div>
            <div className='ml-3 mb-16 mt-5'>
              <h1 className='font-semibold text-2xl'>Contents</h1>
              <div
                className='explainer font-semibold'
                style={{ color: 'rgb(255, 5, 70)' }}
              >
                <p>
                  <a href='#intro'>0. Introduction</a>
                </p>
                <p>
                  <a href='#future-value'>1. Future Value</a>
                </p>
                <p>
                  <a href='#liquidity'>2. Liquidity</a>
                </p>
                <p>
                  <a href='#tokenomics'>3. Tokenomics</a>
                </p>
                <p>
                  <a href='#tokenomics' className='ml-3'>
                    3.1. Pairing
                  </a>
                </p>
                <p>
                  <a href='#mechanics' className='ml-3'>
                    3.2. Mechanics
                  </a>
                </p>
                <p>
                  <a href='#community'>4. Community Engagement</a>
                </p>
                <p>
                  <a href='#community' className='ml-3'>
                    4.1. 'Total Tokens'
                  </a>
                </p>
                <p>
                  <a href='#stakers' className='ml-3'>
                    4.2. Users
                  </a>
                </p>
                <p>
                  <a href='#projects' className='ml-3'>
                    4.3. Projects
                  </a>
                </p>
                <p>
                  <a href='#avalaunch' className='ml-3'>
                    4.4. Avalaunch
                  </a>
                </p>
                <p>
                  <a id='intro' href='#prototype'>
                    5. Prototype
                  </a>
                </p>
              </div>
            </div>
            <h1 className='mt-10 mb-3 font-bold text-2xl'>0. Introduction</h1>
            <div className='explainer w-full flex flex-col'>
              <p>
                The Avalaunch platform has been one of the preeminent and most
                successful early DApps on the Avalanche network.
              </p>
              <p>
                In a space where many prices are derived from highly ambiguous
                future outcomes, Avalaunch has already delivered significant
                value to their community through a combination of quality
                offerings and intelligent tokenomics.
              </p>
              <p>
                As the platform evolves, Avalaunch will continuously seek to
                unlock viable mechanisms for value realisation that benefit both
                community members and participating projects.
              </p>
              <p id='future-value'>
                This paper / prototype is an attempt to propose one such
                development.
              </p>
            </div>
            <h1 className='mt-14 mb-3 font-bold text-2xl'>1. Future Value</h1>
            <div className='explainer w-full flex flex-col'>
              <p>
                Due to a non-linear distribution mechanism, Avalaunch
                allocations somewhat favourably skew towards smaller investors.
                This has proven to be a very successful strategy - the Avalaunch
                staking community has grown significantly through consecutive
                IDOs.
              </p>
              <p>
                But Avalaunch must ensure that allocations are still fairly
                distributed - this non-linear mechanism can only skew so much
                towards smaller stakers. Despite preferential mechanics, there
                is only so much that can go around, and allocations must be
                fixed in reasonable portions that satisfy the interests of all
                parties.
              </p>
              <p>
                Additionally, participating projects will have a preference
                towards introducing a vesting schedule that splits these fixed
                allocation portions across particular time intervals. Often this
                is done to absorb the motivations of arbitrageurs who have
                little underlying interest in the project itself and seek only
                to dump the token at profit.
              </p>
              <p>
                As a result, token allocations could be seen to still exhibit a
                couple of friction points for many stakers:
              </p>
              <ol>
                <li className='mb-1'>
                  <b className='ml-3 mr-1'>1.</b> They may be disappointed with
                  a small and fixed allocation size, post-sale
                </li>
                <li>
                  <b className='ml-3 mr-1'>2.</b> They may feel restricted by a
                  vesting schedule which reduces their allocation quota further,
                  per unlock period
                </li>
              </ol>
              <div>
                <div className='mx-auto flex flex-col w-1/3 mt-16 border-4 border-blue-300 bg-blue-400 text-white rounded-2xl p-5 shadow-2xl bg-white'>
                  Fee is more than my allocation!! what's the point!! can't devs
                  do something!! 😠😠
                  <span className='text-sm ml-auto mt-1'>
                    - Twitter user @bigboi69420000
                  </span>
                </div>
              </div>
              <div className='w-full flex text-sm font-italic mb-12 mt-2'>
                <p className='mx-auto w-1/3 pl-5 text-justify'>
                  * It should be noted the Avalaunch team has already introduced
                  one change to alleviate this particular complaint -
                  aggregating vesting withdrawals into a single transaction.
                  Great job!
                </p>
              </div>
              <p>
                A solution to these 2 points could be to{' '}
                <i>
                  provide early access to the future value of an IDO allocation
                  through the use of secondary liquidity markets
                </i>
                . In this case, the project's vesting schedule would still
                remain in place, but stakers could:
              </p>
              <ol>
                <li className='mb-1'>
                  <b className='ml-3 mr-1'>1.</b> Put secondary tokens to work
                  with a view to increasing their final realised allocation
                  amount
                </li>
                <li>
                  <div className='flex'>
                    <b className='ml-3'>2.</b>
                    <p className='ml-2'>
                      If desired, liquidate their vesting position at any time.
                      (This provides an opportunity to balance the motivations
                      of self-interested arbers with those who have long term
                      commitment to the project. In this case liquidation fees
                      would be applied which would then be passed through as
                      rewards to those who continue to vest or provide vesting
                      liquidity. This is similar to the current fee/staking
                      mechanism in the main Avalaunch pool)
                    </p>
                  </div>
                </li>
              </ol>
              <p>
                This approach would not just benefit stakers - from the
                perspective of participating projects this also introduces a new
                opportunity in the vesting period - one in which final
                allocation sizes are malleable due to the provision of ongoing
                rewards via community engagement.
              </p>
              <p id='liquidity'>
                Note that those stakers who are happy with the current allotment
                process could choose to forgo secondary market participation,
                and their allocation would remain exactly the same.
              </p>
            </div>
            <h1 className='mt-14 mb-3 font-bold text-2xl'>2. Liquidity</h1>
            <div className='explainer w-full flex flex-col'>
              <p>
                In order to stand up a secondary market for vesting tokens in a
                vesting period, there is a need for liquidity providers.
              </p>
              <p>
                Options for liquidity provision are varied in DeFi, probably the
                3 obvious examples for this project would be:
              </p>
              <table className='ml-2 w-full mt-6 mb-10'>
                <thead>
                  <tr className='text-gray-500 text-sm tracking-widest'>
                    <th className='w-1/4'>Liquidity Mechanism</th>
                    <th className='w-1/3'>For</th>
                    <th className='w-1/3'>Against</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td className='border'>AMM style paired liquidity pools</td>
                    <td className='border'>
                      {' '}
                      <ul
                        className='text-sm notes px-8'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>Familiar, well understood mechanism</li>
                        <li>
                          Similar to staking - providing a complement pair is a
                          capital commitment, with a corresponding expectation -
                          ie. "if I stake, I get rewards"
                        </li>
                      </ul>
                    </td>
                    <td className='border'>
                      <ul
                        className='text-sm notes px-8 mb-auto'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>Impermanent loss</li>
                        <li>
                          Not very capital efficient - an expensive way to
                          create liquidity
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td className='border'>
                      NFT representations of allocation portions
                    </td>
                    <td className='border'>
                      {' '}
                      <ul
                        className='text-sm notes px-8'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>
                          Probably the most straightforward way to create a
                          market for individual allocations
                        </li>
                      </ul>
                    </td>
                    <td className='border'>
                      <ul
                        className='text-sm notes px-8 mb-auto'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>
                          Ironically, non-fungible, which can cause illiquidity
                          / significant trading costs per individual allotment
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td className='border'>
                      Traditional CLOB style Futures markets
                    </td>
                    <td className='border'>
                      {' '}
                      <ul
                        className='text-sm notes px-8'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>Very capital efficient</li>
                        <li>Familiar user experience</li>
                      </ul>
                    </td>
                    <td className='border'>
                      <ul
                        className='text-sm notes px-8 mb-auto'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>
                          Ease of liquidity without additional capital
                          commitments (vs AMM pairing) means any notion of
                          "stake for reward" is lost
                        </li>
                        <li>Still nascent at a Dex level</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                For the sake of this example, I have opted for traditional,
                bread-and-butter, two-sided liquidity pooling. This decision
                primarily came down to the "If I stake, I get rewards" DeFi
                orthodoxy of LPs. There is a rationale to this that will be
                revisited in the "4.2. Users" section. In addition, standing up
                liquidity pools is a well understood and fundamental building
                block in DeFi.
              </p>
              <p>
                Conceptually, these pools would be separated into tranches by
                vesting period, where each vesting token particular to that
                tranche is fungible with any other token, like so:
              </p>
              <table className='ml-2 w-full mt-10 mb-12'>
                <thead>
                  <tr className='text-gray-500 text-sm tracking-widest'>
                    <th className='w-1/6'>Underlying Token</th>
                    <th className='w-1/5'>Secondary Token / Tranche</th>
                    <th className='w-1/6'>Amount</th>
                    <th className='w-1/5'>Implied Value ($1.55 @ 30-Jan)</th>
                    <th className='w-1/5'>Unlock Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td className='border'>
                      <span className='ml-20 flex'>
                        <img
                          className=''
                          style={{ width: '28px', height: '28px' }}
                          src='https://avalaunch.s3.us-east-2.amazonaws.com/images/sales/heroeschained/logo.png'
                          alt='HeC Logo'
                        />
                        <p className='ml-2 my-auto text-base'>HEC</p>
                      </span>
                    </td>
                    <td className='border'>HEC-XAVA-A</td>
                    <td className='border'>381,142</td>
                    <td className='border'>$590,771</td>
                    <td className='border'>Feb 20th 2022</td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td className='border'>
                      <span className='ml-20 flex'>
                        <img
                          className=''
                          style={{ width: '28px', height: '28px' }}
                          src='https://avalaunch.s3.us-east-2.amazonaws.com/images/sales/heroeschained/logo.png'
                          alt='HeC Logo'
                        />
                        <p className='ml-2 my-auto text-base'>HEC</p>
                      </span>
                    </td>
                    <td className='border'>HEC-XAVA-B</td>
                    <td className='border'>381,142</td>
                    <td className='border'>$590,771</td>
                    <td className='border'>Mar 20th 2022</td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td className='border'>
                      <span className='ml-20 flex'>
                        <img
                          className=''
                          style={{ width: '28px', height: '28px' }}
                          src='https://avalaunch.s3.us-east-2.amazonaws.com/images/sales/heroeschained/logo.png'
                          alt='HeC Logo'
                        />
                        <p className='ml-2 my-auto text-base'>HEC</p>
                      </span>
                    </td>
                    <td className='border'>HEC-XAVA-C</td>
                    <td className='border'>380,857</td>
                    <td className='border'>$590,328</td>
                    <td className='border'>Apr 19th 2022</td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td className='border'>
                      <span className='ml-20 flex'>
                        <img
                          className=''
                          style={{ width: '28px', height: '28px' }}
                          src='https://avalaunch.s3.us-east-2.amazonaws.com/images/sales/heroeschained/logo.png'
                          alt='HeC Logo'
                        />
                        <p className='ml-2 my-auto text-base'>HEC</p>
                      </span>
                    </td>
                    <td className='border'>HEC-XAVA-D</td>
                    <td className='border'>380,857</td>
                    <td className='border'>$590,328</td>
                    <td className='border'>May 19th 2022</td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td className='border'>
                      <span className='ml-20 flex'>
                        <img
                          className=''
                          style={{ width: '28px', height: '28px' }}
                          src='https://avalaunch.s3.us-east-2.amazonaws.com/images/sales/heroeschained/logo.png'
                          alt='HeC Logo'
                        />
                        <p className='ml-2 my-auto text-base'>HEC</p>
                      </span>
                    </td>
                    <td className='border'>HEC-XAVA-E</td>
                    <td className='border'>380,857</td>
                    <td className='border'>$590,328</td>
                    <td className='border'>Jun 19th 2022</td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td className='border'>
                      <span className='ml-20 flex'>
                        <img
                          className=''
                          style={{ width: '28px', height: '28px' }}
                          src='https://avalaunch.s3.us-east-2.amazonaws.com/images/sales/heroeschained/logo.png'
                          alt='HeC Logo'
                        />
                        <p className='ml-2 my-auto text-base'>HEC</p>
                      </span>
                    </td>
                    <td className='border'>HEC-XAVA-F</td>
                    <td className='border'>380,857</td>
                    <td className='border'>$590,328</td>
                    <td className='border'>Jul 19th 2022</td>
                  </tr>
                </tbody>
              </table>
              {/* <div className='flex w-full'>
                <p className='mx-auto text-sm font-bold font-italic'>
                  ...and so on
                </p>
              </div> */}
              <p>
                In this example, each tranche or secondary token is a
                one-for-one representation of an underlying token (in this case
                'Hec'), on a given unlock date.
              </p>
              <p>
                This series of pools represents the entire Heroes Chained
                vesting period. From the outset, an obvious question would be
                whether each pool could attract adequate pair liquidity to be
                viable. I believe it can, for 3 reasons:
              </p>
              <ol>
                <li>
                  <div className='flex'>
                    <b className='ml-3'>1.</b>
                    <p className='ml-2 mb-2'>
                      The Heroes Chained sale had 27,444 participants. This
                      means the average pairing liquidity required for the first
                      pool ($590,771 / 27,444) is $21.52. For the entire vesting
                      period - [2,857,142 tokens * 80% in vesting * $1.55] /
                      27,444 participants it is $129.09 (not a prohibitive
                      amount)
                    </p>
                  </div>
                </li>
                <li>
                  <div className='flex'>
                    <b className='ml-3'>2.</b>
                    <p className='ml-2 mb-2'>
                      In cases where tokens have had a significant price runup
                      since the IDO, these values <i>can</i> become a lot
                      larger. (eg. when PTP was at its $16.69 ATH the entire
                      average vesting schedule could have been valued at about
                      $6,430 - individual tranches at $536). But I would argue
                      that in this scenario, supply-side demand for vesting
                      liquidity would be correlated to price performance, due to
                      the desirability of improving the final allocation portion
                      (very likely at a discount to the trading price - see
                      "4.3. Projects")
                    </p>
                  </div>
                </li>
                <li>
                  <div className='flex'>
                    <b className='ml-3'>3.</b>
                    <p className='ml-2'>
                      Stakers may wish to supply liquidity to one or only a few
                      tranche pools, perhaps with the facility to "roll-over" to
                      the next pool after the tranche unlock date
                    </p>
                  </div>
                </li>
              </ol>
              <p id='tokenomics'>
                In total I believe that balancing supply-side allocation rewards
                with demand-side liquidity would result in well established
                pools that facilitate significant value transfer and engagement
                during token vesting periods.
              </p>
            </div>
            <h1 className='mt-14 mb-3 font-bold text-2xl'>3. Tokenomics</h1>
            <h2 className='mb-3 font-bold text-xl'>3.1. Pairing</h2>
            <div className='explainer w-full flex flex-col'>
              <p>
                Going the AMM route, the first question is what will be the
                complement token for the vesting token pairs? I considered 4
                tokens (one of which is imaginary but powerful!):
              </p>
              <table className='ml-2 w-full mt-6 mb-10'>
                <thead>
                  <tr className='text-gray-500 text-sm tracking-widest'>
                    <th className='w-1/4'>Token</th>
                    <th className='w-1/3'>For</th>
                    <th className='w-1/3'>Against</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-center text-sm font-bold h-14 border-b'>
                    <td className='border'>
                      <span className='ml-32 flex'>
                        <img className='w-12' src={usdc_logo} alt='usdc_logo' />
                        <p className='ml-2 my-auto text-lg'>USDC</p>
                      </span>
                    </td>
                    <td className='border'>
                      {' '}
                      <ul
                        className='text-sm notes px-8'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>
                          Enormous liquidity, could easily match entire vesting
                          token schedule, regardless of underlying token price
                        </li>
                        <li>
                          Best pure hedge against price movements in the
                          underlying token, if the staker wishes to utilise the
                          vesting pool for that reason
                        </li>
                        <li>
                          Provides most straightforward "cash out" mechanism for
                          liquidating stakers
                        </li>
                      </ul>
                    </td>
                    <td className='border'>
                      <ul
                        className='text-sm notes px-8 mb-auto'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>
                          Not an Avalanche original, which may not foster the
                          strongest community engagement - preferred by
                          "mercenary" capital
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14'>
                    <td className='border'>
                      <span className='ml-32 flex'>
                        <img className='w-12' src={avax_logo} alt='avax_logo' />
                        <p className='ml-2 my-auto text-lg'>AVAX</p>
                      </span>
                    </td>
                    <td className='border'>
                      {' '}
                      <ul
                        className='text-sm notes px-8'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>
                          Enormous liquidity, could easily match entire vesting
                          token schedule, regardless of underlying token price
                        </li>
                        <li>
                          Native to Avalanche network - well understood as a
                          pairing token and could inspire goodwill in the
                          community
                        </li>
                        <li>Ubiquitous - most participants will have some</li>
                      </ul>
                    </td>
                    <td className='border'>
                      <ul
                        className='text-sm notes px-8'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>The network token, not the community token</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14'>
                    <td className='border'>
                      <span className='ml-32 flex'>
                        <img className='w-12' src={xava_logo} alt='xava_logo' />
                        <p className='ml-2 my-auto text-lg'>XAVA</p>
                      </span>
                    </td>
                    <td className='border'>
                      {' '}
                      <ul
                        className='text-sm notes px-8'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>
                          By providing the facility for liquidity pairs -
                          increases the utility of the community token
                        </li>
                        <li>
                          It goes without saying that Avalaunch stakers will
                          already have access to some of these
                        </li>
                        <li>
                          Consistent with token's primary use case - ie. "stake
                          to receive (additional) allocation"
                        </li>
                      </ul>
                    </td>
                    <td className='border'>
                      <ul
                        className='text-sm notes px-8'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>
                          If locked in main staking pool, can't be put into
                          vesting pools
                        </li>
                        <li>
                          Will market cap of XAVA always provide sufficient
                          liquidity for the vesting schedule of (all) underlying
                          projects?
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr className='text-center text-sm font-bold h-14'>
                    <td className='border'>
                      <span className='ml-32 flex'>
                        <img
                          className='w-12'
                          src={stxava_logo}
                          alt='stxava_logo'
                        />
                        <p className='ml-2 my-auto text-lg'>stXAVA</p>
                      </span>
                    </td>
                    <td className='border'>
                      {' '}
                      <ul
                        className='text-sm notes px-8'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>Same as XAVA</li>
                        <li>
                          Tokens can be locked in main staking pool, and still
                          be utilised in early access vesting pools
                        </li>
                      </ul>
                    </td>
                    <td className='border'>
                      <ul
                        className='text-sm notes px-8'
                        style={{ listStyleType: 'square' }}
                      >
                        <li>
                          Will market cap of stXAVA always provide sufficient
                          liquidity for the vesting schedule of (all) underlying
                          projects?
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p id='mechanics' className='mt-8'>
                It might be presumptive to include stXAVA in this comparison,
                but liquid staking on Avalaunch has been a commonly spoken
                rumour, and I believe in this hypothetical demonstrates the best
                product-market fit of any other token. For the purposes of this
                demonstration I will continue with stXAVA, however any token
                could theoretically be used in its place - most likely the
                others listed here.
              </p>
              <h2 className='mb-3 mt-3 font-bold text-xl'>3.2. Mechanics</h2>
              <p>
                As mentioned, the mechanism for the "early access" liquidity
                pools is quite similar to the existing Avalaunch staking pool,
                which is to say that stakers are rewarded with fees that are
                derived from participants that exit the pool (in this case, by
                liquidating their vesting portion) - ie. a "no-inflation" model,
                where existing tokens are reallocated and no new ones are
                issued. Liquidity providers in these pools would also derive
                swap fees.
              </p>
              <p>
                Programatically speaking, the functions required by the smart
                contract serving the pools would be largely covered by an
                existing pool contract (eg. <i>Masterchef</i>). In particular
                these functions would allow for:
              </p>
              <ol>
                <li>
                  <div className='flex'>
                    <b className='ml-3'>1.</b>
                    <p className='ml-2 mb-2'>
                      <i>Exchange creation</i>
                    </p>
                  </div>
                </li>
                <li>
                  <div className='flex'>
                    <b className='ml-3'>2.</b>
                    <p className='ml-2 mb-2'>
                      <i>Setting up the pool pair</i>
                    </p>
                  </div>
                </li>
                <li>
                  <div className='flex'>
                    <b className='ml-3'>3.</b>
                    <p className='ml-2 mb-2'>
                      <i>Adding liquidity to the pool</i>
                    </p>
                  </div>
                </li>
                <li>
                  <div className='flex'>
                    <b className='ml-3'>4.</b>
                    <p className='ml-2 mb-2'>
                      <i>Facilitating swaps</i>
                    </p>
                  </div>
                </li>
                <li>
                  <div className='flex'>
                    <b className='ml-3'>5.</b>
                    <p className='ml-2'>
                      <i>Paying out yield</i>
                    </p>
                  </div>
                </li>
              </ol>
              <p>Additionally, NFT booster...</p>
              <p>
                The pool's APR, or interest charged to liquidating participants,
                could either be fixed, or possibly derived from an inverse
                approximation over time of observed slippage in the pool, like
                so:
              </p>
              <div className='w-full flex my-6'>
                <div className='flex flex-col ml-96'>
                  <p className='tracking-widest text-xl italic font-semibold ml-24'>
                    APR = 1 / δs
                  </p>
                  <p className='text-sm mt-2 ml-2 tracking-wide'>
                    Where <span className='text-lg'>δs</span> denotes an
                    observed slippage function
                  </p>
                </div>
              </div>
              <p>
                This value would act as a proxy for how well the pool is
                satisfying supply-side (rewards) and demand-side (trading)
                requirements. But an easy rule-of-thumb that is consistent with
                the main staking pool would be 15%.
              </p>
              <p>
                The pool's APY would be the current liquidated amount from the
                vesting period by early liquidators, in addition to swap fees,
                divided by the pool's TVL (all annualised), like so:
              </p>
              <div className='w-full flex mt-6 mb-12'>
                <div className='flex flex-col ml-96'>
                  <p className='tracking-widest text-xl italic font-semibold'>
                    APY = ( ℒ + $ ) / TVL * ( 365 / 𝒱 )
                  </p>
                  <p className='flex flex-col text-sm mt-3 tracking-wide'>
                    <span className='flex ml-2'>
                      Where <span className='text-lg mx-3 -mt-1'>ℒ</span>
                      denotes the liquidation sum from early liquidators
                    </span>
                    <span className='flex'>
                      <span className='text-lg mr-2 ml-2 -mt-1'>$</span> denotes
                      the fees derived from swaps in the pool and
                    </span>
                    <span className='flex'>
                      <span className='text-lg mr-2 ml-2 -mt-1'>𝒱</span> denotes
                      the vesting period of the pool, in days
                    </span>
                  </p>
                </div>
              </div>
              <p>
                At the end of each vesting period, tokens must be unlocked and
                distributed to holders of vesting tokens in correct proportion.
                The easiest way to do this would probably be via wallet airdrop,
                with the following procedure:
              </p>
              <ol id='community' className='font-mono'>
                <li className='mb-1'>
                  <i className='ml-3 mr-1'>Step 1.</i> 24 hours before unlock,
                  the vesting pool is closed and trading ceases
                </li>
                <li className='mb-1'>
                  <i className='ml-3 mr-1'>Step 2.</i> Avalaunch performs a
                  snapshot that determines the proportional vesting holdings of
                  each wallet
                </li>
                <li className='mb-1'>
                  <i className='ml-3 mr-1'>Step 3.</i> Wallets are airdropped
                  the fully unlocked tokens in this proportion
                </li>
                <li className='mb-1'>
                  <i className='ml-3 mr-1'>Step 4.</i> All vesting tokens in the
                  vesting pool are burnt
                </li>
              </ol>
            </div>
            <h1 className='mt-14 mb-3 font-bold text-2xl'>
              4. Community Engagement
            </h1>
            <h2 className='mb-3 mt-3 font-bold text-xl'>4.1. "Total Tokens"</h2>
            <p id='stakers' className='mb-6'>
              The primary concept that would emerge from this design, and that
              is introduced in the mockup, is that of "Total Tokens". Total
              Tokens is representative of the current total of tokens that will
              be apportioned to a user following the whole vesting schedule for
              the IDO. Currently, that value is fixed as an initial allocation
              amount. However under these early access conditions, Total Tokens
              does not have to remain a fixed value, but rather could increase
              and decrease according to staker interaction with the vesting
              pools, community engagement rewards, or their own trading
              activity.
            </p>
            <h2 className='mb-3 mt-3 font-bold text-xl'>4.2. Users</h2>
            <ul
              id='projects'
              className='text-base notes px-8 mb-6'
              style={{ listStyleType: 'square' }}
            >
              <li>
                Stakers now have the ability to influence the Total Tokens in
                their allocation, through providing liquidity to vesting pools
                as well as engaging with project community rewards throughout
                the vesting schedule. A good example of this would be the
                ability to "double up" - where sale participants who have great
                belief in the project now have the opportunity to simply "stake
                again" (ie. provide vesting liquidity), so as to generate
                additional allocation
              </li>
              <li>
                Although impermanent loss is often considered to be a negative
                trait of liquidity pools, a corollary to this is that liquidity
                pairing does in fact absorb price movements as an average
                between the pair tokens, which can act as a hedge. As a result,
                participating in vesting pools may be a mechanism with which
                sales participants can hedge the timing risk of the (sometimes
                lengthy) IDO vesting schedule
              </li>
              <li>
                Stakers have the ability to cash out their allocations early, if
                they are so inclined
              </li>
              <li>
                Users of the Avalaunch platform can trade in the vesting pools,
                perhaps in the instance of missing out on the initial sale, or
                simply because they want to build a position in vesting tokens
              </li>
              <li>
                Overall, liquidity is enhanced for Avalaunch IDOs during the
                vesting period
              </li>
            </ul>
            <h2 className='mb-3 mt-3 font-bold text-xl'>4.3. Projects</h2>
            <ul
              id='avalaunch'
              className='text-base notes px-8 mb-6'
              style={{ listStyleType: 'square' }}
            >
              <li>
                Participating projects would now have a direct and ongoing means
                of engagement with their IDO participants, via Avalaunch (and
                possibly externally, for example through an embeddable widget)
              </li>
              <li>
                This engagement feed could involve a series of community rewards
                (such as NFTs that boost vesting yield, additional token
                allocations, opportunities for gamification, as well as other
                news and information). This would improve stickiness between
                participating projects and sale participants
              </li>
              <li>
                This process may contribute to less price volatility in the
                underlying token, due to the fact that secondary vesting trades
                absorb short term arbers
              </li>
              <li>
                Price discovery is greatly improved for projects. Instead of a
                single market price which is often subject to external market
                conditions and contagion, projects would now be able to see
                forward prices, in much the same way as Futures markets, which
                can provide significant market intelligence. A couple of
                examples of this are demonstrated here:
              </li>
            </ul>
            <span className='explainer w-full flex flex-col'>
              <p>
                <b>Example 1.</b>
              </p>
              <p>
                Here we see an example of backwardation (future prices trade at
                a discount to current prices). For fungible instruments that
                have no carry cost, this may be the expected curve.
              </p>
              <p>
                We also note that the current spot price of HeC trades at a
                significant premium to the vesting tokens. This might tell us
                that an actual HeC token carries some type of feature that the
                market deems valuable, vs the vesting equivalent. Perhaps this
                might be something like what we see have seen with a PTP token -
                which can be used to boost yield in Platypus stablecoin pools.{' '}
                <i>Vesting</i> PTP tokens (or HeC tokens) might not be able to
                do this, whereas the primary token can, thus we can identify the
                price premium the market places on this particular feature.
              </p>
              <p>
                Projects may also feel like their price curves should exhibit
                contango (future prices trade at a premium to current prices),
                rather than backwardation. After all, the project should only be
                improving its value proposition over time! Depending on the
                shape of the forward curve, a project might ask itself - is our
                messaging missing the mark? Is the community aware of our future
                development plans?
              </p>
            </span>
            <span className='-z-10'>
              <Plot1 />
            </span>
            <span className='explainer w-full flex flex-col'>
              <p>
                <b>Example 2.</b>
              </p>
              <p>
                Here we see a futures price trading quite close to spot, with
                some slight backwardation, but then a significant jump in price
                between March and April.
              </p>
              <p>
                This might suggest that the market anticipates a very favourable
                event for this project in this time period. Perhaps a new
                feature is being unlocked, or conditions for the project are
                anticipated to become particularly agreeable at that time. This
                information helps the project to understand the impact of its
                strategic decision-making.
              </p>
            </span>
            <span>
              <Plot2 />
            </span>
            <h2 className='mb-3 mt-3 font-bold text-xl'>
              4.4. Benefits to the Avalaunch platform itself
            </h2>
            <ul
              id='prototype'
              className='text-base notes px-8 mb-6'
              style={{ listStyleType: 'square' }}
            >
              <li>
                XAVA would now have additional utility. Not only would it be
                used to stake for initial allocation, it would also be used to
                provide liquidity during vesting periods
              </li>
              <li>
                Goodwill would be fostered with users due to the fact that their
                allocations are more liquid and are no longer fixed at initial
                sale. Avalaunch IDOs may become more desirable to the broader
                market
              </li>
              <li>
                Avalaunch would now have the ability to provide additional
                information to the market and its participating projects through
                the use of forward dated contract pricing. As far as I am aware
                this does not yet exist for any Launchpad platform in the space
              </li>
            </ul>
            <h1 className='mt-14 mb-3 font-bold text-2xl'>5. Prototype</h1>
            <div className='explainer w-full flex flex-col'>
              <p>
                The following mockup is a Card that could be used to visually
                present these concepts to Avalaunch users. It is a replication
                of existing Avalaunch dashboard components with additional
                sections tacked on.
              </p>
              <p>
                The tooltips in the Card are functional and tie together many of
                the concepts mentioned here. They are not really worded for end
                users, but for whoever is viewing this presentation.
              </p>
            </div>
          </div>
        </div>
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

export default Preamble
