import React from 'react';

const TodoContext = React.createContext();

function TodoProvider (props)
{
    

    const [todos, setTodos] = React.useState(
      [ 
        {
          description: "Cortar cebollas",
          completed: false
        },
        {
          description: "Sacar basura",
          completed: false
        },
        {
          description: "Sacar el perro",
          completed: true
        },
      ]
    )
  
    const [openModal, setOpenModal ] = React.useState(false);
  
    const checkTask = (taskDescription)=>{
        const indexOfTask = todos.findIndex(todo => todo.description === taskDescription);
        const statusOftask = todos[indexOfTask].completed;
        let newTodos = [...todos];
        newTodos[indexOfTask].completed = !statusOftask;
        setTodos(newTodos);
    }

    const deleteTask = (taskDescription)=>{
      let newTodos = todos.filter((todo) => todo.description !== taskDescription);
      setTodos(newTodos);
    }

    const [searchedTodos, setSearchedTodos] = React.useState(todos);

    const searchTodos = (searchText) => {
      const newSearchedTodos = todos.filter((todo) => todo.description.toLowerCase().includes(searchText.toLowerCase()));
      setSearchedTodos(newSearchedTodos);
    }

    const completedTodos = todos.filter( Todo => Todo.completed).length;
    const totalTodos = todos.length;

    return(
        <TodoContext.Provider value = { {
          completedTodos,
          totalTodos,
          openModal,
          setOpenModal,
          todos,
          setTodos,
          checkTask,
          deleteTask,
          searchTodos,
          searchedTodos
        } }>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };