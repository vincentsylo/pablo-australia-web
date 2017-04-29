import React from 'react';
import styles from './Story.css';
import logo from '../images/pablo-logo-1.png';
import { Breadcrumb } from '../../components';

export default () => (
  <div className={styles.root}>
    <Breadcrumb title="Story" />
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.logo} />
      </div>
      <h2>The Cheesecake Revolution begins here. Be amazingly surprised by the deliciousness of the PABLO Cheese Tart!</h2>
      <p>“To create a cheesecake that has never been seen before.” Half a year was spent in product development, in hopes of formulating the perfect recipe. Days went by, cooped in atelier, as one experiment failed after another.</p>
      <p>Until one day, when the owner Masamitsu Sakimoto visited a steak restaurant. ‘Wouldn’t it be interesting to produce a cheesecake that can be served with different textures, just like a piece of steak?’ Bearing this vision in mind, the original recipe of the Freshly Baked Cheese Tart began to take shape. With strictly regulated baking methods and oven temperatures, we have successfully created a cheese tart with a unique texture and exclusive taste.</p>
      <p>And thus, PABLO’s signature product, the Freshly Baked Cheese Tart’, was born. Just like how PABLO Picasso contributed to the world of the arts, we aim to establish a strong identity and strive to bring about the feeling of surprise and excitement to all our customers through our revolutionary cheese tarts.</p>
      <p>As PABLO expands outside of Japan, product development is an important issue to consider. In order to provide the most authentic PABLO experience regardless of regional differences for every one of our stores overseas, the choice of 2 baking conditions has been adjusted and standardized into 1 final product.</p>
      <p>An original recipe is formulated to ensure that the flavour beloved by many in Japan can also be enjoyed by those outside of Japan, regardless of location.</p>
      <p>Visit PABLO JAPAN</p>
    </div>
  </div>
);
