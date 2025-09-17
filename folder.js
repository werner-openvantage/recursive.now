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

console.log(createFolderTree(folder.folders));
