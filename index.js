const gnb = document.querySelector(".main_gnb_container");
const gnbDep1Menu = document.querySelectorAll(".menu");
const gnbDep2Menu = document.querySelectorAll(".dep2_menu_area");

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

const footer = document.querySelector(".footer");

let scrollY = 0;
let windowWidth = window.innerWidth;
let isMobile = windowWidth <= 1023;

window.addEventListener("resize", () => {
  windowWidth = window.innerWidth;
  isMobile = windowWidth <= 1023;
});

// gnb노출
function menuOpen(event) {
  const element = event.currentTarget;
  element.classList.add("on");
}

function menuClose(event) {
  const element = event.currentTarget;
  element.classList.remove("on");
}

for (let i = 0; i < gnbDep1Menu.length; i++) {
  gnbDep1Menu[i].addEventListener("mouseover", menuOpen);
  gnbDep1Menu[i].addEventListener("mouseleave", menuClose);
}

window.addEventListener("scroll", () => {
  if (scrollY < window.scrollY) {
    gnb.style.transform = `translate(-50%, -100px)`;
  } else {
    gnb.style.transform = `translate(-50%, 0)`;
  }

  if (!isMobile) {
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

    // 대표상품 영역
    const itemsSectionTop = itemsSection.offsetTop;
    const itemsSectionBottom = itemsSectionTop + itemsSection.offsetHeight;
    if (scrollDistance > itemsSectionTop + window.innerHeight && scrollDistance < itemsSectionBottom) {
      itemsInner.style.position = "fixed";
      itemsInner.style.top = "0";
      itemsInner.style.left = "0";
      itemsInner.style.transform = "translate(0,0)";
      itemsText.style.transform = `translate(0,-${(window.scrollY - itemsSectionTop) * 0.45}px)`;

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
  }
  scrollY = window.scrollY;
});
