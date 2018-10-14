import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';

class Home extends Component {
  render() {
    return (
      <div>Home Entrie
          <HomeLayout>
             <Categories categories={this.props.data.categories} />
          </HomeLayout>
      </div>      
    )
  }
}

export default Home;