/**
 * Movie
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

export default class Movie {
  constructor() {
    const section = document.getElementById('cb_content_5');
    const heading = section.querySelector('.catch.common_catch');
    const desc = section.querySelector('.desc');
    const myVideo = document.getElementById('c-myVideo');
    if (!section || !heading || !desc || !myVideo) return

    myVideo.after(desc);

  }
}
