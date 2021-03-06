import * as React from 'react'
import { connect } from '../fluent'

export default connect()
  .with(({ state, signals }) => {
    return {
      title: state.newTodoTitle,
      titleChanged: signals.changeNewTodoTitle,
      submitted: signals.submitNewTodo,
    }
  })
  .to(function NewTodo({ title, titleChanged, submitted }) {
    return (
      <form
        id="todo-form"
        onSubmit={(e) => {
          e.preventDefault()
          submitted()
        }}
      >
        <input
          className="new-todo"
          autoComplete="off"
          placeholder="What needs to be done?"
          value={title || ''}
          onChange={(e) => titleChanged({ title: e.target.value })}
        />
      </form>
    )
  })
