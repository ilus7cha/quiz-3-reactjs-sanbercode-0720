import React from 'react';
import './index.css';
import Logo from '../logo.png';
import {Link} from 'react-router-dom';



class Home extends React.Component {
  render() {
    return (
      <>
<div>
  <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet" />
  <header>
    <img id="logo" src={Logo} alt="logo" />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/movie-lists">Movie List Editor</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
  </header>
  <section>
    <h1>Featured Posts</h1>
    <div id="article-list">
      <div>
        <a href><h3>Lorem Post 1</h3></a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div>
        <a href><h3>Lorem Post 2</h3></a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div>
        <a href><h3>Lorem Post 3</h3></a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div>
        <a href><h3>Lorem Post 4</h3></a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
      <div>
        <a href><h3>Lorem Post 5</h3></a>
        <p>
          Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
        </p>
      </div>
    </div>
  </section>
  <footer>
    <h5>copyright © 2020 by Sanbercode</h5>
  </footer>
</div>
 </>
  )}
}

 export default Home
