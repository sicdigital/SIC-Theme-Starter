<?php



$sides = new PostType("Sides & Snack");
$sides->add_meta_box('Meal Info', array(
      'price' => 'text',
      'calories' => 'text',
      'protein' => 'text',
      'carbs' => 'text',
      'fat' => 'text',
      'saturated' => 'text',
      'cholesterol' => 'text',
      'sodium' => 'text',
      'fiber' => 'text',
      'weight_watchers' => 'text'

));
$breakfast = new PostType("Breakfast");
$breakfast->add_meta_box('Meal Info', array(
       'price' => 'text',
      'calories' => 'text',
      'protein' => 'text',
      'carbs' => 'text',
      'fat' => 'text',
      'saturated' => 'text',
      'cholesterol' => 'text',
      'sodium' => 'text',
      'fiber' => 'text',
      'weight_watchers' => 'text'

));
$lunch = new PostType("Lunches & Dinner");
$lunch->add_meta_box('Meal Info', array(
      'price' => 'text',
      'calories' => 'text',
      'protein' => 'text',
      'carbs' => 'text',
      'fat' => 'text',
      'saturated' => 'text',
      'cholesterol' => 'text',
      'sodium' => 'text',
      'fiber' => 'text',
      'weight_watchers' => 'text',
      'fiber' => 'weight_watchers'

));

$specials = new PostType("Special");
$specials->add_meta_box('Price', array(
      'price' => 'text',
      'calories' => 'text',
      'protein' => 'text',
      'carbs' => 'text',
      'fat' => 'text',
      'saturated' => 'text',
      'cholesterol' => 'text',
      'sodium' => 'text',
      'fiber' => 'weight_watchers'

));
