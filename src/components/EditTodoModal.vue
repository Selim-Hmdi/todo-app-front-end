<template>
    <ModalContainer class="modal-position">
        <div class="modal-content">
            <section>
                <h2 class="modal-title">Edit your item</h2>
                <div class="close-modal" @click="closeModal">X</div>
            </section>
            <section class="modal-input-section">
                <input type="text" v-model="todoInput">
                <button @click="editTodo">Validate</button>
            </section>
        </div>
    </ModalContainer>
</template>
<script>
import ModalContainer from './modal/ModalContainer.vue'
export default {
  components: {
    ModalContainer,
  },

  data() {
    return {
      todoInput: '',
    }
  },

  methods: {
    closeModal() {
      document.getElementById('edit-modal').hidden = true
    },

    editTodo() {
      this.$emit('editTodo', this.todoInput)
      this.todoInput = null
    }
  },
}
</script>
<style scoped>
/* Dimensions are left up to parent component by using class */
.modal-position {
    top: 33%;
}

.modal-content {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.modal-content > section {
  display: flex;
}

.modal-title {
    flex: 10;
    text-align: center;
    font-size: 1.7rem;
}

.close-modal {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    font-weight: bold;
    font-size: 28px;
    cursor: pointer;
    color: rgb(0, 0, 0);
}

.modal-input-section {
    justify-content: center;
    margin-top: 7%;
}

.modal-input-section > input{
  width: 70%;
  height: 2.2rem;
  border: 2px solid var(--dark-grey);
  border-radius: 2px;
  margin-right: 8px;
}

.modal-input-section > button {
  width: 110px;
}
</style>