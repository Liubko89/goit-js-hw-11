import{S as c,i as l}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const p="/goit-js-hw-11/assets/octagon-fdf1437b.svg",u=document.querySelector(".form"),f=document.querySelector(".gallery"),d="https://pixabay.com/api",m="41861239-c6b09579488337e808a164f07",g=new c(".gallery a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",h);function h(r){r.preventDefault();const t=r.currentTarget;t.elements.input.value&&(y(t.elements.input.value).then(o=>{o.hits.length===0&&l.show({iconUrl:p,theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),f.innerHTML=v(o.hits),g.refresh()}).catch(console.error),t.reset())}function y(r){return fetch(`${d}?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function v(r){return r.map(({webformatURL:t,largeImageURL:o,tags:i,likes:e,views:s,comments:n,downloads:a})=>`<li class="gallery-item">
        <span class="loader"></span>
        <a class="gallery-link" href="${o}">
           <img
            class="gallery-image"
            src="${t}"
            alt="${i}"
          />
        </a>
        <div class="container-additional-info">
        <p class="description">Likes <span class="description-value">${e}</span></p>
        <p class="description">views <span class="description-value">${s}</span></p>
        <p class="description">comments <span class="description-value">${n}</span></p>
        <p class="description">downloads <span class="description-value">${a}</span></p>
        </div>
      </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
