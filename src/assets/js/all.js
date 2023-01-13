function cb() {
  const customSelects = document.getElementsByClassName("custom-select");
  if (customSelects.length > 0) getAllCustomSelectBlocks()
  function getAllCustomSelectBlocks() {
    for (let i = 0; i < customSelects.length; i++) {
      // HTMLCollection，陣列格式，第 0 筆是 select tag, 裡面有 option tag 物件
      const optionsArr = customSelects[i].getElementsByTagName("select")[0];
      /*for each element, create a new DIV that will act as the selected item:*/
      const divSelected = document.createElement("DIV");
      divSelected.setAttribute("class", "select-selected");

      // HTMLOptionsCollection，取得選取到的 option 的內文
      divSelected.innerHTML = optionsArr.options[optionsArr.selectedIndex].innerHTML;
      customSelects[i].appendChild(divSelected);
      /*for each element, create a new DIV that will contain the option list:*/
      const divOptionsWrap = document.createElement("DIV");
      divOptionsWrap.setAttribute("class", "select-items hide");
      for (let j = 1; j < optionsArr.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        const divOption = document.createElement("DIV");
        divOption.innerHTML = optionsArr.options[j].innerHTML;
        divOption.addEventListener("click", function (e) {
          /*when an item is clicked, update the original select box,
            and the selected item:*/
          const optionsArr = this.parentNode.parentNode.getElementsByTagName("select")[0];
          const selectedOption = this.parentNode.previousSibling; // select-selected -> 選擇了的 option
          for (let i = 0; i < optionsArr.length; i++) {
            if (optionsArr.options[i].innerHTML === this.innerHTML) {
              optionsArr.selectedIndex = i;
              selectedOption.innerHTML = this.innerHTML;
              // this.parentNode 指的是 options 的 list (divOptionsWrap)
              const eleSameAsSelected = this.parentNode.getElementsByClassName("same-as-selected");
              for (let k = 0; k < eleSameAsSelected.length; k++) {
                eleSameAsSelected[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          selectedOption.click();
        });
        divOptionsWrap.appendChild(divOption);
      }
      customSelects[i].appendChild(divOptionsWrap);

      divSelected.addEventListener("click", function (e) {
        /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("hide");
        this.classList.toggle("select-arrow-active");
      });
    }
  }
  function closeAllSelect(element) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    const arrNo = [];
    const selectItems = document.getElementsByClassName("select-items");
    const selectedItem = document.getElementsByClassName("select-selected");
    for (let i = 0; i < selectedItem.length; i++) {
      if (element === selectedItem[i]) {
        arrNo.push(i);
      } else {
        selectedItem[i].classList.remove("select-arrow-active");
      }
    }
    for (let j = 0; j < selectItems.length; j++) {
      if (arrNo.indexOf(j)) {
        selectItems[j].classList.add("hide");
      }
    }
  }

  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", function () {
    const hiddenSelectItems = [...document.getElementsByClassName("select-items hide")];
    const selectItems = [...document.getElementsByClassName("select-items")];
    // 當隱藏的下拉與所有下拉數量不同，表示有展開的下拉，這時再把它關掉
    if (hiddenSelectItems.length !== selectItems.length) {
      closeAllSelect()
    }
  });
}

document.addEventListener("DOMContentLoaded", cb);