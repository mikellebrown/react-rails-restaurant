import React from 'react'


const Dish = ({ dishes, }) => (
  <div>
  {
    dishes.map( dishes => (
      <Dish
      
      {...dishes } 
      />
    )) }
  </div>
);

export default Dish;