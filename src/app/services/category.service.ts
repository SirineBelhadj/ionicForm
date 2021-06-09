import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[] = [
    {
      id: 1,
      name: "Politique",
      value: "politique",
      image: "assets/images/category/women-fashion.jpg"
    },
    {
      id: 2,
      name: "Culture",
      value: "culture",
      image: "assets/images/category/men-fashion.jpg"
    },
    {
      id: 3,
      name: "Sport",
      value: "sport",
      image: "assets/images/category/luggage.jpg"
    },
    {
      id: 4,
      name: "Entreprenariat",
      value: "entreprenariat",
      image: "assets/images/category/watches.jpg"
    },
    {
      id: 5,
      name: "Santé",
      value: "sante",
      image: "assets/images/category/jewelry.jpg"
    },
    {
      id: 6,
      name: "Social",
      value: "social",
      image: "assets/images/category/shoes.jpg"
    },
    {
      id: 7,
      name: "Finances",
      value: "finances",
      image: "assets/images/category/computer.jpg"
    },
    {
      id: 8,
      name: "Education",
      value: "education",
      image: "assets/images/category/electronics.jpg"
    },
    {
      id: 9,
      name: "mode",
      value: "mode",
      image: "assets/images/category/home.jpg"
    },
    {
      id: 10,
      name: "Autre",
      value: "autre",
      image: "assets/images/category/baby.jpg"
    }
  ];

  constructor() { }

  categoryList() {
    return this.categories;
  }

}
