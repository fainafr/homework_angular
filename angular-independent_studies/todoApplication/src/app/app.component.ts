import { Component } from '@angular/core';

@Component( {
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
} )
export class AppComponent {
    todoArray = []
    addTodo( value ) {
        this.todoArray.push( value )
    }
    deleteItem( todo ) {
        for ( let i = 0; i <= this.todoArray.length; i++ ) {
            if ( todo == this.todoArray[i] ) {
                this.todoArray.splice( i, 1 )
            }
        }
    }
}