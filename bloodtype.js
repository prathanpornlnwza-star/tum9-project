// 1. ข้อมูลคำทำนายรายบุคคลครบทั้ง 6 หมวดหมู่
const bloodTypeDetails = {
  A: {
    title: "GROUP A",
    general: "ชาวกรุ๊ป A เป็นคนละเอียดรอบคอบ มีความรับผิดชอบสูง ปรารถนาความสงบและความเป็นระเบียบเรียบร้อยในชีวิต มักแคร์ความรู้สึกของคนรอบข้างเสมอ แต่อาจมีความวิตกกังวลหรือเก็บความรู้สึกไว้กับตัวเองในบางครั้ง",
    love: "รักจริงและจริงจังกับความสัมพันธ์ ค่อยๆ เปิดใจทีละน้อย ไม่ชอบความรักที่ฉาบฉวย เมื่อรักใครแล้วจะทุ่มเทดูแลเอาใจใส่รายละเอียดเล็กๆ น้อยๆ ของคนรักเสมอ แต่บางครั้งก็ขี้น้อยใจและคิดมากเกินไป",
    work: "โดดเด่นด้านการวางแผน งานที่ต้องใช้ความประณีตและความรับผิดชอบสูง เป็นคนทำงานเป็นระบบและตรงต่อเวลา แต่ข้อควรระวังคือมักกดดันตัวเองมากเกินไปจนเกิดความเครียดสะสม",
    finance: "รอบคอบเรื่องเงินมาก รู้จักวางแผนเก็บออมและทำบัญชีรายรับรายจ่าย ไม่ค่อยใช้เงินตามอารมณ์ชั่ววูบ จึงมักสร้างความมั่นคงทางการเงินในระยะยาวได้ดีเยี่ยม",
    health: "ระบบย่อยอาหารและกระเพาะมักไวต่อความเครียด ควรพักผ่อนให้เป็นเวลา หลีกเลี่ยงอาหารรสจัดหรือคาเฟอีนมากเกินไป และหากิจกรรมผ่อนคลายอย่างโยคะหรือการเดินเล่นเพื่อลดความตึงเครียด",
    soulmate: "✧ คู่แท้แห่งดวงดาว: กรุ๊ป O และ กรุ๊ป A ✧\nกรุ๊ป O จะเข้ามาเติมพลังบวกและความกล้าตัดสินใจให้คุณ ส่วนกรุ๊ป A ด้วยกันจะเข้าใจความละเอียดอ่อนของกันและกันอย่างลึกซึ้ง"
  },
  B: {
    title: "GROUP B",
    general: "ชาวกรุ๊ป B มีความเป็นตัวของตัวเองสูง มีความคิดสร้างสรรค์ ร่าเริง และรักอิสระ มักทำตามความรู้สึกและแพสชันของตนเอง ไม่ชอบการผูกมัดหรือกฎเกณฑ์ที่ซับซ้อน เป็นคนเปิดเผยและจริงใจ",
    love: "ตกหลุมรักง่ายเมื่อเจอคนที่ถูกใจ ชอบความสัมพันธ์ที่สนุกสนาน เป็นธรรมชาติ และมีพื้นที่ส่วนตัวให้กัน ต้องการคนรักที่เข้าใจในโลกส่วนตัวและไม่พยายามตีกรอบมากเกินไป",
    work: "เหมาะกับงานสายครีเอทีฟ ศิลปะ การตลาด หรือโปรเจกต์ที่ต้องใช้ไอเดียแปลกใหม่ ทำงานได้ดีมากเมื่อได้ทำในสิ่งที่รัก แต่จะเบื่อหน่ายง่ายหากต้องทำอะไรซ้ำซากจำเจ",
    finance: "เป็นสายเปย์ให้กับความสุขและประสบการณ์ใหม่ๆ หาเงินเก่งตามแรงบันดาลใจแต่ก็ใช้เก่งเช่นกัน หากตั้งระบบหักเงินออมอัตโนมัติตั้งแต่ต้นเดือนจะช่วยให้มีเงินเก็บก้อนใหญ่",
    health: "ร่างกายแข็งแรงและฟื้นตัวไว แต่จุดอ่อนคือการนอนดึกและการใช้ชีวิตไม่เป็นเวลา ควรระวังอาการอ่อนเพลียสะสมจากการทุ่มเททำสิ่งที่ชอบจนลืมพักผ่อน",
    soulmate: "✧ คู่แท้แห่งดวงดาว: กรุ๊ป AB และ กรุ๊ป O ✧\nกรุ๊ป AB จะเข้าใจมุมมองที่แตกต่างของคุณโดยไม่ตัดสิน ส่วนกรุ๊ป O จะพร้อมลุยและสนับสนุนทุกไอเดียสุดเหวี่ยงของคุณ"
  },
  AB: {
    title: "GROUP AB",
    general: "ชาวกรุ๊ป AB เป็นการผสมผสานระหว่างเหตุผลและความรู้สึก มีโลกส่วนตัวสูง เฉลียวฉลาด คิดวิเคราะห์สิ่งต่างๆ ได้อย่างทะลุปรุโปร่ง มองโลกตามความเป็นจริง แต่อาจเข้าใจยากในบางเวลาเพราะมีหลายมุมในคนเดียว",
    love: "มีความโรแมนติกแบบมีเหตุผล ชอบคนที่คุยกันรู้เรื่อง มีทัศนคติที่น่าสนใจ ไม่ชอบการตามติดตลอดเวลา หากเจอคนที่ให้เกียรติพื้นที่ส่วนตัว จะกลายเป็นคนรักที่ซื่อสัตย์และอบอุ่นมาก",
    work: "เก่งเรื่องการวิเคราะห์ แก้ปัญหาเฉพาะหน้า และงานที่ต้องใช้ไหวพริบ สามารถมองเห็นภาพรวมและจุดบอดของงานได้เร็ว จึงมักเป็นที่ปรึกษาคนสำคัญของทีม",
    finance: "บริหารจัดการเงินได้อย่างชาญฉลาด รู้จักเปรียบเทียบความคุ้มค่าก่อนจ่ายเสมอ มักมีช่องทางสร้างรายได้เสริมจากความสามารถเฉพาะตัวและสนใจการลงทุนที่สมเหตุสมผล",
    health: "มักใช้พลังงานสมองเยอะจนเกิดอาการล้าทางจิตใจได้ง่าย ควรหาเวลาตัดขาดจากโลกโซเชียลเพื่อชาร์จแบตให้ตัวเอง และดูแลระบบไหลเวียนโลหิตด้วยการออกกำลังกายเบาๆ",
    soulmate: "✧ คู่แท้แห่งดวงดาว: กรุ๊ป A และ กรุ๊ป B ✧\nกรุ๊ป A จะช่วยเติมเต็มความมั่นคงและระเบียบให้ชีวิต ส่วนกรุ๊ป B จะเข้ามาสร้างสีสันและเสียงหัวเราะให้โลกส่วนตัวของคุณ"
  },
  O: {
    title: "GROUP O",
    general: "ชาวกรุ๊ป O มีความเป็นผู้นำ มั่นใจในตัวเอง มุ่งมั่น และตรงไปตรงมา ปรับตัวเข้ากับผู้คนได้ง่าย มีจิตใจเอื้อเฟื้อเผื่อแผ่ กล้าคิดกล้าทำ และมักตั้งเป้าหมายในชีวิตไว้อย่างชัดเจนเสมอ",
    love: "รักใครรักจริง แสดงออกอย่างชัดเจน อบอุ่นและชอบปกป้องดูแลคนรัก เป็นสายเปย์และทุ่มเทให้คนสำคัญเต็มร้อย แต่ลึกๆ แล้วก็แอบขี้หึงและต้องการความชัดเจนจากอีกฝ่ายเช่นกัน",
    work: "เกิดมาเพื่อเป็นผู้นำ โดดเด่นด้านการบริหาร การเจรจาต่อรอง และงานที่ต้องแข่งขัน ยิ่งมีเป้าหมายท้าทายยิ่งมีไฟในการทำงานสูง แต่ควรระวังความใจร้อนในบางจังหวะ",
    finance: "หาเงินเก่งและกล้าได้กล้าเสียเรื่องการลงทุน ใจกว้างกับเพื่อนฝูงและครอบครัว แต่ต้องระวังเรื่องการใช้จ่ายตามใจตัวเองหรือเพื่อรักษาหน้าตาทางสังคม",
    health: "ระบบเผาผลาญดีและมีพลังกายล้นเหลือ เหมาะกับการออกกำลังกายที่ได้ขยับตัวเต็มที่ แต่ควรระวังเรื่องการทานอาหารเร็วเกินไปและการหักโหมทำงานหนักจนลืมดูแลตัวเอง",
    soulmate: "✧ คู่แท้แห่งดวงดาว: กรุ๊ป A และ กรุ๊ป B ✧\nกรุ๊ป A จะเป็นเบื้องหลังที่คอยเก็บรายละเอียดและซัพพอร์ตคุณได้ดีเยี่ยม ส่วนกรุ๊ป B จะเป็นคู่หูที่เข้าขากันได้ในทุกสถานการณ์"
  }
};

