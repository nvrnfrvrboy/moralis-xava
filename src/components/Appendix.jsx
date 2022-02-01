const Appendix = props => {
  return (
    <div className='w-full flex flex-col mt-10'>
      <div className='mx-auto flex flex-col' style={{ width: '1350px' }}>
        <h1 className='mt-14 mb-3 font-bold text-2xl'>6. Appendix</h1>
        <div className='explainer w-full flex flex-col'>
          <ul
            className='text-base notes px-8'
            style={{ listStyleType: 'square' }}
          >
            <li>
              Github: <pre>https://github.com/nvrnfrvrboy/moralis-xava.git</pre>
            </li>
            <p className='mt-6'>
              <b>
                Smart Contract addresses (not currently operable with the Demo)
              </b>
            </p>
            <li>
              Token A: <pre>0xd60c1527b8f853bb9f4edbfa70c55f7bec366464</pre>
            </li>
            <li>
              Token B: <pre>0x335ab55F738DC54F3f1259038c8B180c55b41889</pre>
            </li>
            <li>
              LP Factory (pangolin-core):{' '}
              <pre>0x0a7dD7eBe53b49e79cf69D60F627155bFAAd506D</pre>
            </li>
            <li>
              LP Router (pangolin-core):{' '}
              <pre>0x1d308089a2d1ced3f1ce36b1fcaf815b07217be3</pre>
            </li>
          </ul>
        </div>
        <p className='mx-auto text-sm mt-12 mb-16'>Thanks for reading!</p>
      </div>
    </div>
  )
}

export default Appendix
