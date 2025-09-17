const array = [
  {
    "id": 1,
    "name": "John",
    "children": [
      {
        "id": 11,
        "name": "Jane"
      }
    ]
  },
  {
    "id": 2,
    "name": "Jane",
    "children": [
      {
        "id": 22,
        "name": "Jim"
      }
    ]
  },
  {
    "id": 3,
    "name": "Jim",
    "children": [
      {
        "id": 33,
        "name": "Jill",
        "children": [
          {
            "id": 33,
            "name": "Jill",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Jill",
    "children": [
      {
        "id": 44,
        "name": "Jack"
      }
    ]
  }
];

const getChildren = (kids, id) => {
  let children = '';
  kids.forEach(kid => {
    children += `${kid.name}, `;
  });
  return children;
};

const whatIsTheChildrenNames = (parent) => {
  let message = `{parent.name} has the following children: `;
  const children = getChildren(parent.children);
  children.forEach(child => {
    message += `${child.name}, `;
  });
  return message;
}

console.log(getChildren(array));
