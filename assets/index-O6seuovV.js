(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`interior_cart`;function t(){return JSON.parse(localStorage.getItem(e))||[]}function n(t){localStorage.setItem(e,JSON.stringify(t))}function r(e){let r=t();r.push(e),n(r),s()}function i(){let e=t(),n=document.querySelector(`.cart-empty`),r=document.querySelector(`.cart-items`),i=document.querySelector(`.cart-summary`);if(!r)return;if(e.length===0){n.classList.remove(`hidden`),r.classList.add(`hidden`),i.classList.add(`hidden`);return}n.classList.add(`hidden`),r.classList.remove(`hidden`),i.classList.remove(`hidden`),r.innerHTML=``;let a=0;e.forEach(e=>{a+=e.price,r.innerHTML+=`
      <div class="cart-item">
        <img src="${e.img}" />
        <div>
          <h4>${e.name}</h4>
          <span>₹${e.price}</span>
        </div>
      </div>
    `}),document.getElementById(`cartSubtotal`).innerText=`₹${a}`,document.getElementById(`cartDiscount`).innerText=`₹0`,document.getElementById(`cartTotal`).innerText=`₹${a}`}var a={kitchen:[{name:`Modern Chandelier`,price:12e3,tier:`budget`,img:`ss/chandelier.png`},{name:`Plant`,price:1500,tier:`mid`,img:`ss/plant.png`},{name:`KitchenSet`,price:1e5,tier:`premium`,img:`ss/kitchenupdated.png`}],living:[{name:`Sofa`,price:8e4,tier:`premium`,img:`ss/image.png`},{name:`TVUnit`,price:75e3,tier:`mid`,img:`ss/tvunit.png`}],bedroom:[{name:`Bed`,price:35e3,tier:`mid`,img:`ss/Bed.png`},{name:`BedRoomSet`,price:3e5,tier:`premium`,img:`ss/bedset.png`},{name:`Lamp`,tier:`basic`,price:3500,img:`ss/lamp.png`}],dining:[{name:`Dining Table`,price:5e4,tier:`mid`,img:`ss/dining.png`}]};function o(){let e=document.querySelectorAll(`.room-tile`),t=document.querySelector(`.room-content`),n=document.getElementById(`budget`);if(!e.length||!t||!n)return;let i=null;function o(e){t.classList.remove(`placeholder`),t.classList.add(`active`),t.innerHTML=`
      <h2>${e.charAt(0).toUpperCase()+e.slice(1)}</h2>
      <div class="items"></div>
    `,s(e)}function s(e){let t=document.querySelector(`.items`),i=n.value;if(!t)return;let o=a[e].filter(e=>i===`premium`?!0:e.tier===i);t.innerHTML=``,o.forEach(e=>{t.innerHTML+=`
        <div class="shop-item">
          <img src="${e.img}" />
          <h4>${e.name}</h4>
          <span>₹${e.price}</span>
          <button class="add-btn">Add to cart</button>
        </div>
      `}),t.querySelectorAll(`.add-btn`).forEach((e,t)=>{e.onclick=()=>r(o[t])})}e.forEach(t=>{t.onclick=()=>{e.forEach(e=>e.classList.remove(`placeholder`)),t.classList.add(`active`),i=t.dataset.room,o(i)}}),n.onchange=()=>{i&&s(i)}}function s(){let e=document.querySelector(`.pill-nav .cart`);if(!e)return;let n=t().length;e.dataset.count=n||``}s(),window.getCart=t,window.saveCart=n,window.addToCart=r,window.initCart=i,window.initShop=o,window.updateCartPill=s,window.data=a;var c=`<section class="hero" style="position: relative; width: 100%;">
  <img src="./assets/hero.jpeg" style="width: 100%; height: 100%; object-fit: cover; filter: brightness(70%);">
  <h1 class="hero-text" style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: rgb(227, 198, 106);
      text-align: center;
      font-size: 6rem;
  ">
    Interia - Designing Interiors made easy
</h1>
</section>
<!-- EDITORIAL SECTION -->
<section class="home-section split">
  <div class="text">
    <h2>Timeless interiors</h2>
    <p>
      We believe good design is quiet. It supports life, not distracts from it.
      Every space we create balances function, material, and light.
    </p>
  </div>
  <img
    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
    alt="Living room interior"
  />
</section>

<!-- FULL BLEED IMAGE -->
<section class="home-image">
  <img
    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    alt="Kitchen interior"
  />
</section>

<!-- GRID GALLERY -->
<section class="home-gallery">
  <img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea" />
  <img src="https://images.unsplash.com/photo-1615874959474-d609969a20ed" />
  <img src="https://images.unsplash.com/photo-1600121848594-d8644e57abab" />
</section>

<!-- CLOSING STATEMENT -->
<section class="home-section center">
  <h2>Designed to last</h2>
  <p>
    From single rooms to full homes, we approach every project with the same
    care and clarity.
  </p>
</section>`,l=`<section class="page">
  <h1>Shop</h1>

  <div class="shop-layout">

  <!-- Sidebar -->
  <aside class="prefs">
    <h3>Room Preferences</h3>

    <label>Room Color</label>
    <input type="color" id="roomColor" />

    <label>Dimensions (ft)</label>
    <input placeholder="Length" id="len" />
    <input placeholder="Width" id="wid" />
    <input placeholder="Height" id="hei" />

    <label>Budget</label>
    <select id="budget">
      <option value="budget">Budget</option>
      <option value="mid">Mid-range</option>
      <option value="premium">Premium</option>
    </select>

    <p id="recommendation" class="hint"></p>
  </aside>

  <!-- Main content -->

    <section class="rooms">

  <!-- ROOM GRID -->
  <div class="room-grid">

    <div class="room-tile" data-room="kitchen">
      <h2>Kitchen</h2>
      <img src="./assets/kitchen.jpeg"  />
    </div>

    <div class="room-tile" data-room="living">
      <h2>Living Room</h2>
      <img src="./assets/living.jpeg" />
    </div>

    <div class="room-tile" data-room="bedroom">
      <h2>Bedroom</h2>
      <img src="./assets/bedroom.jpeg"  />
    </div>

    <div class="room-tile" data-room="dining">
      <h2>Dining</h2>
      <img src="./assets/dining.jpeg" />
    </div>

  </div>

  <!-- ROOM CONTENT (revealed on click) -->
  <div class="room-content placeholder">
  <p>Select a room to explore interior options</p>
</div>

</section>


    <!-- REVIEWS -->
    <section class="reviews">

    </section>

    <!-- RECENT WORK -->
    <section class="recent-work">
      <h2 style="margin-bottom: 10px;">Recent Work</h2>
      <div class="gallery">
        <img src="./assets/hero.jpeg" />
        <img src="./assets/place1.jpeg" />
        <img src="./assets/place2.jpeg" />
      </div>
      <p class="price-tag">Full house interior</p>
    </section>

  </section>
</div>




`,u=`<section class="page">
  <h1>About</h1>

  <div class="block wide about-content">

    <section class="about-text">
      <h2>Our Philosophy</h2>
      <p>
        We design interiors that feel calm, intentional, and lived in.
        Our approach is rooted in balance — between form and function,
        materials and light, aesthetics and everyday life.
      </p>

      <p>
        From individual rooms to full homes, we work closely with our clients
        to understand how a space should feel, not just how it should look.
        The result is timeless design that ages gracefully.
      </p>
    </section>


    <section class="contact">
      <h2>Contact Us</h2>

      <p>
        If you'd like to work with us or discuss a project, we'd love to hear
        from you.
      </p>

      <div class="contact-details">
        <p><strong>Email</strong> — hello@studiointeriors.com</p>
        <p><strong>Phone</strong> — +91 98765 43210</p>
      </div>
    </section>

  </div>
</section>
`,d=`<section class="page">
<h1>3D Designer</h1>

<aside>
<!--     <div class="dprefs">
    <h3>Design Menu</h3>

    <div>
      <label>
        <input type="checkbox" id="placeToggle" checked />
        Enable Placement
      </label>
    </div>

    <div>
      <label for="roomSelect">Room</label>
      <select id="roomSelect"></select>
    </div>

    <div>
      <label for="itemSelect">Item</label>
      <select id="itemSelect"></select>
    </div>

    <div>
      <label for="colorPicker">Item Color</label>
      <input type="color" id="colorPicker" value="#c8b6a6" />
    </div>

    <div>
      <label>Room Dimensions (meters)</label>
      <input type="number" id="roomWidth" placeholder="Width (m)" min="1" step="0.5" value="5" />
      <input type="number" id="roomDepth" placeholder="Depth (m)" min="1" step="0.5" value="5" />
      <input type="number" id="roomHeight" placeholder="Height (m)" min="2" step="0.5" value="3" />
      <button id="applyDimensions">Apply Dimensions</button>
    </div>

    <div>
      <label for="budgetSelect">Budget Range</label>
      <select id="budgetSelect">
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>

  </div> -->

  <div class="designview">

        <h3>Room Settings</h3>

        <div class="group">
            <label>Room Width</label>
            <input type="number" id="roomWidth" value="6">
        </div>

        <div class="group">
            <label>Room Depth</label>
            <input type="number" id="roomDepth" value="6">
        </div>

        <div class="group">
            <label>Room Height</label>
            <input type="number" id="roomHeight" value="3">
        </div>

        <div class="divider"></div>

        <div class="group">
            <label>Ceiling Color</label>
            <input type="color" id="ceilingColor" value="#ffffff">
        </div>

        <div class="group">
            <label>Floor Color</label>
            <input type="color" id="floorColor" value="#dddddd">
        </div>

        <div class="group">
            <label>Wall Color</label>
            <input type="color" id="wallColor" value="#e5e5e5">
        </div>

        <div class="divider"></div>

        <div class="group">
            <label>Walls</label>

            <label><input type="checkbox" id="wallT" checked> Ceiling</label>
            <label><input type="checkbox" id="wallW1" checked> Wall Behind</label>
            <label><input type="checkbox" id="wallW2" checked>Left Wall </label>
            <label><input type="checkbox" id="wallW3"> Right Wall</label>
            <label><input type="checkbox" id="wallW4"> Outside Wall</label>
            <label><input type="checkbox" id="wallB" checked> Floor</label>
        </div>

        <div class="divider"></div>

        <div class="group">
            <label>Object Picker</label>
            <select id="objectPicker">
                <option value="">Select Object</option>
                <option value="lamp">Lamp</option>
                <option value="tv_unit">Tv Unit</option>
                <option value="chandelier">Chandelier</option>
                <option value="sofa_set">Sofa Set</option>
                <option value="plant">Plant</option>
                <option value="dining">Dining</option>
                <option value="bed">Bed</option>
                <option value="bedroom">Entire Bedroom</option>
                <option value="kitchen">Kitchen Set</option>

            </select>
        </div>
        <div class="group">
          <button id="lightToggle">Lights: ON</button>
        </div>
        <div class="group">
            <button id="placeToggle">PLACE: OFF</button>
        </div>

        <div class="group">
            <button id="removeMode">REMOVE: OFF</button>
        </div>

    </div>
    
</aside>


</section>
`,f=`<section class="page">
  <h1>Your Cart</h1>

  <div class="block tall cart">

    <!-- EMPTY STATE -->
    <div class="cart-empty">
      <p>Your cart is currently empty.</p>
      <span>Add interior pieces from the shop to see them here.</span>
    </div>

    <!-- CART LIST -->
    <div class="cart-items hidden">
      <!-- injected via JS -->
    </div>

    <!-- SUMMARY -->
    <div class="cart-summary hidden">
      <div class="summary-row">
        <span>Subtotal</span>
        <strong id="cartSubtotal">₹0</strong>
      </div>

      <div class="summary-row">
        <span>Discount</span>
        <strong id="cartDiscount">₹0</strong>
      </div>

      <div class="summary-row total">
        <span>Total</span>
        <strong id="cartTotal">₹0</strong>
      </div>

      <button class="checkout-btn">Proceed to Checkout</button>
    </div>

  </div>
</section>
`,p=`modulepreload`,m=function(e,t){return new URL(e,t).href},h={},g=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=m(t,n),t in h)return;h[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:p,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},_={home:c,shop:l,about:u,preview:d,cart:f},v=document.getElementById(`app`),y=document.querySelectorAll(`.pill-nav button`),b=null,x=null;function S(){let e=window.location.hash.replace(/^#\/?/,``);return[`home`,`shop`,`about`,`preview`,`cart`].includes(e)?e:`home`}async function C(e,t=!0){x=e,e!==`preview`&&(b&&b.cleanupPreview(),document.querySelectorAll(`canvas`).forEach(e=>{e.parentNode&&e.parentNode.removeChild(e)}));let n=_[e];if(!n)try{n=await(await fetch(`./partials/${e}.html`)).text()}catch{n=``}v.innerHTML=n||``,typeof initShop==`function`&&initShop(),typeof initCart==`function`&&initCart(),typeof updateCartPill==`function`&&updateCartPill(),y.forEach(e=>e.classList.remove(`active`)),document.querySelector(`[data-page="${e}"]`)?.classList.add(`active`),e===`preview`&&g(()=>import(`./vals-D0qLPd-3.js`).then(e=>{x===`preview`?(b=e,e.initPreview()):e.cleanupPreview?.()}),[],import.meta.url).catch(e=>console.error(`Failed to load preview script:`,e)),t&&window.location.hash.replace(/^#\/?/,``)!==e&&(window.location.hash=e)}y.forEach(e=>{e.onclick=()=>{let t=e.dataset.page;window.location.hash.replace(/^#\/?/,``)===t?C(t,!1):window.location.hash=t}}),window.addEventListener(`hashchange`,()=>{C(S(),!1)}),window.addEventListener(`popstate`,()=>{C(S(),!1)}),C(S(),!1);