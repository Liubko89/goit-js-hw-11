import{S as p,i as a}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const c="/goit-js-hw-11/assets/octagon-fdf1437b.svg",u=document.querySelector(".form"),d=document.querySelector(".gallery"),f="https://pixabay.com/api",m="41861239-c6b09579488337e808a164f07",h=new p(".gallery a",{captionsData:"alt",captionDelay:250});u.addEventListener("submit",g);function g(r){r.preventDefault();const t=r.currentTarget;t.elements.input.value&&(y(t.elements.input.value).then(n=>{n.hits.length===0&&a.show({iconUrl:c,theme:"dark",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3}),d.innerHTML=v(n.hits),h.refresh()}).catch(w),t.reset())}function y(r){return fetch(`${f}?key=${m}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function v(r){return r.map(({webformatURL:t,largeImageURL:n,tags:i,likes:e,views:s,comments:o,downloads:l})=>`<li class="gallery-item">
        <span class="loader"></span>
        <a class="gallery-link" href="${n}">
           <img
            class="gallery-image"
            src="${t}"
            alt="${i}"
          />
        </a>
        <div class="container-additional-info">
        <div class="container-descr-inner"><p class="description">Likes</p><span class="description-value">${e}</span></div>
        
        <div class="container-descr-inner"><p class="description">Views</p><span class="description-value">${s}</span></div>
        

        <div class="container-descr-inner"><p class="description">Comments</p><span class="description-value">${o}</span></div>
        

        <div class="container-descr-inner"><p class="description">Downloads</p><span class="description-value">${l}</span></div>
        
        </div>
      </li>`).join("")}function w(r){console.error(r),a.show({iconUrl:c,theme:"dark",message:`Sorry, there is a problem with connection with the server. ${r.status}`,messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"center",timeout:5e3})}
//# sourceMappingURL=commonHelpers.js.map
