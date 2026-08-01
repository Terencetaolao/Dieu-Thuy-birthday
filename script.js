const letter = `Hôm nay là ngày thật đặc biệt — ngày một cô gái tuyệt vời đã đến với thế giới này.

Sự xuất hiện của em trong cuộc đời anh đã làm cho cuộc sống anh trở nên tuơi đẹp biết bao. 

Em chính là món quà vô giá mà anh may mắn được ban tặng, chính là nguồn động lực lớn lao giúp bước đi trong cuộc sống đầy những chông gai này. 

Cảm ơn em vì đã đến bên anh, vì nụ cười làm ngày dài bỗng nhẹ tênh, vì sự dịu dàng khiến mọi nơi đều có cảm giác như ở nhà.

Anh không biết tương lai sẽ có bao nhiêu chuyến đi, nhưng anh biết điều anh mong nhất là được đi cùng em. Chúc em tuổi mới luôn rực rỡ, bình yên và được yêu thương thật nhiều.`;

const reasons = [
"Vì nụ cười của em luôn làm ngày của anh sáng hơn.",
"Vì em làm những điều bình thường cũng trở nên đáng nhớ.",
"Vì ở cạnh em, anh luôn được là chính mình.",
"Vì em dịu dàng hơn cả những điều anh từng mong đợi.",
"Vì em luôn biết cách khiến anh cười.",
"Vì đôi mắt em chứa cả một bầu trời bình yên.",
"Vì em lắng nghe, ngay cả khi anh không biết phải nói gì.",
"Vì mỗi lần nắm tay em, anh thấy mình thật may mắn.",
"Vì em là người anh muốn kể mọi chuyện đầu tiên.",
"Vì có em, tương lai bỗng trở nên đẹp hơn.",
"Vì em luôn tin tưởng anh.",
"Vì em khiến anh muốn trở thành một người tốt hơn.",
"Vì em luôn quan tâm đến những điều nhỏ nhặt.",
"Vì em có một trái tim thật ấm áp.",
"Vì giọng nói của em luôn khiến anh thấy bình yên.",
"Vì em luôn làm mọi thứ bằng cả tấm lòng.",
"Vì em chưa từng ngừng cố gắng.",
"Vì em luôn xinh đẹp, kể cả khi em nghĩ mình không như vậy.",
"Vì em khiến những ngày buồn cũng trở nên dễ chịu.",
"Vì em luôn nhớ những điều anh vô tình nói.",
"Vì em có thể khiến một nơi bình thường trở thành đặc biệt.",
"Vì em luôn kiên nhẫn với anh.",
"Vì em khiến anh tin vào tình yêu nhiều hơn.",
"Vì em luôn cổ vũ anh theo cách rất riêng.",
"Vì em không bao giờ ngại thể hiện sự quan tâm.",
"Vì em luôn khiến anh cảm thấy mình được yêu.",
"Vì em là người đầu tiên anh muốn gặp mỗi ngày.",
"Vì em là người cuối cùng anh nghĩ đến trước khi ngủ.",
"Vì em khiến mỗi cuộc gọi đều đáng mong chờ.",
"Vì em có những cái ôm làm tan biến mọi mệt mỏi.",
"Vì em luôn biết cách an ủi anh.",
"Vì em làm anh cảm thấy mình thuộc về một nơi.",
"Vì em có sự chân thành hiếm có.",
"Vì em luôn đối xử tử tế với mọi người.",
"Vì em mạnh mẽ hơn em vẫn nghĩ.",
"Vì em luôn cố gắng hiểu anh.",
"Vì em khiến những chuyến đi trở nên ý nghĩa.",
"Vì em thích cười cùng anh.",
"Vì em khiến mọi bức ảnh đều trở thành kỷ niệm.",
"Vì em luôn mang đến cho anh cảm giác an toàn.",
"Vì em khiến anh mong chờ ngày mai.",
"Vì em luôn nhớ sở thích của anh.",
"Vì em biết quan tâm đến gia đình.",
"Vì em khiến anh học được cách yêu nhiều hơn.",
"Vì em luôn biết nói lời cảm ơn.",
"Vì em biết xin lỗi khi cần.",
"Vì em biết tha thứ.",
"Vì em luôn nhìn mọi thứ bằng sự tích cực.",
"Vì em luôn cố gắng mỗi khi gặp khó khăn.",
"Vì em làm anh thấy cuộc sống thật đáng yêu.",
"Vì em có những biểu cảm đáng yêu không ai có.",
"Vì em luôn khiến tim anh rung động như lần đầu.",
"Vì em thích những điều giản dị.",
"Vì em luôn trân trọng những kỷ niệm của chúng mình.",
"Vì em khiến những ngày mưa cũng trở nên đẹp.",
"Vì em luôn là người anh muốn đồng hành.",
"Vì em khiến khoảng cách cũng không còn đáng sợ.",
"Vì em khiến mọi lời chúc đều trở nên chân thành.",
"Vì em là món quà đẹp nhất cuộc đời anh.",
"Vì em luôn làm anh tự hào.",
"Vì em luôn động viên anh mỗi khi anh nản lòng.",
"Vì em không bao giờ bỏ cuộc.",
"Vì em khiến anh cười chỉ bằng một tin nhắn.",
"Vì em luôn nhớ những ngày đặc biệt.",
"Vì em có sự đáng yêu rất riêng.",
"Vì em khiến căn phòng trở nên ấm áp hơn khi em ở đó.",
"Vì em luôn dành thời gian cho anh.",
"Vì em làm những điều nhỏ bé với cả trái tim.",
"Vì em luôn khiến anh thấy mình quan trọng.",
"Vì em làm mọi khoảnh khắc đều đáng giá.",
"Vì em là người bạn thân nhất của anh.",
"Vì em luôn ở bên anh những lúc cần nhất.",
"Vì em khiến anh không còn sợ cô đơn.",
"Vì em luôn mang đến hy vọng.",
"Vì em là bình yên sau một ngày dài.",
"Vì em khiến anh muốn về nhà.",
"Vì em luôn tin vào chúng mình.",
"Vì em khiến anh hiểu rằng hạnh phúc thật đơn giản.",
"Vì em luôn làm mọi thứ bằng tình yêu.",
"Vì em có một tâm hồn thật đẹp.",
"Vì em luôn khiến anh mỉm cười vô thức.",
"Vì em khiến những điều nhỏ bé trở nên lớn lao.",
"Vì em biết cách làm anh thấy đặc biệt.",
"Vì em luôn tỏa sáng theo cách của riêng mình.",
"Vì em chưa từng ngừng yêu thương.",
"Vì em luôn khiến trái tim anh bình yên.",
"Vì em là người anh muốn đi cùng thật lâu.",
"Vì em khiến mọi mùa trong năm đều đẹp.",
"Vì em khiến anh tin rằng mình đã gặp đúng người.",
"Vì em luôn khiến anh muốn nắm tay thật chặt.",
"Vì em khiến mọi ngày đều đáng mong chờ.",
"Vì em là người anh muốn cùng ăn mọi bữa cơm.",
"Vì em là người anh muốn cùng ngắm mọi hoàng hôn.",
"Vì em là người anh muốn cùng đón mọi bình minh.",
"Vì em là người anh muốn kể cho nghe mọi ước mơ.",
"Vì em là người anh muốn cùng già đi.",
"Vì em khiến chữ 'gia đình' có ý nghĩa hơn.",
"Vì em là lý do anh mỉm cười nhiều hơn mỗi ngày.",
"Vì em đã bước vào cuộc đời anh đúng lúc nhất.",
"Vì em là điều đẹp nhất đã xảy ra với anh.",
"Vì sau tất cả, anh vẫn sẽ chọn yêu em thêm một lần nữa, và thêm rất nhiều lần nữa."
];

