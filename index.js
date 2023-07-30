const gnb = document.querySelector(".main_gnb_container");

const aboutUsSection = document.querySelector(".about_us_section");

const appealSection = document.querySelector(".appeal_section");

const businessSection = document.querySelector(".business_section");
const businessContainer = document.querySelector(".business_container");
const businessInner = document.querySelector(".business_inner");

const itemsSection = document.querySelector(".items_section");
const itemsInner = document.querySelector(".items_inner");
const itemImg1 = document.querySelector(".item_img1");
const itemImg2 = document.querySelector(".item_img2");
const itemImg3 = document.querySelector(".item_img3");
const itemImg4 = document.querySelector(".item_img4");
const itemImg5 = document.querySelector(".item_img5");
const itemImg6 = document.querySelector(".item_img6");
const itemImg7 = document.querySelector(".item_img7");
const itemImg8 = document.querySelector(".item_img8");
const itemsText = document.querySelector(".item_text_inner");

let scrollY = 0;

window.addEventListener("scroll", () => {
  if (scrollY < window.scrollY) {
    gnb.style.transform = `translate(-50%, -100px)`;
  } else {
    gnb.style.transform = `translate(-50%, 0)`;
  }

  // about영역
  const scrollDistance = window.scrollY + window.innerHeight;
  const aboutSectionTop = aboutUsSection.offsetTop + 100;
  const aboutSectionBottom = aboutSectionTop + aboutUsSection.offsetHeight - 100;
  const aboutScrollRange = aboutSectionBottom - aboutSectionTop;

  if (scrollDistance > aboutSectionTop) {
    const progress = (scrollDistance - aboutSectionTop) / aboutScrollRange;
    const newWidth = 83.4 + progress * 16.6;
    aboutUsSection.style.width = `${Math.min(newWidth, 100)}%`;
  } else {
    aboutUsSection.style.width = "83.4%";
  }

  // appeal영역
  const appealSetctionTop = appealSection.offsetTop;
  const appealSectionBottom = appealSection.offsetTop + appealSection.offsetHeight + window.innerHeight;

  if (
    scrollDistance > appealSetctionTop + window.innerHeight / 2 &&
    scrollDistance < appealSectionBottom + window.innerHeight / 2
  ) {
    if (scrollY < window.scrollY) {
      appealSection.style.backgroundPositionY = `-400px`;
    } else {
      appealSection.style.backgroundPositionY = `-300px`;
    }
  }

  // business영역
  const businessSectionTop = businessSection.offsetTop;
  const businessSectionBottom = businessSectionTop + businessSection.offsetHeight;

  // 스크롤이 오프셋탑보다 작으면 포지션 렐러티브 , translate 0
  // 위에서 내려오면서 스크롤이 오프셋탑보다 커질 때 : 포지션 픽스드로 바뀜,
  // 스크롤이 오프셋탑보다 크고 오프셋 하이츠보다 작을 때 포지션 픽스드
  // 스크롤이 오프셋 하이츠보다 클 때 포지션 렐러티브 translate Y

  if (scrollDistance > businessSectionTop + window.innerHeight && scrollDistance < businessSectionBottom) {
    businessContainer.style.position = "fixed";
    businessContainer.style.top = "0";
    businessContainer.style.left = "0";
    businessInner.style.transform = `translate(-${Math.min(scrollDistance * 0.7 - businessSectionTop, 1700)}px, 0)`;
  } else if (scrollDistance >= businessSectionBottom) {
    businessContainer.style.position = "relative";
    businessContainer.style.top = "initial";
    businessContainer.style.left = "initial";
    businessInner.style.transform = `translate(-1700px,${businessSection.offsetHeight - window.innerHeight}px)`;
  } else {
    businessContainer.style.position = "relative";
    businessContainer.style.top = "initial";
    businessContainer.style.left = "initial";
    businessInner.style.transform = `translate(0,0px)`;
  }

  const itemsSectionTop = itemsSection.offsetTop;
  const itemsSectionBottom = itemsSectionTop + itemsSection.offsetHeight;
  if (scrollDistance > itemsSectionTop + window.innerHeight && scrollDistance < itemsSectionBottom) {
    itemsInner.style.position = "fixed";
    itemsInner.style.top = "0";
    itemsInner.style.left = "0";
    itemsText.style.transform = `translate(0,-${(window.scrollY - itemsSectionTop) * 0.5}px)`;

    console.log(itemImg1.offsetTop, itemImg2.offsetTop);
    // 이미지

    if (scrollDistance > itemsSectionTop + window.innerHeight * 2) {
      itemImg2.style.transform = `translate(0, 0%)`;
    } else {
      itemImg2.style.transform = `translate(0, 100%)`;
    }
    if (scrollDistance > itemsSectionTop + window.innerHeight * 3) {
      itemImg3.style.transform = `translate(0, 0%)`;
    } else {
      itemImg3.style.transform = `translate(0, 100%)`;
    }
    if (scrollDistance > itemsSectionTop + window.innerHeight * 4) {
      itemImg4.style.transform = `translate(0, 0%)`;
    } else {
      itemImg4.style.transform = `translate(0, 100%)`;
    }
    if (scrollDistance > itemsSectionTop + window.innerHeight * 5) {
      itemImg5.style.transform = `translate(0, 0%)`;
    } else {
      itemImg5.style.transform = `translate(0, 100%)`;
    }
    if (scrollDistance > itemsSectionTop + window.innerHeight * 6) {
      itemImg6.style.transform = `translate(0, 0%)`;
    } else {
      itemImg6.style.transform = `translate(0, 100%)`;
    }
    if (scrollDistance > itemsSectionTop + window.innerHeight * 7) {
      itemImg7.style.transform = `translate(0, 0%)`;
    } else {
      itemImg7.style.transform = `translate(0, 100%)`;
    }
    if (scrollDistance > itemsSectionTop + window.innerHeight * 8) {
      itemImg8.style.transform = `translate(0, 0%)`;
    } else {
      itemImg8.style.transform = `translate(0, 100%)`;
    }
  } else if (scrollDistance >= itemsSectionBottom) {
    itemsInner.style.position = "relative";
    itemsInner.style.top = "intitial";
    itemsInner.style.left = "initial";
    itemsInner.style.transform = `translate(0,${itemsSection.offsetHeight - window.innerHeight}px)`;
  } else {
    itemsInner.style.position = "relative";
    itemsInner.style.top = "intitial";
    itemsInner.style.left = "initial";
    itemsInner.style.transform = `translate(0,0)`;
    itemsText.style.transform = `translate(0,0)`;
  }

  scrollY = window.scrollY;
});
