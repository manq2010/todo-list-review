class UserInterface {
    static addTask = (task) => {
      const clearCompleted = document.querySelector('.clear-completed');
      const liMarkup = `
        <li class="task-item">
          <form id="form-item">
            <input type="checkbox" name="checkbox" id="checkbox" class="btn-check">
            <textarea name="" id="edit-text" spellcheck="false">${task.description}</textarea>
            <div class="task-dots">
              <i class="bi bi-trash3 delete-task"
              </i> 
            </div>
          </form>
        </li>
        `;

      clearCompleted.insertAdjacentHTML('beforebegin', liMarkup);
    };

      static clearTaskInputs = () => {
        const inputItem = document.querySelector('#input-item');
        inputItem.value = '';
      };

      static deleteTask = (element) => {
        element.remove();
      };

      static editTask = (index, value) => {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        tasks[index].description = value;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      };
}

export default UserInterface;