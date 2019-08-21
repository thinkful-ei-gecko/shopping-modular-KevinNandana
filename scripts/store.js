/* eslint-disable no-unused-vars */
/* global cuid, Item */
'use strict';

const Store = (function() {
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  function findById(id) {
    return this.items.find(item => item.id === id);
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      let newItem = Item.create(name);
      this.items.push(newItem);
    }
    catch(e) {
      console.log(e.message);
    }
  }

  function findAndToggleChecked(id) {
    let item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id,name) {
    try {
      Item.validateName(name);
      let item = this.findById(id);
      item.name = name;
    }
    catch(e) {
      console.log(`Can not update name ${e.message}`);
    }
  }

  function findAndDelete(id){
    let itemToRemove = this.findById(id);
    this.items = this.items.filter(item => item !== itemToRemove);
  }

  return {
    items,
    hideCheckedItems,
    searchTerm,
    addItem,
    findById,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}());