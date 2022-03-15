var x  = 0;

var shoe_x = 0;

var img_x = 0;

var cover_x = 0;

var answer_x = 0;

var img_array = ['https://i.postimg.cc/TYLt2kkS/image-product-1.jpg'
                 , 'https://i.postimg.cc/t4FDWsGN/image-product-2.jpg'
                 , 'https://i.postimg.cc/7YFm5gdL/image-product-3.jpg'
                 , 'https://i.postimg.cc/xjFs2rPM/image-product-4.jpg'];

document.querySelector('.add').addEventListener('click' , function () {
  x++;

  document.querySelector('.answer').innerHTML = x;
})

document.querySelector('.substract').addEventListener('click' , function () {
  x--;
  if (x < 0) {
    x = 0;
  }
 document.querySelector('.answer').innerHTML = x;
})

//This is the button to turn the carousel on

document.querySelector('.commerce_left_10').addEventListener('click' , function () {
  document.querySelector('.carousel').style.display = 'flex';
})

//This are the button to change the image in the carousel
document.querySelector('.carousel_button_right').addEventListener('click' , function () {
  img_x++;
  if (img_x > 3) {
    img_x = 0;
  }
  document.querySelector('.carousel_img_10').src = img_array[img_x];
})

document.querySelector('.carousel_button_left').addEventListener('click' , function () {
  img_x--;
  if (img_x < 0) {
    img_x = 3;
  }
  document.querySelector('.carousel_img_10').src = img_array[img_x];
})


//This is the button for left and right for shoe in img





//This is the button to close the carousel

document.querySelector('.carousel_button_close').addEventListener('click' , function () {
                                                                  document.querySelector('.carousel').style.display = 'none';
                                                                  })

//This is the button for the mobile

document.querySelector('.cover_left_button').addEventListener('click' , function () {
  cover_x--;
  if (cover_x < 0) {
    cover_x = 3;
  }
  document.querySelector('.img_shoe').src = img_array[cover_x];

})

document.querySelector('.cover_right_button').addEventListener('click' , function () {
  cover_x++;
  if (cover_x > 3) {
    cover_x = 0;
  }
  document.querySelector('.img_shoe').src = img_array[cover_x];

})

//This is the button for cart

document.querySelector('.cart').addEventListener('click' , function () {
  //alert('hello');
  document.querySelector('.cart_cover').style.display = 'flex';
})

//This is the button to close cart

document.querySelector('.cart_close').addEventListener('click' , function() {
  document.querySelector('.cart_cover').style.display = 'none';

})

document.querySelector('.cart_none_close').addEventListener('click' , function () {
  document.querySelector('.cart_cover').style.display = 'none';
})

//This is the button to add to cart

document.querySelector('.add_cart').addEventListener('click' , function () {

  document.querySelector('.cart_letter').innerHTML = x;
  if (x === 0) {
    document.querySelector('.content_true').style.display = 'none';
    document.querySelector('.content_none').style.display = 'flex';
  } else {
    document.querySelector('.content_true').style.display = 'grid';
    document.querySelector('#shoe_no').innerHTML = x;
    document.querySelector('#cart_answer').innerHTML  = x * 125;
    document.querySelector('.content_none').style.display = 'none';
  }
})

document.querySelector('.add_cart').addEventListener('click' , function () {

})
