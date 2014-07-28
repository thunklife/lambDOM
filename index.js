var curry = require('lodash.curry');
var L = {};

//+ type Namespace = String
/**
 * Element API
 * Includes all non-experimental, non-obsolete, standardized methods
 */

//+ addEventListener :: Function → String → Bool → Element → Element
L.addEventListener = curry(function(listener, type, useCapture, element){
  element.addEventListener(type, listener, useCapture);
  return element;
});

//+ dispatchEvent :: Event → Element → Bool
L.dispatchEvent = curry(function(event, element){
  return element.dispatchEvent(event);
});

//+ getAttribute :: String → Element → Object
L.getAttribute = curry(function(name, element){
  return element.getAttribute(name);
});

//+ getAttributeNS :: Namespace → String → Element → Object
L.getAttributeNS = curry(function(namespace, name, element){
  return element.getAtttributeNS(namespace, name);
});

//+ getElementsByClassName :: String → Element → HTMLCollection
L.getElementsByClassName = curry(function(names, element){
  return element.getElementsByClassName(names);
});

//+ getElementsByTagName :: String → Element → HTMLCollection
L.getElementsByTagName = curry(function(name, element){
  return element.getElementsByTagName(name);
});

//+ getElementsByTagNameNS :: Namespace → String → Element → HTMLCollection
L.getElementsByTagNameNS = curry(function(namespace, name, element){
  return element.getElementsByTagNameNS(namespace, name);
});

//+ hasAttribute :: String → Element → Bool
L.hasAttribute = curry(function(name, element){
  return element.hasAttribute(name);
});

//+ hasAttributeNS :: Namespace → String → Element → Bool
L.hasAttributeNS = curry(function(namespace, name, element){
  return element.hasAttributeNS(namespace, name);
});

//+ matches :: String → Element → Boolean
L.matches = curry(function(name, element){
  var matches = element.matches || element.webkitMatchesSelector || element.mozMatchesSelector || element.msMatchesSelector;

  return matches.call(element, name);
});

//+ querySelector :: String → Element → Node
L.querySelector = curry(function(selector, element){
  return element.querySelector(selector);
});

//+ querySelectorAll :: String → Element → NodeList
L.querySelectorAll = curry(function(selector, element){
  return element.querySelectorAll(selector);
});

//+ removeChild :: ChildNode → Element → Element
L.removeChild = curry(function(child, parent){
  parent.removeChild(child);
  return parent;
});

//+ removeAttribute :: String → Element → Element
L.removeAttribute = curry(function(name, element){
  element.removeAttribute(name);
  return element;
});

//+ removeAttributeNS :: Namespace → String → Element → Element
L.removeAttributeNS = curry(function(namespace, name, element){
  element.removeAttributeNS(namespace, name);
  return element;
});

//+ removeEventListener :: Function → String → Bool → Element →  Element
L.removeEventListener = curry(function(listener, type, useCapture, element){
  element.removeEventListener(type, listener, useCapture);
  return element;
});

//+ setAttribute :: String → a → Element → Element
L.setAttribute = curry(function(name, value, element){
  element.setAttribute(name, value);
  return element;
});

module.exports = L;