// 2. ข้อมูลความเข้ากันได้ทั้ง 16 คู่
const compatibilityData = {
  "A-A": { percent: 85, desc: "เข้าอกเข้าใจกันอย่างลึกซึ้ง เพราะมีนิสัยละเอียดและแคร์ความรู้สึกคล้ายกัน ข้อควรระวังคืออย่าเก็บเรื่องไม่สบายใจไว้เงียบๆ ทั้งคู่ ควรเปิดใจคุยกันตรงๆ" },
  "A-B": { percent: 65, desc: "ความต่างที่ดึงดูดกัน กรุ๊ป A รอบคอบ ส่วนกรุ๊ป B รักอิสระ หากเรียนรู้ที่จะปรับจูนและยอมรับพื้นที่ส่วนตัวของกันและกัน จะช่วยเติมเต็มส่วนที่ขาดได้อย่างลงตัว" },
  "A-AB": { percent: 88, desc: "คู่คิดที่ลงตัว กรุ๊ป AB ชื่นชมความตั้งใจของกรุ๊ป A ส่วนกรุ๊ป A ก็ประทับใจในความฉลาดและมีเหตุผลของกรุ๊ป AB เป็นความสัมพันธ์ที่สงบและมั่นคง" },
  "A-O": { percent: 95, desc: "คู่สมพงษ์ระดับจักรวาล! กรุ๊ป O ที่เป็นผู้นำและมองโลกในแง่ดี จะช่วยคลายความกังวลให้กรุ๊ป A ได้เสมอ ขณะที่กรุ๊ป A ก็คอยดูแลรายละเอียดให้กรุ๊ป O ได้อย่างดีเยี่ยม" },
  "B-B": { percent: 80, desc: "คู่หูสายลุยที่สนุกสนานและเข้าใจอารมณ์ของกันและกันดีมาก ไม่มีใครบังคับใคร แต่ต้องระวังเรื่องความเอาแต่ใจหรือไม่มีใครยอมใครในบางจังหวะ" },
  "B-AB": { percent: 90, desc: "เคมีเข้ากันได้อย่างน่าอัศจรรย์ กรุ๊ป AB สามารถรับมือกับความติสท์ของกรุ๊ป B ได้อย่างสบายๆ และมักมีบทสนทนาที่ลึกซึ้งและสนุกสนานร่วมกันเสมอ" },
  "B-O": { percent: 92, desc: "คู่รักพลังงานบวก! ทั้งคู่เปิดเผย จริงใจ และชอบการผจญภัยเหมือนกัน อยู่ด้วยกันแล้วมีแต่เสียงหัวเราะ กรุ๊ป O พร้อมซัพพอร์ตทุกความฝันของกรุ๊ป B เสมอ" },
  "AB-AB": { percent: 82, desc: "เข้าใจโลกส่วนตัวของกันและกันโดยไม่ต้องพูดเยอะ ต่างฝ่ายต่างให้เกียรติซึ่งกันและกัน แต่อย่าปล่อยให้มีระยะห่างมากเกินไปจนดูห่างเหิน" },
  "AB-O": { percent: 75, desc: "กรุ๊ป O ที่ตรงไปตรงมาอาจต้องใช้เวลาทำความเข้าใจมุมที่ซับซ้อนของกรุ๊ป AB สักหน่อย แต่เมื่อจูนติดแล้ว กรุ๊ป AB จะเป็นที่ปรึกษาที่ดีที่สุดให้กรุ๊ป O" },
  "O-O": { percent: 86, desc: "คู่รักพลังล้นเหลือ ต่างคนต่างมีเป้าหมายชัดเจนและพร้อมผลักดันกันไปข้างหน้า ข้อควรระวังคือเมื่อมีปากเสียงต่างฝ่ายต่างไม่ค่อยยอมลงให้กัน ต้องผลัดกันใจเย็น" }
};

