export function uuidV4() {
  return crypto.randomUUID();
}

export function createNode(file) {
  const div = createDiv(file);
  let wrapper;
  if (file.type === "folder") wrapper = createFolderWrapper(file);
  if (file.id === "root") {
    const addFolderBtn = createAddButton(file, "Add Folder", "folder");
    const addFileBtn = createAddButton(file, "Add file", "file");
    const btns = createBtnsWrapper(addFolderBtn, addFileBtn);
    wrapper.append(btns);
    wrapper.append(div);
    return wrapper;
  }
  const icon = createIcon(file);
  const nameSpan = createSpan(file.name);
  let btns;
  const deleteButton = createDeleteButton(file);
  if (file.type === "folder") {
    const addFolderBtn = createAddButton(file, "Add Folder", "folder");
    const addFileBtn = createAddButton(file, "Add file", "file");
    btns = createBtnsWrapper(deleteButton, addFolderBtn, addFileBtn);
  }
  div.append(icon, nameSpan);
  if (wrapper) {
    div.append(btns);
    wrapper.append(div);
    return wrapper;
  } else div.append(deleteButton);
  return div;
}

function createSpan(str) {
  const span = document.createElement("span");
  span.textContent = str;
  return span;
}

function createDiv(file) {
  const div = document.createElement("div");
  if (file.type === "file") div.id = file.id;
  if (file.id === "root") return div;
  div.classList.add(file.type);
  div.addEventListener("click", (e) => {
    e.stopPropagation();
    if (file.type === "folder") {
      Array.from(div.parentElement.children).forEach((child, i) => {
        if (i === 0) return;
        child.classList.toggle("hidden");
      });
    } else if (file.type) {
      const fileName = div.firstElementChild.nextElementSibling.textContent;
      alert(`clicked on ${fileName}`);
    }
  });
  return div;
}

function createIcon(file) {
  let icon;
  if (file.type === "folder") {
    const folderTemplate = document.querySelector("#folder-icon-template");
    icon = folderTemplate.content.cloneNode(true);
  } else {
    const folderTemplate = document.querySelector("#file-icon-template");
    icon = folderTemplate.content.cloneNode(true);
  }
  return icon;
}

function createButton(content) {
  const button = document.createElement("button");
  button.textContent = content;
  return button;
}

function createDeleteButton(file) {
  const button = createButton("delete");
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const element = document.getElementById(file.id);
    element.remove();
  });
  return button;
}

function createAddButton(file, placeholder, type) {
  const button = createButton(placeholder);
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const element = document.getElementById(file.id);
    const isInputOpen = element.querySelector("input");
    if (!isInputOpen) {
      createInput(placeholder, element, type);
    }
  });
  return button;
}

function createInput(placeholder, parent, type) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = placeholder;
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") input.blur();
  });

  input.addEventListener("blur", () => {
    const value = input.value;
    if (value) createElementFromInputVal(parent, type, input);
    input.remove();
  });
  matchElemToParentMargin(parent, input);
  parent.append(input);
  input.focus();
}

function createFolderWrapper(file) {
  const div = document.createElement("div");
  div.id = file.id;
  div.classList.add("wrapper");
  return div;
}
function createBtnsWrapper(...elements) {
  const div = document.createElement("div");
  div.classList.add("btns-wrapper");
  div.append(...elements);
  return div;
}

function createElementFromInputVal(parent, type, input) {
  const fileObj = {
    id: uuidV4(),
    name: input.value,
    type,
  };
  if (type === " folder") fileObj.children = [];
  const node = createNode(fileObj);
  matchElemToParentMargin(parent, node);
  parent.append(node);
}

function matchElemToParentMargin(parent, child) {
  if (parent.id === "root") return;
  const parentML = parent.style.marginLeft.replace("px", "");
  child.style.marginLeft = `${+parentML + 10}px`;
}
