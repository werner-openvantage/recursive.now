const folder = require("./folder.json");

const createFolderTree = (folders, parent = null) => {
  const folderTree = [];
  folders.filter(item => item.parent === parent).forEach(item => {
    folderTree.push({
      ...item,
      children: createFolderTree(folders, item.id)
    });
  });
  return folderTree;
};

const printFolderTree = (folderTree, level = 0) => {
  folderTree.forEach(item => {
    console.log(`|${"_".repeat(level)}>${item.name}`);
    if(item.children) {
      printFolderTree(item.children, level + 1);
    }
  });
};

console.log(printFolderTree(createFolderTree(folder.folders)));
