import Image from 'next/image'
import React from 'react'
import Headerdesign from '../components/Headerdesign'

function Home() {
  return (
    <div >
        <div>
            <Headerdesign/>
        </div>
    
<div className='flex justify-center items-center'>
    <h1 class="heading"> <span>featured mobiles</span> </h1>

    <div class="swiper featured-slider">

        <div class="swiper-wrapper">

            <div class="swiper-slide box">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                <img src='..\image\phone_1.png'/>
                </div>
                <div class="content">
                    <h3>Samsung S11 Ultra</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                <img src='..\image\phone_2.png'/>
                </div>
                <div class="content">
                    <h3>Iphone 13 Max Pro</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="#" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                <img src='..\image\phone_3.png'/>
                </div>
                <div class="content">
                    <h3>OPPO F21 Pro</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="home.php" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                <img src='..\image\phone_4.png'/>
                </div>
                <div class="content">
                    <h3>Vivo V23s</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="home.php" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                <img src='..\image\phone_5.png'/>
                </div>
                <div class="content">
                    <h3>Remdmi Note 10i</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="home.php" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                <img src='..\image\phone_6.png'/>
                </div>
                <div class="content">
                    <h3>Poco X3 GT</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="home.php" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                <img src='..\image\phone_7.png'/>
                </div>
                <div class="content">
                    <h3>Xiaomi M11</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="home.php" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                <img src='..\image\phone_8.png'/>
                </div>
                <div class="content">
                    <h3>OPPO F19 Pro</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="home.php" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                    
                <img src='..\image\phone_9.png'/>
                </div>
                <div class="content">
                    <h3>Samsung S20 Ultra</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="home.php" class="btn">add to cart</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="icons">
                    <a href="#" class="fas fa-search"></a>
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <div class="image">
                <img src='..\image\phone_9.png'/>
                </div>
                <div class="content">
                    <h3>Iphone 7 Plus</h3>
                    <div class="price">$15.99 <span>$20.99</span></div>
                    <a href="home.php" class="btn">add to cart</a>
                </div>
            </div>

        </div>

        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>

    </div>
</div>
 </div>

  )
}

export default Home