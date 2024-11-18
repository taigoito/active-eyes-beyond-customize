/**
 * Footer
 * Author: Taigo Ito (https://qwel.design/)
 * Location: Fukui, Japan
 */

export default class Footer {
  constructor() {
    const footer = document.getElementById('footer');
    document.getElementById('footer_sns').remove();
    
    const content = document.createElement('div');
    content.classList.add('c-footerContent');
    let text = '福井県公安委員会 探偵業届出証明書 第52120093号';
    text += '<br>内閣総理大臣認可（一社）日本調査業協会正会員No.2449号';
    text += '<br>探偵業務取扱者取得 認定番号No.JISA（1）2711-D0277';
    text += '<br>探偵標識 <a class="c-footerContent__click" href="/data/uploads/detectivesign.pdf" target="_brank">クリック表示</a>'
    text += '<br>〒910-0017 福井県福井市文京7ｰ18ｰ28<br>（フクオカビル2階B号室）';
    content.innerHTML = text;
    footer.appendChild(content);
  }
}
