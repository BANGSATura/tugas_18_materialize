import React,{Component} from 'react';
import {Slider,Slide,Caption} from 'react-materialize';

class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      SlideContent : [
        {
          imgSrc: 'https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg',
          header1: 'Liburan di Pantai',
          header2: 'Ayo Berlibur di Pantai',
          alter: 'Pantai'
        },
        {
          imgSrc: 'https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg',
          header1: 'Liburan di Hong Kong',
          header2: 'Ayo jalan-jalan di Hong Kong',
          alter: 'Hong Kong'
        },
        {
          imgSrc: 'https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72, https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg',
          header1: 'Berlibur di Paris',
          header2: 'Ayo bulan madu di Paris',
          alter: 'Paris'
        }
      ]
    }
  }
  render() {
    return(
      <>
        <Slider
          options={{
            duration: 500,
            height: 400,
            indicators: true,
            interval: 6000
          }}>
          {this.state.SlideContent.map((value,index)=>{
            return(
              <Slide image={<img alt={value.alter} src={value.imgSrc}/>}>
                <Caption placement='center'>
                  <h3>
                    {value.header1}
                  </h3>
                  <h5>
                    {value.header2}
                  </h5>
                </Caption>
              </Slide>
            );
          })}
        </Slider>
      </>
    );
  }
}

export default SliderComponent;
