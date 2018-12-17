import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pão de Queijo',
    'Uma receita deliciosa de pão de queijo!',
    'https://upload.wikimedia.org/wikipedia/commons/2/20/Cheesebread.jpg',
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}

/*
'1- Em uma panela, ferva a água e acrescente o leite, o óleo e o sal;'
+ '2- Adicione o polvilho, misture bem e comece a sovar a massa com o fogo desligado;'
+ '3- Quando a massa estiver morna, acrescente o queijo parmesão, os ovos e misture bem;'
+ '4- Unte as mãos e enrole bolinhas de 2 cm de diâmetro;'
+ '5- Disponha as bolinhas em uma assadeira untada com óleo, deixando um espaço entre elas;'
+ '6- Asse em forno médio (180º C), preaquecido, por cerca de 40 minutos)'
*/
