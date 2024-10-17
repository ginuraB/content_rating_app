
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state={
      likes:0,
      dislikes:0,
      totalRatings:0,
      handleLike:()=>{
        this.setState((prevState)=>({
            likes:prevState.likes+1,
            totalRatings:prevState.totalRatings+1
        }));

      },
      handleDislike:()=>{
        this.setState((prevState)=>({
          dislikes:prevState.dislikes+1,
          totalRatings:prevState.totalRatings+1
        }));

      }
    };
  }
  render() {
    return (
     <>
     <div className='content-rating'>
      <p>
        DO YOU LIKE AMERICAN MUSCLE CARS
        <p>American muscle cars are legendary vehicles known for their powerful engines, aggressive styling, and a rich history that captures the essence of American automotive culture. Born in the 1960s and reaching their peak in the 1970s, these cars were designed for straight-line speed, equipped with high-performance V8 engines that delivered exceptional horsepower. Iconic models like the Ford Mustang, Chevrolet Camaro, and Dodge Challenger symbolize raw power and a rebellious spirit, making them favorites among car enthusiasts. Today, muscle cars continue to evolve with modern technology, combining the nostalgic roar of their engines with contemporary design and engineering. They remain a symbol of American craftsmanship and a passion for speed and performance.

</p>
      </p>
      <div className='rating-buttons'>
        <button className='like-button' onClick={this.state.handleLike}>
          Like({this.state.likes})
        </button>
        <button className='dislike-button' onClick={this.state.handleDislike}>
          Dislike({this.state.dislikes})
        </button>
      </div>
      <p>Total-Ratings:{this.state.totalRatings}</p>
     </div>
     </>
    );
  }
}

export default ContentRating;
