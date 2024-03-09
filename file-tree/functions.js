export function uuidV4() {
  return crypto.randomUUID();
}

export function createNode(file) {
  const div = createDiv(file);
  //   const icon = generateIcon(file);
  const iconSpan = createIcon(file);
  const nameSpan = createSpan(file.name);
  div.append(iconSpan, nameSpan);
  return div;
}

function createSpan(str) {
  const span = document.createElement("span");
  span.textContent = str;
  return span;
}

function createDiv(file) {
  const div = document.createElement("div");
  div.classList.add(file.type);
  div.id = file.id;
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
