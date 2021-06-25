import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Como o Post-It,^1000", "mas com outro verbo."],
    typeSpeed: 40,
    loop: true
  });
}

export { loadDynamicBannerText };