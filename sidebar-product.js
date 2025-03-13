          document.getElementById('add-to-cart').addEventListener('click', function() {
            const user = JSON.parse(localStorage.getItem('user'));
              
            const product = {
              name: document.getElementById('product-name').innerText,
              price: document.getElementById('product-price').innerText,
              size: document.getElementById('product-size').value,
              quantity: document.getElementById('product-quantity').value,
              image: document.getElementById('product-img').src
            };
            
           if (!product) {
             alert('Something Went Wrong, Please try again');
             return;
           } 
            // save the product
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            
            const notification = document.getElementById('notification');
            notification.style.display = 'block';
            setTimeout(() => {
              notification.style.display = 'none';
              window.location.href="index.html";
            }, 1500);
          });