import React, {Component} from 'react';
import {Pagination,Icon} from 'react-materialize';

class PaginationComponent extends Component {
  render() {
    return(
      <>
        <Pagination
          activePage={2}
          items={8}
          leftBtn={<Icon>chevron_left</Icon>}
          maxButtons={5}
          rightBtn={<Icon>chevron_right</Icon>}/>
      </>
    );
  }
}

export default PaginationComponent;