// 3. ข้อมูลไพ่จักรวาลตามกรุ๊ปเลือด (Blood Oracle Card)
const oracleCardsData = [
  {
    id: "eclipse",
    numeral: "I",
    symbol: "🌑",
    name: "THE ECLIPSE",
    thaiTitle: "สุริยุปราคา — จุดเปลี่ยนและการปล่อยวาง",
    readings: {
      A: "ถึงเวลาวางความกังวลและมาตรฐานที่สูงเกินไปลงชั่วคราว สิ่งที่คุณพยายามควบคุมกำลังจะคลี่คลายด้วยตัวของมันเอง",
      B: "พลังงานใหม่กำลังพัดเข้ามา จงกล้าที่จะเปลี่ยนเส้นทางหากสิ่งเดิมเริ่มทำให้คุณหมดไฟ โอกาสดีซ่อนอยู่ในความไม่แน่นอน",
      AB: "หยุดวิเคราะห์ทุกอย่างด้วยเหตุผลเพียงอย่างเดียว ลองฟังเสียงสัญชาตญาณลึกๆ ของคุณดูบ้าง แล้วคำตอบจะชัดเจนขึ้น",
      O: "อย่าแบกทุกอย่างไว้บนบ่าคนเดียว การถอยหลังหนึ่งก้าวในวันนี้จะช่วยให้คุณมองเห็นภาพใหญ่และพุ่งไปได้ไกลกว่าเดิม"
    }
  },
  {
    id: "supernova",
    numeral: "II",
    symbol: "✦",
    name: "THE SUPERNOVA",
    thaiTitle: "ซูเปอร์โนวา — โอกาสและประกายไฟ",
    readings: {
      A: "ความละเอียดรอบคอบที่คุณสะสมมาตลอดกำลังจะออกดอกผล เตรียมรับข่าวดีเรื่องงานหรือโปรเจกต์ที่ซุ่มทำมานาน",
      B: "ไอเดียสุดบรรเจิดของคุณกำลังจะเป็นที่ยอมรับ จงรีบลงมือทำในขณะที่ไฟกำลังลุกโชน อย่าปล่อยให้ความลังเลมาขวางทาง",
      AB: "เสน่ห์เฉพาะตัวของคุณกำลังดึงดูดคนที่มีคลื่นความถี่เดียวกันเข้ามา มีเกณฑ์ได้พบมิตรภาพหรือคู่คิดที่เข้าใจคุณอย่างแท้จริง",
      O: "ช่วงเวลาแห่งการเป็นผู้นำมาถึงแล้ว ความกล้าตัดสินใจของคุณจะนำพาความสำเร็จและผลตอบแทนก้อนโตมาให้ในเร็วๆ นี้"
    }
  },
  {
    id: "crescent",
    numeral: "III",
    symbol: "☽",
    name: "THE CRESCENT MOON",
    thaiTitle: "จันทร์เสี้ยว — ความรักและความรู้สึก",
    readings: {
      A: "ความใส่ใจเล็กๆ น้อยๆ ของคุณมีค่าเสมอ แต่อย่าลืมรักและใจดีกับตัวเองให้เท่ากับที่คุณมอบให้คนอื่น",
      B: "ความสัมพันธ์ที่ดีไม่จำเป็นต้องมีกฎเกณฑ์มากมาย เปิดใจรับความรู้สึกที่เข้ามาอย่างเป็นธรรมชาติ แล้วคุณจะพบความสุขที่เรียบง่าย",
      AB: "หากกำลังสับสนในความสัมพันธ์ ลองให้เวลาตัวเองได้อยู่เงียบๆ คำตอบที่ชัดเจนไม่ได้มาจากคำพูดของใคร แต่มาจากความสบายใจของคุณเอง",
      O: "ความชัดเจนคือสิ่งที่คุณต้องการที่สุดในตอนนี้ จงกล้าที่จะเอ่ยถามหรือแสดงความรู้สึกออกไปตรงๆ ผลลัพธ์จะดีกว่าที่คิด"
    }
  },
  {
    id: "nebula",
    numeral: "IV",
    symbol: "🌌",
    name: "THE NEBULA",
    thaiTitle: "เนบิวลา — การเยียวยาและโชคลาภ",
    readings: {
      A: "พักสายตาจากหน้าจอและความเครียดสะสม จักรวาลกำลังส่งสัญญาณให้คุณชาร์จพลัง โชคลาภจะมาจากการเดินทางสั้นๆ หรือการพักผ่อน",
      B: "ระวังการใช้จ่ายตามอารมณ์ชั่ววูบ แต่ในขณะเดียวกันก็มีเกณฑ์ได้รับของขวัญหรือลาภลอยจากคนใกล้ตัว",
      AB: "ความเงียบสงบคือขุมพลังของคุณ ช่วงนี้เหมาะกับการจัดระเบียบความคิดและพื้นที่ส่วนตัว แล้วไอเดียทำเงินใหม่ๆ จะผุดขึ้นมาเอง",
      O: "พลังงานบวกของคุณกำลังดึงดูดเรื่องดีๆ เข้ามา ยิ่งคุณแบ่งปันน้ำใจให้คนรอบข้างมากเท่าไหร่ จักรวาลก็จะยิ่งส่งคืนกลับมาเป็นทวีคูณ"
    }
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // --- ส่วนที่ 1: Modal & 6 Tabs ---
  const letterBtns = document.querySelectorAll('.blood-letter-btn');
  const modal = document.getElementById('readingModal');
  const closeModalBtn = document.getElementById('closeModal');
  const closeActionBtn = document.getElementById('closeActionBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const tabBtns = document.querySelectorAll('.tab-btn');

  let currentGroup = 'A';
  let currentTab = 'general';

  const updateModalContent = () => {
    const data = bloodTypeDetails[currentGroup];
    if (!data) return;
    modalTitle.innerText = data.title;
    modalDescription.innerText = data[currentTab];
  };

  letterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentGroup = btn.getAttribute('data-group');
      currentTab = 'general';
      
      tabBtns.forEach(t => t.classList.remove('active'));
      document.querySelector('.tab-btn[data-tab="general"]').classList.add('active');

      updateModalContent();
      modal.classList.add('active');
    });
  });

  tabBtns.forEach(tab => {
    tab.addEventListener('click', () => {
      tabBtns.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentTab = tab.getAttribute('data-tab');
      updateModalContent();
    });
  });

  const hideModal = () => modal.classList.remove('active');

  closeModalBtn.addEventListener('click', hideModal);
  closeActionBtn.addEventListener('click', hideModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) hideModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      hideModal();
    }
  });

  // --- ส่วนที่ 2: ระบบจับคู่ความเข้ากันได้ ---
  let selectedUserGroup = null;
  let selectedPartnerGroup = null;

  const userBtns = document.querySelectorAll('#userGroupBtns .mini-btn');
  const partnerBtns = document.querySelectorAll('#partnerGroupBtns .mini-btn');
  const calcMatchBtn = document.getElementById('calcMatchBtn');
  const matchResultCard = document.getElementById('matchResultCard');
  const matchPairTitle = document.getElementById('matchPairTitle');
  const matchPercent = document.getElementById('matchPercent');
  const matchProgressBar = document.getElementById('matchProgressBar');
  const matchDesc = document.getElementById('matchDesc');

  userBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      userBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedUserGroup = btn.getAttribute('data-val');
    });
  });

  partnerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      partnerBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedPartnerGroup = btn.getAttribute('data-val');
    });
  });

  calcMatchBtn.addEventListener('click', () => {
    if (!selectedUserGroup || !selectedPartnerGroup) {
      alert("กรุณาเลือกกรุ๊ปเลือดให้ครบทั้ง 2 ฝั่งก่อนทำนายครับ ✧");
      return;
    }

    const key1 = `${selectedUserGroup}-${selectedPartnerGroup}`;
    const key2 = `${selectedPartnerGroup}-${selectedUserGroup}`;
    const result = compatibilityData[key1] || compatibilityData[key2];

    if (result) {
      matchPairTitle.innerText = `${selectedUserGroup} ✦ ${selectedPartnerGroup}`;
      matchPercent.innerText = `${result.percent}%`;
      matchDesc.innerText = result.desc;

      matchResultCard.classList.remove('show');
      void matchResultCard.offsetWidth;
      matchResultCard.classList.add('show');

      matchProgressBar.style.width = '0%';
      setTimeout(() => {
        matchProgressBar.style.width = `${result.percent}%`;
      }, 100);
    }
  });

  // --- ส่วนที่ 3: เสี่ยงทายไพ่จักรวาลตามกรุ๊ปเลือด (Blood Oracle Card) ---
  const oracleGroupBtns = document.querySelectorAll('.oracle-group-btn');
  const oracleDeck = document.getElementById('oracleDeck');
  const oracleReadingBox = document.getElementById('oracleReadingBox');
  const oracleCardBadge = document.getElementById('oracleCardBadge');
  const oracleCardSubtitle = document.getElementById('oracleCardSubtitle');
  const oracleMessage = document.getElementById('oracleMessage');
  const oracleInstruction = document.getElementById('oracleInstruction');
  const reshuffleBtn = document.getElementById('reshuffleBtn');

  let selectedOracleGroup = 'A';
  let isCardPicked = false;

  // ฟังก์ชันสุ่มลำดับไพ่ (Fisher-Yates Shuffle)
  const shuffleCards = (cards) => {
    const array = [...cards];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // สร้างและวางไพ่คว่ำหน้า 4 ใบบนกระดาน
  const setupOracleDeck = () => {
    isCardPicked = false;
    oracleReadingBox.classList.remove('show');
    oracleInstruction.innerText = `ขั้นที่ 2: ตั้งจิตอธิษฐานในนามชาวกรุ๊ป ${selectedOracleGroup} แล้วเลือกไพ่ 1 ใบตามสัญชาตญาณ`;

    const shuffled = shuffleCards(oracleCardsData);
    oracleDeck.innerHTML = '';

    shuffled.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'oracle-card';
      cardEl.style.animationDelay = `${index * 0.08}s`;

      cardEl.innerHTML = `
        <div class="oracle-card-inner">
          <div class="oracle-card-face oracle-card-back">
            <div class="card-back-frame">
              <span class="card-back-stars">✦ ✧ ✦</span>
              <span class="card-back-moon">☽</span>
              <span class="card-back-stars">✧ ✦ ✧</span>
              <span class="card-back-label">TUM9 ORACLE</span>
            </div>
          </div>
          <div class="oracle-card-face oracle-card-front">
            <span class="card-front-numeral">✦ ${card.numeral} ✦</span>
            <span class="card-front-symbol">${card.symbol}</span>
            <div class="card-front-title">${card.name}</div>
            <div class="card-front-thai">${card.thaiTitle.split('—')[0].trim()}</div>
          </div>
        </div>
      `;

      cardEl.addEventListener('click', () => {
        if (isCardPicked) return;
        isCardPicked = true;

        // พลิกใบที่เลือกและทำให้ใบอื่นจางลง
        const allCards = oracleDeck.querySelectorAll('.oracle-card');
        allCards.forEach(c => {
          if (c === cardEl) {
            c.classList.add('flipped', 'selected-card');
          } else {
            c.classList.add('dimmed');
          }
        });

        oracleInstruction.innerText = `✧ จักรวาลได้เปิดเผยคำทำนายสำหรับกรุ๊ป ${selectedOracleGroup} แล้ว ✧`;

        // แสดงกล่องคำทำนายหลังจากไพ่เริ่มพลิก
        setTimeout(() => {
          oracleCardBadge.innerText = `${card.name} • GROUP ${selectedOracleGroup}`;
          oracleCardSubtitle.innerText = card.thaiTitle;
          oracleMessage.innerText = `“${card.readings[selectedOracleGroup]}”`;
          oracleReadingBox.classList.add('show');
        }, 420);
      });

      oracleDeck.appendChild(cardEl);
    });
  };

  // เลือกกรุ๊ปเลือดในโซน Oracle -> สับไพ่ใหม่ทันที
  oracleGroupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      oracleGroupBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedOracleGroup = btn.getAttribute('data-group');
      setupOracleDeck();
    });
  });

  // กดปุ่มสับไพ่เสี่ยงทายใหม่
  reshuffleBtn.addEventListener('click', () => {
    setupOracleDeck();
  });

  // เริ่มต้นสร้างสำรับไพ่ครั้งแรก
  setupOracleDeck();
});