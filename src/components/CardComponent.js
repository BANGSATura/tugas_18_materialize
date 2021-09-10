import React,{Component} from 'react';
import {Row,Col,Card,CardTitle} from 'react-materialize';

class CardComponet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardContent: [
        {
          imgSrc: 'https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg',
          title: 'Headphone',
          cardCaption: 'AudioTech Harga mulai dari 100rb'
        },
        {
          imgSrc: 'https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg',
          title: 'Handphone',
          cardCaption: 'Handphone Samsung mulai dari 185rb'
        },
        {
          imgSrc: 'https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg',
          title: 'Squishy',
          cardCaption: 'Squishy mulai dari 5rb'
        },
        {
          imgSrc: 'https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg',
          title: 'miniatur The Avengers',
          cardCaption: 'miniatur mulai dari 8rb'
        }
      ]
    }
  }

  render() {
    return(
      <>
        <Row>
          {this.state.cardContent.map((value,index)=>{
            return(
              <Col m={3}>
                <Card
                  header={<CardTitle image={value.imgSrc}>{value.title}</CardTitle>}>
                  {value.cardCaption}
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  }
}

export default CardComponet;
