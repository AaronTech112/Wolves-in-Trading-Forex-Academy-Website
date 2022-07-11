import React,{ useEffect} from 'react'
import { MainContainer, MainWrapper, Svg, SvgContainer, TextContainer, Header, Text, } from './main.style'
import { mainBg } from '../../file'
function Main() {
  useEffect(() => {
    const move = KUTE.fromTo(
      '#blob0',
      { path: '#blob1' },
    {path: '#blob2' }, 
      {
        repeat: 1000,
        duration: 2000,
        yoyo: true
      });
        // move.start();
  },[])
  return (
    <MainContainer bg={mainBg}>
      <MainWrapper >
        <SvgContainer>
          <Svg
            id="visual"
            viewBox="0 0 450 450"
            width="450" height="450"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            opacity=".3"
          >
            <g transform="translate(266.2638173420237 239.4872425635185)">
              <path   id="blob1" d="M127.8 -163.5C149.8 -133.9 140.9 -78.6 150.5 -26.2C160.1 26.2 188.3 75.6 177.3 109.7C166.3 143.8 116.2 162.6 72.9 161.6C29.6 160.6 -6.9 139.7 -43.3 124.2C-79.7 108.6 -116 98.3 -164.2 68.7C-212.4 39.1 -272.4 -9.7 -260.9 -41C-249.4 -72.3 -166.5 -85.9 -111.1 -109.7C-55.7 -133.4 -27.9 -167.2 12.5 -182.1C52.9 -197.1 105.8 -193.1 127.8 -163.5" fill="#898976">
              </path>
            </g>
            <g transform="translate(218.5194517274547 168.4805279530554)" className='second'>
              <path   id="blob2" d="M106.2 -127.6C138.7 -122.5 166.8 -92.9 174.9 -59C182.9 -25 170.9 13.3 152.1 42.7C133.3 72.2 107.8 92.7 81.3 123.8C54.9 154.8 27.4 196.4 3.9 191C-19.6 185.6 -39.2 133.3 -72.5 104.4C-105.8 75.6 -152.7 70.2 -182.6 43.9C-212.4 17.5 -225.1 -29.9 -204 -57.5C-183 -85.2 -128.2 -93.2 -88.6 -95.9C-49 -98.7 -24.5 -96.2 6.2 -104.7C36.8 -113.2 73.7 -132.7 106.2 -127.6" fill="#bebea8"></path>
            </g>
          </Svg>
        </SvgContainer>
        <TextContainer>
          <Header>With Sniper Entry Trading Strategy, forever stuck in profit.____________</Header>
          <Text>Wolves in Trading Forex Academy</Text>
        </TextContainer>
      </MainWrapper>
    </MainContainer>
  )
}

export default Main