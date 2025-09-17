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

const flattenTree = (folder, node) => {
  let retVal = [];
  folder.forEach(item => {
    if (item.children.length > 0) {
      retVal.push(...flattenTree(item.children));
    }
    delete item.children;
    retVal.push(item);
  });
  return retVal;
}

const validateTree = (tree) => {
  const initialFolders = folder.folders;
  const flattenedTree = flattenTree(tree).flat();
  const problematicFolders = [];
  const foundAllChildren = initialFolders.filter(p => {
    const x = !flattenedTree.find(item => item.id === p.id);
    if (x) {
      problematicFolders.push(p);
    }
    return x;
  });
  console.log(problematicFolders);
  return foundAllChildren.length === 0;
}

const tree = createFolderTree(folder.folders);

console.log(JSON.stringify(tree, null, 2));

// const isValid = validateTree(tree);

// console.log(isValid);