const type = document.querySelector('#typewriter');
let typed = false;

function typeLetter() {
  if (typed) return;
  typed = true;
  let i = 0;

  const tick = () => {
    if (i < letter.length) {
      type.innerHTML += letter[i] === '\n' ? '<br>' : letter[i];
      i++;
      setTimeout(tick, 18);
    }
  };

  tick();
}

document.querySelector('#openLetter').addEventListener('click', () => {
  document.querySelector('#story').scrollIntoView({ behavior: 'smooth' });
  setTimeout(typeLetter, 600);
});

const reasonText = document.querySelector('#reasonText');
const reasonCount = document.querySelector('#reasonCount');
let currentReasonIndex = 0;

document.querySelector('#reasonButton').addEventListener('click', () => {
  const next = currentReasonIndex % reasons.length;
  currentReasonIndex++;
  reasonText.style.opacity = 0;

  setTimeout(() => {
    reasonText.textContent = reasons[next];
    reasonText.style.opacity = 1;
    reasonCount.textContent = `${String((next + 1)).padStart(2, '0')} / 100`;
  }, 160);
});

const gift = document.querySelector('#gift');
gift.addEventListener('click', () => {
  gift.classList.add('open');
  document.querySelector('#giftInstruction').textContent = 'Mở ra rồi nè…';
  setTimeout(() => document.querySelector('#surprise').classList.add('show'), 500);
});

const music = document.querySelector('#music');

window.addEventListener('load', () => {
  setTimeout(() => {
    music.play().catch(() => {});
  }, 400);
});

function makeFloat(kind, host) {
  const el = document.createElement('span');
  el.className = kind;
  el.innerHTML = kind === 'heart' ? '♥' : '';
  el.style.left = Math.random() * 100 + 'vw';
  el.style.setProperty('--drift', (Math.random() * 160 - 80) + 'px');
  el.style.animationDuration = (7 + Math.random() * 8) + 's';
  host.appendChild(el);
  setTimeout(() => el.remove(), 16000);
}

setInterval(() => makeFloat('petal', document.querySelector('#petals')), 900);
setInterval(() => makeFloat('heart', document.querySelector('#hearts')), 1700);

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting && e.target.id === 'typewriter') typeLetter();
  }),
  { threshold: 0.35 }
);
observer.observe(type);
